const fs = require('fs-extra'),
    path = require('path'),
    ejs = require('ejs'),
    install=require('npm-install-package'),
    hyperquest = require('hyperquest'), unpack = require('tar-pack').unpack;

const init = async () => {
    const config = JSON.parse(await fs.readFile(path.resolve(__dirname, './components.json'), 'utf8'));
    await Promise.all(config.map(({name}) => download(name)));
    const componentFile = ejs.render(await fs.readFile(path.resolve(__dirname, './template.ejs'), 'utf8'), {data: config});
    await fs.writeFile(path.resolve(__dirname, '../src/componentArray.js'), componentFile);
};

const download = async (name) => {
    const getUrl = async (name) => {
        return new Promise((resolve, reject) => {
            let data = '';
            hyperquest(`http://192.168.1.97:4870/${name}`).on('data', (chunk) => {
                data += chunk;
            }).on('end', () => {
                resolve(data);
            }).on('error', (e) => reject(e));
        }).then((config) => {
            config = JSON.parse(config);
            const last = config['dist-tags']['latest'], package = config['versions'][last];
            return {url:package['dist']['tarball'],last};
        });
    };
    const {url,last} = await getUrl(name);
    await new Promise((resolve,reject)=>{
        install(`${name}@${last}`,{ saveDev: true, cache: true },(err)=>{
            if(err) reject(err);
            resolve();
        });
    });
    return new Promise((resolve, reject) => {
        hyperquest(url).pipe(unpack(path.resolve(__dirname, `../src/packages/${name}`))).on('close', () => {
            resolve();
        }).on('error', (e) => reject(e));
    });
};

init().then(() => {
    console.log('done');
}).catch((e) => {
    throw new Error(e);
});

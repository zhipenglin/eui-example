const fs = require('fs-extra'),
    path = require('path'),
    ejs = require('ejs'),
    install = require('npm-install-package'),
    hyperquest = require('hyperquest');

const init = async () => {
    const config = JSON.parse(await fs.readFile(path.resolve(__dirname, './components.json'), 'utf8'));
    await download(config.map((item) => item.name));
    const componentFile = ejs.render(await fs.readFile(path.resolve(__dirname, './template.ejs'), 'utf8'), {data: config});
    await fs.writeFile(path.resolve(__dirname, '../src/componentArray.js'), componentFile);
};

const download = async (list) => {
    const infoList = await Promise.all(list.map((name) => ({name,last:'latest'})));

    console.log(`running npm install ${infoList.map(({name, last}) => `${name}@${last}`).join(' ')} ...`);
    await new Promise((resolve, reject) => {
        install(infoList.map(({name, last}) => `${name}@${last}`), {saveDev: true, cache: false}, (err) => {
            if (err) reject(err);
            resolve();
        });
    });
    console.log('copy packages to src ...');
    await fs.remove('../src/packages/');
    await Promise.all(infoList.map(async ({name}) => {
        return await fs.copy(path.resolve(__dirname, `../node_modules/${name}/`), path.resolve(__dirname, `../src/packages/${name}/`));
    }));
};

init().then(() => {
    console.log('done');
}).catch((e) => {
    throw new Error(e);
});

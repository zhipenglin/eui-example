const rewireMd=require('./react-app-rewire-md'),rewireSass=require('./react-app-rewire-sass');
module.exports = function override(config, env) {
    config=rewireMd(config,env);
    config=rewireSass(config,env);
    return config;
}

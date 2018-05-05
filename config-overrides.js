module.exports = function override(config, env) {
    config.module.rules.forEach((item)=>{
        if(Array.isArray(item.oneOf)){
            item.oneOf.splice(0,0,{
                test:/\.md$/,
                use:'raw-loader'
            });
        }
    });
    return config;
}

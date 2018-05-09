module.exports=(config)=>{
    const oneOfRule = config.module.rules.find(
        rule => rule.oneOf !== undefined,
    );

    const rawRules={
        test:/\.md$/,
        loader:'raw-loader'
    };

    if(oneOfRule){
        oneOfRule.oneOf.unshift(rawRules);
    }else{
        config.module.rules.push(rawRules);
    }
    return config;
};

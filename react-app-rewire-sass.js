const { getLoader, loaderNameMatches } = require("react-app-rewired");

const sassExtension = /\.s(c|a)ss$/;

function createRewireSass(sassLoaderOptions = {}) {
    return function(config, env) {
        const oneOfRule = config.module.rules.find(
            rule => rule.oneOf !== undefined,
        );

        const fileLoader = getLoader(config.module.rules, rule => {
            return loaderNameMatches(rule, "file-loader") && rule.exclude;
        });

        fileLoader.exclude.push(sassExtension);

        const createRule = (rule, cssRules) => {
            if (env === "production") {
                return {
                    ...rule,
                    loader: [
                        ...cssRules.loader,
                        { loader: "sass-loader", options: lessLoaderOptions },
                    ],
                };
            } else {
                return {
                    ...rule,
                    use: [
                        ...cssRules.use,
                        { loader: "sass-loader", options: sassLoaderOptions },
                    ],
                };
            }
        };
        const sassRules = createRule(
            {
                test: sassExtension
            },
            getLoader(
                config.module.rules,
                rule => String(rule.test) === String(/\.css$/),
            ),
        );

        if (oneOfRule) {
            oneOfRule.oneOf.unshift(sassRules);
        } else {
            config.module.rules.push(sassRules);
        }

        return config;
    };
}

const rewireLess = createRewireSass();

rewireLess.withLoaderOptions = createRewireSass;

module.exports = rewireLess;

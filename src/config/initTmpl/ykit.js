exports.config = function() {
    return {
        export: [
            './scripts/index.js',
            './styles/index.css'
        ],
        modifyWebpackConfig: function(baseConfig) {
            // edit ykit's Webpack configs

            return baseConfig;
        },
        command: [{
            name: '#_name_cmd',
            module: {
                usage: 'user-defined command',
                run: function() {}
            }
        }]
    };
};
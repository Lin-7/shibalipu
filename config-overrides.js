const { override, fixBabelImports,addLessLoader } = require('customize-cra')

module.exports = override(
    //针对antd按需（import）打包
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#C65624' },
    }),
);
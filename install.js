const appRootPath = require('app-root-path');
const rootPackageJson = appRootPath.require('./package.json');
const ourPackageJson = require('./package.json');

if (rootPackageJson.name !== ourPackageJson.name) {
    require('./distribute/install.js');
}

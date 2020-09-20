"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.absoluteRootCoverageDirectory = exports.absoluteRootDistributeEssentialDirectory = exports.absoluteRootDistributeDefaultFilesGlob = exports.absoluteRootDistributeDefaultDirectory = exports.absoluteRootDistributeBuildDirectory = exports.absoluteRootDistributePackageJsonPath = exports.absoluteRootDistributeDirectory = exports.absoluteRootEssentialFilesGlobs = exports.absoluteRootReadmeMarkdownPath = exports.absoluteRootLicensePath = exports.absoluteRootEslintPath = exports.absoluteRootEslintRCPath = exports.absoluteRootGeneratedTsconfigJsonPath = exports.absoluteRootTsconfigJsonPath = exports.absoluteRootPackageJsonPath = exports.absoluteRootDirectory = exports.absoluteRootDefaultFilesGlob = exports.absoluteRootDefaultDirectory = exports.absoluteRootBuildFilesGlobs = exports.absoluteRootBuildTestFilesGlob = exports.absoluteRootBuildDirectory = exports.absoluteRootSourceDeclarationFilesGlob = exports.absoluteRootSourceTypeScriptFilesGlob = exports.absoluteRootSourceTestFilesGlob = exports.absoluteRootSourceDirectory = exports.absoluteCurrentDirectory = exports.renamedPrefix = exports.relativeCoverageDirectory = exports.relativeDistributeDirectory = exports.relativeDefaultDirectory = exports.relativeBuildDirectory = exports.relativeSourceDirectory = exports.relativeReadmeMarkdownPath = exports.relativeLicensePath = exports.relativeEslintPath = exports.relativeEslintRCPath = exports.relativeGeneratedTsconfigJsonPath = exports.relativeTsconfigJsonPath = exports.relativePackageJsonPath = void 0;
const tslib_1 = require("tslib");
const path = tslib_1.__importStar(require("path"));
const app_root_path_1 = tslib_1.__importDefault(require("app-root-path"));
exports.relativePackageJsonPath = path.normalize('./package.json');
exports.relativeTsconfigJsonPath = path.normalize('./tsconfig.json');
exports.relativeGeneratedTsconfigJsonPath = path.normalize('./tsconfig.generated.json');
exports.relativeEslintRCPath = path.normalize('./.eslintrc.js');
exports.relativeEslintPath = path.normalize('./eslint.js');
exports.relativeLicensePath = path.normalize('./LICENSE');
exports.relativeReadmeMarkdownPath = path.normalize('./README.md');
exports.relativeSourceDirectory = path.normalize('./source');
exports.relativeBuildDirectory = path.normalize('./build');
exports.relativeDefaultDirectory = path.normalize('./default');
exports.relativeDistributeDirectory = path.normalize('./distribute');
exports.relativeCoverageDirectory = path.normalize('./coverage');
exports.renamedPrefix = '_RENAMED_';
exports.absoluteCurrentDirectory = __dirname.includes('node_modules')
    ? app_root_path_1.default.resolve('./node_modules/@colonise/config')
    : app_root_path_1.default.path;
// Source
exports.absoluteRootSourceDirectory = app_root_path_1.default.resolve(exports.relativeSourceDirectory);
exports.absoluteRootSourceTestFilesGlob = path.join(exports.absoluteRootSourceDirectory, '/**/*.spec.ts');
exports.absoluteRootSourceTypeScriptFilesGlob = path.join(exports.absoluteRootSourceDirectory, '/**/*.ts');
exports.absoluteRootSourceDeclarationFilesGlob = path.join(exports.absoluteRootSourceDirectory, '/**/*.d.ts');
// Build
exports.absoluteRootBuildDirectory = app_root_path_1.default.resolve(exports.relativeBuildDirectory);
exports.absoluteRootBuildTestFilesGlob = `${exports.absoluteRootBuildDirectory}/**/*.spec.js`;
exports.absoluteRootBuildFilesGlobs = [
    `${exports.absoluteRootBuildDirectory}/**/*`,
    `!${exports.absoluteRootBuildDirectory}/**/*.spec.*`
];
// Default
exports.absoluteRootDefaultDirectory = app_root_path_1.default.resolve(exports.relativeDefaultDirectory);
exports.absoluteRootDefaultFilesGlob = `${exports.absoluteRootDefaultDirectory}/**/*`;
// Root
exports.absoluteRootDirectory = app_root_path_1.default.path;
exports.absoluteRootPackageJsonPath = path.join(exports.absoluteRootDirectory, exports.relativePackageJsonPath);
exports.absoluteRootTsconfigJsonPath = path.join(exports.absoluteRootDirectory, exports.relativeTsconfigJsonPath);
exports.absoluteRootGeneratedTsconfigJsonPath = path.join(exports.absoluteRootDirectory, exports.relativeGeneratedTsconfigJsonPath);
exports.absoluteRootEslintRCPath = path.join(exports.absoluteRootDirectory, exports.relativeEslintRCPath);
exports.absoluteRootEslintPath = path.join(exports.absoluteRootDirectory, exports.relativeEslintPath);
exports.absoluteRootLicensePath = path.join(exports.absoluteRootDirectory, exports.relativeLicensePath);
exports.absoluteRootReadmeMarkdownPath = path.join(exports.absoluteRootDirectory, exports.relativeReadmeMarkdownPath);
exports.absoluteRootEssentialFilesGlobs = [
    exports.absoluteRootPackageJsonPath,
    exports.absoluteRootTsconfigJsonPath,
    exports.absoluteRootEslintRCPath,
    exports.absoluteRootEslintPath,
    exports.absoluteRootLicensePath,
    exports.absoluteRootReadmeMarkdownPath
];
// Distribute
exports.absoluteRootDistributeDirectory = app_root_path_1.default.resolve(exports.relativeDistributeDirectory);
exports.absoluteRootDistributePackageJsonPath = path.join(exports.absoluteRootDistributeDirectory, exports.relativePackageJsonPath);
exports.absoluteRootDistributeBuildDirectory = exports.absoluteRootDistributeDirectory;
exports.absoluteRootDistributeDefaultDirectory = path.join(exports.absoluteRootDistributeDirectory, exports.relativeDefaultDirectory);
exports.absoluteRootDistributeDefaultFilesGlob = `${exports.absoluteRootDistributeDefaultDirectory}/**/*`;
exports.absoluteRootDistributeEssentialDirectory = exports.absoluteRootDistributeDirectory;
// Coverage
exports.absoluteRootCoverageDirectory = app_root_path_1.default.resolve(exports.relativeCoverageDirectory);

import * as path from 'path';
import RootPath from 'app-root-path';

export const renamedPrefix = '_RENAMED_';

// Relative

const relativeCurrentDirectory = __dirname.includes('node_modules') ? './node_modules/@colonise/config' : './';
const relativeSourceDirectory = path.normalize('./source');
const relativeGeneratedDirectory = path.normalize('./generated');
const relativeBuildDirectory = path.normalize('./build');
const relativeDefaultDirectory = path.normalize('./default');
const relativeDistributeDirectory = path.normalize('./distribute');
const relativeCoverageDirectory = path.normalize('./coverage');

const relativeEslintIgnorePath = path.normalize('./.eslintignore');
const relativeEslintRCPath = path.normalize('./.eslintrc.js');
const relativeGitIgnorePath = path.normalize('./.gitignore');
const relativeNPMIgnorePath = path.normalize('./.npmignore');
const relativeESLintPath = path.normalize('./eslint.js');
const relativeLicensePath = path.normalize('./LICENSE');
const relativeNYCConfigJsPath = path.normalize('./nyc.config.js');
const relativeNYCJsPath = path.normalize('./nyc.js');
const relativePackageJsonPath = path.normalize('./package.json');
const relativeReadmeMarkdownPath = path.normalize('./README.md');
const relativeSemanticReleaseConfigJsPath = path.normalize('./release.config.js');
const relativeTSConfigJsonPath = path.normalize('./tsconfig.json');
const relativeGitHubDependabotYmlPath = path.normalize('./.github/dependabot.yml');
const relativeGitHubWorkflowsNodejsMasterYmlPath = path.normalize('./.github/workflows/nodejs-master.yml');
const relativeVSCodeSettingsJsonPath = path.normalize('./.vscode/settings.json');
const relativeDocumentationAssetsColonise256PngPath = path.normalize('./documentation/assets/colonise256.png');

// Absolute Root

export const absoluteRootDirectory = RootPath.path;
export const absoluteCurrentDirectory = path.join(absoluteRootDirectory, relativeCurrentDirectory);
export const absoluteSourceDirectory = path.join(absoluteRootDirectory, relativeSourceDirectory);
export const absoluteGeneratedDirectory = path.join(absoluteRootDirectory, relativeGeneratedDirectory);
export const absoluteBuildDirectory = path.join(absoluteRootDirectory, relativeBuildDirectory);
export const absoluteDefaultDirectory = path.join(absoluteRootDirectory, relativeDefaultDirectory);
export const absoluteDistributeDirectory = path.join(absoluteRootDirectory, relativeDistributeDirectory);
export const absoluteCoverageDirectory = path.join(absoluteRootDirectory, relativeCoverageDirectory);

export const absoluteRooEslintIgnorePath = path.join(absoluteRootDirectory, relativeEslintIgnorePath);
export const absoluteRootESLintRCPath = path.join(absoluteRootDirectory, relativeEslintRCPath);
export const absoluteRooGitIgnorePath = path.join(absoluteRootDirectory, relativeGitIgnorePath);
export const absoluteRooNPMIgnorePath = path.join(absoluteRootDirectory, relativeNPMIgnorePath);
export const absoluteRootESLintPath = path.join(absoluteRootDirectory, relativeESLintPath);
export const absoluteRootLicensePath = path.join(absoluteRootDirectory, relativeLicensePath);
export const absoluteRootNYCConfigJsPath = path.join(absoluteRootDirectory, relativeNYCConfigJsPath);
export const absoluteRootNYCJsPath = path.join(absoluteRootDirectory, relativeNYCJsPath);
export const absoluteRootPackageJsonPath = path.join(absoluteRootDirectory, relativePackageJsonPath);
export const absoluteRootReadmeMarkdownPath = path.join(absoluteRootDirectory, relativeReadmeMarkdownPath);
export const absoluteRootSemanticReleaseConfigJsPath = path.join(absoluteRootDirectory, relativeSemanticReleaseConfigJsPath);
export const absoluteRootTSConfigJsonPath = path.join(absoluteRootDirectory, relativeTSConfigJsonPath);
export const absoluteRootGitHubDependabotYmlPath = path.join(absoluteRootDirectory, relativeGitHubDependabotYmlPath);
export const absoluteRootGitHubWorkflowsNodejsMasterYmlPath = path.join(absoluteRootDirectory, relativeGitHubWorkflowsNodejsMasterYmlPath);
export const absoluteRootVSCodeSettingsJsonPath = path.join(absoluteRootDirectory, relativeVSCodeSettingsJsonPath);
export const absoluteRootDocumentationAssetsColonise256PngPath = path.join(absoluteRootDirectory, relativeDocumentationAssetsColonise256PngPath);

export const absoluteRootEssentialFilePaths = [
    absoluteRootPackageJsonPath,
    absoluteRootLicensePath,
    absoluteRootReadmeMarkdownPath
];

export const absoluteRootEssentialColoniseConfigFilePaths = [
    absoluteRooEslintIgnorePath,
    absoluteRootESLintRCPath,
    absoluteRooGitIgnorePath,
    absoluteRooNPMIgnorePath,
    absoluteRootESLintPath,
    absoluteRootNYCJsPath,
    absoluteRootTSConfigJsonPath
];

export const absoluteRootForceOverwriteDefaultFilePaths = [
    absoluteRootLicensePath,
    absoluteRootGitHubDependabotYmlPath,
    absoluteRootGitHubWorkflowsNodejsMasterYmlPath,
    absoluteRootVSCodeSettingsJsonPath,
    absoluteRootDocumentationAssetsColonise256PngPath
];

// Absolute Current

export const absoluteCurrentDefaultDirectory = path.join(absoluteCurrentDirectory, relativeDefaultDirectory);

export const absoluteCurrentDefaultFilesGlob = path.join(absoluteCurrentDefaultDirectory, '/**/*');

// Absolute Generated

export const absoluteGeneratedTSConfigJsonPath = path.join(absoluteGeneratedDirectory, relativeTSConfigJsonPath);

export const absoluteGeneratedTypeScriptFilesGlob = path.join(absoluteGeneratedDirectory, '/**/*.ts');
export const absoluteGeneratedDeclarationFilesGlob = path.join(absoluteGeneratedDirectory, '/**/*.d.ts');

// Absolute Source

export const absoluteSourceTSConfigJsonPath = path.join(absoluteSourceDirectory, relativeTSConfigJsonPath);

export const absoluteSourceTestFilesGlob = path.join(absoluteSourceDirectory, '/**/*.spec.ts');
export const absoluteSourceTypeScriptFilesGlob = path.join(absoluteSourceDirectory, '/**/*.ts');
export const absoluteSourceDeclarationFilesGlob = path.join(absoluteSourceDirectory, '/**/*.d.ts');

// Absolute Default

const absoluteDefaultEslintRCPath = path.join(absoluteDefaultDirectory, relativeEslintRCPath);
const absoluteDefaultLicensePath = path.join(absoluteDefaultDirectory, relativeLicensePath);
const absoluteDefaultNYCConfigJsPath = path.join(absoluteDefaultDirectory, relativeNYCConfigJsPath);
const absoluteDefaultSemanticReleaseConfigJsPath = path.join(absoluteDefaultDirectory, relativeSemanticReleaseConfigJsPath);
const absoluteDefaultTSConfigJsonPath = path.join(absoluteDefaultDirectory, relativeTSConfigJsonPath);
const absoluteDefaultGitHubDependabotYmlPath = path.join(absoluteDefaultDirectory, relativeGitHubDependabotYmlPath);
const absoluteDefaultGitHubWorkflowsNodejsMasterYmlPath = path.join(absoluteDefaultDirectory, relativeGitHubWorkflowsNodejsMasterYmlPath);
const absoluteDefaultVSCodeSettingsJsonPath = path.join(absoluteDefaultDirectory, relativeVSCodeSettingsJsonPath);
const absoluteDefaultDocumentationAssetsColonise256PngPath = path.join(absoluteDefaultDirectory, relativeDocumentationAssetsColonise256PngPath);

export const absoluteDefaultFilesGlob = `${absoluteDefaultDirectory}/**/*`;

export const absoluteDefaultForceOverwriteFilePaths = [
    absoluteDefaultEslintRCPath,
    absoluteDefaultLicensePath,
    absoluteDefaultNYCConfigJsPath,
    absoluteDefaultSemanticReleaseConfigJsPath,
    absoluteDefaultTSConfigJsonPath,
    absoluteDefaultGitHubDependabotYmlPath,
    absoluteDefaultGitHubWorkflowsNodejsMasterYmlPath,
    absoluteDefaultVSCodeSettingsJsonPath,
    absoluteDefaultDocumentationAssetsColonise256PngPath
];

// Absolute Distribute

export const absoluteDistributeDefaultDirectory = path.join(
    absoluteDistributeDirectory,
    relativeDefaultDirectory
);
export const absoluteDistributeEssentialDirectory = absoluteDistributeDirectory;

export const absoluteDistributePackageJsonPath = path.join(
    absoluteDistributeDirectory,
    relativePackageJsonPath
);

export const absoluteDistributeDefaultFilesGlob = `${absoluteDistributeDefaultDirectory}/**/*`;

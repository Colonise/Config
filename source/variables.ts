import RootPath from 'app-root-path';
import * as path from 'path';

export const relativePackageJsonPath = path.normalize('./package.json');
export const relativeTsconfigJsonPath = path.normalize('./tsconfig.json');
export const relativeTslintJsonPath = path.normalize('./tslint.json');
export const relativeLicensePath = path.normalize('./LICENSE');
export const relativeReadmeMarkdownPath = path.normalize('./README.md');

export const relativeSourceDirectory = path.normalize('./source');
export const relativeBuildDirectory = path.normalize('./build');
export const relativeDefaultDirectory = path.normalize('./default');
export const relativeDistributeDirectory = path.normalize('./distribute');
export const relativeCoverageDirectory = path.normalize('./coverage');

export const renamedPrefix = '_RENAMED_';

export const absoluteCurrentDirectory = __dirname.includes('node_modules')
    ? RootPath.resolve('./node_modules/@colonise/config')
    : RootPath.path;

// Source

export const absoluteRootSourceDirectory = RootPath.resolve(relativeSourceDirectory);

export const absoluteRootSourceDeclarationFileGlob = `${absoluteRootSourceDirectory}/**/*.d.ts`;
export const absoluteRootSourceTestFilesGlob = `${absoluteRootSourceDirectory}/**/*.spec.ts`;
export const absoluteRootSourceLintFilesGlobs = `${absoluteRootSourceDirectory}/**/*.ts`;
export const absoluteRootSourceTsconfigJsonPath = path.join(absoluteRootSourceDirectory, relativeTsconfigJsonPath);

// Build

export const absoluteRootBuildDirectory = RootPath.resolve(relativeBuildDirectory);

export const absoluteRootBuildTestFilesGlob = `${absoluteRootBuildDirectory}/**/*.spec.js`;
export const absoluteRootBuildFilesGlobs = [
    `${absoluteRootBuildDirectory}/**/*`,
    `!${absoluteRootBuildDirectory}/**/*.spec.*`
];

// Default

export const absoluteRootDefaultDirectory = RootPath.resolve(relativeDefaultDirectory);

export const absoluteRootDefaultFilesGlob = `${absoluteRootDefaultDirectory}/**/*`;

// Essential

export const absoluteRootEssentialDirectory = RootPath.path;

export const absoluteRootPackageJsonPath = path.join(absoluteRootEssentialDirectory, relativePackageJsonPath);
export const absoluteRootTsconfigJsonPath = path.join(absoluteRootEssentialDirectory, relativeTsconfigJsonPath);
export const absoluteRootTslintJsonPath = path.join(absoluteRootEssentialDirectory, relativeTslintJsonPath);
export const absoluteRootLicensePath = path.join(absoluteRootEssentialDirectory, relativeLicensePath);
export const absoluteRootReadmeMarkdownPath = path.join(absoluteRootEssentialDirectory, relativeReadmeMarkdownPath);

export const absoluteRootEssentialFilesGlobs = [
    absoluteRootPackageJsonPath,
    absoluteRootTsconfigJsonPath,
    absoluteRootTslintJsonPath,
    absoluteRootLicensePath,
    absoluteRootReadmeMarkdownPath
];

// Distribute

export const absoluteRootDistributeDirectory = RootPath.resolve(relativeDistributeDirectory);

export const absoluteRootDistributePackageJsonPath = path.join(
    absoluteRootDistributeDirectory,
    relativePackageJsonPath
);

export const absoluteRootDistributeBuildDirectory = absoluteRootDistributeDirectory;
export const absoluteRootDistributeDefaultDirectory = path.join(
    absoluteRootDistributeDirectory,
    relativeDefaultDirectory
);
export const absoluteRootDistributeDefaultFilesGlob = `${absoluteRootDistributeDefaultDirectory}/**/*`;
export const absoluteRootDistributeEssentialDirectory = absoluteRootDistributeDirectory;

// Coverage

export const absoluteRootCoverageDirectory = RootPath.resolve(relativeCoverageDirectory);

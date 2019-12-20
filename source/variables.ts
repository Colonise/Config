import RootPath from 'app-root-path';
import * as path from 'path';

export const relativePackageJsonPath = './package.json';
export const relativeTsconfigJsonPath = './tsconfig.json';
export const relativeTslintJsonPath = './tslint.json';
export const relativeLicensePath = './LICENSE';
export const relativeReadmeMarkdownPath = './README.md';

export const relativeSourceDirectory = './source';
export const relativeBuildDirectory = './build';
export const relativeDefaultDirectory = './default';
export const relativeDistributeDirectory = './distribute';
export const relativeCoverageDirectory = './coverage';

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

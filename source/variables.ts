import RootPath from 'app-root-path';
import * as path from 'path';

export const relativePackageJsonPath = path.normalize('./package.json');
export const relativeTsconfigJsonPath = path.normalize('./tsconfig.json');
export const relativeGeneratedTsconfigJsonPath = path.normalize('./tsconfig.generated.json');
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

export const absoluteRootSourceTestFilesGlob = path.join(absoluteRootSourceDirectory, '/**/*.spec.ts');
export const absoluteRootSourceTypescriptFilesGlob = path.join(absoluteRootSourceDirectory, '/**/*.ts');
export const absoluteRootSourceDeclarationFileGlob = path.join(absoluteRootSourceDirectory, '/**/*.d.ts');

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

// Root

export const absoluteRootDirectory = RootPath.path;

export const absoluteRootPackageJsonPath = path.join(absoluteRootDirectory, relativePackageJsonPath);
export const absoluteRootTsconfigJsonPath = path.join(absoluteRootDirectory, relativeTsconfigJsonPath);
// tslint:disable-next-line: max-line-length
export const absoluteRootGeneratedTsconfigJsonPath = path.join(
    absoluteRootDirectory,
    relativeGeneratedTsconfigJsonPath
);
export const absoluteRootTslintJsonPath = path.join(absoluteRootDirectory, relativeTslintJsonPath);
export const absoluteRootLicensePath = path.join(absoluteRootDirectory, relativeLicensePath);
export const absoluteRootReadmeMarkdownPath = path.join(absoluteRootDirectory, relativeReadmeMarkdownPath);

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

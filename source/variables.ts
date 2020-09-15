import * as path from 'path';
import RootPath from 'app-root-path';

export const relativePackageJsonPath = path.normalize('./package.json');
export const relativeTsconfigJsonPath = path.normalize('./tsconfig.json');
export const relativeGeneratedTsconfigJsonPath = path.normalize('./tsconfig.generated.json');
export const relativeEslintRCPath = path.normalize('./.eslintrc.js');
export const relativeEslintPath = path.normalize('./eslint.js');
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
export const absoluteRootSourceTypeScriptFilesGlob = path.join(absoluteRootSourceDirectory, '/**/*.ts');
export const absoluteRootSourceDeclarationFilesGlob = path.join(absoluteRootSourceDirectory, '/**/*.d.ts');

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
export const absoluteRootGeneratedTsconfigJsonPath = path.join(
    absoluteRootDirectory,
    relativeGeneratedTsconfigJsonPath
);
export const absoluteRootEslintRCPath = path.join(absoluteRootDirectory, relativeEslintRCPath);
export const absoluteRootEslintPath = path.join(absoluteRootDirectory, relativeEslintPath);
export const absoluteRootLicensePath = path.join(absoluteRootDirectory, relativeLicensePath);
export const absoluteRootReadmeMarkdownPath = path.join(absoluteRootDirectory, relativeReadmeMarkdownPath);

export const absoluteRootEssentialFilesGlobs = [
    absoluteRootPackageJsonPath,
    absoluteRootTsconfigJsonPath,
    absoluteRootEslintRCPath,
    absoluteRootEslintPath,
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

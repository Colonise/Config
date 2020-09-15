import SemanticReleaseError from '@semantic-release/error';

const packageName = process.env.COLONISE_PACKAGE_NAME;

if (!packageName) {
    throw new SemanticReleaseError(
        'The package name must be provided.',
        'ENOPACKAGENAME',
        'Make sure to add the environment variable \'COLONISE_PACKAGE_NAME\' to the Travis CI build.'
    );
}

const packageNameLower = packageName.toLowerCase();

const changelog = [
    '@semantic-release/changelog',
    {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: 'Changelog'
    }
];

const npm = [
    '@semantic-release/npm',
    {
        pkgRoot: './distribute',
        tarballDir: '.'
    }
];

const git = [
    '@semantic-release/git'
];

const github = [
    '@semantic-release/github',
    {
        assets: [
            {
                label: 'NPM package (.tgz)',
                path: 'colonise-config-*.tgz'
            }
        ],
        // eslint-disable-next-line no-template-curly-in-string
        failTitle: 'The automatic publishing of release ${nextRelease.gitTag} is failing.',
        successComment: `This \${issue.pull_request ? 'pull request has been included in' : 'issue has been resolved in'} **[release \${nextRelease.gitTag}](https://github.com/Colonise/${packageName}/releases/tag/\${nextRelease.gitTag})**!

You can install the **[npm package](https://www.npmjs.com/package/@colonise/${packageNameLower})** for \${nextRelease.gitTag} using \`npm install @colonise/${packageNameLower}@\${nextRelease.version}\`

_Automatically generated by [semantic-release](https://github.com/semantic-release/semantic-release)._`
    }
];
export const plugins = [
    changelog,
    npm,
    git,
    github
];

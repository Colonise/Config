import SemanticReleaseError from '@semantic-release/error';

const packageName = process.env.COLONISE_PACKAGE_NAME;

if (!packageName) {
    throw new SemanticReleaseError(
        'The package name must be provided.',
        'ENOPACKAGENAME',
        `Make sure to add the environment variable 'COLONISE_PACKAGE_NAME' to the Travis CI build`
    );
}

const packageNameLower = packageName.toLowerCase();

export = {
    verifyConditions: [
        '@semantic-release/changelog',
        '@semantic-release/git',
        '@semantic-release/github',
        '@semantic-release/npm'
    ],
    prepare: [
        {
            path: '@semantic-release/changelog',
            changelogFile: 'CHANGELOG.md',
            changelogTitle: 'Changelog'
        },
        '@semantic-release/git',
        '@semantic-release/npm'
    ],
    publish: ['@semantic-release/github', '@semantic-release/npm'],
    success: [
        {
            path: '@semantic-release/github',
            successComment: `This \${
                issue.pull_request ? 'pull request has been included in' : 'issue has been resolved in'
            } **[release \${nextRelease.gitTag}](https://github.com/Colonise/${packageName}/releases/tag/\${
                nextRelease.gitTag
            })**!\n\nYou can install the **[npm package](https://www.npmjs.com/package/@colonise/${packageNameLower})** for \${
                nextRelease.gitTag
            } using \`npm install @colonise/${packageNameLower}@\${
                nextRelease.version
            }\`\n\n_Automatically generated by [semantic-release](https://github.com/semantic-release/semantic-release)._`
        }
    ],
    fail: [
        {
            path: '@semantic-release/github',
            failTitle: `The automatic publishing of release \${nextRelease.gitTag} is failing`
        }
    ]
};
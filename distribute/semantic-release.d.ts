export declare const plugins: ((string | {
    parserOpts: {
        headerPattern: RegExp;
        headerCorrespondence: string[];
        referenceActions: string[];
        issuePrefixes: string[];
        issuePrefixesCaseSensitive: boolean;
        noteKeywords: string[];
        fieldPattern: RegExp;
        revertPattern: RegExp;
        revertCorrespondence: string[];
        warm: boolean;
    };
    releaseRules: {
        type: string;
        release: string;
    }[];
})[] | (string | {
    parserOpts: {
        headerPattern: RegExp;
        headerCorrespondence: string[];
        referenceActions: string[];
        issuePrefixes: string[];
        issuePrefixesCaseSensitive: boolean;
        noteKeywords: string[];
        fieldPattern: RegExp;
        revertPattern: RegExp;
        revertCorrespondence: string[];
        warm: boolean;
    };
    writerOpts: {
        groupBy: string;
        commitsSort: string[];
        noteGroupsSort: string[];
        notesSort: string[];
        reverse: boolean;
        includeDetails: boolean;
        ignoreReverted: boolean;
        doFlush: boolean;
    };
    host: string;
    linkCompare: boolean;
    linkReferences: boolean;
    commit: string;
    issue: string;
})[] | (string | {
    changelogFile: string;
    changelogTitle: string;
})[] | (string | {
    npmPublish: boolean;
    pkgRoot: string;
    tarballDir: string;
})[] | (string | {
    message: string;
    assets: string[];
})[] | (string | {
    assets: {
        label: string;
        path: string;
    }[];
    successComment: string;
    failComment: string;
    failTitle: string;
    labels: string[];
    assignees: string[];
    releasedLabels: string[];
    addReleases: string;
})[])[];

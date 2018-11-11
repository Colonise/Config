declare class SemanticReleaseError extends Error {
    public name: string;
    public message: string;
    public code: string;
    public details: string;
    public constructor(message: string, code: string, details: string);
}

declare module '@semantic-release/error' {
    export = SemanticReleaseError;
}

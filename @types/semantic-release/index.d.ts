interface SemanticReleasePlugin {
    path: string;
}

interface SemanticReleaseOptions {
    plugins: SemanticReleasePlugin[];
}

declare const SemanticRelease: (options?: SemanticReleaseOptions) => Promise<void>;

declare module 'semantic-release' {
    export = SemanticRelease;
}

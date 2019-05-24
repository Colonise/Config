type SemanticReleasePlugin = [string, {}];

interface SemanticReleaseOptions {
    plugins: SemanticReleasePlugin[];
}

declare module 'semantic-release' {
    export default function SemanticRelease(options?: SemanticReleaseOptions): Promise<void>;
}

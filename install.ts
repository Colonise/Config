import RootPath from 'app-root-path';
import * as fs from 'fs';
import { default as glob } from 'glob';
import * as path from 'path';

async function install() {
    const base = __filename.includes('node_modules')
        ? path.join(RootPath.path, '/node_modules/@colonise/config')
        : RootPath.path;

    const defaultFolderPath = path.join(base, '/default');

    if (!fs.existsSync(defaultFolderPath)) {
        throw new Error(`Could not find default configuration path '${defaultFolderPath}'.`);
    }

    const defaultFilesGlob = path.join(defaultFolderPath, '/**/*.*');

    const defaultFilePaths = await new Promise<string[]>((resolve, reject) => {
        glob(defaultFilesGlob, (error, matches) => {
            if (error) {
                reject(error);
            } else {
                resolve(matches.map(filePath => path.resolve(filePath)));
            }
        });
    });

    for (const defaultFilePath of defaultFilePaths) {
        const relativeFilePath = defaultFilePath.replace(defaultFolderPath, '');
        const absoluteFilePath = path.join(RootPath.path, relativeFilePath);

        if (!fs.existsSync(absoluteFilePath)) {
            await fs.promises.copyFile(defaultFilePath, absoluteFilePath);
            // tslint:disable-next-line: no-console
            console.log(`Successfully copied file '${relativeFilePath}'.`);
        } else {
            // tslint:disable-next-line: no-console
            console.warn(`Failed to copy file '${relativeFilePath}', because it already exists. A manual update may be required.`);
        }
    }
}

exports = install();

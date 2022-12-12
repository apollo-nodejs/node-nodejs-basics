import fs from 'node:fs/promises';
const rename = async () => {
    const oldName = 'src/fs/files/wrongFilename.txt';
    const newName = 'src/fs/files/properFilename.md';
    const failed = "FS operation failed";

    // check file oldName
    const isOldName = async (path, failedMessage) => {
        try {
                await fs.access(path, fs.constants.F_OK);
        }catch (error) {
                throw new Error (failedMessage);
        }
    }

    // check file newName
    const isNewName = async (path, failedMessage) => {
        try {
            await fs.access(path, fs.constants.F_OK);
            throw new Error (failedMessage);
        }catch (e) {}      
    }

    try {
        await isOldName (oldName, failed);
        await isNewName (newName, failed);
        await fs.rename (oldName, newName);
        console.log('File rename');
    }catch (e) {
        console.log(e.message);
    }
};

await rename();
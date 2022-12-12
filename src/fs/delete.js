import fs from 'node:fs/promises';
const remove = async () => {
    const pathFile = 'src/fs/files/fileToRemove.txt';
    const failed = "FS operation failed";
    // check file
    const isFile = async (path, failedMessage) => {
        try {
            await fs.access(path, fs.constants.F_OK);
        }catch (error) {
            throw new Error (failedMessage);
        }
    }

    try {
        await isFile (pathFile, failed);
        await fs.unlink (pathFile);
        console.log('File delete');
    }catch (e) {
        console.log(e.message);
    }
};

await remove();
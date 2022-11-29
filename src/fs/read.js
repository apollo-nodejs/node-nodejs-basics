import fs from 'node:fs/promises';
const read = async () => {
    const pathFile = 'src/fs/files/fileToRead.txt';
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
        await isFile(pathFile, failed);
        const data = await fs.readFile(pathFile, { encoding: 'utf8' });
        console.log(data);
    }catch (e) {
        console.log(e.message);
    }
};

await read();
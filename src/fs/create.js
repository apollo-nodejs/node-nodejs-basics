import fs from 'node:fs/promises';

const create = async () => {
    // NameFile
    const pathFile = 'src/fs/files/fresh.txt';
    const failed = "FS operation failed";

    // check file
    const isFile = async (path, failedMessage) => {
        try {
                await fs.access(path, fs.constants.F_OK);
        }catch (error) {
                return true;
            }
        throw new Error (failedMessage);
    }
    // create file 
    const write = async (path) => {
        try {
            await fs.writeFile (path, 'I am fresh and young');
            console.log("File create");
        }catch (e) {
            console.error(e.message);
        }
    }
    try {
        const res = await isFile(pathFile, failed);
        if (res) {
            write(pathFile);
        }
    }catch (e) {
        console.log(e.message);
    }
};
await create();

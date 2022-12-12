import fs from 'node:fs/promises';
const copy = async () => {
    const pathDir = 'src/fs/files/';
    const copyDir = 'src/fs/files_copy/';
    const failed = "FS operation failed";
    
    // check dir
    const isDir = async (path, failedMessage) => {
        try {
            await fs.stat(path);
        }catch (error) {
            throw new Error (failedMessage);
        }
    }
    // check not dir
    const notDir = async (path, failedMessage) => {
            try {
                const a = await fs.stat(path);
            }catch (e) {
                return true;
            }
        throw new Error (failedMessage);
    }

    try {
        await isDir(pathDir, failed);
        await notDir(copyDir, failed);
        await fs.cp(pathDir, copyDir, {recursive: true});
        console.log("Copy complete success");
    }catch (e) {
        console.error(e.message);
    }
};

copy();
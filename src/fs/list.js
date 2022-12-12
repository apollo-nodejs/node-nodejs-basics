import fs from 'node:fs/promises';
const list = async () => {
    const pathFile = 'src/fs/files/';
    const failed = "FS operation failed";

    const isDir = async (path, failedMessage) => {
        try {
            const a = await fs.stat(path);
        }catch (error) {
            throw new Error (failedMessage);
        }
    }

    try {
        await isDir(pathFile, failed);
        const files = await fs.readdir(pathFile);
        for (const file of files)
            console.log(file);
    }catch (e) {
        console.error(e.message);
    }


    // test in callback
//     fs.stat(pathFile, (err, stats) => {
//         if (err) {
//            throw err;
//         }else {
//             const list = fs.readdir(pathFile, (err, list) => {
//                 if (err) {
//                     throw err;
//                  }else {
//                     console.log( list);
//                  }
//             } );
//         }
//     });
};

await list();

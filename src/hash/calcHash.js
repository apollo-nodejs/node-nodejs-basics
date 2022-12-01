const calculateHash = async () => {
    // Dynamic import;
    const fs = await import('node:fs/promises');
    const {createHash} = await import('node:crypto');
    const pathFile = 'src/hash/files/fileToCalculateHashFor.txt';
    const failed = "FS operation failed";

    try {
        const stat = await fs.stat(pathFile);
        const file =await fs.readFile(pathFile, { encoding: 'utf8' });
        // create hash
        const hash = createHash('sha256');
            hash.setEncoding('hex');
            hash.write(file);
            hash.end();
            console.log(hash.read());
    }catch (e) {
        console.error(e.message);
    }
};

await calculateHash();
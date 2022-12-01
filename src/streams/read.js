const read = async () => {
    
    const pathFile = 'src/streams/files/fileToRead.txt';
    const process = await import ('node:process');
    const {stat} = await import('node:fs/promises');
    const fs = await import('node:fs');

    try {
        const stats = await stat(pathFile);
        const stream = fs.createReadStream(pathFile).setEncoding('utf8');
        stream.pipe(process.stdout);
    }catch (e) {
        console.log(e.message);
    }
};

await read();
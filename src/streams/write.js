const write = async () => {
   
    const pathFile = 'src/streams/files/fileToWrite.txt';
    const process = await import ('node:process');
    const {stat} = await import('node:fs/promises');
    const fs = await import('node:fs');

            try {
                const stats = await stat(pathFile);
                const stream = fs.createWriteStream(pathFile);
                const input = process.stdin;
                input.pipe(stream);
            }catch(e) {
                console.log(e.message);
            }
};

await write();
const compress = async () => {
    const pathFile = 'src/zip/files/fileToCompress.txt';
    const destFile = 'src/zip/files/archive.gz';
    const zlib = await import('node:zlib');
    const fs = await import('node:fs');
    const { pipeline } = await import('node:stream/promises');

    const gzip = zlib.createGzip();
    const source = fs.createReadStream(pathFile);
    const destination = fs.createWriteStream(destFile);
    
    await pipeline (source, gzip, destination);
    console.log('Pipeline succeeded.');
};

await compress();
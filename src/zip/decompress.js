const decompress = async () => {
    const pathFile = 'src/zip/files/archive.gz';
    const destFile = 'src/zip/files/fileToCompress.txt';
    const zlib = await import('node:zlib');
    const fs = await import('node:fs');
    const { pipeline } = await import('node:stream/promises');

    const unzip = zlib.createUnzip();
    const source = fs.createReadStream(pathFile);
    const destination = fs.createWriteStream(destFile);

    await pipeline (source, unzip, destination);
    console.log('Pipeline succeeded.');
};

await decompress();
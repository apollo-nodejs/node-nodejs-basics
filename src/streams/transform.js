const transform = async () => {
    const pathFile = 'src/streams/files/fileToWrite.txt';
    const process = await import ('node:process');
    const { Transform } = await import('stream');

    // Reverse text
    const reverse = (text) => {
        return [...text].reverse().join("");
    }

    const reverseTransform = new Transform(
        {
            transform(data, encoding, callback) {
                    data = reverse(data.toString());
                    console.log(encoding);
                    this.push(data+"\n");
                callback();
            }
        });
        process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
const spawnChildProcess = async (args) => {
    const child_process = await import('node:child_process');
    const child = './src/cp/files/script.js';
    const arg = process.argv.slice(2);

    // create child process
    const child_1 = child_process.fork(child, arg);
    child_1.send(process.stdin);
};

spawnChildProcess();
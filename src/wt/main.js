const performCalculations = async () => {
    const process = await import ('node:process');
    const os = await import ('node:os');
    const threads = await import ('node:worker_threads');
    
    const workers = './src/wt/worker.js';
    const cpus = os.cpus().length;

    const runService = (workerData) => {
        return new Promise((resolve, reject) => {
          const worker = new threads.Worker(workers, { workerData });
          worker.on('message', resolve);
          worker.on('error', reject);
          worker.on('exit', (code) => {
            if (code !== 0)
              reject(new Error(`Worker stopped with exit code ${code}`));
          })
        })
      }
      
      const run = async (number) => {
            const result = await runService(number);
        return result;
      }
      
    let start = 10;
    const array = [];
    for (let i=0; i<cpus; i++, start++) {
        array.push(run(start).catch(err => console.error(err)));
    }
        const result = await Promise.all(array);
    console.log(result);
};

await performCalculations();
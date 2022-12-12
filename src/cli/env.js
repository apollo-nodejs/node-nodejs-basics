const parseEnv = () => {
    
    const env = process.env;
    let result = '';
    const pattern = 'RSS_';

    if (typeof env === 'object') {
        for (let key in env) {
            if (key.includes(pattern)) {
                result +=(`${key}=${env[key]}; `);
            }
        }
    }
    // Output result
    (result)?console.log(result):console.log(new Error("Not found"));
};
parseEnv();
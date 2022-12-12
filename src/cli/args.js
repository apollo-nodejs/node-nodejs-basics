const parseArgs = () => {
    // Slice delete first and second value
    const arg = process.argv.slice(2);
    let result ='';
    for (let i=0; i<arg.length; i+=2){
        result += `${arg[i]} is ${arg[i+1]}, `;
    }
    console.log(result);
};
parseArgs();
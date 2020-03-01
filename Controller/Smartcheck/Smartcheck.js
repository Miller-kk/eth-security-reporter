class Smartcheck {
    constructor() {
        
    }
    async analysis(fileName) {
        const {
            spawn
        } = require("child_process");

        console.log("fileName :" +fileName)
        
        const smartcheck = spawn("manticore", ["-p",fileName]);
        
        await smartcheck.stdout.on("data", data => {
            //console.log(`stdout: ${data}`);
        });

        await smartcheck.stderr.on("data", data => {
            console.log(`stderr: ${data}`);
        });

        await smartcheck.on('error', (error) => {
            console.log(`error: ${error.message}`);
            return false;
        });

        await smartcheck.on("close", code => {
            console.log(`child process exited with code ${code}`);
            return true;
        });
    }
}


module.exports = Smartcheck;
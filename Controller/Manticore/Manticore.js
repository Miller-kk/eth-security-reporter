class Manticore {
    constructor() {
        
    }
    async analysis(fileName) {
        const {
            spawn
        } = require("child_process");

        console.log("fileName :" +fileName)
        
        const manticore = spawn("manticore", [fileName]);

        await manticore.stdout.on("data", data => {
            //console.log(`stdout: ${data}`);
        });

        await manticore.stderr.on("data", data => {
            console.log(`stderr: ${data}`);
        });

        await manticore.on('error', (error) => {
            console.log(`error: ${error.message}`);
            return false;
        });

        await manticore.on("close", code => {
            console.log(`child process exited with code ${code}`);
            return true;
        });
    }
}


module.exports = Manticore;
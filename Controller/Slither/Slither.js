class Slither {
    constructor() {

    }
    
    async analysis(fileName) {
        const {
            spawn
        } = require("child_process");
        
        const slither = spawn("slither",["--json","./result_data/slither.json",fileName]);

        await slither.stdout.on("data", data => {
            //console.log(`stdout: ${data}`);
        });

        await slither.stderr.on("data", data => {
            console.log(`stderr: ${data}`);
        });

        await slither.on('error', (error) => {
            console.log(`error: ${error.message}`);
            return false;
        });

        await slither.on("close", code => {
            console.log(`child process exited with code ${code}`);
            return true;
        });
    }
}

module.exports = Slither;


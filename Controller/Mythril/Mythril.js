class Mythril {
    constructor() {

    }

    async analysis(fileName) {
        const {
            spawn
        } = require("child_process");
        
        const myth = spawn("myth", ["-o","./result_data/mythril.json","-i",fileName]);

        await myth.stdout.on("data", data => {
            //console.log(`stdout: ${data}`);
        });

        await myth.stderr.on("data", data => {
            console.log(`stderr: ${data}`);
        });

        await myth.on('error', (error) => {
            console.log(`error: ${error.message}`);
            return false;
        });

        await myth.on("close", code => {
            console.log(`child process exited with code ${code}`);
            return true;;
        });
    }
}

module.exports = Mythril;


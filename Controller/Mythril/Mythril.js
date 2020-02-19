class Mythril {
    constructor() {

    }

    analysis(fileName) {
        const {
            spawn
        } = require("child_process");
        
        const myth = spawn("myth", [fileName]);

        myth.stdout.on("data", data => {
            console.log(`stdout: ${data}`);
        });

        myth.stderr.on("data", data => {
            console.log(`stderr: ${data}`);
        });

        myth.on('error', (error) => {
            console.log(`error: ${error.message}`);
        });

        myth.on("close", code => {
            console.log(`child process exited with code ${code}`);
        });
    }
}

module.exports = Mythril;


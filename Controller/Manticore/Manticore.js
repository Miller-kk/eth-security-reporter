class Manticore {
    constructor() {

    }

    analysis(fileName) {
        const {
            spawn
        } = require("child_process");
        
        const manticore = spawn("manticore", [fileName]);

        manticore.stdout.on("data", data => {
            console.log(`stdout: ${data}`);
        });

        manticore.stderr.on("data", data => {
            console.log(`stderr: ${data}`);
        });

        manticore.on('error', (error) => {
            console.log(`error: ${error.message}`);
        });

        manticore.on("close", code => {
            console.log(`child process exited with code ${code}`);
        });
    }
}

module.exports = Manticore;


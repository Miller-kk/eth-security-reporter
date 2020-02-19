class Slither {
    constructor() {

    }

    analysis(fileName) {
        const {
            spawn
        } = require("child_process");
        
        const slither = spawn("slither", [fileName]);

        slither.stdout.on("data", data => {
            console.log(`stdout: ${data}`);
        });

        slither.stderr.on("data", data => {
            console.log(`stderr: ${data}`);
        });

        slither.on('error', (error) => {
            console.log(`error: ${error.message}`);
        });

        slither.on("close", code => {
            console.log(`child process exited with code ${code}`);
        });
    }
}

module.exports = Slither;


class Securify {
    constructor() {

    }

    async analysis(fileName) {
        const {
            spawn
        } = require("child_process");
        
        const securify = spawn("java", ["-jar","/securify/build/libs/securify.jar","-o","./result_data/securify.json","-fs",fileName]);

        await securify.stdout.on("data", data => {
            //console.log(`stdout: ${data}`);
        });

        await securify.stderr.on("data", data => {
            //console.log(`stderr: ${data}`);
        });

        await securify.on('error', (error) => {
            //console.log(`error: ${error.message}`);
            return false;
        });

        await securify.on("close", code => {
            console.log(`child process exited with code ${code}`);
            return true;;
        });
    }
}

module.exports = Securify;

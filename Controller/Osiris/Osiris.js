class Osiris {
    constructor() {
        
    }
    async analysis(fileName) {
        const {
            spawn
        } = require("child_process");

        console.log("fileName :" +fileName)
        
        const osiris = spawn("python", ["/Osiris/osiris/osiris.py","-s",fileName]);
        
        await osiris.stdout.on("data", data => {
            //console.log(`stdout: ${data}`);
        });

        await osiris.stderr.on("data", data => {
            //console.log(`stderr: ${data}`);
        });

        await osiris.on('error', (error) => {
            //console.log(`error: ${error.message}`);
            return false;
        });

        await osiris.on("close", code => {
            console.log(`child process exited with code ${code}`);
            return true;
        });
    }
}


module.exports = Osiris;
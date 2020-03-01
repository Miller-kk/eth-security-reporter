class Mythx {
    
    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5MTcwMDJlZi1lMTYyLTRkNzMtODQ4Ny1hODkyM2ZjYTc4MDIiLCJpYXQiOjE1ODIxMTc5OTEuNzMsImlzcyI6Ik15dGhYIEFQSSIsImV4cCI6MTg5NzY5Mzk5MS43MjQsInVzZXJJZCI6IjVjZWIwMTQ5MmY4YWRmMDAxOGY1YzcxNyJ9.L-xvd9rxqGsmVCWOMNAlKh_NGfjk7go3s0hG4ksvsDU";

    constructor() {
        
    }

    async analysis(fileName) {
        const {
            spawn
        } = require("child_process");
        
        const mythx = spawn("mythx", ["--access-token", this.token, "--format", "json", "analyze", fileName]);

        await mythx.stdout.on("data", data => {
            console.log(`stdout: ${data}`);
        });

        await mythx.stderr.on("data", data => {
            console.log(`stderr: ${data}`);
        });

        await mythx.on('error', (error) => {
            console.log(`error: ${error.message}`);
            return false;
        });

        await mythx.on("close", code => {
            console.log(`child process exited with code ${code}`);
            return true;
        });
    }
}

module.exports = Mythx;


let Mythril = require("./Controller/Mythril/Mythril");
let Manticore = require("./Controller/Manticore/Manticore");
let Slither = require("./Controller/Slither/Slither");
let Mythx = require("./Controller/Mythx/Mythx");
let Securify = require("./Controller/Securify/Securify");
let Osiris = require("./Controller/Osiris/Osiris");

let result = {}

let mp = require("./Lib/MythxParser");
let slp = require("./Lib/SlitherParser");
let sp = require("./Lib/SecurifyParser");
let pprint = require("./Lib/PrettyPrint");

const fileName = process.argv[2];
const AbsolutePath = __dirname + "/";
const filePath = AbsolutePath + fileName;
const log = console.log;

let mythril = new Mythril();
let manticore = new Manticore();
let slither = new Slither();
let mythx = new Mythx();
let securify = new Securify();
let osiris = new Osiris();


async function integrationAnalysis(filePath) {
  if (fileName == undefined) {
    log("Error: Please Correct FileName");
  } else {
    log("File Path :" + filePath);
    await mythx.analysis(filePath);
    await slither.analysis(filePath);
    await securify.analysis(filePath);
    await osiris.analysis(filePath);
    await mythril.analysis(filePath);
    await manticore.analysis(filePath);
    const mythxInfo = await mp();
    await pprint("mythx", mythxInfo)
    const slitherInfo = await slp();
    await pprint("slither", slitherInfo)
    const securifyInfo = await sp();
    await pprint("securify", securifyInfo)

  }

}

integrationAnalysis(filePath);

result["mythx"] = mythxInfo;
result["slither"] = slitherInfo;
result["securify"] = securifyInfo;
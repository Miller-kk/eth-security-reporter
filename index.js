let Mythril = require("./Controller/Mythril/Mythril");
let Manticore = require("./Controller/Manticore/Manticore");
let Slither = require("./Controller/Slither/Slither");
let Mythx = require("./Controller/Mythx/Mythx");

const fileName = process.argv[2];
const AbsolutePath = __dirname + "/";
const filePath = AbsolutePath + fileName;
const log = console.log;

let mythril = new Mythril();
let manticore = new Manticore();
let slither = new Slither();
let mythx = new Mythx();


async function integrationAnalysis(filePath) {
  if (fileName == undefined) {
    log("Error: Please Correct FileName");
  } else {
    log("File Path :" + filePath);
    await slither.analysis(filePath);
    await manticore.analysis(filePath);
    await mythx.analysis(filePath);
  }

}

integrationAnalysis(filePath);
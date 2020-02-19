let Mythril = require("./Controller/Mythril/Mythril");
let Manticore = require("./Controller/Manticore/Manticore");
let Slither = require("./Controller/Slither/Slither");
const fileName =process.argv[2];
const AbsolutePath = __dirname + "/";
const filePath = AbsolutePath + fileName;

let mythril = new Mythril();
let manticore = new Manticore();
let slither = new Slither();


async function integrationAnalysis() {
  //await mythril.analysis(filePath);
  await manticore.analysis(filePath);
  await slither.analysis(filePath);

}

integrationAnalysis();



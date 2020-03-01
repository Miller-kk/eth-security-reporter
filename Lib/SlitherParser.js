let fs = require("fs");
let contents = fs.readFileSync("./result_data/slither.json");
let result = [];
let newJson = {};

function slitherParse() {
    let jsonContent = JSON.parse(contents);
    jsonContent.results.detectors.forEach(element => {
        if (element != undefined) {
            newJson["name"] = element.check;
            newJson["description"] = element.description;
            newJson["impact"] = element.impact
            result.push(newJson);
            newJson = {}
        }
    });

    return result;
}

module.exports = slitherParse;
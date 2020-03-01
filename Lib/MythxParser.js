let fs = require("fs");
let contents = fs.readFileSync("./result_data/mythx.json");
let result = [];
let newJson = {};

function mythxParser() {
    let jsonContent = JSON.parse(contents);
    jsonContent[0].issues.forEach(element => {
        if (element != undefined && element.swcTitle != '') {
            newJson["name"] = element.swcTitle;
            newJson["description"] = element.description.head;
            newJson["impact"] = element.severity;
            newJson["lines"] = element.decodedLocations;
            result.push(newJson);
            newJson = {}
        }
    });
    return result;
}

module.exports = mythxParser;
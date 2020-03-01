let fs = require("fs");
let contents = fs.readFileSync("./result_data/securify.json");
let result = [];
let newJson = {};
let log = console.log;

function securifyParser() {
    let jsonContent = JSON.parse(contents);
    Object.keys(jsonContent).forEach(key => {
        Object.keys(jsonContent[key].results).forEach(element => {
            if (jsonContent[key].results[element].violations.length > 0) {
                newJson["name"] = element;
                newJson["description"] = element;
                newJson["impact"] = null;
                newJson["lines"] = jsonContent[key].results[element].violations;
                result.push(newJson);
                newJson = {};
            }

        })
    })
    return result;
}
module.exports = securifyParser;
function prettyPrint(tool,infoArray){
    let log = console.log
    log("\n\n")
    log("====================================="+tool+" Result=====================================")
    log("\n")
    infoArray.forEach(element => {
        log("===============================================================================")
        log("Name: " + element.name);
        log("description: " + element.description);
        log("impact: " + element.impact);
        log("lines: " + element.lines);
    })
}

module.exports = prettyPrint;
function readCsv(filePath, callback) {
    var Converter = require("csvtojson").core.Converter;
    var fs = require("fs");

    var csvFileName = filePath;
    var fileStream = fs.createReadStream(csvFileName);
    var csvConverter = new Converter({
            constructResult : true
        });

    csvConverter.on("end_parsed", function (jsonObj) {
        callback(jsonObj);
    });

    fileStream.pipe(csvConverter);

}

module.exports = readCsv;

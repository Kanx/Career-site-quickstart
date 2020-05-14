const fs = require("fs");
const moment = require("moment");
const HtmlDocx = require("html-docx-js");
const walk = require("walk");
const walker = walk.walk("./src/views", { followLinks: false });
const files = [];
walker.on("file", function(root, stat, next) {
  if (stat.name.indexOf(".html") !== -1) {
    files.push({
      path: root + "/" + stat.name,
      name: stat.name.replace(".html", "")
    });
  }
  next();
});

walker.on("end", function() {
  const currentDate = moment().format("YYYYMMDD");
  const outputDest = `./public/copy-templates/${currentDate}`;
  if (!fs.existsSync("./public/copy-templates")) {
    fs.mkdirSync("./public/copy-templates");
  }
  if (!fs.existsSync(outputDest)) {
    fs.mkdirSync(outputDest);
  }
  files.forEach(function(file, index) {
    fs.readFile(file.path, "utf-8", function(err, html) {
      if (err) {
        throw err;
      }
      const formattedHtml = `
        <!doctype html>
          <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
          <head>
              <style>
                body {
                  font-family: "RN House Sans", Arial;
                }
               
             </style>
          </head>
          <body>
       <div style="mso-element:header;" id="h1">
      <p class=MsoHeader>Classification: INTERNAL</p>
      </div>
 
            ${html.toString()}
            </body>
        </html>
        `;
      const docx = HtmlDocx.asBlob(formattedHtml);
      fs.writeFile(
        `${outputDest}/${currentDate}_${file.name}_(INTERNAL).docx`,
        docx,
        function(err) {
          if (err) throw err;
        }
      );
    });
  });
});

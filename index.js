// const {
//     writeFile, readFile, appendFile
// }= require('fs')
// readFile('./data.txt','utf-8',(err,data)=>{
// if(!err)
// console.log(data)
// else
// console.log('An error occured');
// }
// )

const { writeFile, readFile, appendFile } = require("fs");

// Writing content to a file
writeFile("./data.txt", "Hello, my name is Aphelele", (err) => {
  if (err) {
    console.error("Error writing to the file:", err);
  } else {
    console.log("Content has been written to the file successfully!");

    // Reading content from a file
    readFile("./data.txt", "utf8", (err, data) => {
      if (!err) {
        console.log(data);

        // Append content to a file
        appendFile(
          "./data.txt",
          "\nI am a student at Life Choices Academy",
          (err) => {
            if (err) {
              console.error("Error appending to the file:", err);
            } else {
              console.log(
                "Content has been appended to the file successfully!"
              );

              // Now, let's read the updated content from the file
              readFile("./data.txt", "utf8", (err, updatedData) => {
                if (err) {
                  console.error("Error reading the updated file:", err);
                } else {
                  console.log(
                    "Updated content read from the file:",
                    updatedData
                  );
                }
              });
            }
          }
        );
      } else {
        console.log("An error occurred while reading the file:", err);
      }
    });
  }
});

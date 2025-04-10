// // Practice 
// 1. Folder Create korlam fs.mkdir diye 
// 2. Folder er vitor file create korlam fs.writeFile diye 
// 3. File er vitor kichu lekhlam fs.writeFile er moddhei 
// 4. File er lekhar sathe arro kichu append korlam fs.copyFile diye 
// 5. File er text er sathe onno file theke text copy korlam 
// 6. Folder remove korlam fs.mrdir diye sathe {recursive:true} use kore 
// 7. File remove korlam fs.unlink diye 





// fs.writeFile("./Sujoy_Das_Official/text.txt", "Hi", function (err) {
//     if (err) console.error(err)
//     else {
//         console.log("file Create Successfully")
//         fs.copyFile('./text.txt', './Sujoy_Das_Official/text.txt', 
//         function (err) {
//             if (err) console.error(err)
//             else console.log("file Copyed")
//         })
//     }
// })

// fs.appendFile("text.txt", "\nAmr nam sujoy das ami Sujoy_Das_Official folder e copy hote chai ", function (err) {
//     if (err) console.error(err)
//     else console.log("append text on the file successfully")
// })


// fs.rmdir('./myFolder', { recursive: true }, function (err) {
//     if (err) console.error(err)
//     else console.log("Folder Removed Successfully")
// })


// fs.unlink('text.txt', function (err) {
//         if (err) console.error(err)
//         else console.log("File Removed Successfully")
// })
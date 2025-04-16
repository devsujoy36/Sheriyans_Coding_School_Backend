
const fs = require('fs');


// ✅ ১. fs.writeFile() – ফাইল তৈরি/লেখা
// fs.writeFile("Sujoy.txt", "Kuch kuch hota hain", function (err) {
//     if (err) { console.error(err); }
//     else { console.log("File Create and Write content Successfully") }
// })

// ✅ ২. fs.appendFile() – বিদ্যমান ফাইলে নতুন লেখা যোগ করা
// fs.appendFile("Sujoy.txt", "\ntum samjho ge nehi", function (err) {
//     if (err) { console.error(err); }
//     else { console.log("Text Append Successfully") }
// })

// ✅ ৩. fs.readFile() – ফাইল পড়া
// fs.readFile('Hello.txt', 'utf8', function (err, data) {
//     if (err) { console.error(err) }
//     console.log('Data is:', data);
// })

// ✅ ৪. fs.unlink() – ফাইল ডিলিট করা
// fs.unlink("fileName", function (err) {
//     if (err) { console.error(err) }
//     else { console.log("File Removed Successfully") }
// })


// ✅ ৫. fs.mkdir() – নতুন ফোল্ডার তৈরি করা
// fs.mkdir("Sujoy_Das_Official", { recursive: true } , function (err) {
//     if (err) { console.error(err) }
//     else { console.log("Folder Created Successfully") }
// })


// ✅ ৬. fs.rmdir() – ফাঁকা ফোল্ডার মুছে ফেলা
// fs.rmdir('folderName', function (err) {
//     if (err) { console.error(err) }
//     else { console.log('Folder Removed Successfully'); }
// });

// ✅ ৭. fs.rename() – ফাইলের নাম পরিবর্তন
// fs.rename("Sujoy.txt", "Hello.txt", function (err) {
//     if (err) { console.error(err); }
//     else { console.log("File Renamed Successfully") }
// })

// ✅ fs.copyFile() (Asynchronous version)
// fs.copyFile('Hello.txt', "Sujoy.txt", function (err) {
//     if (err) { console.error(err) }
//     else { console.log("Filed Copied Successfully") }
// })




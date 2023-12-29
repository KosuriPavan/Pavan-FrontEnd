install Node.Js
then in terminal(I'm using Vs code) type -
npm install express body-parser excelhs

then node_modules and package.json files will be created

next arrange the file such that
>node_modules
>public
    index.html
    style.css
>data.xlsx
>package-lock.json
>package-json
>server.jso

make sure that your excel file location path is correct
// in line number 13 of sever.js file ----- const filePath = "./data.xlsx"; // Replace with your Excel file path
and then in vs code terminal type-
npm start


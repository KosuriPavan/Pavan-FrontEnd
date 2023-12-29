const express = require("express");
const bodyParser = require("body-parser");
const ExcelJS = require("exceljs");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // Assuming your HTML file is in a folder named 'public'

app.post("/submit-form", async (req, res) => {
  const workbook = new ExcelJS.Workbook();
  const filePath = "./data.xlsx"; // Replace with your Excel file path

  // Load the workbook or create a new one if it doesn't exist
  // Load the workbook or create a new one if it doesn't exist
  try {
    await workbook.xlsx.readFile(filePath);
  } catch (error) {
    // If file doesn't exist or workbook fails to load, create a new workbook
    const worksheet = workbook.addWorksheet("Users");
    worksheet.addRow([
      "Name",
      "Email",
      "Number",
      "Degree",
      "Message",
      "Gender",
    ]);
    await workbook.xlsx.writeFile(filePath);
  }

  // Retrieve the 'Users' worksheet
  const worksheet = workbook.getWorksheet("Users");

  // Check if worksheet exists, then add the new row
  if (worksheet) {
    const newRow = [
      req.body.name,
      req.body.email,
      req.body.number,
      req.body.degree,
      req.body.message,
      req.body.gender,
    ];
    worksheet.addRow(newRow);

    // Save the workbook with the updated data
    await workbook.xlsx.writeFile(filePath);
  } else {
    console.error("Worksheet 'Users' not found.");
  }

  // Save the workbook with the updated data
  await workbook.xlsx.writeFile(filePath);

  res.send("Form data submitted successfully!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

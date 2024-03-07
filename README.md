# Assessli-React-Internship

-> Project Setup Instructions -
Prerequisites 
Make sure you have the following installed on your computer:

1. Node.js - JavaScript runtime
2. npm (Node Package Manager) - Comes with Node.js installation

-> Installation -
1. Clone the repository:
git clone https://github.com/simgym/Assessli-React-Internship.git

2. Navigate to the project directory:
cd Assessli-React-Internship

3. Install project dependencies:
npm install

-> How to Run the Project Locally
To run the project locally, use the following command:
npm start

-> Google Sheets Integration
The contact form integrates with Google Sheets for data storage. The integration is achieved using the sheet.best API.
Configuration:

Ensure that the API endpoint in the fetch function within the handleSubmit function in ContactForm.js points to the correct Google Sheets API endpoint. Replace the URL with your own Google Sheets API endpoint.
code:
const response = await fetch(
  "https://sheet.best/api/sheets/cc33d23d-3cca-44d6-b7db-5d265a6e112a",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }
);
-> Additional Features/Customizations Implemented
1. Error Handling : proper error handling is implemented for form as well as api and "regex" is used
2. Tailwind CSS : used for styling and the color theme is off white,pink
3. Framer motion : used for animations

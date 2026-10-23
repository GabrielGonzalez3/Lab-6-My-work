import express from "express";
import path from "node:path"

const app = express();
const port = 3000;

app.use(express.static(path.join(import.meta.dirname, "public")));

//This was for the html file that we will no longer have as they are now deleted
//I'll leave this here, but commented

//app.get("/", (req, res) => {
//	res.sendFile(path.join(import.meta.dirname, "public", "home.html"));
//});


// Write your code here:

//NOTE: For future reference had to make the files for this 

//Step 1: This renders the ejs home page
// Also did Step 2: Make object and pass dynamically to home.ejs
app.get("/", (req, res) => {
  
  const name= {
    username: "Gabriel"
  };

  res.render('home.ejs', name);
});

//Step 5: Add new routes for about and contact
app.get("/about", (req, res) => {
  res.render('about.ejs');
});

app.get("/contact", (req, res) => {
  res.render('contact.ejs');
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

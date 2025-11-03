
import express from "express";
const app = express();

app.use(express.static("src", {
  setHeaders: (res, path) => {
    if (path.endsWith(".css")) res.setHeader("Content-Type", "text/css");
    if (path.endsWith(".jsx")) res.setHeader("Content-Type", "text/jsx");
  },
}));

app.use(express.static(".")); // Serve index.html
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
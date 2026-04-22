import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 3000;

// Folder where files will be stored
const FILES_DIR = path.join(process.cwd(), "files");

// Create folder if it doesn't exist
if (!fs.existsSync(FILES_DIR)) {
    fs.mkdirSync(FILES_DIR);
}

// Download route
app.get("/download/:file", (req, res) => {
    const filePath = path.join(FILES_DIR, req.params.file);

    if (!fs.existsSync(filePath)) {
        return res.send("File not found");
    }

    console.log("Downloaded:", req.params.file);
    res.download(filePath);
});

// Start server
app.listen(PORT, () => {
    console.log("Server running on http://localhost:3000");
});

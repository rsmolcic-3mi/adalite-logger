const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Use cors middleware
app.use(cors());

app.use(express.json());

app.post('/log', (req, res) => {
    const logMessage = req.body.logMessage;
    const logFilePath = path.join(__dirname, 'function_logs.txt');
    console.log(logMessage);
    fs.appendFileSync(logFilePath, logMessage + '\n');
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Logging server listening at http://localhost:${port}`);
});

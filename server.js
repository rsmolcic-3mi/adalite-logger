const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


const app = express();
const port = process.env.PORT || 3000;

// Use cors middleware
app.use(cors());

app.use(express.json());

app.post('/log', (req, res) => {
    const logMessage = req.body.logMessage;
    const logFilePath = path.join(__dirname, 'logs_26_07_2024.txt');
    const logId = uuidv4();
    const logEntry = `GUID: ${logId}, Message: ${logMessage}`;

    console.log(logMessage);
    fs.appendFileSync(logFilePath, logEntry + '\n');
    res.status(200).send(`Log entry created with GUID: ${logId}`);
});

app.listen(port, () => {
    console.log(`Logging server listening at http://localhost:${port}`);
});

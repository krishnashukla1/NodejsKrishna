const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    fs.readFile('./student/student.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.statusCode = 500;
            res.end('Internal Server Error');
            return;
        }
    
        const studentData = JSON.parse(data);
        console.log(studentData);
    
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(studentData));
    });
});
    server.listen(3000, () => {
        console.log("Server is running on http://localhost:3000");
    });

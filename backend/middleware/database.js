const mysql = require('mysql');

// adatbázishoz kapcsolódás
const connection = mysql.createConnection({
    host: '192.168.255.103',
    user: 'u92_TNXC0rTp0S',
    password: 'R1NlBe0yZ1^tmdO9.9d^G1Fl',
    database: 's92_db'
});

connection.connect((err) => {
    if (err) {
        console.log(`Hiba az adatbázis kapcsolódásakor: ${err}`);
        return;
    }

    console.log('Sikeres adatbázis kapcsolat!');
});

module.exports = connection;
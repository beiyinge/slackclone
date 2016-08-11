var sqlite3 = require('sqlite3').verbose();

var fs = require('fs');

var filename = 'scratch.db';

var dbexists = false;

try {

    fs.accessSync(filename);

    dbexists = true;

} catch (ex) {

    dbexists = false;

}

var db = new sqlite3.Database('scratch.db');
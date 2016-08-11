var assert = require('assert');
var db = require('./db.js');

describe('Db module', ()=> {
	var conn;
	
	before(()=>{
		
		
		
	});
		it('given team name, return all channel names of that team', ()=> {
			var teamName = 'Yankees';
			var expected = ['Orange', 'Blue', 'Red'];			
			var actural = db.getChannels(conn, teamName);
			assert.equal(actual, expected);

		})
	
});
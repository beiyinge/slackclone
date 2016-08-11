var assert = require('assert');
var db = require('./db.js');

describe('Db module', ()=> {
	
	it('given team name, return all channel names of that team', ()=> {
		var conn = {
			insert: function() {
				
			},
			select: function(){
				
				return; 
			}
		};
			
		var teamName = 'Yankees';
		var expected = ['Orange', 'Blue', 'Red'];			
		var actual = db.getChannels(conn, teamName);
		assert.equal(actual, expected);

	})
	
});
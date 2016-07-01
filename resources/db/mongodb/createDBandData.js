/*
  This will create a db named `homeworklocations` and add the following `data` to the db

  Start mongodb
  Navigate to this project folder in terminal and...
  Run `cd resources/db/mongodb`
  Run `node createDBandData.js`
  The three records will be added to `homeworklocations`
*/

var MongoClient = require('mongodb').MongoClient,
    mongoUrl    = 'mongodb://localhost:27017/',
    db          = 'homeworklocations',
    collection  = 'docs';

//-- records
var data =  [
    {
		"name" : "pete",
		"email" : "TESTER1@qwe.com",
		"email" : "pete@qwe.com",
		"home" : "975 savannah hwy 29407",
		"home_radius" : "1500",
		"work" : "4730 Coleman Blvd 29464",
		"work_radius" : "1200",
		"dts" : "2016.12.12T10:10:10"
	},
	{
		"name" : "paul",
		"email" : "TESTER2@qwe.com",
		"home" : "1940 Sam Rittenberg Blvd 29407",
		"home_radius" : "612",
		"work" : "200 meeting st 29401",
		"work_radius" : "1160",
		"dts" : "2016-06-30T12:12:55.353Z"
	},
	{
		"name" : "mary",
		"email" : "TESTER3@qwe.com",
		"home" : "4155 Dorchester Rd 29405",
		"home_radius" : "536",
		"work" : "83 E Bay St 29401",
		"work_radius" : "595",
		"dts" : "2016-06-30T22:21:32.740Z"
	}
];

data.forEach(function(doc) {
    var insertData = JSON.parse('{"name": "'+doc.name+'", "email": "'+doc.email+'", "home": "'+doc.home+'", "home_radius": "'+doc.home_radius+'", "work": "'+doc.work+'", "work_radius": "'+doc.work_radius+'", "work_radius": "'+doc.work_radius+'", "dts": "'+doc.dts+'"}');
    MongoClient.connect(mongoUrl+db, function(err, db) {
        if (err) { console.log(err); return; }
        db.collection(collection).insert(insertData, function(err, result) {
            if(err) console.log(err);
            db.close();
        });
    });
});
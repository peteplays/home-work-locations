var MongoClient = require('mongodb').MongoClient,
    _           = require('underscore'),
    mongoUrl    = process.env.MONGODB_URI || 'mongodb://localhost:27017/',
    db          = 'homeworklocations',
    collection  = 'docs';

module.exports = function(app) {

    app.get('/dbCheck', function(req,res) {
        MongoClient.connect(mongoUrl+db, function(err, db) {
            if(err) {
                console.log(err);
                res.json({'db':'fail', 'msg':err});
                return;
            }
            res.json({'db':'ok'});
        });
    });

    app.get('/dbGetAllData', function(req,res) {
        MongoClient.connect(mongoUrl+db, function(err, db) {
            if(err) { console.log(err); return; }
            db.collection(collection).find().toArray(function(err, result) {
                if(err) { console.log(err); return; }
                res.json(result);
                db.close();
            });
        });
    });

    app.get('/dbCount', function(req,res) {
        MongoClient.connect(mongoUrl+db, function(err, db) {
            if(err) { console.log(err); return; }
            db.collection(collection).count(function(err, result) {
                if(err) { console.log(err); return; }
                res.json(result);
                db.close();
            });
        });
    });

    app.post('/dbInsert', function(req,res) {
        var insertData = JSON.parse('{"name": "'+req.body.name+'", "email": "'+req.body.email+'", "home": "'+req.body.home+'", "home_radius": "'+req.body.home_radius+'", "work": "'+req.body.work+'", "work_radius": "'+req.body.work_radius+'", "work_radius": "'+req.body.work_radius+'", "dts": "'+req.body.dts+'"}');
        MongoClient.connect(mongoUrl+db, function(err, db) {
            if(err) { console.log(err); return; }
            db.collection(collection).insert(insertData, function(err, result) {
                if(err) { console.log(err); return; }
                res.send(_.omit(result.ops[0], '_id'));
                db.close();
            });
        });
    });

    // app.post('/dbUpdate', function(req,res) {
    //     var findName    = JSON.parse('{"name": "'+req.body.name+'"}');
    //         updateData  = JSON.parse('{"$set":{"'+_.keys(req.body)[1]+'":"'+_.values(req.body)[1]+'"}}');
    //     MongoClient.connect(mongoUrl+db, function(err, db) {
    //         if(err) { console.log(err); return; }
    //         db.collection(collection).updateOne(findName, updateData, function(err, result) {
    //             if(err) { console.log(err); return; }
    //             if(result.result.n == 0) {
    //                  res.send('`'+req.body.name+'` not in DB');
    //             } else {
    //                  res.send('`'+req.body.name+'` updated `'+_.keys(req.body)[1]+'` with `'+_.values(req.body)[1]+'`');
    //             }
    //             db.close();
    //         });
    //     });
    // });

};
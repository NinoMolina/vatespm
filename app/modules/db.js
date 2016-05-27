'use strict';
var loki = require('lokijs');
var db = new loki('vatespm.db');

db.loadDatabase({}, function(){
	var users = [{user: 'test', password: 'test'}];

	var comments = [{comment: 'quiere aumento de sueldo', commentDate: '01/05/2016', creationDate: '21/05/2016', pm: 'yosu'},
		        	{comment: 'esta aburrido', commentDate: '02/05/2016', creationDate: '22/05/2016', pm: 'yosu'},
		        	{comment: 'quiere ver los partidos de la champios league', commentDate: '03/05/2016', creationDate: '23/05/2016', pm: 'yosu'}];

	var employees = [{name: 'nino', lastName: 'molina', email: 'lmolina@vates.com', cellular: 987654321, project: 'claro-agenda', pm: 'yosu'},
					 {name: 'jorge', lastName: 'carmona', email: 'jcarmona@vates.com', cellular: 123456789, project: 'claro-agenda', pm: 'yosu'}];

	var projects = [{name: 'claro-agenda', client: 'claro'}];

	db.addCollection('users').insert(users);
	db.addCollection('projects').insert(projects);
	db.addCollection('comments').insert(comments);
	db.addCollection('employees').insert(employees);

	console.log(db.getCollection('comments').data);

	db.saveDatabase();
});

module.exports.db = db;

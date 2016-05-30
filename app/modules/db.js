'use strict';
var loki = require('lokijs');
var db = new loki('vatespm.db');

db.loadDatabase({}, function(){

	var employees = [{user: 'lmolina', password: 'lmolina', name: 'nino', lastName: 'molina', email: 'lmolina@vates.com', cellular: 987654321, pm: 'ezaikoski',
					  role: 'developer',
					  project: {name: 'claro-agenda', client: 'claro'},
					  comments: [{id: 1, comment: 'quiere aumento de sueldo', commentDate: '01/05/2016', creationDate: '21/05/2016', pm: 'ezaikoski'},
		        				 {id: 2, comment: 'esta aburrido', commentDate: '02/05/2016', creationDate: '22/05/2016', pm: 'ezaikoski'},
		        				 {id: 3, comment: 'quiere ver los partidos de la champios league', commentDate: '03/05/2016', creationDate: '23/05/2016', pm: 'ezaikoski'}]},
					 {user: 'jcarmona', password: 'jcarmona', name: 'jorge', lastName: 'carmona', email: 'jcarmona@vates.com', cellular: 123456789, pm: 'ezaikoski',
					  role: 'developer',
					  project: {name: 'claro-agenda', client: 'claro'},
					  comments: [{id: 1, comment: 'quiere aumento de sueldo', commentDate: '01/05/2016', creationDate: '21/05/2016', pm: 'ezaikoski'},
		        				 {id: 2, comment: 'esta aburrido', commentDate: '02/05/2016', creationDate: '22/05/2016', pm: 'ezaikoski'},
		        				 {id: 3, comment: 'quiere ver los partidos de la champios league', commentDate: '03/05/2016', creationDate: '23/05/2016', pm: 'ezaikoski'}]},
		        	 {user: 'gcasanova', password: 'gcasanova', name: 'gabriel', lastName: 'casanova', email: 'gcasanova@vates.com', cellular: 123456789, pm: 'ezaikoski',
					  role: 'developer',
					  project: {name: 'falabella-adesa', client: 'falabella'},
					  comments: [{id: 1, comment: 'quiere aumento de sueldo', commentDate: '01/05/2016', creationDate: '21/05/2016', pm: 'ezaikoski'},
		        				 {id: 2, comment: 'esta aburrido', commentDate: '02/05/2016', creationDate: '22/05/2016', pm: 'ezaikoski'},
		        				 {id: 3, comment: 'quiere ver los partidos de la champios league', commentDate: '03/05/2016', creationDate: '23/05/2016', pm: 'ezaikoski'}]},
		             {user: 'dstillger', password: 'dstillger', name: 'damian', lastName: 'stillger', email: 'dstillger@vates.com', cellular: 123456789, pm: 'ezaikoski',
					  role: 'developer',
					  project: {name: 'gtdmanquehue', client: 'gtdmanquehue'},
					  comments: [{id: 1, comment: 'quiere aumento de sueldo', commentDate: '01/05/2016', creationDate: '21/05/2016', pm: 'ezaikoski'},
		        				 {id: 2, comment: 'esta aburrido', commentDate: '02/05/2016', creationDate: '22/05/2016', pm: 'ezaikoski'},
		        				 {id: 3, comment: 'quiere ver los partidos de la champios league', commentDate: '03/05/2016', creationDate: '23/05/2016', pm: 'ezaikoski'}]},
		             {user: 'lpaolini', password: 'lpaoloini', name: 'lisandro', lastName: 'paolini', email: 'lpaolini@vates.com', cellular: 123456789, pm: 'ezaikoski',
					  role: 'developer',
					  project: {name: 'falabella-seguros', client: 'falabella'},
					  comments: [{id: 1, comment: 'quiere aumento de sueldo', commentDate: '01/05/2016', creationDate: '21/05/2016', pm: 'ezaikoski'},
		        				 {id: 2, comment: 'esta aburrido', commentDate: '02/05/2016', creationDate: '22/05/2016', pm: 'ezaikoski'},
		        				 {id: 3, comment: 'quiere ver los partidos de la champios league', commentDate: '03/05/2016', creationDate: '23/05/2016', pm: 'ezaikoski'}]},
		        	 {user: 'ezaikoski', password: 'ezaikoski', name: 'edgardo', lastName: 'zaikoski', email: 'ezaikoski@vates.com', cellular: 123456789,
					  role: 'pm'}];

	db.addCollection('employees').insert(employees);

	console.log(db.getCollection('employees').data);

	db.saveDatabase();
});

module.exports.db = db;

var db = require('./config/db');
var Cohort = require('./models/cohort');
var User = require('./models/user');

User.remove({})
	.then(function(){
		return Cohort.remove();
	})
	.then(function(){
		return User.create([
			{name:'Phil Lamplugh', email:'philco@ga.com',github:'https://github.com/phlco', role:'instructor' },
			{name:'Kate Wood', email:'katewood611@gmail.com',github:'https://github.com/KateWood', role:'instructor' },
			{name:'Matt Gutierrez', email:'matthew.gutierrez@generalassemb.ly',github:'https://github.com/fatchicken007', role:'instructor' },
			{name:'Matthew Parvinsmith', email:'mrparvinsmith@gmail.com',github:'https://github.com/mrparvinsmith', role:'student' },
			{name:'Christina Regis', email:'christina.freeze@gmail.com',github:'https://github.com/christina-regis', role:'student' },
			{name:'Evan Washington', email:'enavy04@gmail.com',github:'https://github.com/Navyvet1125', role:'student' },
			{name:'Erik Gomez', email:'ego.xiv@gmail.com',github:'https://github.com/egoxiv', role:'instructor', avatar: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg' },
			]);
	})
	.then(function(users){
		var cohort = new Cohort();
		cohort.program ='WDI';
		cohort.campus='SM';
		cohort.number = 22;
		cohort.city='Santa Monica, CA';
    cohort.start = new Date('May 2, 2016');
    cohort.end = new Date('July 22, 2016');
		users.forEach(function(user){
			user.cohort = cohort.id;
			user.save();
			if (user.role==='instructor') cohort.instructors.push(user);
			else if (user.role==='student') cohort.students.push(user);
		});
		return cohort.save();
	})
	.catch(function(err){
		console.log(err);
		return err;
	})
	.then(function(results){
		console.log(results);
		process.exit();
	})
  .then(function(){
    return Cohort.remove();
  })
  .then(function(){
    return User.create([
      {name:'Phil Lamplugh', email:'philco@ga.com',github:'https://github.com/phlco', role:'instructor' },
      {name:'Kate Wood', email:'katewood611@gmail.com',github:'https://github.com/KateWood', role:'instructor' },
      {name:'Matt Gutierrez', email:'matthew.gutierrez@generalassemb.ly',github:'https://github.com/fatchicken007', role:'instructor' },
      {name:'Matt Parvinsmith', email:'mrparvinsmith@gmail.com',github:'https://github.com/mrparvinsmith', role: 'student' },
      {name:'Christina Regis', email:'christina.freeze@gmail.com',github:'https://github.com/christina-regis', ro:'student' },
      {name:'Evan Washington', email:'enavy04@gmail.com',github:'https://github.com/Navyvet1125', role:'student' },
      {name:'Erik Gomez', email:'ego.xiv@gmail.com',github:'https://github.com/egoxiv', role:'student' },
    ]);
  })
  .then(function(users){
    var cohort = new Cohort();
    cohort.program = 'WDI';
    cohort.campus = 'SM';
    cohort.number = 22;
    cohort.city = 'Santa Monica, CA';
    cohort.start = new Date('March 7, 2016');
    cohort.end = new Date('May 27, 2016');
    users.forEach(function(user){
      user.cohort = cohort._id;
      user.save();
      if (user.role==='instructor') cohort.instructors.push(user._id);
      else if (user.role==='student') cohort.students.push(user._id);
    });
    return cohort.save();
  })
  .then(function(){
    var cohort = new Cohort();
    cohort.program = 'WDI';
    cohort.campus = 'SM';
    cohort.number = 23;
    cohort.city = 'Santa Monica, CA';
    return cohort.save();
  })
  .catch(function(err){
    console.log(err);
    return err;
  })
  .then(function(results){
    console.log(results);
    process.exit();
  });

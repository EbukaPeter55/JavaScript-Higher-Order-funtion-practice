

const companies= [
    {name: "Company one", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
	{name: "Company Nine", category: "Retail", start: 1981, end: 1989}, 
	{name: "Company Ten", category: "Auto", start: "2021-04-19", end: "2022-04-22"}, 
	{name: "Company Ten", category: "Auto", start: "2024-04-12", end: "2022-04-22"} 
];


const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// For loop
// for(let i = 0; i < companies.length; i++){
//     console.log(companies[i]);
// }


//ForEach
// companies.forEach(function(company){
// 	console.log(company.name);
// });

							// FILTER
// Filtering through an array using a for loop, Get 21 and older
// let canDrink = [];
// for (let i = 0; i < ages.length; i++){
// 	if(ages[i] >= 21 ){
// 		canDrink.push(ages[i]);

// 	}
// }
// console.log(canDrink);

//filter- Get the people with ages 21 and above should be eligible to drink
// const canDrink = ages.filter(function(age){
// 	if(age >= 21){
// 		return true;
// 	}
// });

// OR using Es6:
const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);

// Filter retail company
// const retailCompanies = companies.filter(function(company){
// 	if(company.category === 'Retail'){
//  return true;
// 	}
// });

// OR using es6
const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);

// Get all the companies in 80s
const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start <= 1990);
console.log(eightiesCompanies);



// Get companies that lasted 10 years or more
const lastedTenYears = companies.filter(company => (company.end - company.start 
	>= 10));
	console.log(lastedTenYears);



//MAP
//map filters an array inorder to form a new array
//Create array of company names
// const companyNames = companies.map((company)=>{
//  return company.name;
// }); 

const testMap = companies.map((company)=>{
	return `${company.name} [${company.start} - ${company.end}]`;
 }); 

// console.log(testMap);

// Get the square of each age
const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);

// Multiply each age in the array by two
const ageTimesTwo = ages.map(age => age * 2);
console.log(ageTimesTwo);

// Get the square of each age and multiply by two
const ageMap  = ages
.map(age => Math.sqrt(age))
.map(age => age * 2);

// console.log(ageMap);

					//SORT
// Sort companies by start year or the earliest-ascending order
// const sortedCompanies = companies.sort(function(c1, c2){
// if(c1.start > c2.start){
// 	return 1;
// }else {
// 	return -1;
// }
// });

// console.log(sortedCompanies);

// OR using es6
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

//Sort ages in ascending order
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);

//Sort ages in descending order
const sortAgesde = ages.sort((a, b) => b - a);
console.log(sortAgesde);

								//REDUCE
// Reduce can be used to add variables inside an Array, and an array of objects
// Get the sum total of all the ages
// Using for loop
// let ageSum = 0;
// for(let i = 0; i < ages.length; i++){
// 	ageSum += ages[i];
// }
// console.log(ageSum);

// Using reduce
const ageSum = ages.reduce((total, age) => total + age,
 0);
console.log(ageSum);

// Get total years for all countries- i.e get all the years range or length and sum all of them.
const totalYears = companies.reduce((total, company)=> total + (company.end - company.start), 0);
console.log(totalYears);

							// COMBINED METHODS
	// Multiply the ages by 2, filter them with those that are 40 and above, sort them from lowest to highest, and finally 
	// add all of them together
	const combined = ages
	.map(age => age * 2)
	.filter(age => age >= 40)
	.sort ((a, b)=> a - b)
	.reduce((a, b) => a + b, 0);
	console.log(combined);

	const events = [
		{name: "Event one", category: "Auto", start: "2021-04-19", end: "2022-04-22"}, 
		{name: "Event two", category: "Auto", start: "2024-04-12", end: "2026-04-22"},
		{name: "Event one", category: "Auto", start: "2028-04-19", end: "2030-04-22"}, 
		{name: "Event two", category: "Auto", start: "2032-04-12", end: "2034-04-22"}  
	];

		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();
		today = yyyy + '-' + mm + '-' + dd;  
		document.write(today);
			console.log(today);

	const upcomingEvents = events.filter(event => event.start >= today);
	console.log(upcomingEvents);
	const totalupComingEvents = upcomingEvents.length;
	console.log(totalupComingEvents);
	// const dates = events.map(event => new Date(event.start).getTime());					
	// console.log(dates);
	// const comb = dates.length;
	// console.log(comb);


// const future = events.filter(event => event.start >= today );
               
// console.log(future);
 //Callback Function


// let persons =[
//     {firstName: "Minal",lastName: "Ahmed"},
//     {firstName: "Tom", lastName: "Ahmed"}

// ];

// function creatPerson(person){
//     setTimeout(function(){
//         persons.push(person)
//     })
// }




// Promises
// .then
// let persons = [
//     { firstName: "Simanta", lastName: "Paul" },
//     { firstName: "Fazle", lastName: "Rahat" }
// ]

// function createPerson(person) {
//     let prom = new Promise(function (resolve, reject) {
//         persons.push(person);
//         let error = false;

//         if (!error) {
//             resolve();
//         }
//         else {
//             reject('Error!: Something Wrong!');
//         }

//     });
//     return prom;
// }

// function getPerson() {
//     setTimeout(function () {
//         let output = '';
//         persons.forEach(function (person) {
//             output += `<li>${person.firstName} ${person.lastName}</li>`
//         });
//         document.getElementById('output').innerHTML = output;
//     }, 500);
// }

// createPerson({ firstName: "Rony", lastName: "Chy" })
//     .then(getPerson)
//     .catch(function (err) {
//         console.log(err);
//     });
    
//Fetch API

document.getElementById('btn').addEventListener('click',getData)


function getData() {
    fetch('add.text')
        .then(res => res.text())
        .then(data => { console.log(data); })
        .catch(err => {console.log(err); })
}
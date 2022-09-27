// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let idDiv = document.querySelector('#output');


// for( i = 0; i < days.length ; i++){
//     let day = days[i];
//     let createParagrapg = document.createElement('p');
//     createParagrapg.textContent = day;
//     idDiv.append(createParagrapg)
// }

let days = [
    { name: "Sunday", isWorkDay: false },
    { name: "Monday", isWorkDay: true },
    { name: "Tuesday", isWorkDay: true },
    { name: "Wednesday", isWorkDay: true },
    { name: "Thursday", isWorkDay: true },
    { name: "Friday", isWorkDay: true },
    { name: "Saturday", isWorkDay: false }
];

let weekDays = document.querySelector('.weekDays');
let weekend = document.querySelector('.weekends');


function createParagrapg(text) {
    let elem = document.createElement('p');
    elem.innerHTML = text;
    return elem;
}

for(day of days) {
    if(day.isWorkDay) {
        weekDays.append(createParagrapg(day.name));
    }
    else{
        weekend.append(createParagrapg(day.name))
    }
}


// let divElement = document.querySelector('div');
// divElement.classList = 'DIV';
// divElement.classList += ' error';
'use strict';

const hours = ['6am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',]
function randomNumber(min, max) { return Math.floor(Math.random() * (max - min)) + min; }










let cities = [];

let city1 = new Cookies('Seattle', 65, 23, 6.3);
let city2 = new Cookies('Tokyo', 24, 3, 1.2);
let city3 = new Cookies('Dubai', 38, 11, 1.2);
let city4 = new Cookies('Paris', 38, 20, 2.3);
let city5 = new Cookies('Lima', 16, 2, 4.6);






function Cookies(localName, maxCoustomer, minCoustomer, avgCookies) {

    this.localName = localName;
    this.maxCoustomer = maxCoustomer;
    this.minCoustomer = minCoustomer;
    this.avgCookies = avgCookies;
    this.randomcoustmer = [];
    this.multiplyrandomcoustmer = [];
    this.total = 0;
    cities.push(this);


}

Cookies.prototype.GitRandomcoustmer = function () {
    for (let i = 0; i < hours.length; i++) { this.randomcoustmer.push(randomNumber(this.minCoustomer, this.maxCoustomer)); }
    console.log(this.randomcoustmer);
}

Cookies.prototype.GitMultiplyrandomcoustmer = function () {
    for (let i = 0; i < this.randomcoustmer.length; i++) { this.multiplyrandomcoustmer.push(Math.floor(this.randomcoustmer[i] * this.avgCookies)); }
    console.log(this.multiplyrandomcoustmer);
}

Cookies.prototype.gitTotal = function () {
    for (let i = 0; i < this.multiplyrandomcoustmer.length; i++) {

        this.total = this.total + this.multiplyrandomcoustmer[i]
    }
}

// 








let parent = document.getElementById('parent');
//  let h3 =document.createElement('h3');
// // parent.appendChild(h3);


let tableElement = document.createElement('table');
parent.appendChild(tableElement);


function makingHeader() {


    let headingRow = document.createElement('tr');
    tableElement.appendChild(headingRow);

    let firstth = document.createElement('th');
        headingRow.appendChild(firstth);
        firstth.textContent = 'names';


    for (let i = 0; i < hours.length; i++) {
        let elements = document.createElement('th');
        headingRow.appendChild(elements);
        elements.textContent = hours[i]
    }
    let finalth = document.createElement('th');
        headingRow.appendChild(finalth);
        finalth.textContent = 'Daily Location Total';
}
makingHeader();


// function finallRow() {
//     let footer= document.createElement('footer');
//     tableElement.appendChild(footer);
//     let row= footer.insertRow(0)


    
// }











Cookies.prototype.rander= function () {

    let shopRow = document.createElement('tr');
    tableElement.appendChild(shopRow);

    let firstd = document.createElement('td');
    shopRow.appendChild(firstd);
    firstd.textContent = this.localName;

    
   
    
  

    for (let i= 0; i< hours.length; i++) {
        // multiplyrandomcoustmer
        let elements = document.createElement('td');
        shopRow.appendChild(elements);
        elements.textContent =this.multiplyrandomcoustmer[i]
        
        
    }
    let finaltd = document.createElement('td');
        shopRow.appendChild(finaltd);
        finaltd.textContent = this.total;


        

}


    

for (let i = 0; i < cities.length; i++) {
    cities[i].GitRandomcoustmer();
    cities[i].GitMultiplyrandomcoustmer();
    cities[i].gitTotal();
    cities[i].rander();
    
}









    // let data=document.createElement('tr');
    // tableElement.appendChild(data);}

//    let td1=document.createElement('td');
//    data.appendChild(td1);
//  td1.textContent=Seattle.GitMultiplyrandomcoustmer;}




















// let Seattle = {
//     localName:'Seattle',
//     maxCoustomer: 23,
//     minCoustomer: 65,
//     avgCookies: 6.3,
//     randomcoustmer: [],
//     multiplyrandomcoustmer: [],
//     total: 0,











    // },


    //  rander: function () {
    //      let parent = document.getElementById('parent');
    //      let h3 =document.createElement('h3');
    //       parent.appendChild(h3);
    //       h3.textContent=(`${this.localName}`);



    //      let ul = document.createElement('ul');
    //      parent.appendChild(ul);

    //     //  Seattle.appendChild(ul)

    //     for (let i = 0; i < hours.length; i++) {


    //         let li = document.createElement('li');
    //         ul.appendChild(li);

    //         li.textContent = (` ${hours[i]}:${Seattle.multiplyrandomcoustmer[i]} cookies 
    //                   `);
    //         console.log(li); }

    //          let totalli =document.createElement('li');
    //          ul.appendChild(totalli);
    //          totalli.textContent=(`total: ${this.total}`)

    // },





// Seattle.GitRandomcoustmer();
// Seattle.GitMultiplyrandomcoustmer();
// Seattle.gitTotal();
// Seattle.rander();
// console.log(Seattle);













// let Tokyo = {
//     localName:'Tokyo',
//     maxCoustomer: 24,
//     minCoustomer:3,
//     avgCookies: 1.2,
//     randomcoustmer: [],
//     multiplyrandomcoustmer: [],
//     total: 0,




//     GitRandomcoustmer: function () {
//         for (let i = 0; i < hours.length; i++) { this.randomcoustmer.push(randomNumber(this.minCoustomer, this .  maxCoustomer)); }
//         console.log(this.randomcoustmer);
//     },



//     GitMultiplyrandomcoustmer: function () {
//         for (let i = 0; i < this.randomcoustmer.length; i++) { this.multiplyrandomcoustmer.push(Math.floor(this.randomcoustmer[i] * this.avgCookies)); }
//         console.log(this.multiplyrandomcoustmer);
//     },




//     gitTotal: function () {
//         for (let i = 0; i < this. multiplyrandomcoustmer.length; i++) {

//             this.total = this.total + this. multiplyrandomcoustmer[i]
//         }
//     },


//      rander: function () {
//          let parent = document.getElementById('parent');
//          let h3 =document.createElement('h3');
//          parent.appendChild(h3);
//           h3.textContent=(`${this.localName}`);



//          let ul = document.createElement('ul');
//          parent.appendChild(ul);

//         //  Seattle.appendChild(ul)

//         for (let i = 0; i < hours.length; i++) {


//             let li = document.createElement('li');
//             ul.appendChild(li);

//             li.textContent = (` ${hours[i]}:${Tokyo.multiplyrandomcoustmer[i]} cookies 
//                       `);
//             console.log(li); }

//            let totalli =document.createElement('li');
//             ul.appendChild(totalli);
//              totalli.textContent=(`total: ${this.total}`)

//     },


// }


// Tokyo.GitRandomcoustmer();
// Tokyo.GitMultiplyrandomcoustmer();
// Tokyo.gitTotal();
// Tokyo.rander();
// console.log(Tokyo);













// let Dubai = {	

//     localName:'Dubai',
//     maxCoustomer: 38,
//     minCoustomer: 11,
//     avgCookies: 1.2,
//     randomcoustmer: [],
//     multiplyrandomcoustmer: [],
//     total: 0,




//     GitRandomcoustmer: function () {
//         for (let i = 0; i < hours.length; i++) { this.randomcoustmer.push(randomNumber(this.minCoustomer, this .  maxCoustomer)); }
//         console.log(this.randomcoustmer);
//     },



//     GitMultiplyrandomcoustmer: function () {
//         for (let i = 0; i < this.randomcoustmer.length; i++) { this.multiplyrandomcoustmer.push(Math.floor(this.randomcoustmer[i] * this.avgCookies)); }
//         console.log(this.multiplyrandomcoustmer);
//     },




//     gitTotal: function () {
//         for (let i = 0; i < this. multiplyrandomcoustmer.length; i++) {

//             this.total = this.total + this. multiplyrandomcoustmer[i]
//         }
//     },


//      rander: function () {
//          let parent = document.getElementById('parent');
//           let h3 =document.createElement('h3');
//           parent.appendChild(h3);
//           h3.textContent=(`${this.localName}`);



//          let ul = document.createElement('ul');
//          parent.appendChild(ul);

//         //  Seattle.appendChild(ul)

//         for (let i = 0; i < hours.length; i++) {


//             let li = document.createElement('li');
//             ul.appendChild(li);

//             li.textContent = (` ${hours[i]}:${Dubai.multiplyrandomcoustmer[i]} cookies 
//                       `);
//             console.log(li); }

//              let totalli =document.createElement('li');
//              ul.appendChild(totalli);
//               totalli.textContent=(`total: ${this.total}`)

//     },


// }


// Dubai.GitRandomcoustmer();
// Dubai.GitMultiplyrandomcoustmer();
// Dubai.gitTotal();
// Dubai.rander();
// console.log(Dubai);











// let  Paris= {
//     localName:'Paris',
//     maxCoustomer: 38,
//     minCoustomer:20,
//     avgCookies: 2.3,
//     randomcoustmer: [],
//     multiplyrandomcoustmer: [],
//     total: 0,




//     GitRandomcoustmer: function () {
//         for (let i = 0; i < hours.length; i++) { this.randomcoustmer.push(randomNumber(this.minCoustomer, this .  maxCoustomer)); }
//         console.log(this.randomcoustmer);
//     },



//     GitMultiplyrandomcoustmer: function () {
//         for (let i = 0; i < this.randomcoustmer.length; i++) { this.multiplyrandomcoustmer.push(Math.floor(this.randomcoustmer[i] * this.avgCookies)); }
//         console.log(this.multiplyrandomcoustmer);
//     },




//     gitTotal: function () {
//         for (let i = 0; i < this. multiplyrandomcoustmer.length; i++) {

//             this.total = this.total + this. multiplyrandomcoustmer[i]
//         }
//     },


//      rander: function () {
//          let parent = document.getElementById('parent');
//          let h3 =document.createElement('h3');
//           parent.appendChild(h3);
//           h3.textContent=(`${this.localName}`);



//          let ul = document.createElement('ul');
//          parent.appendChild(ul);

//         //  Seattle.appendChild(ul)

//         for (let i = 0; i < hours.length; i++) {


//             let li = document.createElement('li');
//             ul.appendChild(li);

//             li.textContent = (` ${hours[i]}:${Paris.multiplyrandomcoustmer[i]} cookies 
//                       `);
//             console.log(li); }

//              let totalli =document.createElement('li');
//              ul.appendChild(totalli);
//              totalli.textContent=(`total: ${this.total}`)

//     },


// }


// Paris.GitRandomcoustmer();
// Paris.GitMultiplyrandomcoustmer();
// Paris.gitTotal();
// Paris.rander();
// console.log(Paris);






















// let  Lima= {	
//     localName:'Lima',
//     maxCoustomer: 16,
//     minCoustomer:2,
//     avgCookies: 4.6,
//     randomcoustmer: [],
//     multiplyrandomcoustmer: [],
//     total: 0,




//     GitRandomcoustmer: function () {
//         for (let i = 0; i < hours.length; i++) { this.randomcoustmer.push(randomNumber(this.minCoustomer, this .  maxCoustomer)); }
//         console.log(this.randomcoustmer);
//     },



//     GitMultiplyrandomcoustmer: function () {
//         for (let i = 0; i < this.randomcoustmer.length; i++) { this.multiplyrandomcoustmer.push(Math.floor(this.randomcoustmer[i] * this.avgCookies)); }
//         console.log(this.multiplyrandomcoustmer);
//     },




//     gitTotal: function () {
//         for (let i = 0; i < this. multiplyrandomcoustmer.length; i++) {

//             this.total = this.total + this. multiplyrandomcoustmer[i]
//         }
//     },


//      rander: function () {
//          let parent = document.getElementById('parent');
//         let h3 =document.createElement('h3');
//           parent.appendChild(h3);
//           h3.textContent=(`${this.localName}`);



//          let ul = document.createElement('ul');
//          parent.appendChild(ul);

//         //   Seattle.appendChild(ul)

//         for (let i = 0; i < hours.length; i++) {


//             let li = document.createElement('li');
//             ul.appendChild(li);

//             li.textContent = (` ${hours[i]}:${Lima.multiplyrandomcoustmer[i]} cookies 
//                       `);
//             console.log(li); }

//              let totalli =document.createElement('li');
//              ul.appendChild(totalli);
//              totalli.textContent=(`total: ${this.total}`)

//     },


// }


// Lima.GitRandomcoustmer();
// Lima.GitMultiplyrandomcoustmer();
// Lima.gitTotal();
// Lima.rander();
// console.log(Lima);










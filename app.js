'use strict';

const hours = ['6am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',]
function randomNumber(min, max) { return Math.floor(Math.random() * (max - min)) + min; }




let Seattle = {
    localName:'Seattle',
    maxCoustomer: 23,
    minCoustomer: 65,
    avgCookies: 6.3,
    randomcoustmer: [],
    multiplyrandomcoustmer: [],
    total: 0,
   



    GitRandomcoustmer: function () {
        for (let i = 0; i < hours.length; i++) { this.randomcoustmer.push(randomNumber(this.minCoustomer, this .  maxCoustomer)); }
        console.log(this.randomcoustmer);
    },



    GitMultiplyrandomcoustmer: function () {
        for (let i = 0; i < this.randomcoustmer.length; i++) { this.multiplyrandomcoustmer.push(Math.floor(this.randomcoustmer[i] * this.avgCookies)); }
        console.log(this.multiplyrandomcoustmer);
    },




    gitTotal: function () {
        for (let i = 0; i < this. multiplyrandomcoustmer.length; i++) {

            this.total = this.total + this. multiplyrandomcoustmer[i]
        }
    },


     rander: function () {
         let parent = document.getElementById('parent');
         let h3 =document.createElement('h3');
          parent.appendChild(h3);
          h3.textContent=(`${this.localName}`);

        

         let ul = document.createElement('ul');
         parent.appendChild(ul);

        //  Seattle.appendChild(ul)

        for (let i = 0; i < hours.length; i++) {

            
            let li = document.createElement('li');
            ul.appendChild(li);

            li.textContent = (` ${hours[i]}:${Seattle.multiplyrandomcoustmer[i]} cookies 
                      `);
            console.log(li); }
            
             let totalli =document.createElement('li');
             ul.appendChild(totalli);
             totalli.textContent=(`total: ${this.total}`)

    },


}


Seattle.GitRandomcoustmer();
Seattle.GitMultiplyrandomcoustmer();
Seattle.gitTotal();
Seattle.rander();
console.log(Seattle);













let Tokyo = {
    localName:'Tokyo',
    maxCoustomer: 24,
    minCoustomer:3,
    avgCookies: 1.2,
    randomcoustmer: [],
    multiplyrandomcoustmer: [],
    total: 0,
   



    GitRandomcoustmer: function () {
        for (let i = 0; i < hours.length; i++) { this.randomcoustmer.push(randomNumber(this.minCoustomer, this .  maxCoustomer)); }
        console.log(this.randomcoustmer);
    },



    GitMultiplyrandomcoustmer: function () {
        for (let i = 0; i < this.randomcoustmer.length; i++) { this.multiplyrandomcoustmer.push(Math.floor(this.randomcoustmer[i] * this.avgCookies)); }
        console.log(this.multiplyrandomcoustmer);
    },




    gitTotal: function () {
        for (let i = 0; i < this. multiplyrandomcoustmer.length; i++) {

            this.total = this.total + this. multiplyrandomcoustmer[i]
        }
    },


     rander: function () {
         let parent = document.getElementById('parent');
         let h3 =document.createElement('h3');
         parent.appendChild(h3);
          h3.textContent=(`${this.localName}`);

        

         let ul = document.createElement('ul');
         parent.appendChild(ul);

        //  Seattle.appendChild(ul)

        for (let i = 0; i < hours.length; i++) {

            
            let li = document.createElement('li');
            ul.appendChild(li);

            li.textContent = (` ${hours[i]}:${Tokyo.multiplyrandomcoustmer[i]} cookies 
                      `);
            console.log(li); }
            
           let totalli =document.createElement('li');
            ul.appendChild(totalli);
             totalli.textContent=(`total: ${this.total}`)

    },


}


Tokyo.GitRandomcoustmer();
Tokyo.GitMultiplyrandomcoustmer();
Tokyo.gitTotal();
Tokyo.rander();
console.log(Tokyo);













let Dubai = {	
   
    localName:'Dubai',
    maxCoustomer: 38,
    minCoustomer: 11,
    avgCookies: 1.2,
    randomcoustmer: [],
    multiplyrandomcoustmer: [],
    total: 0,
   



    GitRandomcoustmer: function () {
        for (let i = 0; i < hours.length; i++) { this.randomcoustmer.push(randomNumber(this.minCoustomer, this .  maxCoustomer)); }
        console.log(this.randomcoustmer);
    },



    GitMultiplyrandomcoustmer: function () {
        for (let i = 0; i < this.randomcoustmer.length; i++) { this.multiplyrandomcoustmer.push(Math.floor(this.randomcoustmer[i] * this.avgCookies)); }
        console.log(this.multiplyrandomcoustmer);
    },




    gitTotal: function () {
        for (let i = 0; i < this. multiplyrandomcoustmer.length; i++) {

            this.total = this.total + this. multiplyrandomcoustmer[i]
        }
    },


     rander: function () {
         let parent = document.getElementById('parent');
          let h3 =document.createElement('h3');
          parent.appendChild(h3);
          h3.textContent=(`${this.localName}`);

        

         let ul = document.createElement('ul');
         parent.appendChild(ul);

        //  Seattle.appendChild(ul)

        for (let i = 0; i < hours.length; i++) {

            
            let li = document.createElement('li');
            ul.appendChild(li);

            li.textContent = (` ${hours[i]}:${Dubai.multiplyrandomcoustmer[i]} cookies 
                      `);
            console.log(li); }
            
             let totalli =document.createElement('li');
             ul.appendChild(totalli);
              totalli.textContent=(`total: ${this.total}`)

    },


}


Dubai.GitRandomcoustmer();
Dubai.GitMultiplyrandomcoustmer();
Dubai.gitTotal();
Dubai.rander();
console.log(Dubai);











let  Paris= {
    localName:'Paris',
    maxCoustomer: 38,
    minCoustomer:20,
    avgCookies: 2.3,
    randomcoustmer: [],
    multiplyrandomcoustmer: [],
    total: 0,
   



    GitRandomcoustmer: function () {
        for (let i = 0; i < hours.length; i++) { this.randomcoustmer.push(randomNumber(this.minCoustomer, this .  maxCoustomer)); }
        console.log(this.randomcoustmer);
    },



    GitMultiplyrandomcoustmer: function () {
        for (let i = 0; i < this.randomcoustmer.length; i++) { this.multiplyrandomcoustmer.push(Math.floor(this.randomcoustmer[i] * this.avgCookies)); }
        console.log(this.multiplyrandomcoustmer);
    },




    gitTotal: function () {
        for (let i = 0; i < this. multiplyrandomcoustmer.length; i++) {

            this.total = this.total + this. multiplyrandomcoustmer[i]
        }
    },


     rander: function () {
         let parent = document.getElementById('parent');
         let h3 =document.createElement('h3');
          parent.appendChild(h3);
          h3.textContent=(`${this.localName}`);

        

         let ul = document.createElement('ul');
         parent.appendChild(ul);

        //  Seattle.appendChild(ul)

        for (let i = 0; i < hours.length; i++) {

            
            let li = document.createElement('li');
            ul.appendChild(li);

            li.textContent = (` ${hours[i]}:${Paris.multiplyrandomcoustmer[i]} cookies 
                      `);
            console.log(li); }
            
             let totalli =document.createElement('li');
             ul.appendChild(totalli);
             totalli.textContent=(`total: ${this.total}`)

    },


}


Paris.GitRandomcoustmer();
Paris.GitMultiplyrandomcoustmer();
Paris.gitTotal();
Paris.rander();
console.log(Paris);






















let  Lima= {	
    localName:'Lima',
    maxCoustomer: 16,
    minCoustomer:2,
    avgCookies: 4.6,
    randomcoustmer: [],
    multiplyrandomcoustmer: [],
    total: 0,
   



    GitRandomcoustmer: function () {
        for (let i = 0; i < hours.length; i++) { this.randomcoustmer.push(randomNumber(this.minCoustomer, this .  maxCoustomer)); }
        console.log(this.randomcoustmer);
    },



    GitMultiplyrandomcoustmer: function () {
        for (let i = 0; i < this.randomcoustmer.length; i++) { this.multiplyrandomcoustmer.push(Math.floor(this.randomcoustmer[i] * this.avgCookies)); }
        console.log(this.multiplyrandomcoustmer);
    },




    gitTotal: function () {
        for (let i = 0; i < this. multiplyrandomcoustmer.length; i++) {

            this.total = this.total + this. multiplyrandomcoustmer[i]
        }
    },


     rander: function () {
         let parent = document.getElementById('parent');
        let h3 =document.createElement('h3');
          parent.appendChild(h3);
          h3.textContent=(`${this.localName}`);

        

         let ul = document.createElement('ul');
         parent.appendChild(ul);

        //   Seattle.appendChild(ul)

        for (let i = 0; i < hours.length; i++) {

            
            let li = document.createElement('li');
            ul.appendChild(li);

            li.textContent = (` ${hours[i]}:${Lima.multiplyrandomcoustmer[i]} cookies 
                      `);
            console.log(li); }
            
             let totalli =document.createElement('li');
             ul.appendChild(totalli);
             totalli.textContent=(`total: ${this.total}`)

    },


}


Lima.GitRandomcoustmer();
Lima.GitMultiplyrandomcoustmer();
Lima.gitTotal();
Lima.rander();
console.log(Lima);






















































































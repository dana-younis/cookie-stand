'use strict';


let hours = ['6am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',]
function randomNumber(min, max) { return Math.floor(Math.random() * (max - min)) + min; }




let Seattle = {
    maxSeattle: 23,
    minSeattle: 65,
    avgSeattle: 6.3,
    randomcoustmerSeattle: [],
    multiplyrandomcoustmerSeattle: [],
    totalSeattle: 0,
    list: [],



    GitRandomcoustmerSeattle: function () {
        for (let i = 0; i < hours.length; i++) { this.randomcoustmerSeattle.push(randomNumber(this.minSeattle, this.maxSeattle)); }
        console.log(this.randomcoustmerSeattle);
    },



    GitMultiplyrandomcoustmerSeattle: function () {
        for (let i = 0; i < this.randomcoustmerSeattle.length; i++) { this.multiplyrandomcoustmerSeattle.push(Math.floor(this.randomcoustmerSeattle[i] * this.avgSeattle)); }
        console.log(this.multiplyrandomcoustmerSeattle);
    },




    gitTotalSeattle: function () {
        for (let i = 0; i < this.randomcoustmerSeattle.length; i++) {

            this.totalSeattle = this.totalSeattle + this.randomcoustmerSeattle[i]
        }
    },


    gitList: function () {

        let ul = document.createElement('ul');

        //  Seattle.appendChild(ul)

        for (let i = 0; i < hours.length; i++) {

            // if (i=13){

            //     console.log(Seattle.li.textContent=(`total ${Seattle.totalSeattle}`));
            // }
            // else {
            let li = document.createElement('li');
            ul.appendChild(li);

            li.textContent = (` ${hours[i]}:${Seattle.multiplyrandomcoustmerSeattle[i]} cookies 
                      `);
            console.log(li);



        }

    },


}


Seattle.GitRandomcoustmerSeattle();
Seattle.GitMultiplyrandomcoustmerSeattle();
Seattle.gitTotalSeattle();
Seattle.gitList();
console.log(Seattle);














let tokyo  = {
    maxTokyo: 24,
    minTokyo: 3,
    avgTokyo: 1.2,
    randomcoustmerTokyo: [],
    multiplyrandomcoustmerTokyo: [],
    totalTokyo: 0,
    list: [],



    GitRandomcoustmerTokyo: function () {
        for (let i = 0; i < hours.length; i++) { this.randomcoustmerTokyo.push(randomNumber(this.minTokyo, this.maxTokyo)); }
        console.log(this.randomcoustmerTokyo);
    },



    GitMultiplyrandomcoustmerTokyo: function () {
        for (let i = 0; i < this.randomcoustmerTokyo.length; i++) { this.multiplyrandomcoustmerTokyo.push(Math.floor(this.randomcoustmerTokyo[i] * this.avgTokyo)); }
        console.log(this.multiplyrandomcoustmerTokyo);
    },




    gitTotalTokyo: function () {
        for (let i = 0; i < this.randomcoustmerTokyo.length; i++) {

            this.totalTokyo = this.totalTokyo + this.randomcoustmerTokyo[i]
        }
    },


    gitList: function () {

        let ul = document.createElement('ul');

        //  Seattle.appendChild(ul)

        for (let i = 0; i < hours.length; i++) {

            // if (i=13){

            //     console.log(Seattle.li.textContent=(`total ${Seattle.totalSeattle}`));
            // }
            // else {
            let li = document.createElement('li');
            ul.appendChild(li);

            li.textContent = (` ${hours[i]}:${tokyo.multiplyrandomcoustmerTokyo[i]} cookies 
                      `);
            console.log(li);



        }

    },


}


tokyo.GitRandomcoustmerTokyo();
tokyo.GitMultiplyrandomcoustmerTokyo();
tokyo.gitTotalTokyo();
tokyo.gitList();
console.log(tokyo);





















let Dubai  = {
    maxDubai: 38,
    minDubai: 11,
    avgDubai: 3.7,
    randomcoustmerDubai: [],
    multiplyrandomcoustmerDubai: [],
    totalDubai: 0,
    list: [],



    GitRandomcoustmerDubai: function () {
        for (let i = 0; i < hours.length; i++) { this.randomcoustmerDubai.push(randomNumber(this.minDubai, this.maxDubai)); }
        console.log(this.randomcoustmerDubai);
    },



    GitMultiplyrandomcoustmerDubai: function () {
        for (let i = 0; i < this.randomcoustmerDubai.length; i++) { this.multiplyrandomcoustmerDubai.push(Math.floor(this.randomcoustmerDubai[i] * this.avgDubai)); }
        console.log(this.multiplyrandomcoustmerDubai);
    },




    gitTotalDubai: function () {
        for (let i = 0; i < this.randomcoustmerDubai.length; i++) {

            this.totalDubai = this.totalDubai + this.randomcoustmerDubai[i]
        }
    },


    gitList: function () {

        let ul = document.createElement('ul');

        //  Seattle.appendChild(ul)

        for (let i = 0; i < hours.length; i++) {

            // if (i=13){

            //     console.log(Seattle.li.textContent=(`total ${Seattle.totalSeattle}`));
            // }
            // else {
            let li = document.createElement('li');
            ul.appendChild(li);

            li.textContent = (` ${hours[i]}:${Dubai.multiplyrandomcoustmerDubai[i]} cookies 
                      `);
            console.log(li);



        }

    },


}


Dubai.GitRandomcoustmerDubai();
Dubai.GitMultiplyrandomcoustmerDubai();
Dubai.gitTotalDubai();
Dubai.gitList();
console.log(Dubai);





















let  Paris = {
    maxParis: 38,
    minParis: 20,
    avgParis: 2.3,
    randomcoustmerParis: [],
    multiplyrandomcoustmerParis: [],
    totalParis: 0,
    list: [],



    GitRandomcoustmerParis: function () {
        for (let i = 0; i < hours.length; i++) { this.randomcoustmerParis.push(randomNumber(this.minParis, this.maxParis)); }
        console.log(this.randomcoustmerParis);
    },



    GitMultiplyrandomcoustmerParis: function () {
        for (let i = 0; i < this.randomcoustmerParis.length; i++) { this.multiplyrandomcoustmerParis.push(Math.floor(this.randomcoustmerParis[i] * this.avgParis)); }
        console.log(this.multiplyrandomcoustmerParis);
    },




    gitTotalParis: function () {
        for (let i = 0; i < this.randomcoustmerParis.length; i++) {

            this.totalParis = this.totalParis + this.randomcoustmerParis[i]
        }
    },


    gitList: function () {

        let ul = document.createElement('ul');

        //  Seattle.appendChild(ul)

        for (let i = 0; i < hours.length; i++) {

            // if (i=13){

            //     console.log(Seattle.li.textContent=(`total ${Seattle.totalSeattle}`));
            // }
            // else {
            let li = document.createElement('li');
            ul.appendChild(li);

            li.textContent = (` ${hours[i]}:${Paris.multiplyrandomcoustmerParis[i]} cookies 
                      `);
            console.log(li);



        }

    },


}


Paris.GitRandomcoustmerParis();
Paris.GitMultiplyrandomcoustmerParis();
Paris.gitTotalParis();
Paris.gitList();
console.log(Paris);





















let  Lima = {
    maxLima:16,
    minLima: 2,
    avgLima: 4.6,
    randomcoustmerLima: [],
    multiplyrandomcoustmerLima: [],
    totalLima: 0,
    list: [],



    GitRandomcoustmerLimas: function () {
        for (let i = 0; i < hours.length; i++) { this.randomcoustmerLima.push(randomNumber(this.minLima, this.maxLima)); }
        console.log(this.randomcoustmerLima);
    },



    GitMultiplyrandomcoustmerLima: function () {
        for (let i = 0; i < this.randomcoustmerLima.length; i++) { this.multiplyrandomcoustmerLima.push(Math.floor(this.randomcoustmerLima[i] * this.avgLima)); }
        console.log(this.multiplyrandomcoustmerLima);
    },




    gitTotalLima: function () {
        for (let i = 0; i < this.randomcoustmerLima.length; i++) {

            this.totalLima = this.totalLima + this.randomcoustmerLima[i]
        }
    },


    gitList: function () {

        let ul = document.createElement('ul');

        //  Seattle.appendChild(ul)

        for (let i = 0; i < hours.length; i++) {

            // if (i=13){

            //     console.log(Seattle.li.textContent=(`total ${Seattle.totalSeattle}`));
            // }
            // else {
            let li = document.createElement('li');
            ul.appendChild(li);

            li.textContent = (` ${hours[i]}:${Lima.multiplyrandomcoustmerLima[i]} cookies 
                      `);
            console.log(li);



        }

    },


}


Lima.GitRandomcoustmerLimas();
Lima.GitMultiplyrandomcoustmerLima();
Lima.gitTotalLima();
Lima.gitList();
console.log(Lima);



































































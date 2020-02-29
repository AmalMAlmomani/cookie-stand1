'use strict'

var hours = ['6:00am', '7:00am', ' 8:00am ', ' 9:00am ', ' 10:00am ', ' 11:00am ', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var shops = [];

function Shop(location, minCustomer, maxCustomer, Avg) {
    this.location = location;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.Avg = Avg;
    this.customer = [];
    this.cookies = [];
    this.sum = 0;
    shops.push(this);


}



Shop.prototype.avgCustomer = function () {
    for (var i = 0; i < hours.length; i++) {
        this.customer.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);
    }
}

Shop.prototype.cookiesRandom = function () {
    for (var j = 0; j < hours.length; j++) {
        this.cookies.push(Math.floor(this.customer[j] * this.Avg));

    }
}




Shop.prototype.cookiesSum = function () {
    var sumation = 0;
    for (var i = 0; i < this.cookies.length; i++) {
        sumation += this.cookies[i];

    }
    this.sum = sumation;
    console.log(this.sum)
    return this.sum;
}





var tableE1 = document.createElement('table');
var container = document.getElementById('sales');
container.appendChild(tableE1);
var trE1 = document.createElement('tr');
tableE1.appendChild(trE1);
var thE1 = document.createElement('th');
trE1.appendChild(thE1);

Shop.prototype.render = function () {

    //thE1.textContent = myShop.ShopObj;
    // var trE5 = document.createElement('tr');
    // tableE1.appendChild(trE5);
    // var tdE7 = document.createElement('td');
    // trE5.appendChild(tdE7);
    // tdE7.textContent = `${myShop.ShopObj}`;

}

function TableData() {

    for (var d = 0; d < shops.length; d++) {
        var trE3 = document.createElement('tr');
        tableE1.appendChild(trE3);
        var tdE1 = document.createElement('td');
        tableE1.appendChild(tdE1);
        tdE1.textContent = shops[d].location;
        /////////////



        for (var c = 0; c < hours.length; c++) {
            var tdE2 = document.createElement('td');
            tableE1.appendChild(tdE2);
            tdE2.textContent = shops[d].cookies[c];



        }
        var tdE3 = document.createElement('td');
        tableE1.appendChild(tdE3);
        tdE3.textContent = shops[d].sum;
    }
}

function TableHeader() {
    var trE2 = document.createElement('tr');
    tableE1.appendChild(trE2);
    var thE2 = document.createElement('th');
    trE2.appendChild(thE2);
    //thE2.textContent = `..............`;


    for (var h = 0; h < hours.length; h++) {
        thE2 = document.createElement('th');
        thE2.textContent = hours[h];
        trE2.appendChild(thE2);

    }

    var thE3 = document.createElement('th');
    thE3.textContent = `Daily Location Total`;
    trE2.appendChild(thE3);
    tableE1.appendChild(trE2);


}


function TableFooter() {

    var trE3 = document.createElement('tr');
    tableE1.appendChild(trE3);
    var tdE4 = document.createElement('td');
    trE3.appendChild(tdE4);
    tdE4.textContent = 'Totals';
    tableE1.appendChild(trE3);

    ///////////////////////



    // var trE5 = document.createElement('tr');
    // tableE1.appendChild(trE5);
    // var tdE7 = document.createElement('td');
    // trE5.appendChild(tdE7);
    // tdE7.textContent = `${Object.shop6}`;


    ////////////////////////////////////////////////




    /////////////////////

    var y = 0;
    var result = 0;
    for (var f = 0; f < hours.length; f++) {
        var tdE4 = document.createElement('td');
        trE3.appendChild(tdE4);
        var n = 0;
        for (var s = 0; s < shops.length; s++) {
            n += shops[s].cookies[y];

        }
        y++;
        result += n;
        tdE4.textContent = n;

    }

    var tdE5 = document.createElement('td');
    tdE5.textContent = result;
    trE3.appendChild(tdE5);

}

var shop1 = new Shop('Seattle', 23, 65, 6.3);
console.log(this.shop1);
var shop2 = new Shop('Tokyo', 3, 24, 1.2);
console.log(shop2);
var shop3 = new Shop('Dubai', 11, 38, 3.7);
console.log(shop3);
var shop4 = new Shop('Paris', 20, 38, 2.3);
console.log(shop4);
var shop5 = new Shop('Lima', 2, 16, 4.6);
console.log(shop5);



TableHeader();


for (var r = 0; r < shops.length; r++) {
    shops[r].avgCustomer();
    shops[r].cookiesRandom();
    shops[r].cookiesSum();

    shops[r].render();


}
TableData();
TableFooter();

/////////////////////////////////////////////

var myShop = document.getElementById('shop');
myShop.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    var location = event.target.location.value;
    console.log(location);
    var minCustomer = parseInt(event.target.min.value);
    console.log(minCustomer);
    var maxCustomer = parseInt(event.target.max.value);
    console.log(maxCustomer);
    var avg = parseFloat(event.target.avg.value);
    console.log(avg);
    var ShopObj = new Shop(location, minCustomer, maxCustomer, avg);
    //var shop6 = new Shop();



    if (event.target.max.value < event.target.min.value) {
        alert("you should try to put max num bigger than min num");


    } else {

        ShopObj.avgCustomer();
        ShopObj.cookiesRandom();
        ShopObj.cookiesSum();
        tableE1.innerHTML = ' ';
        TableHeader();
        ShopObj.render();
        TableData();
        TableFooter();
        myShop.reset();
    }





})







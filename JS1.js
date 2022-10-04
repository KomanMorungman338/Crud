/*var myString = `\fIam"Tombi"what?`;

console.log(myString[5]);
console.log(myString.length);
console.log(myString[5]);
console.log(myString[myString.length - 1]);*/
var arr = [20, 30, "Man", "Man", [2, 3, 4, "mani"], [[67, 2], "hari"]];
/*console.log(arr[2] += 'i');
*/console.log(arr[0][1]);
/*console.log(arr[4]);
console.log(arr[3][3][0]);
console.log(arr[4][0][1]);
var s = "chanu";
console.log(s);
arr.push(["ra"]);
console.log(arr[5]);
{ var oops = 4 };
let oni = 3;
function f() {
    oops = 2;
    return oops;
}
c = f(oops);
console.log(c);
console.log(oops);
/*if (typeof oops != "undefined") {
    console.log(oni);
}
function ch(check) {
    if (check != '13') {
        return "Yes true";
    }
    else
        return "Not true";

}
console.log(ch(13));
function f2() {
    a = 3;
    switch (a) {
        case 1: console.log(a);

        default: console.log("Hi");

        case 3: b = 4;
            console.log(b);


    }
}
f2();
//console.log(b);
function f5(c) {
    count = 0;
    switch (c) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: count++;
            break;
        case 10:
        case 'A':
        case 'J':
        case 'K':
        case 'Q': count--;
            break;
    }
    holdbet = 'Hold';
    if (count > 0) {
        holdbet = 'Bet';
    }
    return count + " " + holdbet;
}
f5(2); f5('K'); f5('10'); f5('K'); f5('A');
console.log(f5(4));
var ob1 = {
    l1: {
        n1: "Mani",
        n2: {
            gender: "male"
        }
    },
    l2: "Rani"
};
var s = "l1";
console.log(ob1.s);
console.log(ob1.l1);
console.log(ob1["l1"]);
console.log(ob1.l1.n2.gender);
var arr = [{ l1: "Mani" }, { l2: "Rani" }];
console.log(arr[1]);
console.log(arr[1].l2);
var listPlayerT20 = {
    Kohli: {
        "gender": "Male",
        "years played": [1936, 1954, 1999, 2004, 2016, 2021]
    },
    Rohit: {
        "gender": "Male",
        "years played": [1936, 1954, 1999, 2004, 2016, 2021]
    }

};
function update(Name, val) {
    listPlayerT20[Name]["years played"] = val;
    return listPlayerT20;
}
console.log(update("Rohit", [1900, 2021]));
*/

/*var arr = [];/*
while (i < 6) {
    arr.unshift(i);
    i++;
};
for (i = 0; i < 15; i++) {
    if (i % 2 !== 0) {
        arr.push(i);
    }
}
console.log(arr);
console.log(i);
key = "Man"; count = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
        count++;
    }
}
if (count === 1) {
    console.log(key + " is not duplicated");
}
else if (count === 0) {
    console.log(key + "  is not found");
}
else console.log(key + " is duplicated for " + (count) + " times");*/
function multiply(arr) {

    prod = 1;
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            {
                prod *= arr[i][j];
                g = 9;
            }
        }
    }
    console.log(g);
    return prod;
}
console.log(multiply([[1, 2], [3, 4], [5, 6, 7]]))
console.log(prod);


function checksign(data) {
    return data < 0 ? "negative" : data > 0 ? "positive" : "zero";
}
console.log(checksign(-2));
{
    x = 3;
    if (true) {
        var x = 5;
        console.log(x);
    }
    console.log(x);
}
var p = function (arr1, arr2) { return arr1.concat(arr2) };
console.log(p("Ko", "Man"));
const avgTemp = {
    Today: "43 C",
    Tomorrow: "30 C"
}
const f = (avgT) => {
    // "use strict";

    var { Tomorrow: Temp } = avgT;
    g = Temp;
    Temp = 2;
    return Temp;
}
console.log(f(avgTemp));
console.log(g);
//let a = 10, b = 3;
var a, b;
var h = (a, b) => {
    //[a, b] = [b, a];
    //r = a;
    console.log(a);
};
h(10, 3);
console.log(a);
//console.log(r);
var s = (name, gender, age) => { name, age, gender };
console.log(s("Mani", "Male", 20))
class vegetable {
    constructor(name, c) {
        this.veg = name;
        this.col = c;
    }
    get ret() {
        return this.col;
    }
    set edit1(str) {
        this.veg = str;
    }
    set edit2(str) {
        this.col = str;
    }

}
var obj = new vegetable("Cabbage", "Green");
obj.edit1 = "Spinach";
obj.edit2 = "Yellow";
console.log(obj.ret);
var veg = [["Cabbage", "Carrot"], ["Chilli", "Mustard"]];
k = 1;
for (i = 0; i < veg.length; i++) {
    count = 0;
    for (j = 0; j < veg[i].length; j++) {

        c = new Promise((resolve, reject) => {
            if (veg[i][j] === "Cabbage") {
                resolve("Available ");
            }
            else
                reject("Not found");
        })


        c.then((message) => { console.log("Stock " + k + ":" + message + "   count:" + (++count)) }).catch((message) => console.log("Stock " + k + ":" + message));
    }
    k++;
}


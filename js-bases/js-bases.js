var user=prompt("enter your name:");
//alert(user);

/*var testConfirmBox = confirm("do you want to leave the page?")
if (testConfirmBox == true){
    alert("thanks for visiting");
} else {
    alert("ok");
}*/

//object contructor
function person(name, age, color){
    this.name = name;
    this.age = age;
    this.favColor = color;
    this.yob = bornYear;
    this.changeName = function(name){
        this.name = name;
    }
}
function bornYear(){
    return 2019 - this.age;
}

//object creation
obj1 = new person("Andrea", 26, "green");
obj1.changeName("pippo")

// set interval func example
function myAlert(){
    alert("Hi");
}
//call myAlert every 10 sec
setInterval(myAlert,10000);

//---------DOM----------
document.body.innerHTML = "some text"
//find elemnents by id
document.getElementById(id);
//find elements by class name
document.getElementsByClassName(name); // retur array
//find elements by tag name
document.getElementsByTagName(name);

var elem = document.getElementById("prova");
elem.innerHTML = "ciao"; // change content of the fetched value

// targeting img for example, you can also change attributes
var elem2 = document.getElementById("img1");
elem2.src = "ciao77.jpg"; // change content of the fetched value


var user=prompt("enter your name:");
alert(user);

var testConfirmBox = confirm("do you want to leave the page?")
if (testConfirmBox == true){
    alert("thanks for visiting");
} else {
    alert("ok");
}

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
//call myAlert every 5 sec
setInterval(myAlert,5000);

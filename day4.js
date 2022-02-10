var person={
    name:"Shubham",
    age:20,
    city:"Pune"
}

var Student={
    name:"Amol",
    age:20,
    city:"Pune"
}

var emp={
    name:"vidhya",
    age:20,
    city:"Pune"
}
var maneger={
    name:"Datta",
    age:45,
    city:"Pune"
}
var CEO={
    name:"Alan",
    age:50,
    city:"Pune"
}

    console.log(person.city,emp.name,maneger.age);

    //function

    function doSomething(name,age){
        console.log(name);
        console.log(age);
    }

    doSomething("Shubham",20);
    doSomething("Aditi",17);
    
    //For each loop

    var arr=["Shubham","Pooja","Vaibhav","Gaytri","Nikita"];
    arr.forEach(function(a,i){
        console.log(a);
    })

/*
let age=5;

if (age >= 18){
    console.log("you are an adult.");
}else{
    console.log("you are a minor.")
}

for (let i=1 ; i<=5 ; i++){
    console.log(i);
}

let limit = 50;
let a = 0;
let b = 1;

while(a <= limit){
    console.log(a);
    let temp = a + b;
    a  = b;
    b = temp;
}
    
   const add =  function(a ,  b){
    console.log(a+b);
   }
   add(3 , 4);
   

  const calculateArea = (width , hight)=>{
    console.log(width * hight);
  }
  calculateArea(44 , 49);
  */


//******Methods******************

//  const fruite = ["apple","banana"];


//  const removeFruite = fruite.shift();

//  console.log( "Removed fruit is:", removeFruite);

//   fruite.push("orange","tometo");
//   console.log(fruite);
//   fruite.splice(1 , 1, "poteto");
//   console.log(fruite);




// const F=["Apple","Banana"];
// const F1=["Orange","Cocamber"];
 
// const F3 = F.concat(F1);
// console.log(F3);


// const Fruites=["Apple","Banana","Orange"];

// const numFruites = Fruites.length;
// console.log(numFruites);




//****** ارسال رسالة لكل مستخدم*********
// function sendWelcomeEmail(email){
//     console.log(`welcome email sent to ${email}`);
// }
//  const users=[
//     {name:"ali",email:"ali@example.com"},
//     {name:"samer",email:"samer@example.com"},
//     {name:"ahmad",email:"ahmad@example.com"}
//  ];
//  users.forEach((user)=>{
//     sendWelcomeEmail(user.email)
//  });



//******** فلترة رواتب ***********
// const Products = [
//     { name: "ali", price: 1000 },
//     { name: "alia", price: 2000 },
//     { name: "sami", price: 500 },
//     { name: "rami", price: 250 },
//     { name: "ramia", price: 50 }
// ];

// function filterProductsByPrice(Products, MinPrice, MaxPrice) {
//     return Products.filter((product) => product.price >= MinPrice && product.price <= MaxPrice);
// }

// const MinPrice = 100;
// const MaxPrice = 500;

// const filteredProducts = filterProductsByPrice(Products, MinPrice, MaxPrice);

// filteredProducts.forEach((product) => {
//     console.log(`${product.name} is of $${product.price}`);
// });


//***********Accsses objects *************
// const person={
//     "FirstName":"Ali",
//     "LastName":"Taha",
//     Age:33
// };

// console.log(person["FirstName"]);
// console.log(person["LastName"]);
// console.log(person["Age"]);



// const students=[
//     {name:"Ali",age:22},
//     {name:"Alia",age:33},
//     {name:"sami",age:24},
// ];
// for(let i=0 ; i<students.length ; i++){
//     console.log(students[i].name);
//     console.log(students[i].age);
// }
// students.push({name:"Rami",age:43});
// console.log(students);
// const student = students.find(student=>student.name==="Rami");
// console.log(student.age);


// const obj = undefined;
// const propertyValue = obj.property;

// console.log("property value" + propertyValue);
// console.log("This message will never be rached.");



// const obj = undefined

// try{
//   const propertyValue = obj.property;
//   console.log("property value" + propertyValue);
//   console.log("This message will be rached.");
// }catch(error){
// console.error("an error accured while accssing the property:",error.message);
// }
// console.log("containue");





//  مثال على XMLHttpRequest

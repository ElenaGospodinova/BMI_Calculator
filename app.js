//Changing Images function +  array

const photo = document.getElementById("pic");
let currentPhoto = 1;
const photos = [
    "./a_z.jpeg",
    "./be_well.jpeg",
    "./nutrition.jpeg"
]
function changeImage(){
    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }
// If current idx exceeds images array
                // length, reset it to 0 again
    photo.src = photos [currentPhoto];
 // Increment current image idx by 1
    currentPhoto++;
}
// BMI  calculator function 

var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{

    height = heightInput.value;
    weight = weightInput.value;
    BMI = (weight / ((height * height) / 10000)).toFixed(2);
    //BMI = weight/(height**2); the formula 
    result.innerText = BMI;

    if(BMI < 18.5){
        statement.innerText = "Your BMI falls within the underweight range";    
    }else if((BMI > 18.5) && (BMI < 24.9)){
        statement.innerText = "Your BMI falls within the normal or healthy weight range";
    }else if((BMI > 25) && (BMI < 29.9 )){
        statement.innerText = "Your BMI falls within the overweight range";
    }else{
        statement.innerText = "Your BMI falls within the obese range";
    }
});



























// function bodyMassIndexCalc(){
  
   
//    var  height = document.getElementById("height").value;
//    var weight =  document.getElementById("weight").value;
   
// //     document.getElementById("weight").textContent = weight + "kg";
// //     document.getElementById("height").textContent = height + "cm";

//    var bodyMassIndex = weight/(height/100 * height/100);
//    var bodyMassIndexX =(bodyMassIndex.toFixed(2));

//    document.getElementById("resultt").innerHTML = "Your BMI is " + bodyMassIndexX;
//    console.log(bodyMassIndexX);

// }
   

//     if (bodyMassIndex < 18.5){
//          return "Underweight";
//      } else if (bodyMassIndex < 25){
//          return "Normal";

//     } else if (bodyMassIndex < 30){
//          return "Overweight";
//      } else  {
//          return "Obese";
//     }
// 
    
    //document.getElementById(result).innerHTML = "Your BMI is " + weight/(height* height);
 //}

//   function bodyMassIndexCalc(){
     
//      const height = document.getElementById("height").value;
//      const weight = document.getElementById("weight").value;    

//      const bodyMassIndex = weight/(height/100 * height/100);
//      const bodyMassIndexX =(bodyMassIndex.toFixed(2));
//      document.getElementById("result").innerHTML = "Your kcnaskjcn" + bodyMassIndexX;
//  }
//  bodyMassIndexCalc();


// function bodyMassIndexCalc(){
//     let height = parseInt(document.querySelector("#height").value);
//     let weight = parseInt(document.querySelector("#weight").value);
//     let result = parseInt(document.querySelector("bodyMassIndex").value);

//     let bmi = (weight/((height * height)/10000)).toFixed(2);
// }
// window.onload = () => {
//     let button = document.querySelector("#btn");
// };
// //button.addEventListener("click", calclulateBMI  => {

//     var heightInput = document.querySelector("#height-input");
//     var weightInput = document.querySelector("#weight-input");
//     var calculateButton = document.querySelector("#btn");
//     var result = document.querySelector("#resultt");
//     var statment = document.querySelector("#result-statement");
//     var BMI, height, weight;

// function calclulateBMI () {
//     let height = parseInt(document.querySelector("#height-input").value);
//     let weight = parseInt(documen.querySelector("#weight").value);
//     let result = document.querySelector("#result");

//     if (height === "" || isNaN(height)) 
//         result.innerHTML = "Provide a valid Height!";
  
//     else if (weight === "" || isNaN(weight)) 
//         result.innerHTML = "Provide a valid Weight!";
//     else {
//         if (BMI < 18.6) result.innerHTML =
//             `Under Weight : <span>${BMI}</span>`;
  
//         else if (BMI >= 18.6 && BMI < 24.9) 
//             result.innerHTML = 
//                 `Normal : <span>${BMI}</span>`;
//          else result.innerHTML =
//                 `Over Weight : <span>${BMI}</span>`;
//     }
// }


    // height = heightInput.value;
    // weight = weightInput.value;
    // BMI = weight/(height**2); 
    // result.innerText = BMI;

//     if(BMI < 18.5){
//         statement.innerText = "Your BMI falls within the underweight range";    
//     }else if((BMI > 18.5) && (BMI < 24.9)){
//         statement.innerText = "Your BMI falls within the normal or healthy weight range";
//     }else if((BMI > 25) && (BMI < 29.9 )){
//         statement.innerText = "Your BMI falls within the overweight range";
//     }else{
//         statement.innerText = "Your BMI falls within the obese range";
//     }
// })

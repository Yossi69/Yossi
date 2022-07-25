function NumberClick() {
  let numberinput = document.getElementById("numberinput").value;
  if (numberinput <= 100) {
    alert("small");
    console.log("small");
  }
  if (numberinput > 100 && numberinput <= 1000) {
    alert("medium");
    console.log("medium");
  }
  if (numberinput > 1000) {
    alert("large");
    console.log("large");
  }
}
function NameClick() {
  let nameinput = document.getElementById("nameinput").value;
  let lastnameinput = document.getElementById("lastnameinput").value;
  let NmaeMsg = `
 hello ${nameinput} ${lastnameinput}\n
 welcome back
 
 `;
  console.log(NmaeMsg);
  alert(NmaeMsg);
}
function PasswordClick() {
  let passwordinput = document.getElementById("passwordinput").value;
  if (passwordinput == passwordfromserver) {
    console.log("הזיהוי בוצע בהצלחה");
    alert("הזיהוי בוצע בהצלחה");
  } else {
    console.log("״הסיסמה שגויה,יש צורך בזיהוי״");
    alert("״הסיסמה שגויה,יש צורך בזיהוי״");
  }
}
const passwordfromserver = "hackeru123";

function ageClick() {
  let ageinput = document.getElementById("ageinput").value;
  if (ageinput < 16) {
    alert("אינך מורשה להיכנס");
    console.log("אינך מורשה להיכנס");
  }
  if (ageinput >= 16 && ageinput <= 18) {
    alert("אתה רשאי להיכנס באישור הורה");
    console.log("אתה רשאי להיכנס באישור הורה");
  }
  if (ageinput > 18) {
    alert("אתה מוזמן להצטרף");
    console.log("אתה מוזמן להצטרף");
  }
}
function plus() {
  let inputnumberone = +document.getElementById("inputnumberone").value;
  let inputnumbertwo = +document.getElementById("inputnumbertwo").value;
  alert(inputnumberone + inputnumbertwo);
  console.log(inputnumberone + inputnumbertwo);
}
function minus() {
  let inputnumberone = +document.getElementById("inputnumberone").value;
  let inputnumbertwo = +document.getElementById("inputnumbertwo").value;
  alert(inputnumberone - inputnumbertwo);
  console.log(inputnumberone - inputnumbertwo);
}

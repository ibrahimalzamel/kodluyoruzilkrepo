console.log("log");
console.log("hello From %cJS %cFile ","color : red ; font-size : 40px","color : blue ; font-size : 40px")
document.write(" <h1>Elzero</h1>");
console.log(
"%cElzero  %cWeb %cSchool ",
"color : red ; font-size : 40px",
"color : green ; font-size : 40px ;",
"color : whit ;background-color:blue ; font-size : 40px")
console.group("Group 1");
console.log("mesaage one");
console.log("mesaage Two");
console.group("Child Group");
console.log("mesaage one");
console.log("mesaage Two");
console.group("Grand Child Group");
console.log("mesaage one");
console.log("mesaage Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("mesaage one");
console.log("mesaage Two");
console.table(["ibrahim","suraya","abdullah"]);

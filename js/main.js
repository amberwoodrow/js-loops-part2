var students = ['joe', 'carl', 'rachel', 'derek', 'lily'];

console.log("\nProblem 1");
// joe
// carl
// rachel
// derek
for(var i=0; i < (students.length - 1); i++) {
  console.log(students[i]);
}

console.log("\nProblem 2");
// joe
// rachel
// lily
for(var i=0; i<students.length; i++) {
  if (i % 2 === 0) {
    console.log(students[i]);
  }
}

console.log("\nProblem 3");
// lily
// derek
// rachel
// carl
// joe
for(var i = students.length-1; i >= 0; --i) {
    console.log(students[i]);
}

console.log("\nProblem 4");
// joe
// carl
// carl
// rachel
// rachel
// derek
// derek
// lily

for(var i=0; i<students.length; i++) {
  console.log(students[i]);
  if (!(i === 0 || i === students.length-1)) {
    console.log(students[i]);
  }
}
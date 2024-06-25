let staff = {
  fname: 'Addo',
  Gender: 'Male',
  status: 1,
}
 
console.log(staff.fname);

staff.fname = 'Tom';
let newFirstName = staff.fname;
staff.fname = 'Hurray';
let newFirstName2 = staff.fname;

function changeNewFirstName(fn){
  return staff.fname = fn;
}

staff.position = 'HR';

let staff2 = {
  ...staff,   // Spread existing properties
  genotype: 'AA',
  department: 'Operations',
};

 delete staff2.genotype;

console.log(changeNewFirstName('Jerry')); //comment this line to understand different outputs
console.log(staff.fname); 
console.log(newFirstName);
console.log(newFirstName2);
console.log(staff.fname);
console.log(changeNewFirstName('Batman')); 
console.log(staff);
console.log(staff2);




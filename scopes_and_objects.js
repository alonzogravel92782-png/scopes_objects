let globalCount = 0

function demostrateLocalScope(){
    const insideVaribale = "I am locally defined within demostrateLocalScope.";
    console.log(insideVaribale)
}

let globalVaribale = "I am a global variable 1"
function modifyVariables(){
    let localVaribale = "I am a local variable 1";
    console.log("Inside function :");
  console.log(`Global: ${globalVariable}`);
  console.log(`Local: ${localVariable}`);

  globalVariable = "I am the global variable";
  localVariable = "I am the local variable";

  console.log("Inside function (after modification):");
  console.log(`Global: ${globalVariable}`);
  console.log(`Local: ${localVariable}`);
}

function student(firstName, lastName, age, major){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.major = major;
}
const student1 = new student("Samnelikisiwe", "Mpiyonke", 20, "Computer Science");
const student2 = new student("Khangelani", "Mhlakana", 22, "Biology");
const student3 = new student("Emihle", "Duma", 19, "History");
const student4 = new student("Siza", "Mpafa", 21, "Art");
const student5 = new student("Alonzo", "Gravel", 20, "Mathematics");
student.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

student.prototype.getDetails = function() {
    return `${this.getFullName()} is ${this.age} years old and is majoring in ${this.major}.`;
};
  



const company = {
  name: "Tech Solutions Inc.",
  foundedYear: 2005,
  location: {
    city: "San Francisco",
    state: "CA",
    zipCode: "94107",
    coordinates: {
      latitude: 37.7749,
      longitude: -122.4194
    }
  },
  departments: ["Engineering", "Sales", "Marketing", "HR"],
  management: {
    ceo: {
      firstName: "Alonzo",
      lastName: "Gravel",
      experienceInYears: 15
    },
    cto: {
      firstName: "Matthew",
      lastName: "Jones",
      experienceInYears: 12
    }
  },
  isActive: true
};




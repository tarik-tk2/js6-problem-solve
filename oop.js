class Office {
  name;
  location;
  constructor(name, loaction) {
    this.name = name;
    this.location = loaction;
  }
  workingHour(time) {
    console.log(`We work per day  ${time} hour`);
  }
  weekOfWorks(day) {
    console.log(`We work weely ${day} day`);
  }
}
class Developer extends Office{
 
  post = "Developer";
  dep = "Tecnology";
  constructor(name, location) {
   super(name,location)
    }
    show() {
        console.log(`My name is ${this.name} from ${this.loaction}`)
    }
    
}

class Advertisement extends Office {
  post = "manager";
  dep = "advertisemnet";
  published;
  constructor(name, location, published) {
   super(name,location)
    this.published = published;
  }

  advetiseIdea(howMuch) {
    console.log(`How much add create a day${howMuch}`);
  }
  sayWelCome(name) {
    console.log(`Wecome Mr./Mrs ${name} in our new Company`);
  }
}
class Hr extends Advertisement {
  post = "HR Manager";
  hired;
  regine;
  constructor(name, location, hired, regine) {
  super(name,location)
    this.hired = hired;
    this.regine = regine;
  }

  advetiseIdea(howMuch) {
    console.log(`How much add create a day${howMuch}`);
  }
  saygoodBye(name) {
    console.log(`Say goodbye from this job Mr./Mrs${name}`);
  }
}
const newStaff = new Developer("Mahim", "Dhaka");
console.log(newStaff.name)
const addStff = new Advertisement("Rabby", "dhaka", 2022);
const addHR = new Hr("Rabby", "dhaka", 2022,"ok");
 console.log(addHR);
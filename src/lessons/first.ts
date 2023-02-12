//Variables
const a = "1";
console.log("aaaa", a);

const hello = "world"; //type 'world'

let good = "good";
let bad: string = "bad";

//ts transpile everything in ES3

const getFullName = (name: string, surname: string): string => {
  return name + " " + surname;
};

console.log(getFullName("yarik", "gorban"));



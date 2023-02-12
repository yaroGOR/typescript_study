
//objects
const user3 = {
    name: 'John',
    age: 3,
}

const user2:{name:string; age: number} = {
    name: "Jack", age:2
}

//interface

interface IUser33 {
    name:string;
    age: number;
}

interface IUser22 {
    name?:string;
    age?: number;
}


const user:IUser33 = {
    name: 'Samanta',
    age:30
}
const user4: IUser22 = {
    name: "John"
}

console.log(user4.name)


interface IUser3 {
    name:string;
    age?:number;
    getMessage():string;
}
const admin:IUser3 = {
    name: "Jack",
    age: 55,
    getMessage() {
        return "Hello"+ name
    },
}

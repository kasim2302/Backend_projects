export function add(a,b){
    return a + b
}

export function sub(x,y){
    return x - y
}

export default function greet(name){
    return `Hello ${name}`
}

export class Student{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    display(){
        console.log(`Name: ${this.name} , Age: ${this.age}`)
    }
}
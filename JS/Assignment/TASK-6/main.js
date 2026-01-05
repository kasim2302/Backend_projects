import {add,sub} from "./math_utils.js"
import greet from "./math_utils.js"
import { Student } from "./math_utils.js"

console.log(add(3,5))
console.log(sub(10,2))

console.log(greet("suresh"))

const student = new Student("Ram",26)
student.display()


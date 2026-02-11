import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

// __dirname is NOT available in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fileName = "sample.txt"
const filePath = path.join(__dirname, fileName)

console.log("Absolute Path:", filePath)
console.log("Extension:", path.extname(fileName))

fs.writeFileSync(filePath, "Hello World\n")
console.log("File Created")

fs.appendFileSync(filePath, "Updated Line\n")
console.log("File Updated")

const data = fs.readFileSync(filePath, "utf8")
console.log("File Content:\n", data)

fs.unlinkSync(filePath)
console.log("File Deleted")

const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)
    let name = possibleNames[randomizer]
    let suffix = " the Llama"
    
    return name + suffix
}
// const namer = function () {
//     nameMaker = llamaNamer()
// }

// console.log(nameMaker())
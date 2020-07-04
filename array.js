let subjects = ["English", "Math", "nepali", "Science"]
console.log(subjects)
subjects.push("Social Studies")
console.log(subjects)


for(let count = 0; count< subjects.length; count++){
  console.log(count,subjects[count])
}
console.log(subjects.includes("Mathematics"))

console.log(subjects.reverse())

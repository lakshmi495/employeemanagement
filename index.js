(async function () {
    const fs = require('fs')
    const data = fs.readFileSync('./employees.json')
    const employees = JSON.parse(data)
    let selectedEmplyeeId = employees[0].id
    
} ) ();
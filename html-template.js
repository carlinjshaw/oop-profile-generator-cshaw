
htmlTemplate = (data) => {


    const htmlOutput =
`
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Team Generator</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="description" content="" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
    <h1 class="text-center">This is your tech team!</h1>
    
    <div id="cards-group" class="card-group">
        
    ${managerHtml(data[2])}

    ${engineerHtml(data[0])}

    ${internHtml(data[1])}
        
        
    </div>
    
    
    
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="/challenges/oop-profile-generator/html-template.js"></script>
    
</body>
</html>

`

console.log(htmlOutput)

return htmlOutput ;

}


managerHtml = (data) => {
    const managerOutput = 
    
    `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
        <ul class="list-group">
            <li class="list-grou-item">ID: ${data.id}</li>
            <li class="list-grou-item">Office Number: ${data.officeNumber}</li>
            <li class="list-grou-item">Email: <a href="mailto:${data.email}" class="card-link">${data.email}</a></li>
        </ul>
    </div>
</div>`

return managerOutput
}


engineerHtml = (data) => {
    let engineerOutput = ""
    data.forEach((engineer) => {
        let singleEngineer = 
        `<div id ="engineer-div" class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${engineer.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
            <ul class="list-group">
                <li class="list-grou-item">ID: ${engineer.id}</li>
                <li class="list-grou-item">Github: <a href="https://github.com/${engineer.github}" class="card-link">${engineer.github}</a></li>
                <li class="list-grou-item">Email: <a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a></li>
            </ul>
        </div>
    </div>`

    engineerOutput += singleEngineer;

    })
return engineerOutput;
}

internHtml = (data) => {
    let internOutput = ""
    data.forEach((intern) => {
        let singleIntern =
        `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${intern.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
                <ul class="list-group">
                    <li class="list-grou-item">ID: ${intern.id}</li>
                    <li class="list-grou-item">Studies at: ${intern.school}</li>
                    <li class="list-grou-item">Email: <a href="mailto:${intern.email}" class="card-link">${intern.email}</a></li>
                </ul>
            </div>
        </div>`

        internOutput += singleIntern;

    })
    return internOutput
}

module.exports = htmlTemplate
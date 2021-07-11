function generateManager(manager) {
    return `
        <div class="card col-3 bg-warning" style="padding: 5px;border:2px solid black;">
            <div class="card-body">
                <h5 class="card-title">Manager</h5>
                <h6 class="card-subtitle mb-2 text-muted">${manager.name}</h6>
                <p class="card-text">Employee id: ${manager.id}</p>
                <p class="card-text">Office number: ${manager.officeNumber}</p>
                <a href="mailto:${manager.email}" class="card-link">${manager.email}</a>
            </div>
        </div>
    `
}

function generateEngineer(engineer) {
    return `
        <div class="card col-3 bg-warning" style="padding: 5px;border:2px solid black;">
            <div class="card-body">
                <h5 class="card-title">Engineer</h5>
                <h6 class="card-subtitle mb-2 text-muted">Employee Name:${engineer.name} </h6>
                <p class="card-text">Employee id: ${engineer.id}</p>
                <a href="https://github.com/${engineer.github}" class="card-link">Github</a>
                <a href="mailto:${engineer.email}" class="card-link">${engineer.email} </a>
            </div>
        </div>
    `
}

function generateIntern(intern) {
    return `
        <div class="card col-3 bg-warning" style="padding: 5px;border:2px solid black;">
            <div class="card-body">
                <h5 class="card-title">Intern</h5>
                <h6 class="card-subtitle mb-2 text-muted">Employee Name: ${intern.name}</h6>
                <p class="card-text">Employee id: ${intern.id}</p>
                <p class="card-text">School: ${intern.school}</p>
                <a href="mailto:${intern.email}" class="card-link">${intern.email} </a>
            </div>
        </div>
    `
}




function generateHTML(array) {
    let teamArray = ""
       for(var i = 0; i < array.length; i++){
            if(array[i].getRole() === "Manager" ){
                teamArray += generateManager(array[i])
            }
            else if(array[i].getRole() === "Engineer"){
                teamArray += generateEngineer(array[i])
            }
            else{teamArray += generateIntern(array[i])}
       } 
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <title>Team Manager</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid bg-danger">
        <div class="container">
            <h1 class="display-4">The Best Team Ever!</h1>
        </div>
    </div>

    <div class="row">
        
    ${teamArray}


    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
</body>
</html>
    `
}

module.exports = generateHTML
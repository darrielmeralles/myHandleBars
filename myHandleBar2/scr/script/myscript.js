var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/pets-data.json');
// ourRequest.open('GET', 'src/script/data.json'); 

ourRequest.onload = function(){
    if (ourRequest.status >= 200 && ourRequest.status < 400){
        var data = JSON.parse(ourRequest.responseText);
        creatHTML(data);
    } else{
        console.log("We connected to the server, but it return an error");
    }
};

ourRequest.onerror = function(){
    console.log("Connection Error");
}

ourRequest.send();

Handlebars.registerHelper("calculateAge", function(birthYear){
    var age = new Date().getFullYear() - birthYear;
    return age;
});

function creatHTML(petsData){
    var rawTemplate = document.getElementById("petsTemplate").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compiledTemplate(petsData);

    var petsContainer = document.getElementById("pets-container");
    petsContainer.innerHTML = ourGeneratedHTML;
}
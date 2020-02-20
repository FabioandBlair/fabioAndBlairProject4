const app = {};

// Validating the input from the user before we make the API call 
app.validateInput = function(chosenYear, chosenCategory) {
    if (chosenCategory === '' || chosenYear === '') {
        return false;
    } 
    return true
}

// function that makes everything happen - API Called, results cleared (if there) and printed when selected
app.getInfo = function (){
    let chosenYear = $("#year").val();
    let chosenCategory = $("#category").val();
    
    if (!app.validateInput(chosenYear, chosenCategory) ) {
            swal('Oops...', 'Please select inputs.', 'warning');
    } else {
        $.ajax({
        url:'https://retroapi.hackeryou.com/api/years/year',
        method: 'GET',
        dataType: 'json',
        data: {
            apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU0NzEzMzk5MDk0Y2QwNDNiNzFlNmU3In0sImlhdCI6MTU4MTcxNjI4MSwiZXhwIjoxNjEzMjUyMjgxfQ.FAoVrIYKqTjNsPP8dddwlWL5cOWR8fFJ7qzGlcN0HXw',
            year: chosenYear
            }
        }).then(function(yearResults){
            $('ul').empty();
            const top5 = yearResults[0][chosenCategory];
    
            if(chosenCategory === 'books') {
                $('ul').empty();
                top5.forEach(function(item) {
                    
                    const htmlToAppend = `
                        <li>&#128214;  <em>${item.title}</em> by ${item.author}</li>
                    `;
                    $('ul').append(htmlToAppend);
                })
            } else if (chosenCategory === 'songs') {
                $('ul').empty();
                top5.forEach(function (item) {
                    const htmlToAppend = `
                        <li>&#119070;  <em>${item.title}</em> by ${item.artist}</li>
                    `;
                    $('ul').append(htmlToAppend);
                })
            }  else if (chosenCategory === 'movies'){
                $('ul').empty();
                top5.forEach(function(item) {
                const htmlToAppend = `
                    <li>&#127909;   <em>${item.title}</em></li>
                `;
                    $('ul').append(htmlToAppend);
                }
                );
            } else {
                $('ul').empty();
                top5.forEach(function(item) {
                const htmlToAppend = `
                    <li>&#128250;   <em>${item.title}</em></li>
                `;
                    $('ul').append(htmlToAppend);
                }
                );
            }    
        })
    };
};
// ***End of app.getInfo Function***

// ***Using the app.init to call the app.getInfo() function when the button is clicked by user***
app.init = function() {
    $('form').on("submit", function(e) {
        e.preventDefault();
        app.getInfo();
    });
};

// ***Document ready***
$(function(){
    app.init();
});
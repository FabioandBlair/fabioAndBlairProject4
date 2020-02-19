const app = {};

app.validateInput = function(chosenYear, chosenCategory) {
    if (chosenCategory === '' || chosenYear === '') {
        return false;
    } 
    return true
}

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
                        <li><em>${item.title}</em> by ${item.author}</li>
                    `;
                    $('ul').append(htmlToAppend);
                })
            } else if (chosenCategory === 'songs') {
                $('ul').empty();
                top5.forEach(function (item) {
                    const htmlToAppend = `
                        <li><em>${item.title}</em> by ${item.artist}</li>
                    `;
                    $('ul').append(htmlToAppend);
                })
            }  else {
                $('ul').empty();
                top5.forEach(function(item) {
                const htmlToAppend = `
                    <li><em>${item.title}</em></li>
                `;
                    $('ul').append(htmlToAppend);
                }
                );
            }
        })
    };
};

        // ajax request returning a Promise
        // Promise running another function call 
        

    
        

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






// DELETE BEFORE HANDING IN!!!!!*******************
// ***************PSEUDO CODE FROM PROJECT GUIDELINES************


// // Create app namespace to hold all methods
// const app = {};

// // Collect user input
// app.collectInfo = function() {};

// // Make AJAX request with user inputted data
// app.getInfo = function() {};

// // Display data on the page
// app.displayInfo = function() {};

// // Start app
// app.init = function() {};

// $(function() {
// 	app.init();
// });

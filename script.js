const app = {};

app.getInfo = function (){
    let chosenYear = $('#year').val();
    let chosenCategory = $('#category').val();

    $.ajax({
        url:'https://retroapi.hackeryou.com/api/years/year',
        method: 'GET',
        dataType: 'json',
        data: {
            apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU0NzEzMzk5MDk0Y2QwNDNiNzFlNmU3In0sImlhdCI6MTU4MTcxNjI4MSwiZXhwIjoxNjEzMjUyMjgxfQ.FAoVrIYKqTjNsPP8dddwlWL5cOWR8fFJ7qzGlcN0HXw',
            year: chosenYear
        }
    }).then(function(yearResults){
        const top5 = yearResults[0][chosenCategory];
        if (chosenCategory === '') {
            swal('Oops...', 'Please select a category.', 'warning');
        }
        
        // Else below not working!!!!!!
        // else if (chosenYear === '') {
        //     swal('Please select an year');
        // }
        else if(chosenCategory === 'books') {
            top5.forEach(function(item) {
                console.log(item);
                const htmlToAppend = `
                    <p><em>${item.title}</em> by ${item.author}</p>
                `;
                $('.resultsFlex').append(htmlToAppend);
            })
        } else if (chosenCategory === 'songs') {
            top5.forEach(function (item) {
                console.log(item);
                const htmlToAppend = `
                    <p><em>${item.title}</em> by ${item.artist}</p>
                `;
                $('.resultsFlex').append(htmlToAppend);
            })
        }
            
            else {
            top5.forEach(function(item) {
            console.log(item);
            const htmlToAppend = `
                <p><em>${item.title}</em></p>
            `;
            // $('.resultsFlex').empty();
                $('.resultsFlex').append(htmlToAppend);
            }
            );
        }
    })};
        

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
    // console.log('working')
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
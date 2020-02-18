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
            swal('Please select an category');
        }
        // Else below not working!!!!!!
        // else if (chosenYear === '') {
        //     swal('Please select an year');
        // }
        else if(chosenCategory === 'books') {
            top5.forEach(function(item) {
                console.log(item);
                const htmlToAppend = `
                <div>
                    <p><em>${item.title}</em> by ${item.author}</p>
                </div>
                `;
                $('.results').append(htmlToAppend);
            })
        } else if (chosenCategory === 'songs') {
            top5.forEach(function (item) {
                console.log(item);
                const htmlToAppend = `
                <div>
                    <p><em>${item.title}</em> by ${item.artist}</p>
                </div>
                `;
                $('.results').append(htmlToAppend);
            })
        }
            
            else {
            top5.forEach(function(item) {
            console.log(item);
            const htmlToAppend = `
            <div>
                <p><em>${item.title}</em></p>
            </div>
            `;
            // $('.results').empty();
            $('.results').append(htmlToAppend);
            }
            );
        }
    })};
        

// ***End of app.getInfo Function***

// ***calling the app.getInfo() function when the button is clicked by user***
$('form').on("submit", function(e) {
    e.preventDefault();
	app.getInfo();
});


// NEED TO FILL THIS IN!!!!!
// app.init = function(){
// };

// ***Document ready***
$(function(){
    // app.init();
    console.log('working')
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
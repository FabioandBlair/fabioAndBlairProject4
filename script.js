$.ajax({
    url:'https://retroapi.hackeryou.com/api/years/decade',
    method: 'GET',
    dataType: 'json',
    data: {
        apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU0NzEzMzk5MDk0Y2QwNDNiNzFlNmU3In0sImlhdCI6MTU4MTcxNjI4MSwiZXhwIjoxNjEzMjUyMjgxfQ.FAoVrIYKqTjNsPP8dddwlWL5cOWR8fFJ7qzGlcN0HXw',
        decade: 1980,
    }
}).then(function(result){
    console.log(result);
})

$(function(){
    console.log('working')
})
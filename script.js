//display at top of pg that shows present day
var currentDay = moment().format("dddd MMMM Do YY");
    $("#currentDay").text(currentDay);


//loop to save on local storage

for (var i = 8; i < 17; i++) {
    var input = $('<input class="input" data-id="input" data-hour="' +i +'"></input>')

    var local = localStorage.getItem(i);
    input.val(local);

    var btn = $("<button class='saveBtn'>Save</button>")

    input.append(input);
    $("#box").append(input);
}; 





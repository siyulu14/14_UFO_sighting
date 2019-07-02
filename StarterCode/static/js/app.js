// from data.js
var tableData = data;

tbody = d3.select("tbody");

function tableappending(){

    // clean the table first
    tbody.html("");

    tableData.map(function(sighting){

        // Append one table row per sight
        var row = tbody.append("tr");

        // Append sight info per row
        // row.append("td").text(sighting.datetime)
        //      .append("td").text(sighting.city)
        //      .append("td").text(sighting.state)
        //      .append("td").text(sighting.country)
        //      .append("td").text(sighting.shape)
        //      .append("td").text(sighting.durationMinutes)
        //      .append("td").text(sighting.comments);
        Object.entries(sighting).forEach(([key, value]) => {
            // var cell = tbody.append("td");
            // cell.text(value);
            row.append("td").text(value);
        });
        
    });
}

var submit = d3.select("#filter-btn");

submit.on("click", function(){

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    if (inputValue != ""){
        tableData = tableData.filter(sighting => sighting.datetime === inputValue);
    };

    // call the table
    tableappending();

    // reset tableData
    tableData = data;

});

// call the table appending function when open the html
tableappending();




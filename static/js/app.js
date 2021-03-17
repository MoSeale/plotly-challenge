//declare variables

//create metadata function
d3.json("data/samples.json").then((incomingData) => {
    //console.log(incomingData)
    var metadata = incomingData.metadata;
    //console.log(metadata)
    //first id for testing
    //console.log(metadata[0].id)
    user_selection = metadata[0].id;
    console.log(user_selection);


    ///FIlter metadata on a given id assigned to user_selection
    var selected_metadata = metadata.filter(row => row.id == user_selection);
    console.log(selected_metadata);

    ///Populate Demographic Info section of page

    //select panel id "sample-metadata"
    var demog_info = d3.select("#sample-metadata");

    //refresh info 

    demog_info.html("");

    //add data 
    Object.entries(selected_metadata[0]).forEach(([key, value])=> {
        //console.log([value])
        demog_info.append("h6").text(`${key.toUpperCase()} : ${value}`);
        
    });
}
)

///build charts function

    /// call data to populate chart

    ///bar chart

    ///bubble chart


/// event handler for the drop down changes

////init function

// on option changes


///call init function
//init();
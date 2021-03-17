//declare variables

//create metadata function

function MetaData_build(selection){
    d3.json("data/samples.json").then((incomingData) => {
        //console.log(incomingData)
        var metadata = incomingData.metadata;
        //console.log(metadata)
        //first id for testing
        //console.log(metadata[0].id)
        //user_selection = metadata[0].id;
        //console.log(user_selection);


        ///Filter metadata on a given id assigned to user_selection
        var selected_metadata = metadata.filter(row => row.id == selection);
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
}




///build charts function

    /// call data to populate charts
    d3.json("data/samples.json").then((incomingData)  => {
        console.log(incomingData);
        var sampledata = incomingData.samples;
        //first id for testing
        console.log(sampledata[0].id)
        user_selection = sampledata[0].id;
        console.log(user_selection);

        ///Filter sampledata on a given id assigned to user_selection
        var selected_sampledata = sampledata.filter(row => row.id == user_selection);
        console.log(selected_sampledata);

        ///Gather top 10 entries

        var otu_ids = selected_sampledata.otu_ids;

        console.log(otu_ids);
        var otu_labels = selected_sampledata.otu_labels;
        var sample_values = selected_sampledata.sample_values;


        ///bar chart
        var yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
      
        // Data for the bar chart
        var bar_data = [
          {
            y: yticks,
            x: sample_values.slice(0, 10).reverse(),
            text: otu_labels.slice(0, 10).reverse(),
            type: "bar",
            orientation: "h",
          }
        ];
        
        //Layout for the bar chart
        var bar_layout = {
            title: "Top 10 Bacteria Cultures Found",
            margin: { t: 30, l: 150 }
        };

        //Plot bar chart
          // Plot the chart to a div tag with id "bar-plot"
            Plotly.newPlot("bar-plot", bar_data, bar_layout);
  




        // var bar_chart = [
        //     {

                
        //       y: otu_ids.slice(0,10).reverse(),
        //       x: sample_values.slice(0,10).reverse(),
        //       text: otu_labels.slice(0,10).reverse(),
        //       type: "bar",
        //       orientation: "h",
        //     }
        //   ];
        
        //   console.log(bar_chart);



    }
    )







    ///bubble chart


/// event handler for the drop down changes

////init function

// on option changes


///call init function
//init();
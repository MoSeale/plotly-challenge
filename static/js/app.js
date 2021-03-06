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

        ///Bonus 
        //Gather wfreq data
        const wfreq = selected_metadata[0].wfreq;
        Gauge_plotter(wfreq);


    }
    )
}



///build charts function
function Charts_Builder(selection){
    /// call data to populate charts
    d3.json("data/samples.json").then((incomingData)  => {
        console.log(incomingData);
        var sampledata = incomingData.samples;
        //first id for testing
        console.log(sampledata[0].id)
        user_selection = sampledata[0].id;
        console.log(user_selection);

        ///Filter sampledata on a given id assigned to user_selection
        var selected_sampledata = sampledata.filter(rows => rows.id == selection);
        console.log(selected_sampledata);

        ///Gather top 10 entries

        var otu_ids = selected_sampledata[0].otu_ids;

        //console.log(otu_ids);
        var otu_labels = selected_sampledata[0].otu_labels;
        var sample_values = selected_sampledata[0].sample_values;


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
          // Plot the chart to a div tag with id "bar"
            Plotly.newPlot("bar", bar_data, bar_layout);

        
        
        
        ///bubble chart

        ///Data for Bubble Chart
        
        var bubble_data = [
            {
              x: otu_ids,
              y: sample_values,
              text: otu_labels,
              mode: 'markers',
              marker: {
                size: sample_values,
                color: otu_ids
              }
    
            }
          ];
        // Layout for the bubble chart
        var bubble_layout = {
        title: "Top 10 Bacteria Cultures Found"
        
        }
        Plotly.newPlot("bubble", bubble_data, bubble_layout);



    }
    )
};   


/// event handler for the drop down changes



////init function

function init(){
    //populate dropdown

    d3.json("samples.json").then(function(data){
        data.names.forEach(function(id){
    
        //select dropdown
        d3.select("#selDataset").append("option").text(id).property("value");
        });
        Charts_Builder(data.names[0]);
        MetaData_build(data.names[0]);
        });
};



// on option changes

function optionChanged(selection){
    MetaData_build(selection);
    Charts_Builder(selection);
    
}


///call init function
init();
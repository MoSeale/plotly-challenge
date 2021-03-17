// Plot Gauge
// Uses variable from app.js

console.log(wfreq);


function Gauge_plotter(wfreq) {
    var gauge_data = [{
        domain: { x: [0, 1], y: [0, 1] },
        value: wfreq,
        title: { text: "Belly Button Washing Frequency <br> Scrubs per Week " , font: { size: 24 } },

        type: "indicator",
        mode: "gauge+number",
        gauge: {
            axis: {
                range: [null, 9]
            },
            steps: [
                { range: [0, 1], color: "#f8f3ec" },
                { range: [1, 2], color: "#f4f1e5" },
                { range: [2, 3], color: "#e9e6ca" },
                { range: [3, 4], color: "#e5e7b3" },
                { range: [4, 5], color: "#d5e49d" },
                { range: [5, 6], color: "#b7cc92" },
                { range: [6, 7], color: "#8cbf88" },
                { range: [7, 8], color: "#8abb8f" },
                { range: [8, 9], color: "#85b48a" }
            ],
        }
    }];


    var gauge_execute = document.getElementById("gauge");
    Plotly.newPlot(gauge_execute, gauge_data)



};


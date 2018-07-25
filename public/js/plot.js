$(document).ready(function(){

    TESTER = document.getElementById('tester');

    Plotly.plot( TESTER, [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }], { 
    margin: { t: 0 } } );

    /* Current Plotly.js version */
    console.log( Plotly.BUILD );

    tester1();
    tester2();
    tester3();
    tester4();
    tester5();
    tester6();
    tester7();
    customPlot();

});

function tester1(){

    var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'scatter'
      };
      
    var trace2 = {
    x: [1, 2, 3, 4],
    y: [16, 5, 11, 9],
    type: 'scatter'
    };
    
    var data = [trace1, trace2];
    
    Plotly.newPlot('tester1', data);
}

function tester2(){

    var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        mode: 'markers'
      };
      
    var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines'
    };
    
    var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers'
    };
    
    var data = [ trace1, trace2, trace3 ];
    
    var layout = {
    title:'Line and Scatter Plot'
    };
    
    Plotly.newPlot('tester2', data, layout);
}

function tester3(){

    var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        mode: 'markers',
        name: 'Scatter'
      };
      
    var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    name: 'Lines'
    };
    
    var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    name: 'Scatter + Lines'
    };
    
    var data = [ trace1, trace2, trace3 ];
    
    var layout = {
    title:'Adding Names to Line and Scatter Plot'
    };
    
    Plotly.newPlot('tester3', data, layout);
}

function tester4(){

    var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        mode: 'markers',
        marker: {
          color: 'rgb(219, 64, 82)',
          size: 12
        }
      };
    
    var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    line: {
        color: 'rgb(55, 128, 191)',
        width: 3
    }
    };
    
    var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    marker: {
        color: 'rgb(128, 0, 128)',
        size: 8
    },
    line: {
        color: 'rgb(128, 0, 128)',
        width: 1
    }
    };
    
    var data = [trace1, trace2, trace3];
    
    var layout = {
    title: 'Line and Scatter Styling'
    };
    
    Plotly.newPlot('tester4', data, layout);
}

function tester5(){

    trace1 = {
        type: 'scatter',
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        mode: 'lines',
        name: 'Red',
        line: {
          color: 'rgb(219, 64, 82)',
          width: 3
        }
      };
      
      trace2 = {
        type: 'scatter',
        x: [1, 2, 3, 4],
        y: [12, 9, 15, 12],
        mode: 'lines',
        name: 'Blue',
        line: {
          color: 'rgb(55, 128, 191)',
          width: 1
        }
      };
      
      var layout = {
        width: 700,
        height: 350
      };
      
      var data = [trace1, trace2];
      
      Plotly.newPlot('tester5', data, layout);
}

function tester6(){

    var trace1 = {
        x: [52698, 43117],
        y: [53, 31],
        mode: 'markers',
        name: 'North America',
        text: ['United States', 'Canada'],
        marker: {
          color: 'rgb(164, 194, 244)',
          size: 12,
          line: {
            color: 'white',
            width: 0.5
          }
        },
        type: 'scatter'
      };
      
      var trace2 = {
        x: [39317, 37236, 35650, 30066, 29570, 27159, 23557, 21046, 18007],
        y: [33, 20, 13, 19, 27, 19, 49, 44, 38],
        mode: 'markers',
        name: 'Europe',
        text: ['Germany', 'Britain', 'France', 'Spain', 'Italy', 'Czech Rep.', 'Greece', 'Poland'],
        marker: {
          color: 'rgb(255, 217, 102)',
          size: 12
        },
        type: 'scatter'
      };
      
      var trace3 = {
        x: [42952, 37037, 33106, 17478, 9813, 5253, 4692, 3899],
        y: [23, 42, 54, 89, 14, 99, 93, 70],
        mode: 'markers',
        name: 'Asia/Pacific',
        text: ['Australia', 'Japan', 'South Korea', 'Malaysia', 'China', 'Indonesia', 'Philippines', 'India'],
        marker: {
          color: 'rgb(234, 153, 153)',
          size: 12
        },
        type: 'scatter'
      };
      
      var trace4 = {
        x: [19097, 18601, 15595, 13546, 12026, 7434, 5419],
        y: [43, 47, 56, 80, 86, 93, 80],
        mode: 'markers',
        name: 'Latin America',
        text: ['Chile', 'Argentina', 'Mexico', 'Venezuela', 'Venezuela', 'El Salvador', 'Bolivia'],
        marker: {
          color: 'rgb(142, 124, 195)',
          size: 12
        },
        type: 'scatter'
      };
      
      var data = [trace1, trace2, trace3, trace4];
      
      var layout = {
        title: 'Quarter 1 Growth',
        xaxis: {
          title: 'GDP per Capita',
          showgrid: false,
          zeroline: false
        },
        yaxis: {
          title: 'Percent',
          showline: false
        }
      };
      
      Plotly.newPlot('tester6', data, layout);
}

function tester7(){

    var trace1 = {
        x: [1, 2, 3, 4, 5],
        y: [1, 3, 2, 3, 1],
        mode: 'lines',
        name: 'Solid',
        line: {
          dash: 'solid',
          width: 4
        }
      };
      
      var trace2 = {
        x: [1, 2, 3, 4, 5],
        y: [6, 8, 7, 8, 6],
        mode: 'lines',
        name: 'dashdot',
        line: {
          dash: 'dashdot',
          width: 4
        }
      };
      
      var trace3 = {
        x: [1, 2, 3, 4, 5],
        y: [11, 13, 12, 13, 11],
        mode: 'lines',
        name: 'Solid',
        line: {
          dash: 'solid',
          width: 4
        }
      };
      
      var trace4 = {
        x: [1, 2, 3, 4, 5],
        y: [16, 18, 17, 18, 16],
        mode: 'lines',
        name: 'dot',
        line: {
          dash: 'dot',
          width: 4
        }
      };
      
      var data = [trace1, trace2, trace3, trace4];

      var option = {
        displaylogo:false, 
        modeBarButtonsToRemove: ['sendDataToCloud','lasso2d','select2d']           
      }
      
      var layout = {
        title: 'Line Dash',
        xaxis: {
          range: [0.75, 5.25],
          autorange: false
        },
        yaxis: {
          range: [0, 18.5],
          autorange: false
        },
        legend: {
          y: 0.5,
          traceorder: 'reversed',
          font: {
            size: 16
          }
        }
      };
      
      Plotly.newPlot('tester7', data, layout, option);
    
}

function customPlot(){

    var x_value = [1,2,3,4,5,6,7];

    var y_trace1 = [0,7,5,12,4,5,7];
    var y_trace2 = [1,1,3,1,5,2,5];
    var y_trace3 = [18,15,16,13,11,11,12];
    var y_trace4 = [11,15,2,18,8,10,7];
    var y_trace5 = [6,5,4,3,7,1,0];
    
    var trace1 = {
        x: x_value,
        y: y_trace1,
        mode: 'lines',                    //declare types of graph eg lines,marker 
        name: 'WGR',                    // naming legend lines of graph
        text: 'This is WGRs line',     //display text when cursor on lines
        hoverinfo:'text',    
        yaxis: 'y1',
        line: {
          dash: 'solid',                //type lining dot, dashdot, solid
          color: '#ffbb33',
          width: 2                      //width of lines
        },
      };
      
      var trace2 = {
        x: x_value,
        y: y_trace2,
        mode: 'lines',
        name: 'Gas Rate',
        text: 'This is Gas Rates line',
        hoverinfo:'text',
        yaxis: 'y2',
        line: {
          dash: 'solid',
          color: '#00C851',
          width: 2
        }
      };
      
      var trace3 = {
        x: x_value,
        y: y_trace3,
        mode: 'lines',
        name: 'CGR',
        text: 'This is CGRs line',
        hoverinfo:'text',
        yaxis: 'y3',
        line: {
          dash: 'solid',
          color: '#33b5e5',
          width: 2
        }
      };
      
      var trace4 = {
        x: x_value,
        y: y_trace4,
        mode: 'lines',
        name: 'FTHP',
        text: 'This is FTHPs line',
        yaxis: 'y4',
        line: {
          dash: 'solid',
          color: '#ff4444',
          width: 2
        }
      };

      var trace5 = {
        x: x_value,
        y: y_trace5,
        mode: 'lines',
        name: 'Choke',
        text: 'This is Chokes line',
        yaxis: 'y5',
        line: {
          dash: 'solid',
          color: '#aa66cc',
          width: 2
        }
      };
      
      var data = [trace1, trace2, trace3, trace4, trace5];

      var option = {
          displaylogo:false,            //optional to remove tooltip on plotly graph
      }
      
      var layout = {
        paper_bgcolor: '#f5f5f5',
        plot_bgcolor: '#f5f5f5',
        title: 'Line Dash',
        width: 1400,
        height: 550,
        xaxis: {
          range: [0.75, 7],
          domain: [0.12,0.95]
        },
        yaxis: {
          title: 'WGR',
          spikethickness:1,  
          range: [0, 18.5],
          autorange: false,
          titlefont: {
            family: 'museo',
            size: 12,
            color: '#3d3935'
          }
        },
        yaxis2: {
          title: 'Gas Rate',
          spikethickness:1,  
          range: [0, 18.5],
          autorange: false,
          anchor: 'free',
          overlaying: 'y',
          side: 'left',
          position: -0.03,
          titlefont: {
            family: 'museo',
            size: 12,
            color: '#3d3935'
          }
        },
        yaxis3: {
          title: 'CGR',
          spikethickness:1,  
          range: [0, 18.5],
          autorange: false,
          anchor: 'free',
          overlaying: 'y',
          side: 'left',
          position: 0.06,
          titlefont: {
            family: 'museo',
            size: 12,
            color: '#3d3935'
         }
        },
        yaxis4: {
          title: 'FTHP',
          spikethickness:1,  
          range: [0, 18.5],
          autorange: false,
          anchor: 'x',
          overlaying: 'y',
          side: 'right',
          titlefont: {
            family: 'museo',
            size: 12,
            color: '#3d3935'
         }
        },
        yaxis5: {
          title: 'Choke',
          spikethickness:1,  
          range: [0, 18.5],
          autorange: false,
          anchor: 'free',
          overlaying: 'y',
          side: 'right',
          position: 1,
          titlefont: {
            family: 'museo',
            size: 12,
            color: '#3d3935'
         }
        },
        legend: {                       //position the legend
          'orientation': 'h',
          x:0.35,  
          y: -0.1,
          traceorder: 'reversed',
          font: {
            size: 16,
            family:'roman'
          }
        }
      };
      
      Plotly.newPlot('customPlot', data, layout, option);
}
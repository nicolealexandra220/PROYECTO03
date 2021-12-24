window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light2", // "light2", "dark1", "dark2"
        animationEnabled: false, // change to true		
        title:{
            text: "Capítulos por temporadas"
        },
        data: [
        {
            // Change type to "bar", "area", "spline", "pie",etc.
            type: "bar",
            dataPoints: [
                { label: "Temporada 1",  y: 36  },
                { label: "Temporada 2", y: 40  },
                { label: "Temporada 3", y: 40  },
                { label: "Temporada 4",  y: 40  },
                { label: "Temporada 5",  y: 40  },
                { label: "Temporada 6",  y: 44  },
                { label: "Temporada 7",  y: 14  },
            ]
        }
        ]
    });
    chart.render();
    
    }
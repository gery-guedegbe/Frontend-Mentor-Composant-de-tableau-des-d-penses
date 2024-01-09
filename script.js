// Charger les données depuis le fichier JSON
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // Extraire les labels et les valeurs du JSON
    const labels = data.map((entry) => entry.day);
    const values = data.map((entry) => entry.amount);

    // Indice de la donnée que vous souhaitez colorer différemment (par exemple, la première donnée)
    const dataIndexToColor = 1;

    // Créer un graphique à barres avec Chart.js
    const ctx = document.getElementById("myGraph").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "$",
            data: values,
            backgroundColor: (context) => {
              const dataIndex = context.dataIndex;
              return dataIndex === dataIndexToColor
                ? " hsl(186, 34%, 60%)"
                : " hsl(10, 79%, 65%)";
            },

            hoverBackgroundColor: (context) => {
              const dataIndex = context.dataIndex;
              return dataIndex === dataIndexToColor
                ? "hsl(186, 52%, 65%)"
                : "hsl(10, 57%, 65%)";
            },
            borderColor: "transparent",
            borderRadius: 4,
            borderWidth: 0,
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false,
            },
            beginAtZero: true,
          },
          y: {
            grid: {
              display: false,
            },
            display: false,
            beginAtZero: true,
          },
        },
        legend: {
          display: false,
        },
      },
    });
  });

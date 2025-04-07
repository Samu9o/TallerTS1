import { series } from "./data.js";
import { Serie } from "./serie.js";

// Función para renderizar la tabla con la lista de series
function renderTable(series: Serie[]): void {
  const tableBody = document.getElementById("series-table-body");
  if (!tableBody) {
    console.error("No se encontró el elemento 'series-table-body' en el DOM.");
    return;
  }

  series.forEach(serie => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    // Agrega un evento click para mostrar el detalle de la serie
    row.addEventListener("click", () => {
      showSeriesDetail(serie);
    });
    tableBody.appendChild(row);
  });
}

// Función para calcular y mostrar el promedio de temporadas
function renderAverage(series: Serie[]): void {
  const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
  const average = totalSeasons / series.length;
  const averageElement = document.getElementById("average-seasons");
  if (!averageElement) {
    console.error("No se encontró el elemento 'average-seasons' en el DOM.");
    return;
  }
  averageElement.innerText = `Promedio de temporadas: ${average.toFixed(2)}`;
}

// Función para mostrar el detalle de una serie en la Card de Bootstrap
function showSeriesDetail(serie: Serie): void {
  const detailContainer = document.getElementById("series-detail");
  if (!detailContainer) {
    console.error("No se encontró el elemento 'series-detail' en el DOM.");
    return;
  }
  detailContainer.innerHTML = `
    <div class="card">
      <img class="card-img-top" src="${serie.image}" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.link}" class="btn btn-primary" target="_blank">Ver más</a>
      </div>
    </div>
  `;
}


// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  console.log("Series cargadas:", series);
  renderTable(series);
  renderAverage(series);
});

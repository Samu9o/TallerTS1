import { series } from "./data.js";
// Función para renderizar la tabla con la lista de series
function renderTable(series) {
    var tableBody = document.getElementById("series-table-body");
    if (!tableBody) {
        console.error("No se encontró el elemento 'series-table-body' en el DOM.");
        return;
    }
    series.forEach(function (serie) {
        var row = document.createElement("tr");
        row.innerHTML = "\n      <td>".concat(serie.id, "</td>\n      <td>").concat(serie.name, "</td>\n      <td>").concat(serie.channel, "</td>\n      <td>").concat(serie.seasons, "</td>\n    ");
        tableBody.appendChild(row);
    });
}
// Función para calcular y mostrar el promedio de temporadas
function renderAverage(series) {
    var totalSeasons = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    var average = totalSeasons / series.length;
    var averageElement = document.getElementById("average-seasons");
    if (!averageElement) {
        console.error("No se encontró el elemento 'average-seasons' en el DOM.");
        return;
    }
    averageElement.innerText = "Promedio de temporadas: ".concat(average.toFixed(2));
}
// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    console.log("Series cargadas:", series);
    renderTable(series);
    renderAverage(series);
});

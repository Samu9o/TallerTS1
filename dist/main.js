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
        // Agrega un evento click para mostrar el detalle de la serie
        row.addEventListener("click", function () {
            showSeriesDetail(serie);
        });
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
// Función para mostrar el detalle de una serie en la Card de Bootstrap
function showSeriesDetail(serie) {
    var detailContainer = document.getElementById("series-detail");
    if (!detailContainer) {
        console.error("No se encontró el elemento 'series-detail' en el DOM.");
        return;
    }
    detailContainer.innerHTML = "\n    <div class=\"card\">\n      <img class=\"card-img-top\" src=\"".concat(serie.image, "\" alt=\"").concat(serie.name, "\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(serie.name, "</h5>\n        <p class=\"card-text\">").concat(serie.description, "</p>\n        <a href=\"").concat(serie.link, "\" class=\"btn btn-primary\" target=\"_blank\">Ver m\u00E1s</a>\n      </div>\n    </div>\n  ");
}
// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    console.log("Series cargadas:", series);
    renderTable(series);
    renderAverage(series);
});

// SEARCH FILTER APP
// 244. Mostrar propiedades por defecto

import properties from "./datos.js";

const doc = document;

//#region Constantes elementos del DOM
const propertyTypeSelect = doc.querySelector("#tipo-inmueble");
const operationTypeSelect = doc.querySelector("#tipo-operacion");
const minPriceBuySelect = doc.querySelector("#precio-desde-comprar");
const maxPriceBuySelect = doc.querySelector("#precio-hasta-comprar");
const minPriceRentSelect = doc.querySelector("#precio-desde-rentar");
const maxPriceRentSelect = doc.querySelector("#precio-hasta-rentar");
const searchButton = doc.querySelector("#buscar-btn");
const clearSearchButton = doc.querySelector("#borrar-btn");
const propertiesContainer = doc.querySelector(".properties-container");
// #endregion

// 245. Mostrar propiedades por defecto (II)
// funcion para mostrar las propiedade inmobiliarias en el DOM
function showProperties(properties) {
  // limpiar el contenido actual
  propertiesContainer.innerHTML = "";

  // verificar si el arreglo de objetos esta vacío
  if (properties.length === 0) {
    propertiesContainer.innerHTML =
      "<p class='noResults'>Lo sentimos, por el momento no tenemos propiedades que coincidan con su critério de busqueda</p>";
  } else {
    // iterar cada uno de los objetos y crear un elemento HTML para mostrar las propiedades
    properties.forEach((property) => {
      const propertyElement = doc.createElement("div");
      propertyElement.classList.add("property");

      // agregar estrutura HTML con la informacion de las propiedades inmobiliarias
      propertyElement.innerHTML = `
      
      <a href="#">
        <img src='${property.imagen}' alt='' >
      </a>
      <br>
      <a href='#'>
        <b>${property.titulo}</b>
      </a>
      <p>${property.caracteristicas}</p>
      <p>US$${property.precio}</p>
      `;

      // Agregar elementos al contenedeor de resultados
      propertiesContainer.appendChild(propertyElement);
    });
  }
}

showProperties(properties);

// 246. Filtrar propiedades según los criterios seleccionados
// funcion para filtrar las propiedades según los criterios seleccionados
function filterProperties() {
  showSpinner();

  const propertyType = propertyTypeSelect.value;
  const operationType = operationTypeSelect.value;
  let minPrice;
  let maxPrice;

  if (operationType === "comprar") {
    // asignar valores a los precios dependiendo del tipo de operacion seleccionado
    minPrice = parseInt(minPriceBuySelect.value);
    maxPrice = parseInt(maxPriceBuySelect.value);
  } else if (operationType === "rentar") {
    minPrice = parseInt(minPriceRentSelect.value);
    maxPrice = parseInt(maxPriceRentSelect.value);
  }

  // filtrar las propiedades ssegun los criterios definidos
  const filterProperties = properties.filter((property) => {
    if (propertyType && property.tipo != propertyType) return false;

    if (operationType && property.operacion != operationType) return false;

    if (
      operationType === "comprar" &&
      ((minPrice && property.precio < minPrice) ||
        (maxPrice && property.precio < maxPrice))
    )
      return false;

    if (
      operationType === "rentar" &&
      ((minPrice && property.precio < minPrice) ||
        (maxPrice && property.precio < maxPrice))
    )
      return false;

    // cumple con todos los criterios de filtrado
    return true;
  });

  // ocultar el spinner despues de 3 segundos
  setTimeout(() => {
    hideSpinner();
    showProperties(filterProperties);
  }, 3000);
}

// 247. Configurar el comportamiento de los selectores de precio
// Ocultar y deshabilitar los selectores de precios de renta
minPriceRentSelect.style.display = "none";
maxPriceRentSelect.style.display = "none";
minPriceRentSelect.disabled = true; //deshabilitar selector de precio minimo
maxPriceRentSelect.disabled = true; //deshabilitar selectro de precio maximo

// 248. Limpiar búsquedas
// funcion para mostrar un spinner de carga
function showSpinner() {
  propertiesContainer.innerHTML = "<div class='spinner'></div>";
}

// funcion para ocultar el spinner de carga
function hideSpinner() {
  const spinner = doc.querySelector(".spinner");
  if (spinner) propertiesContainer.removeChild(spinner);
}

// 247. Configurar el comportamiento de los selectores de precio
// configurar el comportamiento de los selectores de precios al cambiar el tipo de operacion
operationTypeSelect.addEventListener("change", () => {
  // si el tipo de operacion es rentar mostrar los precios de renta
  if (operationTypeSelect.value === "rentar") {
    minPriceBuySelect.style.display = "none";
    maxPriceBuySelect.style.display = "none";

    minPriceRentSelect.style.display = "block";
    maxPriceRentSelect.style.display = "block";

    minPriceRentSelect.disabled = false;
    maxPriceRentSelect.disabled = false;

    // reiniciamos los precios de compra
    minPriceBuySelect.selectedIndex = 0;
    maxPriceBuySelect.selectedIndex = 0;
  } else {
    minPriceBuySelect.style.display = "block";
    maxPriceBuySelect.style.display = "block";

    minPriceRentSelect.style.display = "none";
    maxPriceRentSelect.style.display = "none";

    minPriceRentSelect.disabled = true;
    maxPriceRentSelect.disabled = true;

    // reiniciamos los precios de compra
    minPriceRentSelect.selectedIndex = 0;
    maxPriceRentSelect.selectedIndex = 0;
  }
});

// Asociar la funcion de filtrado al boton de busqueda
searchButton.addEventListener("click", filterProperties);

// limpiar los filtros de busqueda y los resultados
clearSearchButton.addEventListener("click", () => {
  propertyTypeSelect.selectedIndex = 0;
  operationTypeSelect.selectedIndex = 0;
  minPriceBuySelect.selectedIndex = 0;
  maxPriceBuySelect.selectedIndex = 0;
  minPriceRentSelect.selectedIndex = 0;
  maxPriceRentSelect.selectedIndex = 0;

  showProperties(properties);
});

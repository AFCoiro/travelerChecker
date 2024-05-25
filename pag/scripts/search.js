// let containerCardTrip = document.getElementsByClassName("containerCardTrip");

// // Consumiendo la API https://restcountries.com
// const apiUrl = 'https://restcountries.com/v3.1/all';
// const paisesSeleccionados = ['Argentina', 'Brasil', 'Ecuador', 'España', 'Francia', 'Italia', 'Irlanda', 'Indonesia', 'Japón', 'Egipto', 'Australia', 'Sudáfrica'];

// async function procesaDatos() {
//   try {
//     const datos = await fetch(apiUrl).then(res => res.json());
//     const paisesFiltrados = datos.filter(pais => paisesSeleccionados.includes(pais.translations.spa.common));
//     filtroPaises(paisesFiltrados);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// function filtroPaises(paises) {
//   paises.forEach(pais => {
//     let nombre = pais.translations.spa.common;
//     let capital = pais.capital ? pais.capital[0] : 'Capital no disponible';

//     let cardsTrip = document.createElement('div');
//     cardsTrip.setAttribute('class', 'cardsTrip');
//     cardsTrip.innerHTML = `
//       <div>
//         <img class="imgCardTrip" src="/img/paises/${nombre}.jpg" alt="Imagen de ${nombre}">
//       </div>
//       <a class="TextCardTrip" href="travels.html" target="_blank">
//         <div>
//           <h3>${pais.flag} ${nombre}</h3>
//           <h4>Septiembre - 8 Noches</h4>
//           <p>Vuelo + Hotel ${capital} all inclusive + 3 Excursiones por ${capital}</p>
//         </div>
//         <div>
//           <h4>Precio por persona desde</h4>
//           <h2>$1.887.237</h2>
//           <p>Incluye impuestos, tasas y cargos</p>
//         </div>
//       </a>
//     `;

//     cardsTrip.querySelector('.TextCardTrip').addEventListener('click', function () {
//       const selectedCountryInfo = {
//         nombre: nombre,
//         capital: capital,
//         imagen: `/img/paises/${nombre}.jpg`
//       };
//       localStorage.setItem('selectedCountry', JSON.stringify(selectedCountryInfo));
//     });

//     containerCardTrip[0].append(cardsTrip);
//   });
// }

// procesaDatos();


// document.addEventListener('DOMContentLoaded', function() {
//   // Recuperar la información del país desde localStorage
//   const storedCountryInfo = JSON.parse(localStorage.getItem('selectedCountry'));

//   if (storedCountryInfo) {
//     const mainTravel = document.getElementById('mainTravel');
//     mainTravel.innerHTML = `
//       <h1>Tour por ${storedCountryInfo.nombre} durante 3 días + vuelo incluido</h1>
//       <img src="${storedCountryInfo.imagen}" alt="Imagen de ${storedCountryInfo.nombre}">
//       <p>Capital: ${storedCountryInfo.capital}</p>
//     `;

//     fetch('../../tours.json')
//       .then(response => response.json())
//       .then(data => {
//         if (data[storedCountryInfo.nombre]) {
//           const additionalContent = data[storedCountryInfo.nombre].descripcion;
//           mainTravel.insertAdjacentHTML('beforeend', `
//             <p>${additionalContent}</p>
//           `);
//           console.log("mi contenido"+additionalContent);
//         }
//       })
//       .catch(error => {
//         console.error("Errorjtjtjtjtjtjtjtj adicional:", error);
//       });

//     console.log('Información del país recuperada de localStorage:', storedCountryInfo); // Mensaje de consola
//   } else {
//     console.error("errorrrrrrrrrrrrrrrrrrrrrrrrr localStorage.");
//   }
// });


let containerCardTrip = document.getElementsByClassName("containerCardTrip");
const apiUrl = 'https://restcountries.com/v3.1/all';
const paisesSeleccionados = ['Argentina', 'Brasil', 'Ecuador', 'España', 'Francia', 'Italia', 'Irlanda', 'Indonesia', 'Japón', 'Egipto', 'Australia', 'Sudáfrica'];

async function ProcesarDatos() {
  try {
    const datos = await fetch(apiUrl);
    const datosJson = await datos.json();

     const paisesFiltrados = datosJson.filter(pais => paisesSeleccionados.includes(pais.translations.spa.common));

    console.log(paisesFiltrados);
  } catch (error) {
    console.error("*****ERROR*****: "+error);
  }
}
ProcesarDatos();
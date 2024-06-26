let containerCardTrip = document.getElementsByClassName("containerCardTrip");

//consumiendo api https://restcountries.com/
const apiUrl = 'https://restcountries.com/v3.1/all';
const paisesSeleccionados = ['Argentina', 'Brasil', 'Ecuador', 'España', 'Francia', 'Italia', 'Irlanda', 'Indonesia', 'Japón', 'Egipto', 'Australia', 'Sudáfrica'];
const jsonUrl = './../tours.json';
/*llamado a una api externa y a un json interno*/
async function ProcesarDatos() {
  try {
    const datosApi = await fetch(apiUrl);
    const datosA = await datosApi.json();
    const paisesFiltrados = datosA.filter(pais => paisesSeleccionados.includes(pais.translations.spa.common));
    const datosJson = await fetch(jsonUrl);
    const datosJ = await datosJson.json();

    fnMostrarPaises(paisesFiltrados, datosJ);
    console.log(paisesFiltrados);
    console.log(datosJ);

  } catch (error) {
    console.error("*****ERROR*****: " + error);
  }
}
ProcesarDatos();
/*los datos guardados los usamos para mostrarlos en las cards de productos*/
function fnMostrarPaises(paisA, paisJ) {
  paisA.forEach(pais => {
    let country = pais.translations.spa.common;
    let capital = pais.capital;
    let bandera = pais.flag;
    let mapa = pais.maps.googleMaps;
    let paisInfo = paisJ[country];

    const cardsTrip = document.createElement("div");
    cardsTrip.setAttribute('class', 'cardsTrip');
    cardsTrip.innerHTML = `
        <div>
          <img class="imgCardTrip" src="./../img/paises/${country}.jpg" alt="Imagen de ${country}">
        </div>
        <a class="linkCardTrip" href="travels.html" target="_blank">
          <div>
            <h3>${bandera} ${country}</h3>
            <h4>${paisInfo.duracion}</h4>
            <p>Vuelo + Hotel ${paisInfo.titulo}</p>
          </div>
          <div>
            <h4>Precio por persona desde</h4>
            <h2>$${paisInfo.precio}</h2>
            <p>Incluye impuestos, tasas y cargos</p>
          </div>
        </a>
      `;

/*guardo la informacion de la card donde se hizo click en el local storage*/
      cardsTrip.querySelector('.linkCardTrip').addEventListener('click', function () {
        const infoPaisGuardado = {
          nombre: country,
          capital: capital,
          bandera: bandera,
          mapa: mapa,
          imagen: `./../img/paises/${country}.jpg`,
          descripcion: paisInfo.descripcion,
          precio: paisInfo.precio,
          titulo: paisInfo.titulo,
          salida: paisInfo.salida,
          duracion: paisInfo.duracion,
        };
        localStorage.setItem('infoPais', JSON.stringify(infoPaisGuardado));
      });
  
      containerCardTrip[0].append(cardsTrip);
    });
  }
/*lo guardado en LS lo uso para que mediante DOMContentLoaded lo  muestre en la pagina travels.html */
document.addEventListener('DOMContentLoaded', function() {
  const infoPaisesGuardados = JSON.parse(localStorage.getItem('infoPais'));

  if (infoPaisesGuardados) {
    const mainTravel = document.getElementById('mainTravel');
    mainTravel.innerHTML = `
    <div class="contTravel">
    <section class="travelInfo">
        <img src="${infoPaisesGuardados.imagen}" alt="${infoPaisesGuardados.nombre}">
        <div class="contTravelText containerWidth">
            <h2>Descripcion</h2>
            <h3>${infoPaisesGuardados.bandera}  ${infoPaisesGuardados.titulo}</h3>
            <h4>Plan Cuota Simple - 12 cuotas fijas</h4>
            <ul>
                <li>Duración: <span>${infoPaisesGuardados.duracion}</span></li>
                <li>Destinos: <span>${infoPaisesGuardados.capital}</span></li>
                <li>Saliendo desde: <span>${infoPaisesGuardados.capital}</span></li>
                <li>Fecha de salida: <span>${infoPaisesGuardados.salida}</span></li>
            </ul>
            <h3>Sobre ${infoPaisesGuardados.nombre}</h3>
            <p>${infoPaisesGuardados.descripcion}</p>
        </div>
    </section>
    <section class="travelPay">
        <h2>${infoPaisesGuardados.bandera} ${infoPaisesGuardados.titulo}</h2>
        <h3>📅Salida: ${infoPaisesGuardados.salida}</h3>
        <h3>👤👤2 pasajeros,🛏️ 1 habitación</h3>
        <h3>Precio total - 2 pasajeros: <span>$${infoPaisesGuardados.precio}</span></h3>
        <a href="contact.html" class="botonContacto">Consultar</a>
        
    </section>
</div>
    `;
  }
});
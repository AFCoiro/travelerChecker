let containerCardTrip = document.getElementsByClassName("containerCardTrip");

// Consumiendo la Api https://restcountries.com
const apiUrl = 'https://restcountries.com/v3.1/all';
const paisesSeleccionados = ['Argentina','Brazil','Spain', 'France', 'Italy','Ireland','Indonesia','Japan','Egipt'];

const jsonCont = '../tours.json';


fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Hubo un problema al realizar la solicitud.');
    }
    return response.json();
  })
  .then(data => {
    const paisesFiltrados = data.filter(country => paisesSeleccionados.includes(country.name.common));
    mostrarPaisesSeleccionados(paisesFiltrados);
  })
  .catch(error => {
    console.error('Hubo un problema con la solicitud fetch:', error);
  });

  function mostrarPaisesSeleccionados(paisesData) {
    paisesData.forEach(country => {

        let cardsTrip = document.createElement('div')
        cardsTrip.setAttribute('class','cardsTrip')
          //cardsTrip.setAttribute('id',`${producto.id}`)
          cardsTrip.innerHTML = `
          <div>
          <img class="imgCardTrip" src="https://images.almundo.com/205/image/fetch/fl_progressive,q_auto,w_385,h_240,f_jpg/https://almundo-com-res.cloudinary.com/image/upload/v1552411614/BANCO%20DE%20IMAGENES%202019/Punta%20Cana/ishan-seefromthesky-193028-unsplash.jpg" alt="">
      </div> 
      <a class="TextCardTrip" href="travels.html" target="_blank">
          <div>
              <h3>${country.flag} ${country.name.common}</h3>
              <h4>Septiembre - 8 Noches</h4>
              <p>Vuelo + Hotel ${country.capital } all inclusive + 3 Excursioines por ${country.capital }</p>
          </div>
          <div>
              <h4>Precio por persona desde</h4>
              <h2>$1.887.237</h2>
              <p>Incluye impuestos, tazas y cargos</p>
          </div>
      </a>           
          `;

          containerCardTrip[0].append(cardsTrip);



      // Mostrar el nombre del país y su capital
      console.log('País:', country.name.common);
      console.log('Capital:', country.capital );
      console.log('Code:', country.cca3);
      console.log('Flag:', country.flag);
      console.log('-----------------------');
    });
  }



  
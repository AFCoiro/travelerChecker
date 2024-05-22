// Consumiendo la Api https://restcountries.com

const apiUrl = 'https://restcountries.com/v3.1/all';
const paisesSeleccionados = ['Argentina', 'Ireland', 'Chile', 'Spain', 'France', 'Italy'];

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
      // Mostrar el nombre del país y su capital
      console.log('País:', country.name.common);
      console.log('Capital:', country.capital );
      console.log('Code:', country.cca3);
      console.log('Flag:', country.flag);
      console.log('-----------------------');
    });
  }

  let containerCardTrip = document.getElementsByClassName("containerCardTrip");

  
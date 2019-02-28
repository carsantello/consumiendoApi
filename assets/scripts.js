//QUERYS al DOM
const cards = document.getElementById('cards');
//URL de API de Rick&Morty characters
const apiCha = 'https://rickandmortyapi.com/api/character';

//es necesaria l generación de este codigo para traer el JSON
fetch(apiCha)
  .then(function(response) {
    return response.json();
  })
  .then(function(respJson){
    const characters = respJson.results
    // console.log(respJson.results);
    // console.log(respJson.info);
    printCharacters(characters);
    console.log(respJson);
    })
  .catch(function(error){
    console.log(error);
  })

// functions section
  function printCharacters(characters){
    for(let character of characters) {
//nuevo ini
//nuevo fin
      fetch(character.location.url)
        .then(function(resp){
          return resp.json();
        })
        .then(function(respLoc){
          cards.innerHTML += `
          <p>${character.gender}</p>
          <p>${character.name}</p>
          <p>${character.id}</p>
          <img src="${character.image}">
          <p>${character.location.name}</p>
          <p>${respLoc.dimension}</p>
          <p>${character.episode}</p>
          <p>${character.species}</p>
          <p>${character.status}</p>
          `
        })
    }
  }

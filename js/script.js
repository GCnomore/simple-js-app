var pokemonRepository = (function () {
  var pokemonList = [];

  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function showLodaingMessage() {
    document.querySelector('.pokedex').classList.add('hidden');
  }

  function hideLoadingMessage() {
    document.querySelector('.pokedex').classList.remove('hidden');
    document.querySelector('.loader').classList.add('hidden');
  }

  function loadList() {
    showLodaingMessage();
    return fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        json.results.forEach((item) => {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }

  function loadDetails(item) {
    showLodaingMessage();
    //----async
    var url = item.detailsUrl;
    //start fetch
    return (
      fetch(url) //---- await axios.get
        .then((response) => {
          //when fectched, return it into promise object
          return response.json();
        })
        //then use fetched data to add values to pokemon item that will be pushed to pokemon list
        .then((details) => {
          //------------------------------------
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
          hideLoadingMessage();
        })
        .catch((e) => {
          console.error(e);
        })
    );
  }

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
    console.log(pokemonList);
    // if (
    //   typeof pokemon === 'object' &&
    //   'name' in pokemon &&
    //   'height' in pokemon &&
    //   'type' in pokemon
    // ) {
    // }
  }
  function showDetails(pokemon) {
    loadDetails(pokemon).then(() => {
      console.log(pokemon);
    });
  }

  function addListItem(pokemon) {
    var pokemon_list = document.querySelector('.pokemon-list');
    var listItem = document.createElement('li');
    var button = document.createElement('button');
    button.innerText = pokemon.name;
    button.addEventListener('click', () => {
      showDetails(pokemon);
    });
    button.classList.add('pokeButton');
    listItem.appendChild(button);
    pokemon_list.appendChild(listItem);
  }
  return {
    add,
    getAll,
    addListItem,
    loadList,
    loadDetails,
    hideLoadingMessage,
  };
})();

pokemonRepository.loadList().then(() => {
  pokemonRepository.getAll().forEach((pokemon) => {
    pokemonRepository.addListItem(pokemon);
    pokemonRepository.hideLoadingMessage();
  });
});

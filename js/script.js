var pokemonRepository = (function () {
  var pokemonList = [];
  var modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.add('hidden');
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
  }
  function showDetails(pokemon) {
    //Adding HTML elements
    var modal = document.createElement('div');
    var buttonContainer = document.createElement('div');
    var closeButton = document.createElement('button');
    var pokeName = document.createElement('h1');
    var pokeHeight = document.createElement('span');
    var imgContainer = document.createElement('div');
    var pokeImg = document.createElement('img');
    var pokeType = document.createElement('ul');
    modal.classList.add('modal');
    pokeImg.classList.add('pokeImg');
    buttonContainer.classList.add('buttonContainer');
    imgContainer.classList.add('imgContainer');
    pokeType.classList.add('pokeType');

    loadDetails(pokemon).then(() => {
      //Adding contents to HTML elements created above
      closeButton.innerText = 'X';
      pokeName.innerText = pokemon.name;
      pokeHeight.innerText = 'Height: ' + pokemon.height + ' M';
      buttonContainer.appendChild(closeButton);
      modal.appendChild(buttonContainer);
      modal.appendChild(pokeName);
      modal.appendChild(pokeHeight);
      pokemon.types.forEach((item) => {
        var typeList = document.createElement('li');
        typeList.innerText = item.type.name;
        modal.appendChild(pokeType);
        pokeType.appendChild(typeList);
        typeList.classList.add(typeList.textContent);
      });
      imgContainer.appendChild(pokeImg);
      modal.appendChild(imgContainer);
      pokeImg.setAttribute('src', pokemon.imageUrl);
      modalContainer.appendChild(modal);

      function showModal() {
        modalContainer.classList.remove('hidden');
        document.querySelector('.pokedex').classList.add('modalBackground');

        if (modalContainer.classList != 'hidden') {
          closeButton.addEventListener('click', hideModal);
          window.addEventListener('keydown', hideModal);
          document
            .querySelector('.pokedex')
            .addEventListener('click', hideModal);
        }

        function hideModal() {
          modalContainer.classList.add('hidden');
          while (modalContainer.firstChild) {
            modalContainer.removeChild(modalContainer.firstChild);
          }
          document
            .querySelector('.pokedex')
            .classList.remove('modalBackground');
        }
      }
      showModal();
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

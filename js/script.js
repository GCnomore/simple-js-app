var pokemonRepository = (function () {
  var pokemonList = [
    {
      name: 'Pikachu',
      height: 0.4,
      type: ['Electric'],
    },
    {
      name: 'Charmeleon',
      height: 1.1,
      type: ['Fire'],
    },
    {
      name: 'Alakazam',
      height: 1.5,
      type: ['Phychic'],
    },
    {
      name: 'Dugtrio',
      height: 0.7,
      type: ['Ground'],
    },
    {
      name: 'Gyarados',
      height: 6.5,
      type: ['Water', 'Flying'],
    },
    {
      name: 'Zapdos',
      height: 1.6,
      type: ['Electric', 'Flying'],
    },
    {
      name: 'Hitmonlee',
      height: 1.5,
      type: ['Fighting'],
    },
  ];

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'height' in pokemon &&
      'type' in pokemon
    ) {
      pokemonList.push(pokemon);
    }
  }
  function showDetails(pokemon) {
    console.log(pokemon);
  }

  function addListItem(pokemon) {
    var pokemon_list = document.querySelector('.pokemon-list');
    var listItem = document.createElement('li');
    var button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokeButton');
    button.addEventListener('click', () => {
      showDetails(pokemon);
    });
    listItem.appendChild(button);
    pokemon_list.appendChild(listItem);
  }
  return {
    add,
    getAll,
    addListItem,
  };
})();

var hi = {
  name: 'HI',
  height: 3,
  type: ['Ground'],
};
pokemonRepository.add(hi);

//Passing Pokemon data to the list
pokemonRepository.getAll().forEach((pokemon) => {
  pokemonRepository.addListItem(pokemon);
});

//Applying color based on Pokemon's type
// var color;
// pokemon.type.forEach(function (itemType) {
//   if (itemType == 'Electric') {
//     color = '<span style="color:yellow">';
//   } else if (itemType == 'Fire') {
//     color = '<span style="color:red">';
//   } else if (itemType == 'Ground') {
//     color = '<span style="color:brown">';
//   } else if (itemType == 'Phychic') {
//     color = '<span style="color:purple">';
//   } else if (itemType == 'Water') {
//     color = '<span style="color:blue">';
//   } else if (itemType == 'Fighting') {
//     color = '<span style="color:orange">';
//   }
// });

//Adding message to Pokemon based on their height
// var size;
// if (pokemon.height > 1.5) {
//   size = "Wow, that's big!";
// } else if (pokemon.height > 0.7 && pokemon.height < 1.5) {
//   size = 'Teenage Pokemon';
// } else {
//   size = 'Small Pokemon';
// }
// document.write(
//   '<div class="box">' +
//     pokemon.name +
//     '(Height: ' +
//     pokemon.height +
//     'M)' +
//     '<br />' +
//     size +
//     color +
//     '<br />' +
//     pokemon.type +
//     '</div>'
// );

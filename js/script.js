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

  return {
    add: add,
    getAll: getAll,
  };
})();

var hi = {
  name: 'HI',
  height: 3,
  type: ['Ground'],
};
pokemonRepository.add(hi);

pokemonRepository.getAll().forEach(function (pokemon) {
  // var pokemon_list = document.querySelector('.pokemon-list');
  // var listItem = document.createElement('li');
  // var button = document.createElement('button').innerText(pokemonRepository.);

  var color;
  pokemon.type.forEach(function (itemType) {
    if (itemType == 'Electric') {
      color = '<span style="color:yellow">';
    } else if (itemType == 'Fire') {
      color = '<span style="color:red">';
    } else if (itemType == 'Ground') {
      color = '<span style="color:brown">';
    } else if (itemType == 'Phychic') {
      color = '<span style="color:purple">';
    } else if (itemType == 'Water') {
      color = '<span style="color:blue">';
    } else if (itemType == 'Fighting') {
      color = '<span style="color:orange">';
    }
  });
  var size;
  if (pokemon.height > 1.5) {
    size = "Wow, that's big!";
  } else if (pokemon.height > 0.7 && pokemon.height < 1.5) {
    size = 'Teenage Pokemon';
  } else {
    size = 'Small Pokemon';
  }
  document.write(
    '<div class="box">' +
      pokemon.name +
      '(Height: ' +
      pokemon.height +
      'M)' +
      '<br />' +
      size +
      color +
      '<br />' +
      pokemon.type +
      '</div>'
  );
});

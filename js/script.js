var pokemonList = [
  {
    name: 'Pikachu',
    height: 0.4,
    type: 'Electric',
  },
  {
    name: 'Charmeleon',
    height: 1.1,
    type: 'Fire',
  },
  {
    name: 'Alakazam',
    height: 1.5,
    type: 'Phychic',
  },
  {
    name: 'Dugtrio',
    height: 0.7,
    type: 'Ground',
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
    type: 'Fighting',
  },
];

for (var i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 1.5) {
    document.write(
      i +
        1 +
        '. ' +
        pokemonList[i].name +
        ' (' +
        'Height: ' +
        pokemonList[i].height +
        'M' +
        ") - Wow, that's big!" +
        '<br />'
    );
  } else {
    document.write(
      i +
        1 +
        '. ' +
        pokemonList[i].name +
        ' (' +
        'Height: ' +
        pokemonList[i].height +
        'M' +
        ')' +
        '<br />'
    );
  }
}

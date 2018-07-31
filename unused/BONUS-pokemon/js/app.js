/*
  Please add all Javascript code to this file.
*/

$("#search").on("click", function(e) {
  e.preventDefault();
  $(".pokeball").removeClass("hidden");

  const color = $("#color").val();
  const url = `https://pokeapi.co/api/v2/pokemon-color/${color}/`;
  $.get(url)
    .done(function(data) {
      const promises = [];
      data.pokemon_species.forEach(function(pokemon) {
        const pokemonSearchUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;
        const promise = $.get(pokemonSearchUrl).done(function(data) {
          const sprite = data.sprites.front_default;
          const template = `<img class="hidden" src="${sprite}" />`;
          $("#pokemon").append(template);
        });
        promises.push(promise);
      });

      $.when.apply(null, promises).always(function() {
        $(".pokeball").addClass("hidden");
        $("#pokemon .hidden").removeClass("hidden");
      });
    })
    .fail(function(error) {
      console.log("ERROR: ", error);
      $(".pokeball").addClass("hidden");
    });
});

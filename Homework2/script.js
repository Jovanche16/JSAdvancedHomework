$(document).ready(function () {

    $("#getpokemons").click(function () {

        if ($("#pokemons").children().length > 0) {
            alert("Pokemons have already been fetched!");
            return;
        }

        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon",

            success: function (response) {
                console.log(response);
                for (let pokemon of response.results) {
                    $("#pokemons").append(`<li>${pokemon.name}</li>`)
                }
            },
            error: function (error) {
                alert("Error fetching data: " + error.responseText);
                console.log(error.responseText)
            }
        })
    });
})
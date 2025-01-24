$(document).ready(function () {

  $.ajax({
    url: "https://dog.ceo/api/breeds/list/all",
    
    success: function (response) {
      let breeds = response.message;
      let breedSelect = $("#breedSelect");

      for (let breed in breeds) {
        if (breeds.hasOwnProperty(breed)) {
          let capitalized =
          breed.charAt(0).toUpperCase()
            + breed.slice(1)
          breedSelect.append(new Option(capitalized, breed));
        }
      }
    },
    error: function () {
      alert("Failed to load breed data.");
    },
  });

  $("#getDogs").click(function () {
    let selectedBreed = $("#breedSelect").val();

    if (selectedBreed) {
      $.ajax({
        url: `https://dog.ceo/api/breed/${selectedBreed}/images/random`,
       
        success: function (response) {
          $("#dogImage").attr("src", response.message);
        },
        error: function () {
          alert("Failed to fetch the dog image.");
        },
      });
    } else {
      alert("Please select a breed.");
    }
  });
});

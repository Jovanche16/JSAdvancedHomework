function validateCountryCode(code) {

    code = code.toUpperCase().trim();

    if (!isNaN(code)) {
        console.log("Invalid input! Country code must consist only of letters (for exmp. 'MK' or 'MKD').");
        return;
    }

    if (code.length < 2 || code.length > 3) {
        console.log("Invalid country code! It must be 2 or 3 letters (for exmp. 'MK' or 'MKD').");
        return;
    }

    return code;
}

async function getCountryAndNeighbors(code) {
    code = validateCountryCode(code);
    if (!code) return;

    let url = `https://restcountries.com/v3.1/alpha/${code}`;
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Country not found! (${response.status})`);
        }
        let countryData = await response.json();
        let country = countryData[0];

        console.log(`Country: ${country.name.common}`, country);

        if (!country.borders || country.borders.length === 0) {
            console.log(`${country.name.common} has no bordering countries.`);
            return;
        }

        console.log("Neighbours:");
        for (let borderCode of country.borders) {
            try {
                let neighborResponse = await fetch(`https://restcountries.com/v3.1/alpha/${borderCode}`);
                if (!neighborResponse.ok) {
                    console.log(`Failed to fetch neighbor: ${borderCode}`);
                    continue;
                }

                let neighborData = await neighborResponse.json();
                let neighbor = neighborData[0];

                console.log(`- ${neighbor.name.common}`, neighbor);
            } catch (error) {
                console.log(`Error fetching neighbor ${borderCode}: ${error.message}`);
            }
        }

    }
    catch (error) {
        console.log(error)
    }
}

let code = prompt("Enter a country code (for exmp. MK for North Macedonia): ");
getCountryAndNeighbors(code);
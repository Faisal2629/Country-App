let URL = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`;

const countryList = document.getElementById('country-list');
const sortButton = document.getElementById('sort-population');

document.addEventListener('DOMContentLoaded', fetchCountryData);
sortButton.addEventListener('click', fetchSortedCountryData);

async function fetchCountryData() {
    try {
        const response = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries');
        const data = await response.json();
        displayCountries(data);
    } catch (error) {
        console.error('Error fetching country data:', error);
        countryList.innerHTML = '<p>Something went wrong. Please try again later.</p>';
    }
}

async function fetchSortedCountryData() {
    try {
        const response = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=desc');
        const data = await response.json();
        displayCountries(data);
    } catch (error) {
        console.error('Error fetching sorted country data:', error);
        countryList.innerHTML = '<p>Something went wrong. Please try again later.</p>';
    }
}

function displayCountries(countries) {
    countryList.innerHTML = '';
    countries.forEach(country => {
        const countryCard = document.createElement('div');
        countryCard.classList.add('country-card');
        countryCard.innerHTML = `<img src="${country.flag}" alt="${country.name} Flag">
            <h2>${country.name}</h2>
            <p><strong>Capital:</strong> ${country.capital}</p>
            <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Subregion:</strong> ${country.subregion}</p>
            <p><strong>Area:</strong> ${country.area.toLocaleString()} km²</p>`;
        countryList.appendChild(countryCard);
    });
}

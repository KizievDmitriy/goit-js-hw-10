const BASE_URL = 'https://restcountries.com/v3.1'

export function fetchCountries(name) {
  const url = `${BASE_URL}/name/${name}?fields=name,capital,population,flags,languages`;
  return fetch(url).then(response => response.json());
}
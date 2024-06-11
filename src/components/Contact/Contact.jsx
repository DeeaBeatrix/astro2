import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [birthdate, setBirthdate] = useState('');
  const [birthtime, setBirthTime] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [result, setResult] = useState(null);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [countryCode, setCountryCode] = useState('');

  const apiKey = '3cb9891b4f3c41b7a596743c3b023e91';

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        console.log('Countries API response:', response.data);
        const countryData = response.data.map(country => ({
          name: country.name.common,
          code: country.cca2
        }));
        setCountries(countryData);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      if (countryCode) {
        try {
          const response = await axios.get(`https://api.geoapify.com/v1/geocode/search?country=${countryCode}&type=city&apiKey=${apiKey}`);
          console.log('Cities API response:', response.data)
          const cityNames = response.data.features?.map(feature => feature.properties.city);
          if (cityNames) {
            setCities(cityNames);
          } else {
            console.error('No city data found in response:', response.data);
          }
        } catch (error) {
          console.error('Error fetching cities:', error);
        }
      }
    };
    fetchCities();
  }, [countryCode]);

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setCountry(selectedCountry);
    const selectedCountryCode = countries.find(c => c.name === selectedCountry)?.code;
    setCountryCode(selectedCountryCode);
    setCities([]);
    setCity('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://api.example.com/generate-natal-chart', {
        birthdate,
        birthtime,
        city,
        country,
      });
      setResult(response.data);
    } catch (error) {
      console.error('Erroare la generarea hartii natale:', error);
      setResult({ error: 'Harta nu s-a incarcat. Incearca mai tarziu' });
    }
  };

  return (
    <div>
      <h1 className="homepage-title"> Chart Generator </h1>
      <div className="form-container">
        <form id="natal-chart-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="birthdate">Data nasterii:</label>
            <input
              type="date"
              id="birthdate"
              name="data nasterii"
              required
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birthtime">Ora nasterii:</label>
            <input
              type="time"
              id="birthtime"
              name="ora nasterii"
              required
              value={birthtime}
              onChange={(e) => setBirthTime(e.target.value)}
            />
          </div>
          <div id='country-form' className="form-group">
            <label htmlFor="country">Tara:</label>
            <select
              id="country"
              name="country"
              required
              value={country}
              onChange={handleCountryChange}
            >
              <option value="">Selecteaza tara</option>
              {countries.map((country, index) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="city">Oras:</label>
            <select
              id="city"
              name="city"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              disabled={!country}
            >
              <option value="">Selecteaza orasul</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <button className="button-chart" type="submit">
            Genereaza harta natala
          </button>
        </form>
        <div id="result">
          {result && (
            <div>
              {result.error ? (
                <p>{result.error}</p>
              ) : (
                <div>
                  <h2>Harta Natală:</h2>
                  <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from 'react';
import axios from 'axios';
import './HartaNatala.css'
import { countries as countryData } from '../../constants/constant.js'

const HartaNatala = () => {
  const [birthdate, setBirthdate] = useState('');
  const [birthtime, setBirthTime] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [result, setResult] = useState(null);
  const [cities, setCities] = useState([]);

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setCountry(selectedCountry);
    setCities(countryData[selectedCountry] || []);
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
      <h1 className="homepage-title"> Harta Natala </h1>
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
              {Object.keys(countryData).map((countryName, index) => (
                <option key={index} value={countryName}>
                  {countryName}
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
              {cities.map((cityName, index) => (
                <option key={index} value={cityName}>
                  {cityName}
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

export default HartaNatala;

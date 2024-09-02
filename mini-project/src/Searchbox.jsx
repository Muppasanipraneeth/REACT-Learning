import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import {  useState } from 'react';
import Info from '../InfoBox';

const Searchbox = () => {
  const [search, setSearch] = useState('');
  const [result,setResult]=useState({});
  const fetchWeather = async () => {
    const apiKey = 'ca242d6486f847b39e693102240209'; // Your API key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${search}&aqi=no`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      let result ={
        feelslike_c:data.current.feelslike_c,
        humidity:data.current.humidity,
        temp_c:data.current.temp_c,
        last_updated:data.current.last_updated,
        location:data.location.country,
        city:data.location.name,
        region:data.location.region
      }
      setResult(result);
      console.log(result);
      
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search Term:', search);
    fetchWeather();
    setSearch("");
  };

  return (<>
    <div className="flex items-center justify-center">
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-center">Search for the Weather</h3>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <TextField
            required
            id="outlined-required"
            label="Search-city"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            name="search"
            className="mb-4 w-full"
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            type="submit"
            className="mt-2"
          >
            Search
          </Button>
        </form>
      </div>
    </div>
    <div>
        <Info result={result}/>
    </div>
    </>
  );
};

export default Searchbox;

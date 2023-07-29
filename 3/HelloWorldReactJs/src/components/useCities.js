import { useEffect, useState } from 'react';
import StateMap from '../utils/state-city.json';

const useCities = (state) => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetchData();
    async function fetchData() {
      const json = StateMap[state];
      setCities(json);
    }
  }, [state]);
  return cities;
};

export default useCities;

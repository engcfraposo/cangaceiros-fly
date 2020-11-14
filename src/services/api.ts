import axios from 'axios';

export const states = axios.create({
  baseURL: 'http://www.geonames.org/childrenJSON?geonameId=3469034',
});

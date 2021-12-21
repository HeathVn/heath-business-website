import axios from 'axios';

const url = "http://localhost:4000/services";

export const fetchServices = () => axios.get(url);

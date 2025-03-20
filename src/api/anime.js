import  axios  from 'axios';
import { BASE_URL } from './api-config';

    export const fetchAnime = async (id) => {
        const response = await axios.get(`${BASE_URL}` + '/anime' + `/${id}`);
        return response.data;
    }


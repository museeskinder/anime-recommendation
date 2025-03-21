import  axios  from 'axios';
import { BASE_URL } from './api-config';
import { TRENDING_ANIME_URL } from './api-config';

    export const fetchAnime = async (id) => {
        const response = await axios.get(`${BASE_URL}` + '/anime' + `/${id}`);
        return response.data;
    }

    export const fetchTrendingAnime = async () => {
        const response = await axios.get(TRENDING_ANIME_URL);
        return response.data;
    }


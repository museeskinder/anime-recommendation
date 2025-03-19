import  axios  from 'axios';
import { BASE_URL } from './api-config';

export class AnimeAPI {
    static async fetchAnime (id) {
        const response = await axios.get(`${BASE_URL}` + '/anime' + `/${id}`);
        return response.data;
    }
}




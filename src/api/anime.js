import { BASE_URL } from './api-config';

export class AnimeAPI {
    static async fetchAnime(id) {
        const url = `${BASE_URL}` + '/anime/' + id;
        try {
            const response = await fetch(url);
            return response.json();
        } catch (err) {
            console.error('The Error happened while fetching data: ', err);
        }
    }
}




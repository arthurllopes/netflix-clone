import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

const API_KEY = 'e34436836b34566e863bbab89a2fc0cb'

const basicFetch = async (endpoint) => {
    const response = await api.get(`${endpoint}api_key=${API_KEY}&language=pt-BR`)
    return response.data
}

export const HomeList = {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais Netflix',
                items: await basicFetch('/discover/tv?with_network=213&')
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&`)
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                items: await basicFetch(`/discover/movie?with_genres=35&`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?with_genres=99&`)
            },
        ]
    },
    getMovieInfo: async (movieID, type) => {
        let info;
        if(movieID){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieID}?`)
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieID}?`)
                    break;
                default:
                    console.log('nada')
                break;
            }
        }
        return info
    },
    getSimilarMovies: async(movieID, type) => {
        let response;
        if(movieID) {
            switch(type){
                case 'movie':
                    response = await basicFetch(`/movie/${movieID}/similar?`)
                    break;
                case 'tv':
                    response = await basicFetch(`/tv/${movieID}/similar?`)
                    break;
                default:
                    console.log('nada')
                break;     
            }
        }
        return response
    }
}
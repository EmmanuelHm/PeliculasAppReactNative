import axios from 'axios'

const movieDB =  axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: '54a33308b8ae93d789684e6bfa325c6c',
        language: 'es-ES'
    }
});

export default movieDB;
    import axios from 'axios';

    const movieBaseUrl='https://api.themoviedb.org/3'
    const api_key = '3213ea69130f58a230ae93a5bb019918'
    //https://api.themoviedb.org/3/trending/all/day?api_key=3213ea69130f58a230ae93a5bb019918

    const getTrendingVideos=axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);

    export default{
        getTrendingVideos
    }

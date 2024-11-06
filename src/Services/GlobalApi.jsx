    import axios from 'axios';

    const movieBaseUrl='https://api.themoviedb.org/3'
    const api_key = '3213ea69130f58a230ae93a5bb019918'


    const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

    //https://api.themoviedb.org/3/trending/all/day?api_key=3213ea69130f58a230ae93a5bb019918
    const getTrendingVideos=axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
    const getMoviesByGenreId = (id) => axios.get(getMoviesByGenreId+"&with_genres="+id)

    export default{
        getTrendingVideos,
        getMoviesByGenreId
    }

import axios from 'axios'

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'en',
        access_token: 'pk.eyJ1Ijoiam9zZWJ1cmdvbiIsImEiOiJjbGVrZXRtNmkwanc4M3RuenZxdGYxMGZ1In0.t8PEhIIqDr2xilI5xu7P8g'
    }
})

export default searchApi

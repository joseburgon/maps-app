import axios from 'axios'

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1Ijoiam9zZWJ1cmdvbiIsImEiOiJjbGVrZXRtNmkwanc4M3RuenZxdGYxMGZ1In0.t8PEhIIqDr2xilI5xu7P8g'
    }
})

export default directionsApi

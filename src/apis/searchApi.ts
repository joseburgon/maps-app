import axios from 'axios'

console.log(`env`, process.env)

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'en',
        access_token: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN
    }
})

export default searchApi

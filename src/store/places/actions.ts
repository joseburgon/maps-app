import { ActionTree } from 'vuex'
import { PlacesState } from './state'
import { StateInterface } from '@/store'


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation({commit}) {
        // todo: set loading
        navigator.geolocation.getCurrentPosition(
            ({ coords}) => commit('setLngLat', {lng: coords.longitude, lat: coords.latitude}),
            (err) => {
                console.error(err)
                throw new Error('No location :(')
            }
        )
    }
}



export default actions

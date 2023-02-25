import { GetterTree } from 'vuex'
import { PlacesState } from './state'
import { StateInterface } from '@/store'


const getters: GetterTree<PlacesState, StateInterface> = {
    isUserLocationReady(state) {
        return !!state.userLocation
    }
}



export default getters

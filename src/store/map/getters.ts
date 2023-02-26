import { GetterTree } from 'vuex'
import { MapState } from './state'
import { StateInterface } from '@/store'


const getters: GetterTree<MapState, StateInterface> = {
    isMapReady(state) {
        return !!state.map
    }
}



export default getters

import {defineComponent, onMounted, ref, watch} from 'vue'
import {useMapStore, usePlacesStore} from '@/composables'
import mapboxgl from 'mapbox-gl'

export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>()
        const {isLoading, userLocation, isUserLocationReady} = usePlacesStore()
        const {setMap} = useMapStore()

        const initMap = async () => {
            if (!mapElement.value) throw new Error('Div element does not exist')
            if (!userLocation.value) throw new Error('User Location not available')

            await Promise.resolve()

            const map = new mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
            })

            const myLocationPopup = new mapboxgl.Popup()
                .setLngLat(userLocation.value)
                .setHTML(`
                    <h4>Here I Am</h4>
                    <p>Currently at Santiago</p>
                    <p>${ userLocation.value }</p>
                `)

            new mapboxgl.Marker()
                .setLngLat(userLocation.value)
                .setPopup(myLocationPopup)
                .addTo(map)

            setMap(map)
        }

        onMounted(() => {
            if (isUserLocationReady.value) initMap()
        })

        watch(isUserLocationReady, (newVal) => {
            if (newVal) initMap()
        })

        return {
            isLoading,
            userLocation,
            isUserLocationReady,
            mapElement
        }
    }
})

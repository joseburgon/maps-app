<script lang="ts" src="./SearchResults.ts"></script>

<template>
  <div v-if="isLoadingPlaces" class="alert alert-primary text-center">
    <h5>Loading</h5>
    <span>Wait please...</span>
  </div>

  <ul v-else-if="places.length > 0" class="list-group mt-3">
    <li
        v-for="place in places"
        :key="place.id"
        @click="onPlaceClicked(place)"
        class="list-group-item list-group-item-action d-flex justify-content-between"
        :class="{'active': place.id === activePlace}"
    >
      <h5>{{ place.text }}</h5>
      <button
          class="btn btn-sm"
          :class="(place.id === activePlace) ? 'btn-outline-light' : 'btn-outline-primary'"
          @click.self="getRouteDirections(place)"
      >
        Addresses
      </button>
    </li>
  </ul>
</template>

<style scoped>
li {
  cursor: pointer;
}

h5 {
  font-size: 1rem;
}

p {
  font-size: 10px;
}
</style>

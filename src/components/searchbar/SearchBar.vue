<script lang="ts" src="./SearchBar.ts"/>

<template>
  <div class="searchbar-container">
    <input v-model="searchTerm" type="text" class="form-control" placeholder="Search places...">

    <SearchResults/>
  </div>
</template>

<style scoped>
.searchbar-container {
  position: fixed;
  top: 30px;
  left: 30px;
  background-color: white;
  z-index: 1;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  width: 50%;
  border-radius: 10px;
  overflow: hidden;
  padding: 5px;
}
</style>

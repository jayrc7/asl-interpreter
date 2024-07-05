<script setup>
    import { RouterLink } from 'vue-router';
    import { ref } from 'vue';

    let clients = ref([
        { name: "Jason", birthday: "January 15, 1999"},
        { name: "Jenny", birthday: "January 04, 1999"}
    ]);

</script>

<template>
  <nav>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <h1> ASL Interpreter Transcipt </h1>
  <li v-for="client of clients">
    <p>{{ client.name }}</p>
    <p>{{ client.birthday }}</p>
  </li>

</template>

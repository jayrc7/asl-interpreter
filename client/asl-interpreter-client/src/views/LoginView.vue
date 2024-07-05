<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router';

  const router = useRouter()

  // create state to keep track of username and password values
  const userName = ref('')
  const password = ref('') 

  function buttonClicked() {
    // just redirect them to the home page for now
    router.push({path: '/'})
  }

</script>

<template>
  <h1> Welcome to ASL Interpreter! </h1>
  <p> We strive to help people conversate better with ASL users. </p>
  <p> Have the necessary conversations you need with real time translation of ASL happening between both users or only one </p>
  <p> All conversation transcripts are securely stored and not shared with anyone. In other words, we greatly respect our users privacy! </p>
  <form @submit.prevent="buttonClicked">
    <label for="username"> Username </label>
    <input v-model="userName" type="text" id="username" name="username"/>

    <label for="password"> Password </label>
    <input v-model="password" type="password" id="password" name="password"/>

    <button type="submit"> Login </button>
  </form>
</template>

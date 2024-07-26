<script setup>
    import { RouterLink } from 'vue-router';
    import { onMounted, ref } from 'vue';
    import _ from 'lodash';

    let clients = ref([
        { name: "Jason", birthday: "January 15, 1999"},
        { name: "Jenny", birthday: "January 04, 1999"}
    ]);

    // reference to the video element
    let video = ref(null)
    let camera = ref(null)

    // contains the list of media devices the user has
    let devices = ref([])

    // check if user's browser supports media devices
    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
      // get access to the user's input devices 
      camera = await navigator.mediaDevices.getUserMedia({video:  {
        width: 1280, 
        height: 720,
        facingMode: 'user',
        deviceId: {
          exact: "cc569b83ae79fdd24f8ea5428a9464d771d65a010029c751357d56cf986af238"
        }
      }})

      // only request audio inputs
      // devices = await navigator.mediaDevices.enumerateDevices();
      // devices = _.filter(devices, function(o) {
      //   return o.kind == 'videoinput';
      // })


    } else {
      window.alert("Unable to access device camera")
    }

    onMounted(() => {
      video.value.srcObject = camera;
    })

</script>

<template>
  <nav>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <div class="columns-2xl">
    <div style="background-color: blue;" class="w-full">
      <div style="background-color: blue" class="md:w-3 lg:w-8">
        <h1> hi there </h1>
      </div>

      <h1> ASL Interpreter Transcipt </h1>
      <li v-for="client of clients">
        <p>{{ client.name }}</p>
        <p>{{ client.birthday }}</p>
      </li>
    </div>

    <div style="width: 220vw; height: 170vw" class="w-full">
      <video  ref="video" autoplay></video>
    </div>
  </div>
</template>

<style>
  video {
    width: 20%;
    height: 20%;
  }
</style>
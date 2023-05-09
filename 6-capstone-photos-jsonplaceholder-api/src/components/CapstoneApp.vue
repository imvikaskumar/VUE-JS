<template>
    <Layout>
      <template v-slot:header>

        Header

      </template>

      <template v-slot:sidebar>
  
        <Album v-for="album in albums" :key="album.id" :album="album" />
  
      </template>
  
      <template v-slot:content>
        
        <router-view />
  
      </template>
    </Layout>
  </template>
  
  <script>
  import { computed, onMounted } from 'vue';
  import { useStore } from 'vuex';
  import Layout from './Layout.vue';
  import Album from './Album.vue';
  
  export default{
    components:{
      Layout,
      Album
    },
  
    setup(){
      const store = useStore();

      const albums = computed(() => {
        return store.state.albums.all
      });

      const photos = computed(() => {
        return store.state.photos.all
      });
  
      onMounted(() => {
        store.dispatch('albums/fetch')
      })
  
      return {
        albums,
        photos
      }
    }
  }
  </script>
  
  
  <style scoped>
  
  </style>
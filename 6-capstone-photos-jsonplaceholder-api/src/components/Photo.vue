<template>
    <img v-for="photo in photos" :key="photo.id" :src="photo.thumbnailUrl" />
</template>

<script>
import { computed, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default{
    setup(){
        const store = useStore();
        
        const route = useRoute();
        
        watchEffect(() => {
            const id = route.params.id
            if(!id) return
            store.dispatch('photos/getByAlbum', {albumID: id}) 
        })
        
        const photos = computed(() => {
            return store.state.photos.all
        });

        return {
            photos  
        }

    }
    
}
</script>

<style scoped>

</style>
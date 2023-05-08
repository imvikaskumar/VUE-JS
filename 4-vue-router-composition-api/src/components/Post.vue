<template>
    <div>
        <h4>{{ post.title }}</h4>
        <p>{{ post.content }}</p>
    </div>
</template>

<script>
import { computed } from 'vue';
import { usePosts } from '../Composables/usePosts.js';
import { useRoute } from 'vue-router';

export default {
    setup(){
        const route = useRoute();
        const postStore = usePosts();
        const post = computed(() =>  postStore.posts.value.find(x => x.id == route.params.id) );
        // console.log(post)
        return {
            post
        }
    }
}
</script>
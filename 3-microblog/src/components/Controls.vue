<template>
    <button @click="postLike">Like {{ post.likes }}</button>
    <HashTag 
        v-for="hashtag in  post.hashtags"
        :key="hashtag" 
        :hashtag="hashtag"
    >

    </HashTag>
</template>
<script>
import { store } from '../config/store';
import HashTag from './hashtags.vue';

export default {

    components: {
        HashTag
    },

    props:{
        post: {
            type: Object,
            required: true
        }
    },
    setup (props) {
       const postLike = () => {
            store.setPostLike(props.post)
       }

       return {
            postLike
       }
    }
}
</script>
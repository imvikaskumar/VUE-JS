<template>
    <h4>Create New Post</h4>
    <form @submit.prevent="submit">
        <input type="text" v-model="newPost.title" placeholder="Enter title" />
        <br />
        <textarea type="text" v-model="newPost.content" cols="40" rows="10" > </textarea> 
        <br />
        <button type="submit">Submit</button>
    </form>
</template>

<script>
import { reactive } from 'vue';
import { usePosts } from '../Composables/usePosts.js';
import { useRouter } from 'vue-router';


export default {
    setup(){
      const postStore = usePosts();
      const router = useRouter();

      const newPost = reactive({
            title: '',
            content: ''
      })
      
      const submit = () => {
        let id = postStore.posts.value.length + 1;
        postStore.addPost({
            id,
            title: newPost.title,
            content: newPost.content
        });

        router.push(`/posts/${id}`);
      }
      
      return {
        newPost,
        submit
      }
    }
}
</script>
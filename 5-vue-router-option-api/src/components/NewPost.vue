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



export default {
  data() {
    return {
      newPost: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    submit() {
      this.$emit('createPost', {
        title: this.newPost.title,
        content: this.newPost.content,
      })
    }
  }
}
</script>
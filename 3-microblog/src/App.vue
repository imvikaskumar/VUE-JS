<template>
  <input type="search" :value="currentTag" @input="sethash"/>
  <div class="cards">
    <Card v-for="post in filterPosts" :key="post.id" class="card">
      <template v-slot:title>{{ post.title }} #{{ post.id }}</template>
      <template v-slot:content><p>{{ post.content }}</p></template>
      <template v-slot:description>
        <Controls :post="post" />
    </template>
    </Card>
  </div>
</template>

<script>
import { computed } from 'vue';
import { store } from './config/store';
import './assets/App.css';
import Card from './components/Card.vue';
import Controls from './components/Controls.vue';

export default{

  components:{
    Card,
    Controls
  },

  setup(){
    const sethash = ($event) => {
      store.setHashtag($event.target.value);
    }
    const filterPosts = computed(() => {
      if(!store.state.currentTag) return store.state.posts;

      return store.state.posts.filter(post => post.hashtags.includes(store.state.currentTag));
    });

    return {
      filterPosts,
      sethash,
      currentTag: computed(() => store.state.currentTag)
    }
  }
}
</script>


<style scoped>
img {
  width: 100%;
}
.cards {
  display: flex;
}
.opace {
  opacity: 0.5;
}
.card:hover {
  opacity: 1;
}
</style>
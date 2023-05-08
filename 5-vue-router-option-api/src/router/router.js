import { createRouter, createWebHashHistory } from 'vue-router';
import Posts from '../components/Posts.vue';
import Post from '../components/Post.vue';
import NewPost from '../components/NewPost.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/posts',
            component: Posts,
            children: [
              {
                path: 'new',
                component: NewPost
              },
              {
                path: ':id',
                component: Post
              },
            ]
        }
    ]
});

export { router };
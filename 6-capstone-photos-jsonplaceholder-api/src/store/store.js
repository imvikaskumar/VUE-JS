import { createStore } from 'vuex';
import { albums } from '../modules /albums';
import { photos } from '../modules /photos';
import { testPosts } from '../apis/testPosts';

export const store = createStore({
    modules:{
        albums,
        photos
    },

    state(){
        return {
            
        }
    },

    mutations: {
      
      
    },

    actions: {
     
    }
})
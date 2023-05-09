export const albums = {
    namespaced: true,

    state(){
        return {
            all: []
        }
    },

    mutations:{
        setAlbums(state, allAlbums){
            state.all = allAlbums
        }
    },

    actions:{
        async fetch(ctx){
            const res = await fetch('https://jsonplaceholder.typicode.com/albums')
            const response = await res.json();
            ctx.commit('setAlbums', response);
        }
    }, 

    getters:{
        
    }
}
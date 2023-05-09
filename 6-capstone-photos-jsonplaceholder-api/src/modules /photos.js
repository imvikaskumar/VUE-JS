export const photos = {
    namespaced: true,

    state(){
        return {
            all: [],
            cache: {}
        }
    },

    mutations:{
        setPhotosForCurrentAlbum(state, {response, albumID}){
            state.all = response;
            state.cache[albumID] = response;
        }
    },

    actions:{
        async getByAlbum(ctx, { albumID }){
            if(ctx.state.cache[albumID]){
                ctx.commit('setPhotosForCurrentAlbum', {response:ctx.state.cache[albumID], albumID:albumID})
                return
            }
            const res = await fetch(`https://jsonplaceholder.typicode.com/photos?album=${albumID}`)
            const response = await res.json();
            // console.log(response)
            ctx.commit('setPhotosForCurrentAlbum', {response:response, albumID:albumID});
        }
    }, 

    getters:{
        
    }
}
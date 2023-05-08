<template>
  <div class="cards">
    <Card v-for="pokemon in pokemonData" :key="pokemon.id" :pokemon="pokemon" @click="fetchEveloutions(pokemon)" class="card" :class="{opace: pokemon.id !== selectedId}">
      <template v-slot:title>{{ pokemon.name }} #{{ pokemon.id }}</template>
      <template v-slot:content><img :src="pokemon.sprite"></template>
      <template v-slot:description>
        <div v-for="typ in pokemon.types" :key="typ">
          {{ typ }}
        </div>
    </template>
    </Card>
  </div>

  <div class="cards">
    <Card v-for="pokemon in evolutions" :key="pokemon.id" :pokemon="pokemon">
      <template v-slot:title>{{ pokemon.name }} #{{ pokemon.id }}</template>
      <template v-slot:content><img :src="pokemon.sprite"></template>
      <template v-slot:description>
        <div v-for="typ in pokemon.types" :key="typ">
          {{ typ }}
        </div>
    </template>
    </Card>
  </div>
</template>

<script>
import './assets/App.css';
import Card from './components/Card.vue';

const api = "https://pokeapi.co/api/v2/pokemon";
const IDS = [1,4,7];
export default{
  components:{
    Card
  },

  data(){
    return {
      pokemonData: [],
      evolutions: [],
      selectedId: null
    }
  },

  async created(){
    this.pokemonData = await this.fetchData(IDS)
  },

  methods:{
    async fetchEveloutions(pokemon){
      this.evolutions = await this.fetchData([pokemon.id+1, pokemon.id+2]);
      this.selectedId = pokemon.id;
    },

    async fetchData(ids){
      let responses = await Promise.all( 
        ids.map(id => window.fetch(`${api}/${id}`)) 
      );
      let json = await Promise.all(
        responses.map(data => data.json())
      );

      return json.map(filterResp => ({
        id: filterResp.id,
        name: filterResp.name,
        sprite: filterResp.sprites.other['official-artwork'].front_default,
        types: filterResp.types.map(arr => arr.type.name)
      }));
      
      // console.log(this.pokemonData);
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
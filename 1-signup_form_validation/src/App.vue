<template>
  <main>
    <form @submit.prevent="submit">
      <!-- Username -->
      <MyInput 
      name="Username"
      v-bind:rules="{required: true, min: 5}"
      :value="username.value"
      :error="username.error"
      @update="update"
      />
      <!-- Password -->
      <MyInput 
      name="Password"
      v-bind:rules="{required: true, min: 10}"
      :value="password.value"
      :error="password.error"
      type="password"
      @update="update"
      />
      <!-- Button -->
      <MyButton 
      background="darkslateblue" 
      color="white" 
      :disabled="!valid" />
    </form>
  </main>
</template>

<script>
import MyButton from './components/MyButton.vue'
import MyInput from './components/MyInput.vue'

export default {
  components:{
    MyButton,
    MyInput
  },
  data(){
    return{
      valid: true,
      username: {
        value: "user",
        error: ''
      },
      password: {
        value: "password",
        error: ''
      }
    }
  },

  computed:{
    valid(){
      return(
        !this.username.error && !this.password.error
      )
    }
  },

  methods: {
    update({name, value, error}){
      this[name].value = value;
      this[name].error = error;
    },

    submit(){
      console.log("working")
    }
  }
}
</script>
<style scoped>
</style>

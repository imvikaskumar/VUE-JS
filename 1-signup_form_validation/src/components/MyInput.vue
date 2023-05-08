<template>
    <div class="input">
        <div class="label">
            <label v-bind:for="name">{{ name }}</label>
        </div>
        <input 
        :type="type"
        :id="name" 
        :value="value"
        @input="input"
        />
        <div class="error">{{ error }}</div>

    </div>
</template>

<script>
export default {
    props: {
        type:{
            type: String,
            default: 'text'
        },
        name: {
            type: String,
            required: true
        },
        rules: {
            type: Object,
            default: {}
        },
        value: {
            type: String,
            required: true
        },
        error: {
            type: String
        }
    },

    // created lifecycle method
    created(){
        this.$emit("update", {
            name:this.name.toLowerCase(),
            value:this.value,
            error:this.formValidate(this.value)
        });
    },

    methods: {
        input($event){
            // Creating new method update and call in App.vue
            this.$emit("update", {
                name:this.name.toLowerCase(),
                value:$event.target.value,
                error:this.formValidate($event.target.value)
            });
        },

        formValidate(value){
            if(this.rules.required && value.length == 0){
                return `${this.name} field is required.`;
            }
            if(this.rules.min && value.length < this.rules.min){
                return `The min length is ${this.rules.min} required`;
            }
        }
    },

    
    // Move this code into function
    // computed:{
    //     error(){
    //         if(this.rules.required && this.value.length == 0){
    //             return "Username field is required.";
    //         }
    //         if(this.rules.min && this.value.length < this.rules.min){
    //             return `The min length is ${this.rules.min} required`;
    //         }
    //     }
    // }
}
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
}
.label {
  display: flex;
  justify-content: space-between;
}
.error {
  color: red;
}
.input {
  width: 100%;
}
input {
  box-sizing: border-box;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid silver;
  margin: 2px;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
}
</style>
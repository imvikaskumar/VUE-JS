<template>
    <button 
    v-bind:style="{background: background, color:color}"
    v-bind:disabled="disabled"
    
    >
        Submit
    </button>
</template>

<script>
export default {
    props: {
        background: {
            type: String
        },
        color: {
            type: String
        },
        disabled: {
            type: Boolean
        },
    }
}
</script>

<style scoped>
button {
  padding: 10px 40px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
}
button:disabled {
  opacity: 0.5;
}
button:hover {
  filter: brightness(125%);
}
</style>
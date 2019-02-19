<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div style="height: 100%; 
                width: 100%; 
                display: flex; 
                align-items: center; 
                flex-flow: row;
                justify-content: space-around"
      >
      <vue-input-dropdown 
        :items="items"
        :options="options"
        :picked="picked"
      />
      <vue-input-dropdown 
        :items="items"
        :options="optionsTwo"
        :picked="picked"
      />
    </div>
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      items: [
        'Item One',
        'Item Two',
        'Item Three',
        'Item Four',
        'Item Five',
        'Item Six',
        'Item Seven',
      ],
      options: {
        height: '5rem',
        width: '15rem',
        placeholder: 'Example Picker',
        outerContainerStyle: 'margin: 0 auto'
      },
      optionsTwo: {
        height: '3rem',
        width: '28rem',
        placeholder: 'Example Picker Two',
        outerContainerStyle: 'margin: 0 auto',
        activeItemClass: 'black-active',
        inputStyle: 'border: 1px solid black',
        maxHeight: '10rem'
      }
    }
  },
  methods: {
    picked(item) {
      console.log(item)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.black-active {
  background-color: #00E5EE;
  color: white;
  height: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0;
}
</style>

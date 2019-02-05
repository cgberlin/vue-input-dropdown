<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div style="height: 30rem; width: 30rem">
      <vue-input-dropdown 
        :items="items"
        :options="options"
        :picked="picked"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      items: [
        "Item One",
        "Item Two",
        "Item Three",
        "Item Four",
        "Item Five",
        "Item Six",
        "Item Seven",
      ],
      options: {
        height: '5rem',
        width: '15rem'
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

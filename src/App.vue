<template>
  <div id="app">
    <pandora-menu title="Pandora"/>
  </div>
</template>

<script>
import PandoraMenu from './components/Menu';

export default {
  name: 'App',
  components: {
    PandoraMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

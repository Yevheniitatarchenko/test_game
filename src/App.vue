<template>
  <div id="app">
    <Header />
    <div class="wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    Header
  }
}
</script>

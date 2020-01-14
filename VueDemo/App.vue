<template>
  <div id="App">
    <Header :active="active" :mackActive="mackActive">
    </Header>
    <Detail></Detail>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Detail from './components/Detail';

export default {
  name: "App",
  data: function () {
    return {
      active: "home",
    }
  },
  methods: {
    mackActive(item) {
      this.active = item;
      console.info('ttt');
		}
  },
  components: {
    Header,
    Detail,
  },
}

</script>
<template>
  <div class="header">
    <nav :class="active">
      <a class="home" @click="mackFun('home')">主页</a>
      <a class="projects" @click="mackFun('projects')">项目</a>
      <a class="services" @click="mackFun('services')">服务</a>
    </nav>
    <!-- <p>选择了<span>{{active}}菜单</span></p> -->
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    active: String,
    mackActive: {
        type: Function,
        default: null
      }
  },
  methods: {
    mackFun(params) {
      // 方法一
      // this.$parent.mackActive(params);
      // 方法二      
      // this.$emit("mackActive", params)
      if (this.mackActive) {
        this.mackActive(params);
      }
    }
  }
};
</script>

<style scoped>
.header {
  margin: 0 auto 0;
  text-align: center;
}
a, a:visited {
  outline: none;
  color: #389dc1;
}
a:hover {
  text-decoration: none;
}
section, footer, header, aside, nav {
  display: block
}

nav {
  display: inline-block;
  /* margin: 60px auto 45px; */
  background-color: #5597b4;
  /* box-shadow: 0 1px 1px #ccc; */
  /* border-radius: 2px; */
}

nav a {
  display: inline-block;
  padding: 18px 84px;
  color: #fff !important;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none !important;
  line-height: 1;
  text-transform: uppercase;
  background-color: transparent;
  transform: background-color 0.25s;
}
nav a:first-child {
  border-radius: 2px 0 0 2px;
}
nav a:last-child {
  border-radius: 0 2px 2px 0;
}
nav.home .home, nav.projects .projects, nav.services .services {
  background-color: #e35885;
}
p {
  font-size: 22px;
  font-weight: bold;
  color: #7d9098;
}
p span {
  color:#ffffff;
  display:inline-block;
  padding:5px 10px;
  background-color:#c4d7e0;
  border-radius:2px;
  text-transform:uppercase;
  font-size:18px;
}
</style>
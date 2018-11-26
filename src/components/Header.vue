<template>
  <div class="hello">
    <ul>
      <li>
        <a href="#1" to="/">首页</a>
      </li>
      <li>
        <a href="#2">关于我们</a>
      </li>
      <li>
        <a href="#3">最新活动</a>
      </li>
      <li>
        <a href="#4">精选案例</a>
      </li>
      <li>
        <a href="#5" >联系我们</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'M-Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{text-align: center;}
a{list-style: none;text-decoration: none;font-size: 1rem;}
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

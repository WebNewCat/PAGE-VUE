<template>
  <div id="app">
		<img src="./assets/logo.png" alt="">
    <Header></Header>
		<banner></banner>
		<aboutus></aboutus>
		<Activities></Activities>
		<goodCases></goodCases>
		<ContactUs></ContactUs>
		<coom-footer></coom-footer>
  </div>
</template>

<script>
import Header from '@/components/Header';
import banner from '@/components/banner';
import aboutus from '@/components/aboutus';
import goodCases from '@/components/goodCases';
import Activities from '@/components/Activities';
import ContactUs from '@/components/ContactUs';
import coomFooter from '@/components/coomFooter';

export default {
  name: 'App',
  components: {
    Header,
		banner,
		aboutus,
		goodCases,
		Activities,
		ContactUs,
		coomFooter
  }
};
</script>

<style scoped="scoped">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img{
	width: 100px;
}
</style>

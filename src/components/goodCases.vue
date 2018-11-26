<template>
<div class="container">
			<h2>精选案例</h2>
			<p>已累计为500+家客户提供优质服务</p>
	<div id="4" class="goodcases-box">
		<div v-for="item in imgCase" class="img-box">
			<img :src="item.url" alt="">
		</div>
	</div>
</div>
</template>

<script>
	export default {
		name:'goodsCases',
		data() {
			return{
				imgCase:[
					{url:require('../../static/goodcases/case1.jpg')},
					{url:require('../../static/goodcases/case2.jpg')},
					{url:require('../../static/goodcases/case3.jpg')},
					{url:require('../../static/goodcases/case4.jpg')},
					{url:require('../../static/goodcases/case5.jpg')},
					{url:require('../../static/goodcases/case6.jpg')},
					{url:require('../../static/goodcases/case7.jpg')},
					{url:require('../../static/goodcases/case8.jpg')}
				]
			};
		
		}
	}
</script>

<style scoped="scoped">
	*{box-sizing: border-box;}
h2{font-size: 26px;font-weight: normal;color: #494949;margin: 0;padding:15px 0 0px 0;}
p{color: #bababa;font-size: 13px;}
.container{width: 90%;margin: auto;padding: 30px 0;}
.goodcases-box{width: 100%;display: -webkit-flex;flex-wrap: wrap;}
.img-box{width: 25%;padding: 10px;}
img{width: 100%;}
</style>

<template>
<div class="bg-box">
	<div class="container">
		<h2 id="3">最新活动</h2>
		<div  class="activities-box">
			<div class="activities-box-detail" v-for="item in Activity">
				<div >
					<img :src="item.url" alt="">
					<p class="title">{{item.tl}}</p>
					<span class="details">{{item.context}}</span>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	export default {
		data() {
			return {
				Activity:[
					{url:require('../../static/activities/img1.jpg'),
					 tl:'分赛区开赛:广告传媒类晋级项目诞生',
					 context:'起飞页推崇用户自己创建网站并享受建站所带来的乐趣，因此我们为您准备了一...'
					 },
					 {url:require('../../static/activities/img2.jpg'),
					 tl:'分赛区开赛:广告传媒类晋级项目诞生',
					 context:'起飞页推崇用户自己创建网站并享受建站所带来的乐趣，因此我们为您准备了一...'
					 },
					 {url:require('../../static/activities/img3.jpg'),
					 tl:'分赛区开赛:广告传媒类晋级项目诞生',
					 context:'起飞页推崇用户自己创建网站并享受建站所带来的乐趣，因此我们为您准备了一...'
					 },
					 {url:require('../../static/activities/img4.jpg'),
					 tl:'分赛区开赛:广告传媒类晋级项目诞生',
					 context:'起飞页推崇用户自己创建网站并享受建站所带来的乐趣，因此我们为您准备了一...'
					 },
				]
			};
		}
	}
</script>

<style scoped="scoped">
.bg-box{background-color: #f7f7f7;width: 100%;padding-bottom: 40px;}
.container{width: 90%;margin: auto;}
.activities-box{display: -webkit-flex;flex-wrap: wrap;}
img{width: 100%;}
.activities-box-detail{
	width: 33.33333333%;
	padding: 15px;
	box-sizing: border-box;
}
.activities-box-detail div{
	background-color: #fff;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}
span{text-align:left;color: #b7b7b7;font-size: 14px;}
h2{margin: 0;padding: 50px 0 15px 0;}
.details{
	display: block;
	padding: 2px 15px 25px 15px;
}
</style>

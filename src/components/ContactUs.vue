<template>
<div >
	<img class="banner1" src="../../static/contactus/img.jpg" alt="">
	<div class="container">
		<div id="5" class="contact-box">
			<div class="all-message" v-for="item in Allmessage">
				<img :src="item.url" alt="">
				<h3>{{item.name}}</h3>
				<p class="title-job">{{item.job}}</p>
				<div class="indur">{{item.cont}}</div>
			</div>
		</div>
		<div class="call-message">
			<div class="address">
				<p>广告摄影工作室网站模板</p>
				<ul>
					<li v-for="item in Address">
						{{item.text}}
					</li>
				</ul>
	
			</div>
		</div>
	</div>
</div>

</template>

<script>
	export default {
		data() {
			return {
				Allmessage:[
					{url:require('../../static/contactus/p1.jpg'),
					 name:'Roger',
					 job:'设计总监',
					 cont:'当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事，当今最领先的响应式自助建站平台。'
					},
					{url:require('../../static/contactus/p3.jpg'),
					name:'Marry',
					job:'总经理',
					cont:'当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事，当今最领先的响应式自助建站平台。'
					},
					{url:require('../../static/contactus/p2.jpg'),
					name:'Bob',
					job:'财务总监',
					cont:'当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事，当今最领先的响应式自助建站平台。'
					}
					],
				Address:[
					{text:'地址：苏州市金鸡湖大道00号'},
					{text:'邮编：200000'},
					{text:'电话：400-8000-8000'},
					{text:'手机：133-0000-0000'},
					{text:'传真：000-8000-8000'},
					{text:'邮箱：info@email.com'}
				]
			};
		}
	}
</script>

<style scoped="scoped">
	*{
		box-sizing: border-box;
	}
	.banner1{width: 100%;}
	.container{
		width: 90%;
		margin: auto;
	}
.contact-box{
	display: -webkit-flex;
	flex-wrap: wrap;
	padding: 30px 0;
}
.all-message{
	width: 30%;
	box-sizing: border-box;
	border: 1px solid #ddd;
	margin: auto;
}
.indur{
	background-color: #f1f1f1;
	color: #a9a9a9;
	letter-spacing: 1px;
	font-size: 13px;
	padding: 20px 15px;
}
h3{
	margin:0px;
	color: #666666;
	font-weight: normal;
}
.title-job{
	margin: 2px 0 12px 0;
	font-size: 14px;
}
.all-message img{
	border-radius: 85px;
	padding: 10px;
}
.call-message{
	width: 60%;
	margin: auto;
}
.address ul{
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
}
.address li{
	width: 30%;
}
</style>

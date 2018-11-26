<template>
<div class="container">
	<div class="about-box">
		<div class="about-box-lf">
			<img src="../assets/img1.jpg" alt="">
		</div>
		<div class="about-box-rt">
			<p id="2" class="about-box-title">关于我们</p>
			<div class="about-box-text">AAA成立于2000年，至今已发展成为中国最具规模和影响力的综合性品牌战略咨询和设计公司。不同于管理咨询公司和单纯的设计公司，专注于为客户创造和管理品牌，提供从品牌资产研究、市场洞察、品牌机会分析、品牌战略、品牌组合规划、命名和语词创作、设计（包括品牌识别设计、环境空间导示设计、包装设计、网络设计）到内部品牌导入、品牌管理制度建设的综合性服务，以提升客户在海内外的品牌影响力。</div>
			<br>
			<div class="about-box-text">全公司拥有100多名员工。客户均为各个行业的领导品牌，涵盖从B2B到B2C的不同领域。在2000年度“全球最受赞赏的知识性型企业”排行榜“设计服务类”位列第一，成为唯一入榜的本土公司。</div>
		</div>
		<div style="clear: both;"></div>
	</div>
</div>
</template>

<script>
	export default {
		name:'AboutUs',
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped="scoped">
	*{
		box-sizing: border-box;
	}
.container{
	width:90%;
	margin: auto;
}
.about-box-lf{
	width: 50%;
	float: left;
}
.about-box-rt{
	padding: 2px 40px;
	width: 50%;
	float: right;
	font-size: 14px;
	color: #9899a2;
	letter-spacing: 1px;
	line-height: 2em;
}
.about-box{
	padding: 10% 0;
}
img{
	width: 100%;
}
.about-box-title{
	font-size: 20px;
	margin-top: 2px;
}
</style>

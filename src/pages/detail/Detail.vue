<template>
	<div>
		<detail-banner :sightName="sightName" :bannerImg="bannerImg" :commentsNum="commentsNum" :gallaryImgs="gallaryImgs"></detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :DetailList="DetailList"></detail-list>
		</div>
	</div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
import DetailList from './components/list'
import axios from 'axios'
export default{
	name: 'Detail',	
	components: {
		DetailBanner,
		DetailHeader,
		DetailList
	},
	data () {
		return {
			list: [],
			DetailList: [],
			sightName: '',
			bannerImg: '',
			commentsNum: '',
			gallaryImgs: []
		}
	},
	methods: {
		getDetailInfo () {
			axios.get('./api/detail.json?id='+this.$route.params.id).then(this.getDetailSucc)
		},
		getDetailSucc (res) {
			res=res.data
			if(res.ret&&res.data){
				this.DetailList=res.data.categoryList
				this.sightName=res.data.sightName
				this.bannerImg=res.data.bannerImg
				this.commentsNum=res.data.commentsNum
				this.gallaryImgs=res.data.gallaryImgs
			}
		}
	},
	mounted () {
		this.getDetailInfo()
	}
}
</script>

<style lang="stylus" scoped>
.content
	height: 50rem
</style>
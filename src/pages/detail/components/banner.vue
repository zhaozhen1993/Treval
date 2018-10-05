<template>
	<div>
		<div class="banner" @click="handleGalleryShow">
			<img class="banner-img" :src="bannerImg"/>
			<div class="banner-info">
				<div class="banner-title">{{this.sightName}}</div>
				<div class="banner-number"><span class="iconfont icon-picture"></span>{{this.gallaryImgs.length}}</div>
			</div>
	   </div>
	   <common-gallery :imgs="gallaryImgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
	</div>
</template>

<script>
import CommonGallery from '../../../pages/common/Gallery/Gallery'	
export default{
	name: 'DetailBanner',
	props: {
		sightName: String,
		bannerImg: String,		
		gallaryImgs: Array
	},
	data () {
		return{
			
			showGallery: false
			
		
		}
	},
	components: {
		CommonGallery
	},
	methods: {
		handleGalleryShow () {
			this.showGallery = true
		},
		handleGalleryClose () {
			this.showGallery = false
		}
	}
}
</script>

<style lang="stylus" scoped>
.banner
	overflow: hidden
	height: 0
	padding-bottom: 55%
	position: relative
	.banner-img
		width: 100%
	.banner-info
		display: flex
		line-height: .6rem
		position: absolute
		left: 0
		right: 0
		bottom: 0
		color: #fff
		background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
		.banner-title
			flex: 1
			padding: 0 .2rem
			font-size: .32rem
		.banner-number
			padding: 0 .4rem
			height: .32rem
			line-height: .32rem
			border-radius: .2rem
			background: rgba(0,0,0,.8)
			font-size: .24rem
			margin-top: .14rem
			.iconfont
				font-size: .24rem
</style>
<template>
	<div>
		<router-link tag="div" to="/" class="header-ads" v-show="show">
			<span class="iconfont header-abs-fanhui icon-fanhui"></span>
		</router-link>
		<div class="head-fixed" 
			v-show="!show"
			:style="opacityStyle"
			>
			景点详情
			<router-link to='/'>
          		<span class="iconfont icon-fanhui head-fixed-icon"></span>
    		</router-link> 
		</div>
	</div>
</template>

<script>
export default{
	name: 'DetailHeader',
	data () {
		return {
			show: true,
			opacityStyle: {
				oapcity: 0
			}
		}
	},
	methods: {
		handleScroll () {
			const top = document.documentElement.scrollTop	
			
			if( top > 60  ) {
				let opacity = top/140
				opacity = opacity > 1 ? 1 : opacity
				this.opacityStyle = { opacity }
				this.show = false
			}else{
				this.show = true
			}
		}
	},
	activated () {
		
		window.addEventListener('scroll',this.handleScroll,true)
	},
	deactivated () {
		window.removeEventListener('scroll',this.handleScroll)
	}
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/verables.styl'
.header-ads
	position: absolute
	top: .2rem
	left: .2rem
	width: .8rem
	
	line-height: .8rem
	height: .8rem
	background: rgba(0,0,0,.6)
	border-radius: .4rem
	text-align: center
	.header-abs-fanhui
		color: #fff
		font-size: .4rem
.head-fixed
	position: fixed
	z-index: 25
	top: 0
	left: 0
	right: 0
	
	line-height: .86rem
	height: .86rem
	text-align: center
	background: $bgColor
	color: #fff
	.head-fixed-icon
		position: absolute
		left: 0
		top: 0
		text-align: center
		width: .64rem
		font-size: .4rem
		color: #fff
	
</style>
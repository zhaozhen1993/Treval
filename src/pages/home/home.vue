<template>
	<div>
		<home-header ></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :icon="iconList"></home-icons>
		<home-recommend :recommendList="recommendList"></home-recommend>
		<home-weekend :weekendList="weekendList"></home-weekend>
	</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState }from 'vuex'
export default {
	name:'home',
	data (){
		return {
			
			swiperList: [],
			iconList: [],
			recommendList: [],
			weekendList: []
		}
	},
	computed: {
		...mapState(['city'])
	},
	components: {
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeRecommend,
		HomeWeekend,
		lastcity: ''
	},
	methods: {
		getHomeInfo (){
			axios.get('./api/index.json?city=' + this.city).then(this.getHomeSucc)
		},
		getHomeSucc (res){
			res=res.data
			if(res.ret&&res.data){
				
				this.swiperList=res.data.bannerList
				this.iconList=res.data.iconList
				this.recommendList=res.data.recommendList
				this.weekendList=res.data.weekendList
			}
			
		}
	},
	mounted () {
		this.lastcity=this.city
		this.getHomeInfo()
	},
	activated () {
		if ( this.lastcity !== this.city) {
			this.lastcity=this.city
		    this.getHomeInfo()
		}
	}
}
</script>

<style>
</style>
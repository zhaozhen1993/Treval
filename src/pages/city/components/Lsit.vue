<template>
  <div class="list" ref="wraper">
  	<div >
	    <div class="area">
	      <div class="title border-topbottom">当前城市</div>
	      <div class="button-list">
					<div class="button-wraper">
			 			<div class="button">{{this.$store.state.city}}</div>
					</div>			
	  		</div>  
    	</div>
	    <div class="area">
	    	<div class="title border-topbottom">热门城市</div>
	    		<div class="button-list">
					<div class="button-wraper" v-for="item of hotCities" :key="item.id">
						<div class="button" @click="handleCityState(item.name)">{{item.name}}</div>
					</div>				
		 		</div>  
	    </div>
	    <div class="area" 
	    	v-for="(list,key) of cities" 
	    	:key="key" 
	    	:ref="key">	    	
	    	<div class="title border-topbottom">{{key}}</div>
	    	<div class="item-list" v-for="item of list" :key="item.id">
	    		<div class="item border-bottom" @click="handleCityState(item.name)">{{item.name}}</div>	    		
	    	</div>	    	
	    </div>
	</div>    
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default{
	name: 'CityList',
	props: {
		hotCities: Array,
		cities: Object,
		letter: String
	},
	methods: {
		handleCityState (city) {
			this.$store.dispatch('changeCity',city)
			this.$router.push('/')
		}
	},
	watch: {
    letter () {
        if (this.letter) {
            const element = this.$refs[this.letter.trim()][0]
            this.scroll.scrollToElement(element)
        }
    },
    deep: true
  },
	mounted () {
		this.scroll=new Bscroll(this.$refs.wraper)
	}
}
</script>

<style lang="stylus" scoped>

.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc  
.list
    position: absolute
    left: 0
    top: 1.58rem
    bottom: 0
    right: 0
    overflow: hidden         
	.title
	  line-height: .44rem
	  background: #eee
	  padding-left: .2rem
	  color: #666
	  font-size: .26rem
	.button-list
	  padding: .1rem .6rem .1rem .1rem
	  overflow: hidden
	  .button-wraper   
	    width: 33.3%
	    float: left
	    .button
	      margin: .1rem
	      padding: .1rem 0
	      border: .02rem solid #ccc
	      text-align: center
	      border-radius: .06rem
	.item-list
	  .item
	    line-height: .76rem
	    color: #666
	    padding-left: .2rem
    
      
  
</style>
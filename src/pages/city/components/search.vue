<template>
  <div>
  	<div class="search">
    	<input v-model="keyword" class="search-input"  placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" v-show="keyword">
    	<ul >
    		<li v-for="item of list" class="search-item border-bottom" @click="handleCityState(item.name)">{{item.name}}</li>
    		<li v-show="noData" class="search-item border-bottom">没有可匹配数据</li>
    	</ul>
    </div>
  </div>
</template>

<script>
export default{
  name: 'CitySearch',
  props: {
  	cities: Object
  },
  data () {
  	return {
  		keyword: '',
  		list: [],
  		timer: null
  	}
  },
  computed: {
  	noData () {
  		return !this.list.length
  	}
  },
  methods: {
  	handleCityState (city) {
			this.$store.dispatch('changeCity',city)
			this.$router.push('/')
		}
  },
  watch: {
  	keyword () {
  		if(this.timer){
  			clearTimeout(this.timer)
  		}
  		if(!this.keyword){
  			this.list = []
  			return
  		}
  		this.timer=setTimeout( () => {
  			const result=[]
  			for( let i in this.cities ) {
  				
  				this.cities[i].forEach((value) => {
  					if(value.spell.indexOf(this.keyword)>-1||value.name.indexOf(this.keyword)>-1){
  						result.push(value)
  					}
  				})
  			}
  			this.list=result
  		},100)
  	}
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/verables.styl'
.search
  background: $bgColor
  height: .72rem
  
  padding: 0 .1rem
  .search-input
    box-sizing: border-box
    width:100%
    height: .62rem
    line-height: .62rem
    padding: 0 .1rem
    text-align: center
    color: #666
    border-radius: .06rem
.search-content
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  z-index: 1
  background: #fff
  .search-item
    line-height: .62rem
    padding-left: .2rem
    background: #fff
    color: #ccc
         
</style>
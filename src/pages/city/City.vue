<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
    <alpha :cities="cities" @change="handleChange"></alpha>
  </div>
</template>

<script>
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/Lsit'
import Alpha from './components/Alpha'
import axios from 'axios'
export default{
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    Alpha
  },
  data () {
  	return {
  		hotCities: [],
  		cities: {},
  		letter: null
  	}
  },
  methods: {
  	getCityInfo () {
  		axios.get('./api/city.json').then(this.getCitySucc)
  	},
  	getCitySucc (res) {
  		res=res.data
  		if(res.ret&&res.data){
  			this.hotCities=res.data.hotCities
  			this.cities=res.data.cities
  			
  		}
  	},
  	handleChange (letter) {
  		this.letter=letter
  	}
  },
  mounted () {
  	this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style> 
<template>
<ul class="list">
  <li class="item" 
  	 v-for="(item,index) of letters"
  	 :key="index"
  	 :ref="item"
  	 @click="handleClickLetter"
  	 @touchstart.prevent="handleStart"
  	 @touchmove="handleMove"
  	 @touchend="handleEnd"
  	 >
  	 {{item}}
  </li>
  
</ul>
</template>

<script>
export default{
	name: 'Alpha',
	props: {
		cities: Object
	},
	data () {
		return {
			staus: false,
			ATop: 0,
			timer: null
			
		}
	},
	updated () {
		this.ATop=this.$refs['A'][0].offsetTop
	},
	methods: {
		handleClickLetter (e) {
			this.$emit('change',e.target.innerText)
		},
		handleStart () {
			this.staus = true
		},
		handleMove (e) {
			if(this.staus){								
			  if(this.timer){
			  	clearTimeout(this.timer)
			  }
			  this.timer=setTimeout( ()=>{
			  	const MclentY=e.touches[0].clientY-79
			  const index=Math.floor((MclentY-this.ATop)/20)
			  if(index > 0 && index < this.letters.length){
			  	this.$emit('change',this.letters[index])
			  }
			  },16)
			  
			}
			
		},
		handleEnd () {
			this.staus = false
		}
	},
	computed: {
		letters () {
			const letters=[]
			for(let i in this.cities){
				letters.push(i)
			}
			return letters
			
		}
	}
}
</script>

<style lang="stylus" scoped>
    @import '../../../assets/styles/verables.styl'
	.list
		position: absolute
		right: 0
		top: 1.58rem
		bottom: 0
		display: flex
		flex-direction: column
		justify-content: center
		width: .4rem
		.item
			line-height: .4rem
			color: $bgColor
			text-align: center
			
</style>
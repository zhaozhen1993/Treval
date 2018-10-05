<template>
  <div class="icons">
  	<swiper :options="swiperOption">
  		 <swiper-slide v-for="(page,index) of pages" :key="index">
		    <div class="icon" v-for="item of page" :key="item.id">
		      <div class="img-icon">
		      	 <img class="img-icon-content" :src="item.imgUrl" />
		      </div>
		      <p class="icon-dec">{{item.title}}</p>
		    </div>
		    
	    </swiper-slide>
	    
	</swiper>    
  </div>
</template>

<script>
export default {
	name: 'HomeIcons',
	props: {
		icon: Array
	},
	data () {
		return {
			swiperOption: {
	  			pagination: {
	  				el:  '.swiper-pagination'
	  				
	  			},
	  			autoplay: false
  		   }
		}
		
	},
	computed: {
			pages (){
				const pages=[]
				this.icon.forEach((item,index)=>{
					const page=Math.floor(index/8)
					if(!pages[page]){
						pages[page]=[]
					}
					pages[page].push(item)
				})
				return pages
			}
		}
}
</script>

<style lang="stylus" scoped>
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    
    .swiper-pagination
      position: absolute
      bottom: -.18rem
      z-index: 1111
    .icon
      position: relative     
      width: 25%
      padding-bottom: 25%
      float: left
      
      .img-icon
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .05rem
        .img-icon-content
          height: 100%
          display: block
          margin: 0 auto
      .icon-dec
        position: absolute
        left: 0
        right: 0
        bottom: 0   
        text-align: center
        line-height: .44rem
</style>
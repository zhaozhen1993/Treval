<template>
  <div class="header">
  	<div class="header-left">
  	 	<span class="iconfont icon-fanhui"></span>
  	</div>
  	<div class="header-input">
  	 	<span class="iconfont icon-sousuo"></span>
  	 	输入城市/景点/游玩主题
  	</div>
  	<router-link to="/city">
	  	<div class="header-right">
	  	 	{{this.$store.state.city}}
	  	 <span class="iconfont icon-arrowdown"></span>
	  	</div>
  	</router-link>
  </div>
</template>

<script>
export default{
	name:'HomeHeader'
	
}
</script>

<style lang="stylus" scoped="">
 @import '../../../assets/styles/verables.styl'
    .header
      display:flex
      line-height:.86rem
      background: $bgColor
      color: #fff
      .header-left
        width:.64rem
        float:left
        .icon-fanhui
          text-align: center
          font-size: .2rem
          display: block
      .header-input
        flex:1
        margin-top: .12rem
        height: .62rem
        line-height: .62rem
        border-radius: .1rem
        background: #fff
        margin-left: .2rem
        padding-left: .2rem
        color: #ccc
      .header-right
        padding: 0 .12rem
        float:right
        min-width: 1.04rem
        text-align: center
        color:#fff
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
        .icon-jiantou
          font-size: .24rem
          margin-left: -.04rem    
</style>
<template>
  <div class="head">
    城市选择
    <router-link to='/'>
      <span class="iconfont icon-fanhui"></span>
    </router-link> 
  </div>
</template>

<script>
export default{
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/verables.styl'
.head
  position: relative
  overflow: hidden
  line-height: .86rem
  height: .86rem
  text-align: center
  background: $bgColor
  color: #fff
  .icon-fanhui
    position: absolute
    left: 0
    top: 0
    color: #fff
    font-size: .4rem
    width: .64rem
</style>
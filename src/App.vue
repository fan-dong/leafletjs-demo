<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="stylus">
html,
body,
#app
	width 100%
	height 100%
	margin 0
	padding 0
	box-sizing border-box
	font-size 14px
	color #fff
	font-family 'Avenir', Helvetica, Arial, sans-serif
</style>

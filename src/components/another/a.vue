<template>
<div id="as">
  <h3>hello another</h3>
</div>
</template>
<script>
export default {
  name: 'as',
  data () {
    return {

    }
  },
  mounted: function () {
    console.log(this.$route.params)
  }
}
</script>

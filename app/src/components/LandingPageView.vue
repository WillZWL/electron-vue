<style scoped>

</style>

<template>
  <div>
    <logo-vue></logo-vue>
    <h1>Welcome</h1>
    <current-page></current-page>
    <links></links>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
  import CurrentPage from './LandingPageView/CurrentPage'
  import Links from './LandingPageView/Links'
  import LogoVue from './Common/Logo'
  import FooterVue from './Common/Footer'

  export default {
    data () {
      return {
      }
    },
    components: {
      LogoVue,
      CurrentPage,
      Links,
      FooterVue
    },
    name: 'landing-page'
  }
</script>

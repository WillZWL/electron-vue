<style>

</style>
<template>
  <div>
    <logo-vue></logo-vue>
    <h1>Login Admin Centre</h1>
    <login-form></login-form>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
  import LoginForm from './LoginPageView/LoginForm'
  import FooterVue from './Common/Footer'
  import LogoVue from './Common/Logo'

  export default {
    components: {
      LoginForm,
      LogoVue,
      FooterVue
    },
    name: 'landing-page'
  }
</script>
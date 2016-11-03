<style>
@media (min-width: 768px) {
  .sidebar {
  z-index: 1;
  position: absolute;
  width: 250px;
  margin-top: 51px;
  }
  .navbar-top-links .dropdown-messages,
  .navbar-top-links .dropdown-tasks,
  .navbar-top-links .dropdown-alerts {
  margin-left: auto;
  }
}
</style>
<template>
  <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
    <navbar-header></navbar-header>

    <nav-top-link></nav-top-link>

    <sidebar></sidebar>

  </nav>
</template>

<script>
  import NavbarHeader from './Navbar/NavbarHeader'
  import NavTopLink from './Navbar/NavTopLink'
  import Sidebar from './Navbar/Sidebar'

  export default {
    components: {
      NavbarHeader,
      NavTopLink,
      Sidebar
    }
  }
</script>
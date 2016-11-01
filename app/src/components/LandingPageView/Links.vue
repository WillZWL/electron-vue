<style scoped>
  a {
    color: rgb(50, 174, 110);
    text-decoration: none;

    &:hover { color: rgb(40, 56, 76); }
  }

  ul {
    list-style-type: none;
    margin-top: 10px;
  }

  li { display: inline-block; }
</style>

<template>
  <ul>
    <!-- <li><router-link to="/test">Test</router-link></li> | -->
    <li><router-link to="/login">Login</router-link></li> |
    <li><router-link to="/register">Register</router-link></li>
  </ul>
</template>

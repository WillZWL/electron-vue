<style scoped>
  footer {
    padding: 80px;
  }
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
  <footer>
    <ul>
      <li><router-link to="/">Home</router-link></li> |
      <li><router-link to="/dashboard">Dashboard</router-link></li> |
      <li><router-link to="#">About</router-link></li> |
      <li><router-link to="#">expertise</router-link></li> |
      <li><router-link to="#">Contact</router-link></li>
    </ul>
  </footer>
</template>

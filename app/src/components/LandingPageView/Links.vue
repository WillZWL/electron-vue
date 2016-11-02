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

  ul li {
    padding-left: 20px;
  }

  li { display: inline-block; }
</style>

<template>
  <ul>
    <li>
      <router-link to="/login">
        <button class="btn btn-success">Login</button>
      </router-link>
    </li>
    <li>
      <router-link to="/register">
        <button class="btn btn-success">register</button>
      </router-link>
    </li>
  </ul>
</template>

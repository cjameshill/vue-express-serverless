<template lang="pug">
#app
  .navbar
    .navbar-brand
      router-link.navbar-item(tag='a' to='/')
        span Home
      router-link.navbar-item(tag='a' to='/new')
        span New
      router-link.navbar-item(tag='a' to='/demo')
        span Demo

  transition(name='fade' mode='out-in')
    router-view.view
</template>

<style lang="scss">

@import "~bulma";

.container {
  margin-top: 2em;
}

</style>

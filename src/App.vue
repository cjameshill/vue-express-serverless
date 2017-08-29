<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<style lang="stylus">

</style>

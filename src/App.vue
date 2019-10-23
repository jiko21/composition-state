<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Composition API store sample</span>
      </v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/about">About</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content class="top">
      <router-view/>
    </v-content>
  </v-app>
</template>
<style lang="scss" scoped>
.top {
  margin: 0 20%;
}
</style>

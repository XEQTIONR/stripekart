<template web>
  <div class="w-page">
    <nav>
      <ul class="w-navbar">
        <li class="w-title" :text="navbarTitle">{{navbarTitle}}</li>
      </ul>
    </nav>
    <div class="w-container">
      <router-link tag="button" class="w-button" id="homeButton" to="/">Home</router-link>
      <!-- alternate way to route manually and use the same method as native -->
      <button class="w-button" id="aboutButton" v-on:click="goToAboutPage">About</button>
      <router-view/>
    </div>
  </div>
</template>
<template native>
  <Page>
    <ActionBar :title="navbarTitle"/>
    <GridLayout rows="auto, auto">
      <Button text="Home" @tap="goToHomePage" row="0"/>
      <Button text="About" @tap="goToAboutPage" row="1"/>
    </GridLayout>
  </Page>
</template>
<script>

  const { VUE_APP_MODE } = process.env;

  export default {
    data() {
      return {
        navbarTitle: `App.vue`,
      };
    },
    methods: {
      goToHomePage() {
        this.goTo('home');
      },
      goToAboutPage() {
        this.goTo('about');
      },
      goTo(route) {
        VUE_APP_MODE === 'web' ? this.$router.push(route) : this.$navigator.navigate(route);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style web>
  @import '~styles/style-one';

  .w-page {
    height: 100%;
    width: 100%;
  }
</style>
<style native>
  @import '~styles/style-one';
</style>

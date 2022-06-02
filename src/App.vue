<template>
  <div id="nav">
    <about></about>
    <services></services>
    <options></options>
    <countryList></countryList>
  </div>
</template>
<script>
import About from "./views/AboutView.vue";
import Services from "./views/ServiceView.vue";
import Options from "./views/OptionsView.vue";
import CountryList from "./views/CountryList.vue";

export default {
  components: {
    Options,
    About,
    Services,
    CountryList,
  },
  // ...
};
</script>

<style lang="css">
@import "./assets/style.css";
</style>

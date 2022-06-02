<template>
  <h1>Country List</h1>
  <h1>You are on page {{ $route.query.page }}</h1>
  <div class="countries">
    <CountriesCard
      v-for="country in countries"
      :key="country.id"
      :country="country"
    />
  </div>
</template>

<script>
import CountriesCard from "@/components/CountriesCard.vue";
import CountryService from "@/services/CountryService.js";

export default {
  name: "CountryList",
  components: {
    CountriesCard,
  },
  data() {
    return {
      Countries: null,
    };
  },
  created() {
    CountryService.getCountries()
      .then((response) => {
        this.countries = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.Countries {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

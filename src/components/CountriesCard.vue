<template>
  <div class="countries-card">
    <h1>hi</h1>
    <span>{{ country.flag }}</span>
    <h4>{{ country.name }}</h4>
  </div>
</template>

<script>
export default {
  name: "CountriesCard",
  props: {
    country: {
      required: true,
    },
    page() {
      return parseInt(this.$route.query.page);
    },
  },
};
</script>

<style scoped>
.countries-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.countries-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>

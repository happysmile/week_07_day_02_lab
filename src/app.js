import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: "#app",
    data: {
      countries: [],
      selectedCountry: null,
      favouriteCountries: []
    },
    mounted() {
      this.fetchCountries();
    },
    computed: {
      worldPopulation: function() {
        return this.countries.reduce((runTot, country) => {
          return runTot + country.population;
        }, 0);
      }
    },
    methods: {
      fetchCountries: function(){
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.countries = data)
      },
      addToFavourites: function(){
        if(!this.favouriteCountries.includes(this.selectedCountry)){
          this.favouriteCountries.push(this.selectedCountry);
        }
      },
      getCountryFromCountryCode: function(countryCode){
        return this.countries.find(country => country.alpha3Code === countryCode);
      }
    }
  })



})

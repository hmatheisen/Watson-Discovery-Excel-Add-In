<template>
  <div id="app">
    <v-app>
      <v-container>
        <v-layout row wrap justify-center class="text-xs-center">
          <Card @searching="onSearch" @endSearching="onEndSearch" />
          <div v-if="searching" class="ma-3">
            <h2>Watson is thinking</h2>
          </div>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import Card from './components/Card'

export default {
  components: {
    Card
  },
  data() {
    return {
      searching: false
    }
  },
  methods: {
    onSearch(event) {
      this.searching = event;
    },
    onEndSearch(event) {
      this.searching = event;
    }
  }
}
</script>

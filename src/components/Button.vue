<template>
	<div>
		<v-btn v-on:click="querydiscovery" > {{text}} </v-btn>

		<p> {{response}} </p>
		<p> {{error}} </p>

	</div>
</template>

<script>
import axios from 'axios';
import json from '../../env.json'
export default {
	props: {
		text: String
	},
	data () {
		return {
			json: json
		}
	},
	methods: {
		querydiscovery () {
			this.$emit('searching', true)
      window.Excel.run(async (context) => {
        const range = context.workbook.getSelectedRange()
        const worksheet = context.workbook.worksheets.getActiveWorksheet()
        range.load()
        await context.sync()
        const nextRange = worksheet.getCell(range.rowIndex, range.columnIndex + 1)
        context.trackedObjects.add(nextRange)
        axios.get('https://cors-anywhere.herokuapp.com/https://gateway.watsonplatform.net/discovery/api/v1/environments/' + this.json.discovery_environment_id + '/collections/' + this.json.discovery_collection_id + '/query?version=2017-11-07&count=1&highlight=true&return=text&passages.count=5&natural_language_query=' + range.text[0][0], {
          auth: {
            username: this.json.discovery_username,
            password: this.json.discovery_password
          }
        }).then(response => {
          nextRange.values = [[response.data.results[0].text]]
          nextRange.context.sync()
          this.$emit('endSearching', false)
        }).catch(error => {
          this.error = error
          this.$emit('endSearching', false)
        })
      })
    }
	}
}
</script>

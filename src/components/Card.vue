<template>
  <v-card width="100%">
		<v-card-text class="text">
			<h2> {{ title }} </h2>
		</v-card-text>
            
		<v-card-text>
			{{ text }}
		</v-card-text>

		<v-card-text>
			<Button @searching="onSearch" @endSearching="onEndSearch" v-bind:text="buttonText"/>
		</v-card-text>

		<div v-if="searching">
			<h2>Watson is thinking</h2>
		</div>

	</v-card>
</template>

<script>
import Button from './Button.vue';
export default {
	components: {
		Button
	},
	data () {
		return {
			title: 'Watson Discovery',
			text: 'Select a question and ask Watson',
			buttonText: 'Ask Watson',
			searching: false
		}
	},
	methods: {
		onSearch(searching) {
			this.$emit('searching', searching)
		},
		onEndSearch(searching) {
			this.$emit('endSearching', searching);
		}
	}
}
</script>

<style>
.text {
  background-color: #42b983
}
</style>
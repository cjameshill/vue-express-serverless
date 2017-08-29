<template lang="pug">
	
.container
	h1.title.is-1 {{page}}
	.field
		.control
			input.input.is-primary(v-model='test')
	h1.title.is-3 {{test}}

</template>

<script>
	
	export default {
		data() {
			return {
				test: 'Test Input'
			}
		},
		computed: {
			page() {
				return this.$route.params.page
			}
		},

		mounted() {
			console.log('Home component loaded');
		}
	}
</script>

<style lang="stylus">

h1
	text-transform capitalize

</style>
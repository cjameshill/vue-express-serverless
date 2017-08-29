<template>
	
	<div class="container">
		<h1>{{ title }}</h1>
	</div>

</template>

<script>
	
	export default {
		data() {
			return {
				title: 'Home'
			}
		},

		mounted() {
			console.log('Home component loaded');
		}
	}
</script>
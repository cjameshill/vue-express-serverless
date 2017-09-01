<template lang="pug">
.container
	h1.title.is-1 Home
	.notification.is-success(v-for='company in companies') {{company.name}}
</template>

<script>
	export default {
		data() {
			return {
			}
		},

		asyncData({store}) {
			return store.dispatch('FETCH_COMPANIES')
		},

		computed: {
			companies() {
				return this.$store.getters.companies;
			},
			company() {
				return this.$store.getters.getCompany('GOJO');
			}
		},
		beforeMount() {
			// if (this.$root._isMounted) {
		 //      this.loadCompanies()
		 //    }
			
		},
		methods: {
			loadCompanies() {
				this.$bar.start()
			      this.$store.dispatch('FETCH_COMPANIES')
			      	.then(() => { 
			      		console.log('fetched companies')
			      		this.$bar.finish()
			      	})
			}
		}
	}
</script>

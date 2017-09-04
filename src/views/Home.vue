<template lang="pug">
.container
	h1.title.is-1 Home
	.columns.is-multiline.is-centered
		.column.is-12.has-text-centered(v-show='loader')
			.notification Loading
		.column.is-12(v-if="users !== ''" v-for='user in users')
			.notification.is-success
				button.button.is-medium.is-inverted.is-outlined {{ user.name }}
				span.tag.is-light(v-if='user.companies' v-for='company in user.companies') {{company.name}}
</template>

<script>

// import { ALL_COMPANIES_QUERY } from '../constants/graphql'
import gql from 'graphql-tag'
	export default {
		data() {
			return {
				users: '',
				loading: 0
			}
		},
		computed: {
			loader() {
				return (this.loading === 0) ? false : true;
			}
		},
		apollo: {
			users: {
				query: gql`query users {
					users {
						name
						companies {
							name
							created
						}
					}
				}`,
				prefetch: true
			}
		}
	}
</script>

<style>
	
	.notification span {
		margin: 0 0.3em;
	}

</style>

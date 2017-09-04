import gql from 'graphql-tag'

export const ALL_COMPANIES_QUERY = gql`
	query users {
		users {
			name
			companies {
				name
			}
		}
	}
`
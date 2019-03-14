import React, { Component } from 'react';
import PropertyListing from './containers/PropertyListing'
import Layout from './components/Layout'

class App extends Component {
	render() {
		return (
			<Layout>
				<PropertyListing />
			</Layout>
		);
	}
}

export default App;

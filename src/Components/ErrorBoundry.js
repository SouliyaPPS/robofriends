import React, { Components } from 'react';

class ErrorBoundry extends Components {
	constructor(){
		super();
		this.state = {
			hasError: false,
		}
	}

	componentDidCatch(error, info){
		this.setState({hasError: true});
	}

	render(){
		if(this.state.hasError) {
			return <h1>Sorry the Fault is Ours</h1>
		}else{
			return this.state.children
		}
	}
}

export default ErrorBoundry;
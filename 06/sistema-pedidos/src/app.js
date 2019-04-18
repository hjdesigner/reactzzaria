import React, { Component } from 'react';

class App extends Component {
	state = {
		products: [],
	}

	handleClick = (e) => {
		e.preventDefault()
		const result = {}
		this.setState({
			products: result
		})
	}

  render() {
		const { hasError } = this.props
		return (
 	    <div className="App">
				<header className="App-header">
					{hasError && <h1>Deu erro</h1>}
     	    <p>
       	    Edit <code>src/App.js</code> and save to reload.
         	</p>
 	        <a
            className="App-link"
   	        href="https://reactjs.org"
     	      target="_blank"
       	    rel="noopener noreferrer"
						onClick={this.handleClick}
 	        >
						Buscar produtos
					</a>
					{this.state.products.map((product) => (
						<div key={product}>{product}</div>
					))}
     	  </header>
     	</div>
    );
  }
}

export default App;

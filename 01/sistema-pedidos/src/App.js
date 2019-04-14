import React, { Component, Suspense } from 'react';
import './App.css';
const Img = React.lazy(() => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(import('./img'));
		}, 10000);
	});
});
class App extends Component {
  render() {
		return (
 	    <div className="App">
  	    <header className="App-header">
					<Suspense fallback={<h1>Carregando imagem...</h1>}>
						<Img />
					</Suspense>
     	    <p>
       	    Edit <code>src/App.js</code> and save to reload.
         	</p>
 	        <a
            className="App-link"
   	        href="https://reactjs.org"
     	      target="_blank"
       	    rel="noopener noreferrer"
 	        >
            Learn React
   	      </a>
     	  </header>
     	</div>
    );
  }
}

export default App;

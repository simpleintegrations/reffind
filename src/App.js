import React, { Component } from 'react';

import ChuckNorris from './import/component/chucknorris-page';

/*
  Attribution:
    animated-ninja-image-0002.gif - sourced from www.animatedimages.org
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="http://www.animatedimages.org/cat-ninjas-1387.htm">
            <img 
              src="http://www.animatedimages.org/data/media/1387/animated-ninja-image-0002.gif" 
              border="0" 
              width="70px"
              height="70px"
              alt="animated ninja 0002"
            />
          </a>
          <h1 className="App-title">Reffind The Wisdom of Chuck Norris</h1>
        </header>
        <div className="App-container">
          <div className="App-content">
            <ChuckNorris />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

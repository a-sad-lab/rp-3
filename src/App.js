import {useState} from 'react'

import {BigListWrapper} from './cmp/big-list-wrapper'

function App() {
  console.log('render App')
  const [count, update] = useState(0)

  const click = function() {
    update(function(state) {
      return state + 1
    })
  }

  return (
    <div className="App">
      <pre>{count}</pre>
      <button onClick={click}>click</button>
      <header className="App-header">
        <BigListWrapper />
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

export default App;

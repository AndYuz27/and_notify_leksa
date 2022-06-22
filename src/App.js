import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';

function App() {
  // const { fetchAllMessages } = useActions()
  // React.useEffect(() => {
  //     fetchAllMessages()
  // }, [])
  const AppWrpd = styled.div`
    display: flex;
    align-items: center;
    justify-content: stretch;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background: ${(props) => props.background || 'white'};

`
  return (
    <div className="App">
    


    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

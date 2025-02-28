
import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className="App-header">R.B</header>
        <main>
          <Dictionary />
        </main>
      <footer>
        <a
          href="https://github.com/Ruta-B/dict-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{" "}
        and{" "}
        <a
          href="https://dictreact.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify{" "}
        </a>
      </footer></div>
    </div>
  );
}

export default App;

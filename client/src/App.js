import './style.css';
import Images from './components/Images/Images';
import Description from './components/Description/Description';
import ProjectList from './components/ProjectList/ProjectList';

function App() {
  const stockText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  return (
    <div className="App">
      <h1>Words and Pictures</h1>
      <ProjectList/>
      <h2>Blondie</h2>
      <Description
        text={stockText}
      />
      <Images/>
    </div>
  );
}

export default App;

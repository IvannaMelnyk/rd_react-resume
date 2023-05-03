import './App.css';
import './css/style.css'
// import './scroll-to-letter'
import './fetch-repos'
import avatar from './assets/avatar.jpeg'
import { Avatar } from './components/Avatar';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';

function App() {
  return (
  <div>
     <div className="main-container">
        <Contact />
        <Avatar avatar={avatar} width="200" />
      <Experience/>
      </div>
      </div>
  );
}

export default App;

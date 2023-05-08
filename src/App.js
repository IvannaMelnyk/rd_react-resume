import './App.css';
import './css/style.css'
// import './scroll-to-letter'
import './fetch-repos'
import avatar from './assets/avatar.jpeg'
import { Avatar } from './components/Avatar';
import { Contact } from './components/Contact';
import { Skills } from './components/Skills';
import Counter from './components/Counter';

function App() {
  return (
  <div>
     <div className="main-container">
        <Contact />
        <Avatar avatar={avatar} width="200" />
        <Skills />
     
      </div>
       <Counter/>
      </div>
  );
}

export default App;

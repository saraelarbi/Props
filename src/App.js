import logo from './logo.svg';
import './App.css';
import { Profile } from './Profile/ProfileComponent';

function App() {

 return (
    <div className="App">
    
     
 <div>
 <Profile
          fullName={"Sara Elarbi"}
          profession={"Etudiante"}
          bio="Etudiante en Business Intelligence"
         // handleName={handleName}
        >
          <img
            src="/profile.png"
            alt=""
            style={{ borderRadius: "15px", width: "300px" }}
          />
        </Profile>
    </div>
    </div>
  );
}

export default App;

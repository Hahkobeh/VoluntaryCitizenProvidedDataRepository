import './App.css';
import {useState} from "react";
import Configure from "./pages/Configure";
import Search from "./pages/Search";

function App() {
  const [perms, setPerms] = useState([false,false,false]);
  const [searching, setSearching] = useState(false);
  /*fire/police/ems*/



  const handleClick = (e) => {
    switch (e.target.name){
      case "fire":
        setPerms([
          !perms.at(0),
          perms.at(1),
          perms.at(2)
        ]);
        break;
      case "police":
        setPerms([
          perms.at(0),
          !perms.at(1),
          perms.at(2)
        ]);
        break;
      case "ems":
        setPerms([
          perms.at(0),
          perms.at(1),
          !perms.at(2)
        ]);
        break;
      default:
        break;
    }
    console.log(perms);
  }

  return (
    <div className="App">
      {!searching ?
          <Configure handleClick={handleClick} perms={perms} search={() => setSearching(prevState => !prevState)}/>
          :
          <Search perms={perms} search={() => setSearching(prevState => !prevState)}/>
      }



    </div>
  );
}

export default App;

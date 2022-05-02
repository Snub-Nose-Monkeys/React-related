import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component.jsx";
import "./App.css";

const App = () => {
  // console.log("render")
  const [SearchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMomsters] = useState(monsters);

  const onSearchChange = event => {
    const searchFieldString = event.target.value;
    // console.log(searchField)
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  useEffect(() => {
    const searchRegx =
      SearchField === "" ? new RegExp("") : new RegExp(`${SearchField}`, "i");

    const newFilteredMomsters = monsters.filter(monster =>
      searchRegx.test(monster.name)
    );

    setFilteredMomsters(newFilteredMomsters);
  }, [monsters, SearchField]);

  return (
    <div className="App">
      <h2 className="app-title">Monsters</h2>
      <SearchBox
        onSearchChange={onSearchChange}
        placeholder={"search monsters"}
        className={"search-box"}
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// Class Component

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       monsters: [],
//       searchField: "",
//     }
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(users =>
//         this.setState(
//           () => {
//             return { monsters: users }
//           },
//           () => {
//             // console.log(this.state)
//           }
//         )
//       )
//   }

//   onSearchChange = event => {
//     const searchField = event.target.value
//     // console.log(searchField)
//     this.setState(() => {
//       return { searchField }
//     })
//   }

//   render() {
//     //Optimization 1
//     const { monsters, searchField } = this.state
//     const { onSearchChange } = this

//     const searchRegx =
//       searchField === "" ? new RegExp("") : new RegExp(`${searchField}`, "i")

//     const filteredMpmsters = monsters.filter(monster =>
//       searchRegx.test(monster.name)
//     )

//     return (
//       <div className="App">
//         <h2 className="app-title">Monsters</h2>
//         <SearchBox
//           onSearchChange={onSearchChange}
//           placeholder={"search monsters"}
//           className={"search-box"}
//         />
//         {/* {filteredMpmsters.map(monster => {
//           return (
//             <div key={monster.id}>
//               <h1>{monster.name}</h1>
//             </div>
//           )
//         })} */}
//         <CardList monsters={filteredMpmsters} />
//       </div>
//     )
//   }
// }

export default App;

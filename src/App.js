import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import Condition from "./components/Condition";
import Collection from "./components/Collection";
import ListeFormateurs from "./components/FormateurColl/ListeFormateurs";
import DemoEvents from "./components/DemoEvents";
import DemoState from "./components/demoState/DemoState";
import DemoStateForm from "./components/demoState/DemoStateForm";
import DemoForm1 from "./components/demoForm/DemoForm1";
import DemoFormLib from "./components/demoForm/DemoFormLib";

function App() {
  const nomForm = ["Aude", "Aurélien", "Mélanie", "Quentin", "Rudi"];

  const formateurs = [
    {
      id: 1,
      lastname: "Beurive",
      firstname: "Aude",
      birthdate: "16/10/1989",
      avatar: "./assets/images/aude.png",
      gender: "female",
    },
    {
      id: 2,
      lastname: "Strimelle",
      firstname: "Aurélien",
      birthdate: "1/11/1989",
      avatar: "./assets/images/aurelien.png",
      gender: "male",
    },
    {
      id: 3,
      lastname: "Chaineux",
      firstname: "Gavin",
      birthdate: "18/10/1993",
      avatar: "./assets/images/gavin.png",
      gender: "male",
    },
    {
      id: 4,
      lastname: "Ly",
      firstname: "Khun",
      birthdate: "06/05/1982",
      avatar: "./assets/images/khun.png",
      gender: "male",
    },
  ];

  return (
    <div className='App'>
      <p>Coucou</p>
      {/* <Welcome test="mon super test" truc="bidule" monNombrePref={5}/>
      <Condition possedeAnimal={true} nomAnimal="Pilote" estChien={true} /> */}
      <Collection nomFormateurs={nomForm} />
      <ListeFormateurs listeFormateurs={formateurs} />

      <DemoEvents />

      {/* Les demos state */}
      <DemoState />
      <DemoStateForm />

      {/* Les demos formulaire */}
      <DemoForm1 />

      <DemoFormLib />
    </div>
  );
}

export default App;

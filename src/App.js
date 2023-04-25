import React, { useState } from "react";
import "./App.css";
import Greeting from "./components/Greetings/Greeting";
import { Navbar } from "./components/Navbar/Navbar";
import Card from "./components/Cards/PersonCard/Card";
import persons from "./common/persons.json";
import hotels from "./common/hotels.json";
import HotelCard from "./components/Cards/HotelCard/HotelCard";

// const persons = [
//   {
//     imageURL: "https://avatars.githubusercontent.com/u/89378479?v=4",
//     fullName: "Dzenan Kosuta",
//     description: "Dzenan is rising Web developer...",
//     location: "Novi pazar, Serbia",
//     goToRepositories: "https://github.com/dzenankosuta?tab=repositories",
//   },
//   {
//     imageURL: "https://avatars.githubusercontent.com/u/111905831?v=4",
//     fullName: "Alen Muslic",
//     description: "Alen is rising Web developer...",
//     location: "Novi pazar, Serbia",
//     goToRepositories: "https://github.com/alenmuslic?tab=repositories",
//   },
//   {
//     imageURL:
//       "https://www.borisradivojkov.com/assets/images/profesionalni-poslovni-portret-rukovodioca-600x600.jpg",
//     fullName: "Aladin Zecic",
//     description: "Aladin is rising Web developer...",
//     location: "Novi pazar, Serbia",
//     goToRepositories: "https://github.com/aladinzecic?tab=repositories",
//   },
//   {
//     imageURL: "https://avatars.githubusercontent.com/u/111905979?v=4",
//     fullName: "Haris Muslic",
//     description: "Haris is rising Web developer...",
//     location: "Novi pazar, Serbia",
//     goToRepositories: "https://github.com/harismuslic04?tab=repositories",
//   },
// ];

function App() {
  // const [count, setCount] = React.useState(0);
  const [count, setCount] = useState(0);
  // setCount je metoda pomocu koje menjamo vrednost count state_a:
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  // const x = 10;
  return (
    //  React.createElement("p", {}, "Neki paragraf");
    <>
      {" "}
      {/* Fragment - najcesce se koristi za wrappovanje */}
      <div className="App">
        <Navbar>{/* <p>Samo za primer</p> */}</Navbar>
        <Greeting appName={"Our First App"} username={"Bakir Ujkanovic"} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 250px)",
            justifyContent: "center",
            gridAutoRows: "minmax(420px, auto)",
            gridGap: "40px",
          }}
        >
          {/* <Card
            imageURL={"https://avatars.githubusercontent.com/u/89378479?v=4"}
            fullName={"Dzenan Kosuta"}
            location={"Novi pazar, Serbia"}
            description={
              "Dženan is a mathematician, and he work's in center NIT as a Webdeveloper"
            }
            goToRepositories={
              "https://github.com/dzenankosuta?tab=repositories"
            }
          />
          <Card
            imageURL={"https://avatars.githubusercontent.com/u/111905831?v=4"}
            fullName={"Alen Muslic"}
            location={"Novi pazar, Serbia"}
            description={"Alen is rising Web developer..."}
            goToRepositories={"https://github.com/alenmuslic?tab=repositories"}
          />
          <Card
            imageURL={
              "https://www.borisradivojkov.com/assets/images/profesionalni-poslovni-portret-rukovodioca-600x600.jpg"
            }
            fullName={"Aladin Zecic"}
            location={"Novi pazar, Serbia"}
            description={"Aladin is rising Web developer..."}
            goToRepositories={"https://github.com/aladinzecic?tab=repositories"}
          />
          <Card
            imageURL={"https://avatars.githubusercontent.com/u/111905979?v=4"}
            fullName={"Haris Muslic"}
            location={"Novi pazar, Serbia"}
            description={"Haris is rising Web developer..."}
            goToRepositories={
              "https://github.com/harismuslic04?tab=repositories"
            }
          /> */}
          {persons.map((person) => (
            <Card
              imageURL={person.imageURL}
              fullName={person.fullName}
              location={person.location}
              description={person.description}
              goToRepositories={person.goToRepositories}
            />
          ))}
          <div>
            <button style={{ width: "40px" }} onClick={decreaseCount}>
              -
            </button>
            <p>{count}</p>
            <button
              style={{ width: "40px" }}
              onClick={() => {
                console.log("povecanje");
                increaseCount();
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="Hotels">
          {hotels.map((hotel) => (
            <HotelCard
              imageURL={hotel.imageURL}
              name={hotel.name}
              stars={hotel.stars}
              description={hotel.description}
              rating={hotel.rating}
              reviews={hotel.reviews}
            />
          ))}
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
          className="formContainer"
        >
          <label htmlFor="firstName">Unesite vase ime</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
          ></input>{" "}
          <br></br>
          <label htmlFor="firstlast">Unesite vase prezime</label>
          <input
            type="text"
            id="firstlast"
            name="firstlast"
            required
          ></input>{" "}
          <br></br>
          <label htmlFor="email">Unesite vasu email adresu</label>
          <input type="email" id="email" name="email" required></input>{" "}
          <br></br>
          <label htmlFor="hobi">Unesite vas hobi</label>
          <input type="text" id="hobi" name="hobi"></input>
          <br></br>
          <label htmlFor="broj">Unesite vas broj telefona</label>
          <input type="tel" id="broj" name="broj"></input>
          <br></br>
          <button>Potvrdi</button>
        </form>
      </div>
    </>
  );
}

export default App;

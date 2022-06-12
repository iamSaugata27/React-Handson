import React from "react";
import ListOfPlayers from "./ListOfPlayers";

const players = [
  { name: "Jack", score: 50 },
  { name: "Michael", score: 70 },
  { name: "John", score: 40 },
  { name: "Ann", score: 61 },
  { name: "Eisabeth", score: 61 },
  { name: "Sachin", score: 95 },
  { name: "Dhoni", score: 100 },
  { name: "Virat", score: 84 },
  { name: "Jadeja", score: 64 },
  { name: "Raina", score: 75 },
  { name: "Rohit", score: 80 },
];

const IndianTeam = ["Sachin", "Dhoni", "Virat", "Rohit", "Yuvraj", "Raina"];

const T20Players = ["First", "Second", "Third"];
const RanjiTrophyPlayers = ["Fourth", "Fifth", "Sixth"];
const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

const Scorebelow70 = ({ players }) => {
  const players70 = [];
  players.map((item) => {
    if (item.score <= 70) players70.push(item);
  });
  return <ListOfPlayers players={players70} />;
};

function OddPlayers([first, third, fifth]) {
  return (
    <div>
      <li>First: {first}</li>
      <li>Third: {third}</li>
      <li>Fifth: {fifth}</li>
    </div>
  );
}

function EvenPlayers([second, fourth, sixth]) {
  return (
    <div>
      <li>Second: {second}</li>
      <li>Fourth: {fourth}</li>
      <li>Sixth: {sixth}</li>
    </div>
  );
}

const ListofindianPlayers = ({ IndianPlayers }) => {
  return IndianPlayers.map((player, index) => {
    return (
      <div key={index}>
        <li>Mr. {player} Player</li>
      </div>
    );
  });
};

const Players = () => {
  const OddPlayersIndianTeam = [];
  const EvenPlayersIndianTeam = [];
  IndianTeam.forEach((item, index) => {
    if ((index + 1) % 2 != 0) OddPlayersIndianTeam.push(item);
    else EvenPlayersIndianTeam.push(item);
  });
  var flag = true;
  if (flag) {
    return (
      <div>
        <h1> List of Players</h1>
        <ListOfPlayers players={players} /> <hr />
        <h1> List of Players having Scores Less than 70 </h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else
    return (
      <div>
        {" "}
        <div>
          <h1> Indian Team </h1>
          <h1> Odd Players </h1> {OddPlayers(OddPlayersIndianTeam)}
          <hr />
          <h1> Even Players</h1>
          {EvenPlayers(EvenPlayersIndianTeam)}
        </div>
        <hr />
        <div>
          <h1> List of Indian Players Merged:</h1>{" "}
          <ListofindianPlayers IndianPlayers={IndianPlayers} />
        </div>
      </div>
    );
};

export default Players;

import React from "react";

const ListOfPlayers = ({ players }) => {
  return players.map((player) => {
    return (
      <div key={player.name}>
        <li>
          Mr. {player.name}
          <span> {player.score}</span>
        </li>
      </div>
    );
  });
};

export default ListOfPlayers;

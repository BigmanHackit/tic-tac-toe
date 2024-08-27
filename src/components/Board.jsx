import React, { useState } from "react";
import BoxButton from "./BoxButton";

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleclick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
    <div className="border border-">{status}</div>
      <div className="flex">
        <BoxButton value={squares[0]} onSquareClick={() => handleclick(0)} />
        <BoxButton value={squares[1]} onSquareClick={() => handleclick(1)} />
        <BoxButton value={squares[2]} onSquareClick={() => handleclick(2)} />
      </div>
      <div className="flex">
        <BoxButton value={squares[3]} onSquareClick={() => handleclick(3)} />
        <BoxButton value={squares[4]} onSquareClick={() => handleclick(4)} />
        <BoxButton value={squares[5]} onSquareClick={() => handleclick(5)} />
      </div>
      <div className="flex">
        <BoxButton value={squares[6]} onSquareClick={() => handleclick(6)} />
        <BoxButton value={squares[7]} onSquareClick={() => handleclick(7)} />
        <BoxButton value={squares[8]} onSquareClick={() => handleclick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

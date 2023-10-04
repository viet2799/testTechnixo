import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import "./Board.css";
import { ItemCell } from "../types";

const dataIndex: ItemCell[] = [
  {
    id: 1,
    img: "https://genk.mediacdn.vn/2018/11/21/mewtwofull1502101-15427895937561653247914.jpg",
    stat: "",
  },
  {
    id: 1,
    img: "https://genk.mediacdn.vn/2018/11/21/mewtwofull1502101-15427895937561653247914.jpg",
    stat: "",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/1200x/90/40/1b/90401b05889bca7ff3508192d45cd358.jpg",
    stat: "",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/1200x/90/40/1b/90401b05889bca7ff3508192d45cd358.jpg",
    stat: "",
  },
  {
    id: 3,
    img: "https://cf.shopee.vn/file/6ec14c94c90f5a70f18347bf805e6dfb",
    stat: "",
  },
  {
    id: 3,
    img: "https://cf.shopee.vn/file/6ec14c94c90f5a70f18347bf805e6dfb",
    stat: "",
  },
  {
    id: 4,
    img: "https://i.pinimg.com/originals/78/19/4d/78194daef54381c55b86355a299927dd.jpg",
    stat: "",
  },
  {
    id: 4,
    img: "https://i.pinimg.com/originals/78/19/4d/78194daef54381c55b86355a299927dd.jpg",
    stat: "",
  },
  {
    id: 5,
    img: "https://i.pinimg.com/736x/2e/65/48/2e65485e403d8b4031f3c16e23993ee0.jpg",
    stat: "",
  },
  {
    id: 5,
    img: "https://i.pinimg.com/736x/2e/65/48/2e65485e403d8b4031f3c16e23993ee0.jpg",
    stat: "",
  },
  {
    id: 6,
    img: "https://gamek.mediacdn.vn/133514250583805952/2021/7/17/photo-1-16265407902431182704940.png",
    stat: "",
  },
  {
    id: 6,
    img: "https://gamek.mediacdn.vn/133514250583805952/2021/7/17/photo-1-16265407902431182704940.png",
    stat: "",
  },
  {
    id: 7,
    img: "https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/4781cf224a92b952b90c5c54f7897f6870ce8f1e.png",
    stat: "",
  },
  {
    id: 7,
    img: "https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/4781cf224a92b952b90c5c54f7897f6870ce8f1e.png",
    stat: "",
  },
  {
    id: 8,
    img: "https://img.wattpad.com/9073294b652a217329f33b82b2b5510c6d36ec23/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f7a66363934794f354846547a31513d3d2d33392e313537383766303833383534653834353433373439313038303138302e6a7067?s=fit&w=720&h=720",
    stat: "",
  },
  {
    id: 8,
    img: "https://img.wattpad.com/9073294b652a217329f33b82b2b5510c6d36ec23/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f7a66363934794f354846547a31513d3d2d33392e313537383766303833383534653834353433373439313038303138302e6a7067?s=fit&w=720&h=720",
    stat: "",
  },
];

const Board: React.FC = () => {
  const [items, setItems] = useState(dataIndex.sort(() => Math.random() - 0.5));
  const [prev, setPrev] = useState<number>(-1);

  // states...
  useEffect(() => {
    // Initialize the game board with random shapes and colors
  }, []);

  const handleCheck = (current: number) => {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  };

  const handleCellClick = (index: number) => {
    // Reveal cell, check for matches, update game state, and handle game completion
    console.log("hello");
    if (prev === -1) {
      items[index].stat = "active";
      setItems([...items]);
      setPrev(index);
    } else {
      handleCheck(index);
    }
  };

  return (
    <div className="board">
      {/* Render each cell in the board */}
      {items?.map((item: ItemCell, index: number) => (
        <Cell
          key={index}
          item={item}
          id={index}
          handleCellClick={handleCellClick}
        />
      ))}
    </div>
  );
};

export default Board;

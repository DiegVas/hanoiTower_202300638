import GameBody from "./GameBody";
import Header from "./Header";
import "./Styles/HomePage.css";
import "./Styles/ModalTile.css";
import { useState } from "react";
import Modal from "react-modal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [diskValue, setDiskValue] = useState();

  const [moveCount, setMoveCount] = useState(0);
  const [dragId, setDragId] = useState();
  const [tiles, setTiles] = useState([
    {
      id: "Tile-1",
      column: 1,
      row: 1,
      width: 2,
    },
    {
      id: "Tile-2",
      column: 1,
      row: 2,
      width: 4,
    },
    {
      id: "Tile-3",
      column: 1,
      row: 3,
      width: 6,
    },
    {
      id: "Tile-4",
      column: 1,
      row: 4,
      width: 8,
    },
    {
      id: "Tile-5",
      column: 1,
      row: 5,
      width: 10,
    },
    {
      id: "Tile-6",
      column: 1,
      row: 6,
      width: 12,
    },
  ]);

  const handleDrag = (ev) => {
    const dragTile = tiles.find((tile) => tile.id === ev.currentTarget.id);
    const topTile = tiles.filter((tile) => tile.column === dragTile.column).sort((a, b) => a.width - b.width)[0];

    if (topTile && ev.currentTarget.id === topTile.id) {
      setDragId(ev.currentTarget.id);
    } else {
      ev.preventDefault();
    }
  };

  const handleDrop = (ev) => {
    const dragTile = tiles.find((tile) => tile.id === dragId);
    const dropColumn = ev.currentTarget.id;

    const dropColumnTopTile = tiles
      .filter((tile) => tile.column.toString() === dropColumn.toString())
      .sort((a, b) => a.width - b.width)[0];

    let newTileState = tiles;

    if (!dropColumnTopTile || dragTile.width < dropColumnTopTile.width) {
      newTileState = tiles.map((tile) => {
        if (tile.id === dragTile.id) {
          tile.column = parseInt(dropColumn, 10);
          setMoveCount(moveCount + 1);
        }

        return tile;
      });
    }

    setTiles(newTileState);
  };

  const setNewDisk = () => {
    const newTiles = [];
    for (let i = 1; i <= diskValue; i++) {
      newTiles.push({
        id: `Tile-${i}`,
        column: 1,
        row: i,
        width: i * 2,
      });
    }
    setTiles(newTiles);
  };

  const column1Tiles = tiles.filter((tile) => tile.column === 1);
  const column2Tiles = tiles.filter((tile) => tile.column === 2);
  const column3Tiles = tiles.filter((tile) => tile.column === 3);
  const winCondition = tiles.every((tile) => tile.column === 3);

  return (
    <>
      <div className="App">
        <h1 className="title">Torre de Hanoi</h1>
        <Header openModal={() => setIsModalOpen(true)} reset={setNewDisk} setMoveCount={setMoveCount} />
        <div className="GameBody">
          <span>
            <strong>Move count: </strong>
            {moveCount}
          </span>
          <GameBody
            column1Tiles={column1Tiles}
            column2Tiles={column2Tiles}
            column3Tiles={column3Tiles}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
          />
        </div>
        {winCondition && (
          <div className="win-message">
            ¡Felicidades Ganaste!
            <div className="win-subtitle">
              Lo lograste con <span className="win-number">{moveCount}</span> numero de movimientos
            </div>
          </div>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        shouldCloseOnOverlayClick={false}
        className="TileInput"
      >
        <h2>¿Cuantos discos deseas?</h2>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            setNewDisk();
            setIsModalOpen(false);
          }}
        >
          <input
            type="number"
            id="numberInput"
            className="form-input"
            min="3"
            max="7"
            value={diskValue}
            onChange={(e) => setDiskValue(e.target.value)}
            required
          />
          <button type="submit" className="form-button">
            Iniciar
          </button>
        </form>
      </Modal>
    </>
  );
}

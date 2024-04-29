/* eslint-disable react/prop-types */

import "./Styles/GameBody.css";

export default function GameBody({ column1Tiles, column2Tiles, column3Tiles, handleDrag, handleDrop }) {
  return (
    <div className="content">
      <div className="column-container" id={1} onDragOver={(ev) => ev.preventDefault()} onDrop={handleDrop}>
        <div className="center-bar" />
        {column1Tiles
          .sort((a, b) => a.width - b.width)
          .map((tile, index) => {
            const tileCount = column1Tiles.length;
            const tileStyles = {
              width: `${tile.width}em`,
            };
            tileStyles.marginTop = index === 0 ? `calc(71.5vh - ${tileCount * 40 + 20}px)` : "0";
            return (
              <div
                {...tile}
                className="tile"
                draggable
                key={`column-1-${tile.id}`}
                onDragOver={(ev) => ev.preventDefault()}
                onDragStart={handleDrag}
                style={tileStyles}
              />
            );
          })}
      </div>
      <div className="column-container" id={2} onDragOver={(ev) => ev.preventDefault()} onDrop={handleDrop}>
        <div className="center-bar" />
        {column2Tiles
          .sort((a, b) => a.width - b.width)
          .map((tile, index) => {
            const tileCount = column2Tiles.length;
            const tileStyles = {
              width: `${tile.width}em`,
            };
            tileStyles.marginTop = index === 0 ? `calc(71.5vh - ${tileCount * 40 + 20}px)` : "0";
            return (
              <div
                {...tile}
                className="tile"
                draggable
                key={`column-2-${tile.id}`}
                onDragOver={(ev) => ev.preventDefault()}
                onDragStart={handleDrag}
                style={tileStyles}
              />
            );
          })}
      </div>
      <div className="column-container" id={3} onDragOver={(ev) => ev.preventDefault()} onDrop={handleDrop}>
        <div className="center-bar" />
        {column3Tiles
          .sort((a, b) => a.width - b.width)
          .map((tile, index) => {
            const tileCount = column3Tiles.length;
            const tileStyles = {
              width: `${tile.width}em`,
            };
            tileStyles.marginTop = index === 0 ? `calc(71.5vh - ${tileCount * 40 + 20}px)` : "0";
            return (
              <div
                {...tile}
                className="tile"
                draggable
                key={`column-3-${tile.id}`}
                onDragOver={(ev) => ev.preventDefault()}
                onDragStart={handleDrag}
                style={tileStyles}
              />
            );
          })}
      </div>
    </div>
  );
}

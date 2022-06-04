import { Box } from "@mui/system";
import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@mui/material";

function ConwaysGameOfLife() {
  const [grid, setGrid] = useState();
  const [running, setRunning] = useState(false);

  const rows = 35;
  const columns = 35;

  const generatedGrid = () => {
    const grid = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        row.push(Math.floor(Math.random() * 2));
      }
      grid.push(row);
    }
    return grid;
  };
  console.log(generatedGrid());

  useEffect(() => {
    setGrid(generatedGrid());
  }, []);

  const positions = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
  ];
  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback((grid) => {
    if (!runningRef.current) {
      return;
    }

    let gridCopy = JSON.parse(JSON.stringify(grid));
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        let neighbors = 0;

        positions.forEach(([x, y]) => {
          const newI = i + x;
          const newJ = j + y;

          if (newI >= 0 && newI < rows && newJ >= 0 && newJ < columns) {
            neighbors += grid[newI][newJ];
          }
        });

        if (neighbors < 2 || neighbors > 3) {
          gridCopy[i][j] = 0;
        } else if (grid[i][j] === 0 && neighbors === 3) {
          gridCopy[i][j] = 1;
        }
      }
    }

    setGrid(gridCopy);
  }, []);

  return (
    <>
      <Box display="flex" justifyContent="center" flexDirection="row">
        {" "}
        <Button
          onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
            }
            setInterval(() => {
              runSimulation(grid);
            }, 500);
          }}
        >
          {running ? "Stop" : "Start"}
        </Button>
      </Box>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {grid &&
          grid.map((rows, i) =>
            rows.map((col, j) => (
              <div
                key={`${i}-${j}`}
                onClick={() => {
                  let newGrid = JSON.parse(JSON.stringify(grid));
                  newGrid[i][j] = grid[i][j] ? 0 : 1;
                  setGrid(newGrid);
                }}
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: grid[i][j] ? "orange" : "",
                  border: "1px solid black",
                }}
              ></div>
            ))
          )}
      </div>
    </>
  );
}
export default ConwaysGameOfLife;

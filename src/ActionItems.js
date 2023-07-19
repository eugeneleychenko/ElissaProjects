import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  CircularProgress
} from "@material-ui/core";

const ActionItems = () => {
  const [rows, setRows] = useState([
    {
      description:
        "1. The card named 'Project Proposal' should add all team members and assign Bob Johnson as the lead. Move card to In Progress column.",
      executed: false
    },
    {
      description:
        "2. The card named 'Research Data' should add Sarah Thompson and attach the latest research findings. Move card to Analysis column.",
      executed: false
    },
    {
      description:
        "3. The card named 'Client Meeting Notes' should add Emily Wilson and update the meeting summary. Move card to Done column.",
      executed: false
    },
    {
      description:
        "4. The card named 'Bug Fixes' should add Mark Davis and outline the specific bugs to be addressed. Move card to In Progress column.",
      executed: false
    }
    // Add more initial rows here if needed
  ]);

  const [loading, setLoading] = useState(Array(rows.length).fill(false));

  const addRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      {
        description: "",
        executed: false
      }
    ]);
  };

  const executeRow = (index) => {
    setLoading((prevLoading) => {
      const newLoading = [...prevLoading];
      newLoading[index] = true;
      return newLoading;
    });

    setTimeout(() => {
      setRows((prevRows) => {
        const updatedRows = [...prevRows];
        updatedRows[index].executed = true;
        return updatedRows;
      });

      setLoading((prevLoading) => {
        const newLoading = [...prevLoading];
        newLoading[index] = false;
        return newLoading;
      });
    }, 1000);
  };

  const handleDescriptionChange = (index, event) => {
    const { value } = event.target;
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows[index].description = value;
      return updatedRows;
    });
  };

  return (
    <div
      style={{
        background: "black",
        color: "white",
        fontFamily: "Helvetica",
        height: "200vh"
      }}
    >
      <h1 style={{ color: "white" }}>Meeting action items</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                style={{ color: "white", textAlign: "center", size: "26px" }}
              >
                Action item
              </TableCell>
              <TableCell
                style={{ color: "white", textAlign: "center", size: "26px" }}
              >
                Action Button
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell style={{ color: "white", width: "90%" }}>
                  <input
                    type="text"
                    value={row.description}
                    onChange={(event) => handleDescriptionChange(index, event)}
                    style={{
                      background: "transparent",
                      color: "white",
                      border: "none",
                      width: "100%"
                    }}
                  />
                </TableCell>
                <TableCell style={{ textAlign: "right", width: "10%" }}>
                  {!row.executed ? (
                    loading[index] ? (
                      <CircularProgress
                        style={{ color: "white", size: ".0175rem" }}
                      />
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => executeRow(index)}
                      >
                        Execute
                      </Button>
                    )
                  ) : (
                    <span style={{ color: "green" }}>Executed</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <br />
      <Button variant="contained" color="primary" onClick={addRow}>
        Add Row
      </Button>
    </div>
  );
};

export default ActionItems;

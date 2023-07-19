import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    color: "white",
    fontFamily: "Helvetica",
    padding: theme.spacing(2)
  }
}));

const TrelloAuthComponent = () => {
  const classes = useStyles();
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const authenticateWithTrello = async () => {
      const authWindow = window.open(
        "https://trello.com/1/authorize?response_type=ATTAb961f7f7f9a043b96094ed440a5668f9fff3ac92cf24f75f923aac5c2cc0de8a67F4E36B&key=ba1a0562f743f2337c2b96ec6f6de6fd&scope=read&expiration=never&name=React%20Trello%20App",
        "Trello Authentication",
        "width=500,height=600"
      );

      const handleAuthCallback = (event) => {
        if (event.origin === window.location.origin && event.data.token) {
          setBoards([]);
          fetchBoards(event.data.token);
          window.removeEventListener("message", handleAuthCallback);
          authWindow.close();
        }
      };

      window.addEventListener("message", handleAuthCallback);
    };

    const fetchBoards = async (token) => {
      const fetchedBoards = await fetch(
        "https://api.trello.com/1/members/me/boards",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      const boardsData = await fetchedBoards.json();
      setBoards(boardsData);
    };

    authenticateWithTrello();
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Trello Boards
      </Typography>
      {boards.length > 0 ? (
        <ul>
          {boards.map((board) => (
            <li key={board.id}>{board.name}</li>
          ))}
        </ul>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={authenticateWithTrello}
        >
          Authenticate with Trello
        </Button>
      )}
    </div>
  );
};

export default TrelloAuthComponent;

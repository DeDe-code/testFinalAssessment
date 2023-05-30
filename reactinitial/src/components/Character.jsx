import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActions } from "@mui/material";

const Character = ({ character }) => {
  const { name, details } = character;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Stack sx={{ display: "flex", alignItems: "center" }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          marginTop: 2,
        }}
      >
        <CardContent>
          <h2>{name}</h2>
        </CardContent>
        <CardActions>
          <Button
            sx={{
              width: "7rem",
              fontFamily: "monospace",
              fontSize: "0.6rem",
              fontWeight: "700",
              color: "#000",
              background: "#dfdcdc",
              transition: "0.5s all",
              "&:hover": { background: "#9b9b84", color: "#fff" },
            }}
            variant="contained"
            onClick={() => {
              setShowDetails(!showDetails);
            }}
          >
            {showDetails ? "Show Less" : "Show More"}
          </Button>
        </CardActions>
        <CardContent>{showDetails && <p>{details}</p>}</CardContent>
      </Card>
    </Stack>
  );
};

export default Character;

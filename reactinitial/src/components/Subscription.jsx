import { useState } from "react";
import LoadingMask from "./LoadingMask";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../style/Subscriptionstyle.css";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [response, setResponse] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(true);
  const [inputLoading, setInputLoading] = useState(false);

  const url = "https://demoapi.com/api/series/newsletter";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setInputLoading(true);

    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(email),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resData = await res.json();
      if (resData.done === true) {
        setResponse(true);
        setIsLoading(false);
        setTimeout(() => {
          setFormLoading(false);
        }, 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
    if (pattern.test(email) && email !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <article className={formLoading ? "appear" : "disappear"}>
      <form onSubmit={handleSubmit}>
        <div className={inputLoading ? "disappear" : "appear input-container"}>
          <TextField
            id="standard-basic"
            label="email"
            variant="standard"
            value={email}
            onChange={handleChange}
          />

          <Button
            sx={{
              width: "20%",
              marginTop: "1.2rem",
              fontFamily: "monospace",
              fontSize: "0.6rem",
              fontWeight: "700",
              color: "#000",
              background: "#dfdcdc",
              transition: "0.5s all",
              "&:hover": { background: "#9b9b84", color: "#fff" },
            }}
            variant="contained"
            type="submit"
            disabled={disabled}
          >
            Subscribe
          </Button>
        </div>
        {isLoading && <LoadingMask />}
        <h2 className={response ? "appear" : "disappear"}>Subscribed</h2>
      </form>
    </article>
  );
};

export default Subscription;

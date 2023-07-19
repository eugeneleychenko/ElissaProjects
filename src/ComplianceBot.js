import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  TextField,
  Typography,
  Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    color: "white",
    minHeight: "100vh",
    fontFamily: "Helvetica",
    padding: theme.spacing(2),
    "& .MuiTextField-root": {
      width: "75%",
      backgroundColor: "white"
    }
  },
  input: {
    height: "100px"
  },
  body: {
    width: "70%",
    margin: "0 auto" // This will center the content
  }
}));

function ComplianceBot() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showRewrite, setShowRewrite] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
    }, 5000);
  };

  const handleRewrite = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowRewrite(true);
    }, 3000);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h1">Pharma compliance bot</Typography>
      <br />
      <br />
      <Typography variant="h2">Double check your copy</Typography>
      <br />
      <TextField
        multiline
        rows={4}
        maxRows={4}
        placeholder="Input your advertising copy here"
      />
      <br />
      <br />
      <Button variant="contained" color="primary" onClick={handleClick}>
        {loading ? <CircularProgress /> : "Submit"}
      </Button>
      <br />
      {showResult && (
        <Box className={classes.body}>
          <Typography variant="h3">
            Issues with Non-Compliant Advertising:
          </Typography>
          <br />
          <Typography variant="body1">
            1. Exaggerated Claims: The advertisement makes bold claims of being
            a "miracle drug" and offering an "ultimate cure" for all ailments.
            Such claims are not supported by scientific evidence and can be
            misleading to consumers.
          </Typography>
          <br />
          <Typography variant="body1">
            2. Lack of Side Effect Disclosure: The advertisement states that the
            medication guarantees immediate relief with no side effects.
            However, it is essential to provide accurate information about
            potential side effects to ensure consumer safety.
          </Typography>
          <br />
          <Typography variant="body1">
            3. Unsubstantiated Benefits: The advertisement does not provide any
            specific information about the drug's mechanism of action or
            clinical trials, which is necessary to establish credibility and
            transparency.
          </Typography>
          <br />
          <Button variant="contained" color="secondary" onClick={handleRewrite}>
            {loading ? <CircularProgress /> : "Rewrite?"}
          </Button>
          <br />
          <br />
          <br />
        </Box>
      )}
      {showRewrite && (
        <Box className={classes.body}>
          <Typography variant="h3">
            Rewritten Compliant Pharma Advertising:
          </Typography>
          <br />
          <Typography variant="body1">
            "Introducing Miracle Drug X: A Promising Solution for Your Ailments.
            Find relief from pain and discomfort with this innovative
            medication. Backed by scientific research, it offers potential
            benefits that may positively impact your well-being. Consult your
            healthcare professional to learn more about its suitability for
            you."
          </Typography>
          <br />
          <Typography variant="h3">Compliant Changes:</Typography>
          <br />
          <Typography variant="body1">
            <br />
            1. Realistic Claims: The rewritten advertisement avoids exaggerated
            claims by using phrases like "promising solution" and "potential
            benefits." This ensures that the advertisement does not mislead
            consumers.
          </Typography>
          <br />
          <Typography variant="body1">
            2. Side Effect Disclosure: The revised copy acknowledges the
            importance of consumer safety by encouraging individuals to consult
            their healthcare professionals for more information. This implies
            that there may be potential side effects associated with the
            medication.
          </Typography>
          <br />
          <Typography variant="body1">
            3. Transparency and Credibility: The compliant advertisement
            emphasizes the need to consult a healthcare professional and learn
            more about the drug's suitability. This promotes transparency and
            encourages individuals to seek expert advice before making any
            decisions.
          </Typography>
          <br />
          <Typography variant="body1">
            By adhering to these changes, the rewritten copy aligns with pharma
            compliance guidelines, providing accurate information while
            maintaining ethical advertising practices.
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default ComplianceBot;

import React, { useState } from "react";
import {
  Typography,
  Box,
  CircularProgress,
  TextField,
  Divider,
  Button
} from "@mui/material";
import { useDropzone } from "react-dropzone";

const ProposalGenerator = () => {
  const [uploadedProposals, setUploadedProposals] = useState([]);
  const [rfpSource, setRfpSource] = useState("");
  const [connectedPayroll, setConnectedPayroll] = useState("");
  const [addedRfpSource, setAddedRfpSource] = useState("");
  const [loading, setLoading] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const fileNames = acceptedFiles.map((file) => file.name);
      setUploadedProposals(fileNames);
    }
  });

  const handlePayrollConnect = (payroll) => {
    if (payroll === "QuickBooks") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
    setConnectedPayroll(payroll);
  };

  const handleRfpSourceAdd = () => {
    if (rfpSource) {
      setAddedRfpSource(rfpSource);
      setRfpSource("");
    }
  };

  const handleFileUpload = (event) => {
    event.preventDefault();
    const files = event.target.files;
    const fileNames = Array.from(files).map((file) => file.name);
    setUploadedProposals(fileNames);
  };

  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        fontFamily: "Helvetica",
        padding: "1rem",
        height: "300vh" // Add this line
      }}
    >
      <Typography variant="h1">Agency Proposal Generator</Typography>
      <br />
      <Typography variant="h4">
        Generate high quality bid proposals in minutes, not hours or days
      </Typography>
      <br />
      <Box
        sx={{
          // width: "75%",
          border: "2px dashed white",
          padding: "3rem",
          margin: "6rem"

          // display: "flex", // Add this line
          // justifyContent: "center" // Add this line
        }}
      >
        <input
          type="file"
          multiple
          onChange={handleFileUpload}
          style={{ display: "none" }}
          id="file-upload"
        />
        <label htmlFor="file-upload">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <Typography variant="body1">Upload past proposals</Typography>
          </div>
        </label>
        {uploadedProposals.length > 0 && (
          <Typography variant="body2">
            Proposals uploaded: {uploadedProposals.join(", ")}
          </Typography>
        )}
      </Box>
      <Typography variant="h6" sx={{ marginTop: "3rem" }}>
        RFP Source:
      </Typography>
      <TextField
        multiline
        rows={1}
        maxRows={4}
        backgroundColor="white"
        placeholder="RFP source URL"
        value={rfpSource}
        fullWidth
        // label="RFP Source"
        onChange={(e) => setRfpSource(e.target.value)}
        sx={{ marginBottom: "1rem", backgroundColor: "white" }} // Add backgroundColor: 'white'
      />

      <Button variant="contained" onClick={handleRfpSourceAdd}>
        Add
      </Button>

      {addedRfpSource && (
        <Typography
          variant="body1"
          sx={{ marginTop: "2rem", marginBottom: "1rem" }}
        >
          RFP source: {addedRfpSource}
        </Typography>
      )}
      <Typography variant="h6" sx={{ marginTop: "3rem" }}>
        Connect Payroll:
      </Typography>

      <Button
        onClick={() => handlePayrollConnect("Gusto")}
        sx={{ marginRight: "1rem" }}
      >
        <img
          src="https://logovectorseek.com/wp-content/uploads/2020/10/gusto-logo-vector.png"
          alt="Gusto"
          style={{ width: "100px" }}
        />
      </Button>
      <Button onClick={() => handlePayrollConnect("ADP")}>
        <img
          src="https://seeklogo.com/images/A/automatic-data-processing-inc-adp-logo-9F9599F350-seeklogo.com.png"
          alt="ADP"
          style={{ width: "100px" }}
        />
      </Button>
      <Button
        onClick={() => handlePayrollConnect("QuickBooks")}
        // sx={{ marginRight: "1rem" }}
      >
        <img
          src="https://www.getredlist.com/wp-content/uploads/2021/11/quickbooks-logo.png"
          alt="QuickBooks"
          style={{ width: "100px" }}
        />
      </Button>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem"
        }}
      >
        <Divider color="white" />
        {loading && <CircularProgress size={24} color="inherit" />}
      </Box>

      <br />
      <br />
      <br />
      {!loading && connectedPayroll === "QuickBooks" && (
        <>
          <Typography variant="h3">Proposal draft</Typography>
          <Typography variant="body1">
            The Smith Agency is delighted to be considered for the opportunity
            to shoot a Navy commercial. Our team of experienced professionals is
            passionate about producing and creating high-quality projects that
            exceed expectations. We are confident that we can provide the
            high-level of expertise and creativity that is required for this
            project.
          </Typography>
          <Typography variant="body1">
            Our team has extensive experience in shooting commercial projects,
            including for the Navy. We have worked with the Navy on a number of
            projects, and we know exactly what is needed to create an effective
            and engaging commercial. We understand the importance of emphasizing
            the Navy’s core values of honor, courage, and commitment. We also
            recognize the need to create a strong connection between the Navy
            and its audience.
          </Typography>
          <Typography variant="body1">
            When working on a project, we take a collaborative approach. We will
            work closely with your team to ensure that our vision is in line
            with the Navy’s goals. We will also provide regular updates and
            feedback to ensure that the commercial is on track and meets all of
            the Navy’s expectations.
          </Typography>
          <Typography variant="body1">
            Our team is well-equipped to handle all aspects of this project,
            from pre-production to post-production. We have access to the latest
            technology and equipment, and we have a network of talented
            professionals that can provide the necessary support.
          </Typography>
          <br />
          <Button variant="contained" color="primary">
            Download Full Proposal
          </Button>
        </>
      )}
    </Box>
  );
};

export default ProposalGenerator;

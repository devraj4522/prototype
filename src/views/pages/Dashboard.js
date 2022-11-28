import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { events } from "../../events";
import Selectclass from "./dashboard/Selectclass";
import DatewiseChart from "./dashboard/DatewiseChart";
import { Alert } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContextValue } from "./shared/contextProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import ReportAreaChart from "./dashboard/ReportAreaChart";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { flexbox } from "@mui/system";


const Dashboard = () => {
  const [dept, setdept] = useState("");
  const [sec, setsec] = useState("");
  const [submitted, setsubmitted] = useState(false)
  const [data, setdata] = useState(events.CSEA);
  const [{ user }] = useContextValue();
  const [currPost, setcurrPost] = useState("");

  useEffect(() => {
    const notify = () => {
      const loggedMesseage =
        "Announcement!! Welcome to PCC CS 593! I am looking forward to being your instructor for\
      the upcoming - Utpal Das ...";
      const msg = "Hey 👋, see how easy!";

      if (user) return toast.dark(loggedMesseage);
      else return toast.dark(msg);
    };
    notify();
  }, [user]);

  // const notify = <p></p>;
  const handleDeptChange = (event) => {
    setdept(event.target.value);
    const val = dept + sec;
    console.log(event.val);
    setdata(events[val]);
  };
  const handleSecChange = (event) => {
    setsec(event.target.value);
    const val = dept + sec;
    setdata(events[val]);
  };

  if (!user) {
    return <Navigate to="/login/" replace={true} state={user} />;
  }
  return (
    <>
      <div className="container" style={{ marginBottom: "3rem" }}>
        <h1 style={{ textAlign: "center" }}>Dashboard</h1>
      </div>
      <Paper
        elevation={2}
        sx={{
          my: 3,
          p: 0,
          pl: 1,
          mx: "auto",
          width: "100%",
          maxWidth: "1300px",
        }}
      >

        {/* <Timetable
          events={data}
          hoursInterval={{ from: 9, to: 17 }}
          renderHour={({ hour, defaultAttributes, classNames }) => {
            return (
              <div {...defaultAttributes} key={hour}>
                <span className={classNames.event_info}>{hour}</span>
              </div>
            );
          }}
          renderEvent={({ event, defaultAttributes, classNames }) => {
            return (
              <div
                style={{
                  height: defaultAttributes.style.height,
                  marginTop: defaultAttributes.style.marginTop,
                  background: "#0F8AFD",
                  borderRight: "2px solid white",
                }}
                className={defaultAttributes.className}
                title={event.name}
                key={event.id}
              >
                <span className={classNames.event_info}>{event.name}</span>
                <span className={classNames.event_info}>
                  {event.startTime.getHours() +
                    ":" +
                    event.startTime.getMinutes()}{" "}
                  -{" "}
                  {event.endTime.getHours() + ":" + event.endTime.getMinutes()}
                </span>
              </div>
            );
          }}
        /> */}
      </Paper>
      <Selectclass
        dept={dept}
        sec={sec}
        onDeptSet={handleDeptChange}
        onSecSet={handleSecChange}
      />

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box component="div" noValidate sx={{ mt: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {(sec == 'url' || sec == 'single') && <TextField
                required
                fullWidth
                id="url"
                label="Enter a Url"
                name="url"

              />}

              {sec == 'post' && <TextField
                required
                fullWidth
                multiline
                rows={4}
                id="Write your post"
                label="Post"
                name="Post"
                onChange={(e) => setcurrPost(e.target.value)}
              />}
            </Grid>
            <Grid item xs={12}>
              {sec == 'post' && <TextField
                required
                fullWidth
                id="file"
                label=""
                name=""
                type='file'
              />}
            </Grid>

            <Grid item xs={12}>
              {sec && <Button type="submit" fullWidth variant="contained" onClick={() => setsubmitted(true)}>
                Submit
              </Button>}
            </Grid>
          </Grid>
        </Box>

      </Container>
      {submitted && (sec == "url" || sec == "single") && <div className="container">

        <Typography sx={{ fontSize: 30, mt: 20 }} color="text.secondary" gutterBottom>
          Total Posts: 25
        </Typography>
      </div>}
      
      {submitted && (sec == "post") && (currPost != "") && <div className="container" style={{ marginBottom: "3rem", marginLeft: 'auto', marginRight: 'auto' }}>
      <Typography sx={{ textAlign: "center", fontSize: 30, marginTop: 10 }} color="text.secondary">
              <strong>Current Post Emotion</strong>
            </Typography>

        <Card sx={{ minWidth: 100, m: 2 }}>
          <CardContent>
            <Typography sx={{ textAlign: "center" , fontSize: 20}} color="text.secondary">
            😁 Happy   Score - 10
            </Typography>
          </CardContent>
        </Card>
      </div>
      }

      {submitted && (sec == "single") && <div className="container" style={{ marginBottom: "3rem", marginLeft: 'auto', marginRight: 'auto' }}>
      <Typography sx={{ textAlign: "center", fontSize: 30 }} color="text.secondary">
              <strong>Current Post Emotion</strong>
            </Typography>

        <Card sx={{ minWidth: 100, m: 2 }}>
          <CardContent>
            <Typography sx={{ textAlign: "center" , fontSize: 20}} color="text.secondary">
            😁 Happy   Score - 10
            </Typography>
          </CardContent>
        </Card>
      </div>
      }
      {submitted && (sec == "url" || sec == "single") && <div className="container" style={{ marginBottom: "3rem", display: "flex", flexDirection: "row", marginLeft: 'auto', marginRight: 'auto' }}>
        <Card sx={{ minWidth: 100, m: 2 }}>
          <CardContent>
            <Typography sx={{ textAlign: "center" }} color="text.secondary">
              Happy <br /> 😁 <br /> 10
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 100, m: 2 }}>
          <CardContent>
            <Typography sx={{ textAlign: "center" }} color="text.secondary">
              Sad <br /> 😡 <br /> 2
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 100, m: 2 }}>
          <CardContent>
            <Typography sx={{ textAlign: "center" }} color="text.secondary">
              Excited <br />🙂 <br />
              8
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 100, m: 2 }}>
          <CardContent>
            <Typography sx={{ textAlign: "center" }} color="text.secondary">
              Depressed <br /> 😔 <br /> 2
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 100, m: 2 }}>
          <CardContent>
            <Typography sx={{ textAlign: "center" }} color="text.secondary">
              Neutral <br /> 😐 <br /> 3
            </Typography>
          </CardContent>
        </Card>

      </div>
      }
      <div className="container" style={{ marginBottom: "3rem" }}>
        {submitted && (sec == "url" || sec == "single") && <DatewiseChart />}
      </div>

      <div className="container" style={{ marginBottom: "3rem" }}>
        {submitted && (sec == "url" || sec == "single") && <ReportAreaChart />}
      </div>




    </>
  );
};

export default Dashboard;

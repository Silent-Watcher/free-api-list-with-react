import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import NavBar from "../../core/main/navigation/NavBar";
import BoxTestCrud from "../../core/main/BoxTestCrud";

const AnimalsMeowFacts = () => {
  return (
    <Box>
      <NavBar link="/AnimalsDash" route2="/MeowFacts" />
      <Box>
        <BoxTestCrud />
        <BoxApiInfo baseEndpoint="https://meowfacts.herokuapp.com" />
        <Endpoints header="GET" endpoint="/" description="" />
        <Endpoints header="GET" endpoint="/?count=3" description="" />
        <Endpoints header="GET" endpoint="/?id=3" description="" />
        <Endpoints header="GET" endpoint="/?lang=ukr" description="" />
      </Box>
    </Box>
  );
};

export default AnimalsMeowFacts;

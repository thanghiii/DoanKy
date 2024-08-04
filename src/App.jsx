import { Box } from "@mui/material";
import "./App.scss";
import HeaderApp from "./component/HeaderApp";
import NavsApp from "./component/NavsApp";
import Slide from "./component/Slide";
import SidebarApp from "./component/index.jsx";
import Footers from "./component/footers/index.jsx";
function App() {
  return (
    <>
      <Box>
        <HeaderApp />
        <NavsApp />
        <Slide />
        <SidebarApp />
        <Footers></Footers>
      </Box>
    </>
  );
}

export default App;

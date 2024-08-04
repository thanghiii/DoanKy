import { Box, TextField } from "@mui/material";
import Trangchu from "./NavsComponennt/Trangchu";
import logo from "../assets/image/logo.png";
import Loaixe from "./NavsComponennt/Loaixe";
import Phutung from "./NavsComponennt/Phutung";
import Phukien from "./NavsComponennt/Phukien";
import Tintuc from "./NavsComponennt/Tintuc";
import Acccout from "./NavsComponennt/Acccout";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Profile from "./NavsComponennt/Profile";
import { Link } from "react-router-dom";
function NavsApp() {
  return (
    <>
      <Box
        px={2}
        sx={{
          width: "100%",
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#0693e3",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <img src={logo} alt="logo" width={110} />
          <Trangchu />
          <Loaixe />
          <Phutung />
          <Phukien />
          <Tintuc />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <TextField
            id="outlined-basic"
            label="Tìm kiếm sản phẩm...."
            variant="outlined"
          />
          <Acccout />
          <Link
            to="/Giohang"
            style={{ textDecoration: "none", marginTop: "-5px" }}
          >
            <AddShoppingCartIcon />
          </Link>
          <Profile />
        </Box>
      </Box>
    </>
  );
}

export default NavsApp;

import { Box, TextField } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";
import Trangchu from "../component/NavsComponennt/Trangchu";
import Loaixe from "../component/NavsComponennt/Loaixe";
import Phutung from "../component/NavsComponennt/Phutung";
import Phukien from "../component/NavsComponennt/Phukien";
import Tintuc from "../component/NavsComponennt/Tintuc";
import Acccout from "../component/NavsComponennt/Acccout";
import Profile from "../component/NavsComponennt/Profile";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import logo from "../assets/image/logo.png";

import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Box>
        {/* header đầu */}
        <div className="header_app">
          <p style={{ marginTop: "13px" }}>
            Chào mừng bạn đến với xe đạp trực tuyến - liên hệ: 0985896071 -
          </p>
          <div className="icon_header">
            <FacebookIcon />
            <EmailIcon />
            <CallIcon />
          </div>
        </div>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#0693e3",
        }}
      >
        <Box
          sx={{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          <img
            style={{ marginLeft: "10px" }}
            src={logo}
            alt="logo"
            width={110}
          />

          <Link to="" onClick={() => (window.location.href = "/")}>
            <Trangchu />
          </Link>
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
          <Link to="/Giohang">
            <AddShoppingCartIcon />
          </Link>
          <Profile />
        </Box>
      </Box>
      <div className="login-container ">
        <div className="title">Đăng nhập</div>
        <div className="text">Email or username</div>
        <input
          className="input-login"
          type="text"
          placeholder="Email or username..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-login"
          type="password"
          placeholder="password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn-login">Login</button>
        <div className="back">
          Bạn chưa có tài khoản? <Link to="/Sigup">Sigup</Link>{" "}
        </div>
      </div>
    </>
  );
}

export default Login;

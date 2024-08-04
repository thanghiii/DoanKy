import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

function Acccout() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <span style={{ color: "black" }}>
            Tài Khoản <ArrowDropDownIcon />
          </span>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Link
            to="/Login"
            style={{ textDecoration: "none", marginTop: "-5px" }}
          >
            <MenuItem onClick={handleClose}>Đăng nhập</MenuItem>
          </Link>
          <Link
            to="/sigup"
            style={{ textDecoration: "none", marginTop: "-5px" }}
          >
            <MenuItem onClick={handleClose}>Đăng ký</MenuItem>
          </Link>
        </Menu>
      </Box>
    </>
  );
}

export default Acccout;

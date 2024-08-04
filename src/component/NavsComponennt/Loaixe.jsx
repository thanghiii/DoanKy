import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Loaixe() {
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
            {" "}
            xe đạp <ArrowDropDownIcon />
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
          <MenuItem onClick={handleClose}>Xe đạp thể thao</MenuItem>
          <MenuItem onClick={handleClose}>Xe đạp thành phố</MenuItem>
          <MenuItem onClick={handleClose}>xe đạp đua</MenuItem>
          <MenuItem onClick={handleClose}>xe đạp trẻ em</MenuItem>
        </Menu>
      </Box>
    </>
  );
}

export default Loaixe;

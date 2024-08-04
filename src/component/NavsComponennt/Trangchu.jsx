import * as React from "react";
import Button from "@mui/material/Button";

function Trangchu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span style={{ fontWeight: "bold", fontFamily: "", color: "black" }}>
          Trang chủ
        </span>
      </Button>
    </>
  );
}

export default Trangchu;

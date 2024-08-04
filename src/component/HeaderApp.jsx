import { Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

function HeaderApp() {
  return (
    // <div className="">

    //
    // </div>
    <Box>
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
  );
}

export default HeaderApp;

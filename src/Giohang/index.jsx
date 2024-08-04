import { Box, TextField } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import Trangchu from "../component/NavsComponennt/Trangchu";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
import Loaixe from "../component/NavsComponennt/Loaixe";
import Phutung from "../component/NavsComponennt/Phutung";
import Phukien from "../component/NavsComponennt/Phukien";
import Tintuc from "../component/NavsComponennt/Tintuc";
import Acccout from "../component/NavsComponennt/Acccout";
import Profile from "../component/NavsComponennt/Profile";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SellIcon from "@mui/icons-material/Sell";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CToast,
  CToastBody,
  CToaster,
  CToastHeader,
} from "@coreui/react";
import Footers from "../component/footers";
import { useRef, useState } from "react";

function Giohang() {
  const [visible, setVisible] = useState(false);
  const [toast, addToast] = useState(0);
  const toaster = useRef();
  const exampleToast = (
    <CToast>
      <CToastHeader closeButton>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        <div className="fw-bold me-auto">Bạn đã thanh toán thành công</div>
        <small>1 min ago</small>
      </CToastHeader>
      <CToastBody>Cảm ơn bạn đã sử dụng dịch vụ</CToastBody>
    </CToast>
  );
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
      {/* menu */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "35px",
        }}
      >
        <span style={{ fontSize: "20px", marginTop: "-5px" }}>Giỏ hàng</span>
        <ArrowForwardIosIcon color="disabled" />
        <Link
          to="/Thanhtoan"
          style={{ textDecoration: "none", marginTop: "-5px" }}
        >
          <span
            className="Thongtin"
            style={{ fontSize: "20px", marginTop: "-5px", color: "#ccc" }}
          >
            Thông tin thanh toán
          </span>
        </Link>
        <ArrowForwardIosIcon color="disabled" />
        <span
          className="Thongtin"
          style={{ fontSize: "20px", marginTop: "-5px", color: "#ccc" }}
        >
          Hoàn thành đơn hàng
        </span>
      </div>
      {/* đầu trang */}

      <div className="Container_GH">
        {/* <hr style={{ width: "300px" }} /> */}
        <CTable
          style={{
            width: "50%",
          }}
        >
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">sản phẩm</CTableHeaderCell>
              <CTableHeaderCell scope="col">Giá</CTableHeaderCell>
              <CTableHeaderCell scope="col">Số lượng</CTableHeaderCell>
              <CTableHeaderCell scope="col">Tạm tính</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell>
                <img
                  style={{ width: "90px", height: "80px" }}
                  src="https://xedapgiakho.com/wp-content/uploads/2024/06/Do-nghe-sua-xe-dap-Phu-tung-Phu-Kien-Xe-Dap-Gia-Re-6-400x300.jpg"
                  alt=""
                />
                Cặp gác chân inox
              </CTableHeaderCell>
              <CTableDataCell>30.000VNĐ</CTableDataCell>
              <CTableDataCell>1</CTableDataCell>
              <CTableDataCell>30.000VNĐ</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell>
                <img
                  style={{ width: "90px", height: "80px" }}
                  src="https://xedapgiakho.com/wp-content/uploads/2024/06/xe-dap-touring-catani-tr3-0-700c-mau-den-cam-1-400x300.jpg"
                  alt=""
                />
                Xe Đạp Touring Catani TR3.0 700C
              </CTableHeaderCell>
              <CTableDataCell>6.990.000VNĐ</CTableDataCell>
              <CTableDataCell>1</CTableDataCell>
              <CTableDataCell>6.990.000VNĐ</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>

        <div style={{ paddingLeft: "80px" }}>
          <span style={{ fontWeight: "bold" }}>Cộng giỏ hàng</span>
          <hr style={{ width: "600px" }} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Tạm tính</span>
            <span style={{ fontWeight: "bold" }}>3.720.000VNĐ</span>
          </div>
          <hr style={{ width: "600px" }} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Tổng</span>
            <span style={{ fontWeight: "bold" }}>3.720.000VNĐ</span>
          </div>
          <hr style={{ width: "600px" }} />
          <div>
            <CButton
              onClick={() => setVisible(!visible)}
              style={{ width: "300px", marginLeft: "150px" }}
              color="info"
            >
              <span style={{ color: "white" }}> Thanh toán</span>
            </CButton>
            <CModal
              visible={visible}
              onClose={() => setVisible(false)}
              aria-labelledby="LiveDemoExampleLabel"
            >
              <CModalHeader>
                <CModalTitle id="LiveDemoExampleLabel">Thanh toán </CModalTitle>
              </CModalHeader>
              <CModalBody>
                <p>Bạn có muốn thanh toán?</p>
              </CModalBody>
              <CModalFooter>
                <CButton color="secondary" onClick={() => setVisible(false)}>
                  Thoát
                </CButton>
                <CButton onClick={() => addToast(exampleToast)} color="primary">
                  Tiếp tục thanh toán
                </CButton>
                <CToaster
                  className="p-3"
                  placement="top-end"
                  push={toast}
                  ref={toaster}
                />
              </CModalFooter>
            </CModal>
          </div>
          <div>
            <SellIcon /> Thêm ưu đãi
          </div>
          <hr style={{ width: "600px" }} />
          <div>
            <CFormInput
              type="text"
              placeholder="Mã ưu đãi"
              aria-label="default input example"
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <CButton style={{ width: "600px" }} color="info">
              <span style={{ color: "white" }}> Áp dụng</span>
            </CButton>
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
}

export default Giohang;

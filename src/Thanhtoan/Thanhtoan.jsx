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
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  CButton,
  CForm,
  CFormInput,
  CFormSelect,
  CFormTextarea,
} from "@coreui/react";
import Footers from "../component/footers";
function Thanhtoan() {
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "35px",
        }}
      >
        <Link
          to="/Giohang"
          style={{ textDecoration: "none", marginTop: "-5px" }}
        >
          <span style={{ fontSize: "20px", marginTop: "-5px", color: "#ccc" }}>
            Giỏ hàng
          </span>
        </Link>
        <ArrowForwardIosIcon color="disabled" />
        <Link
          to="/Thanhtoan"
          style={{ textDecoration: "none", marginTop: "-5px" }}
        >
          <span
            className="Thongtin"
            style={{ fontSize: "20px", marginTop: "-5px", color: "black" }}
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 100px",
          paddingBottom: "100px",
          paddingTop: "40px",
        }}
      >
        <div>
          <div>
            <span style={{ fontWeight: "bold" }}>THÔNG TIN THANH TOÁN</span>
          </div>
          <div style={{ marginTop: "20px" }}>
            <CForm style={{ width: "700px" }}>
              <CFormInput
                type="email"
                id="exampleFormControlInput1"
                label="Họ và tên*"
                placeholder="Nhập họ và tên"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CForm>
          </div>
          <div style={{ marginTop: "20px" }}>
            <CForm style={{ width: "300px" }}>
              <CFormInput
                type="email"
                id="exampleFormControlInput1"
                label="Số điện thoại*"
                placeholder="Nhập số điện thoại"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CForm>
          </div>
          <div style={{ marginTop: "-70px", marginLeft: "400px" }}>
            <CForm style={{ width: "300px" }}>
              <CFormInput
                type="email"
                id="exampleFormControlInput1"
                label="Số điện thoại*"
                placeholder="Nhập số điện thoại"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CForm>
          </div>
          <div style={{ marginTop: "30px", marginLeft: "400px" }}>
            <CForm style={{ width: "300px" }}>
              <span> Quận/Huyện*</span>
              <CFormSelect
                style={{ marginTop: "10px" }}
                aria-label="Default select example"
                options={[
                  "Chọn Quận/Huyện",
                  { label: "Phú Xuyên", value: "1" },
                  { label: "Duy Tiên", value: "2" },
                  { label: "Đa Chất", value: "3" },
                ]}
              />
            </CForm>
          </div>
          <div style={{ marginTop: "-70px", marginLeft: "00px" }}>
            <CForm style={{ width: "300px" }}>
              <span> Tỉnh/Thành phố*</span>
              <CFormSelect
                style={{ marginTop: "10px" }}
                aria-label="Default select example"
                options={[
                  "Chọn Tỉnh/Thành phố",
                  { label: "Hà Nội", value: "1" },
                  { label: "Hà Nam", value: "2" },
                  { label: "Đại Xuyên", value: "3" },
                ]}
              />
            </CForm>
          </div>
          <div style={{ marginTop: "30px", marginLeft: "00px" }}>
            <CForm style={{ width: "300px" }}>
              <span> Xã/Phường/Thị Trấn*</span>
              <CFormSelect
                style={{ marginTop: "10px" }}
                aria-label="Default select example"
                options={[
                  " Chọn Xã/Phường/Thị Trấn",
                  { label: "Xóm chùa", value: "1" },
                  { label: "Vũ Xá", value: "2" },
                  { label: "Bái Xuyên", value: "3" },
                ]}
              />
            </CForm>
          </div>
          <div style={{ marginTop: "-70px", marginLeft: "400px" }}>
            <CForm style={{ width: "300px" }}>
              <CFormInput
                type="email"
                id="exampleFormControlInput1"
                label="Địa chỉ*"
                placeholder="Nhập địa chỉ cụ thể"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CForm>
          </div>
          <div style={{ marginTop: "30px" }}>
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              Thông tin bổ sung
            </span>
            <CForm>
              <CFormTextarea
                id="exampleFormControlTextarea1"
                label="Ghi chú đơn hàng(Tùy chọn)"
                rows={3}
              ></CFormTextarea>
            </CForm>
          </div>
        </div>
        <div
          style={{ border: "1px solid blue", width: "500px", height: "400px" }}
        >
          <div
            style={{
              padding: "20px 20px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Đơn hàng của bạn
          </div>
          <div
            style={{
              //   justifyContent: "space-between",
              paddingLeft: "30px",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Sản phẩm</span>
            <span style={{ fontWeight: "bold", marginLeft: "250px" }}>
              Tạm tính
            </span>
            <hr style={{ width: "450px" }} />
            <div style={{ display: "flex" }}>
              <span>Xe đạp cho bé</span>
              <span style={{ marginLeft: "210px", fontWeight: "bold" }}>
                3.720.000VNĐ
              </span>
            </div>
            <hr style={{ width: "450px" }} />
            <div style={{ display: "flex" }}>
              <span>Tổng</span>
              <span style={{ fontWeight: "bold", marginLeft: "276px" }}>
                3.720.000VNĐ
              </span>
            </div>
            <hr style={{ width: "450px" }} />
            <div>Trả tiền mặt khi nhận hàng</div>
            <div>
              <CButton
                style={{ width: "440px", marginTop: "15px" }}
                color="info"
              >
                <span style={{ color: "white" }}> Thanh toán</span>
              </CButton>
            </div>
          </div>
          {/*Thanh toán*/}
        </div>
      </Box>
      <Footers />
    </>
  );
}

export default Thanhtoan;

import CIcon from "@coreui/icons-react";
import {
  CBadge,
  CNavGroup,
  CNavItem,
  CNavTitle,
  CSidebar,
  CSidebarNav,
} from "@coreui/react";
import { Box } from "@mui/material";
import Sportbike from "./Mauxe/Sportbike";
import Childrenbike from "./Mauxe/Childrenbike";
import Accessories from "./Mauxe/Accessories";
import News from "./Tintuc";

function SidebarApp() {
  return (
    <>
      <Box
        sx={{
          width: "700px",
          height: "100%",
          padding: "24px 24px ",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            margin: "24px -20px",
            width: "330px",
            height: "200px",
            padding: "24px 24px",
            boxSizing: "border-box",
          }}
        >
          <CSidebar className="border-end">
            <CSidebarNav>
              <CNavTitle>
                <span style={{ color: "#017fc8", fontSize: "15px" }}>
                  Danh mục sản phẩm
                </span>
              </CNavTitle>
              <CNavItem href="#">
                <CIcon customClassName="nav-icon" /> xe đạp
              </CNavItem>
              <CNavItem href="#">
                <CIcon customClassName="nav-icon" /> Xe đạp đua
                <CBadge color="primary ms-auto">Mới</CBadge>
              </CNavItem>
              <CNavGroup
                toggler={
                  <>
                    <CIcon customClassName="nav-icon" /> Xe đạp trẻ em
                  </>
                }
              >
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  Xe đạp giant
                </CNavItem>
                <CNavItem href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span>
                  xe đạp phượng hoàng
                </CNavItem>
              </CNavGroup>
              <CNavItem href="https://coreui.io">
                <CIcon customClassName="nav-icon" /> xe đạp thành phố
              </CNavItem>
              <CNavItem href="https://coreui.io/pro/">
                <CIcon customClassName="nav-icon" /> Xe đạp nhật
              </CNavItem>
              <CNavItem href="https://coreui.io/pro/">
                <CIcon customClassName="nav-icon" /> Xe đạp gấp
              </CNavItem>
              <CNavItem href="https://coreui.io/pro/">
                <CIcon customClassName="nav-icon" /> Xe đạp trợ lực
              </CNavItem>
              <CNavItem href="https://coreui.io/pro/">
                <CIcon customClassName="nav-icon" /> Xe đạp địa hình
              </CNavItem>
              <CNavItem href="https://coreui.io/pro/">
                <CIcon customClassName="nav-icon" /> Phụ kiện
              </CNavItem>
              <CNavItem href="https://coreui.io/pro/">
                <CIcon customClassName="nav-icon" /> Đồ chơi xe đạp
              </CNavItem>
              <CNavItem href="https://coreui.io/pro/">
                <CIcon customClassName="nav-icon" /> Phụ tùng thay thế
              </CNavItem>
            </CSidebarNav>
          </CSidebar>
          <img
            style={{ width: "330px", height: "700px" }}
            src="https://img.lovepik.com/free-template/01/34/20/07hpIkbEsTSC4.jpg_master.jpg!detail808"
            alt=""
          />
          <img
            style={{ width: "330px", height: "700px" }}
            src="https://img.lovepik.com/desgin_photo/40020/8452_detail.jpg!detail808"
            alt=""
          />
          {/* <img
            style={{ width: "330px" }}
            src="https://img.lovepik.com/free-template/01/34/20/07hpIkbEsTSC4.jpg_master.jpg!detail808"
            alt=""
          /> */}
        </div>
        <div
          style={{
            marginLeft: "350px",
            marginTop: "-224px",
            width: "1030px",
            height: "100%",
            padding: "24px 24px",
            boxSizing: "border-box",
          }}
        >
          <span
            style={{ fontSize: "30px", fontWeight: "bold", color: "#017fc8" }}
          >
            Xe đạp đua
          </span>

          <Sportbike></Sportbike>
        </div>
        <img
          style={{ marginLeft: "340px", width: "1000px" }}
          src="https://xedapgiakho.com/wp-content/uploads/2024/07/BANNER-CYCLONE-HOMEPAGE.jpg"
        ></img>

        <div
          style={{
            width: "1030px",
            height: "100%",
            padding: "24px 24px",
            boxSizing: "border-box",
            marginLeft: "350px",
          }}
        >
          <span
            style={{ fontSize: "30px", fontWeight: "bold", color: "#017fc8" }}
          >
            Xe đạp trẻ em
          </span>
          <Childrenbike></Childrenbike>
        </div>
        <div
          style={{
            width: "1030px",
            height: "100%",
            padding: "20px 24px",
            boxSizing: "border-box",
            marginLeft: "350px",
          }}
        >
          <span
            style={{ fontSize: "30px", fontWeight: "bold", color: "#017fc8" }}
          >
            Phụ kiện-Phụ Tùng
          </span>
          <Accessories></Accessories>
        </div>
        <div
          style={{
            width: "1030px",
            height: "100%",
            padding: "20px 24px",
            boxSizing: "border-box",
            marginLeft: "350px",
          }}
        >
          <span
            style={{ fontSize: "30px", fontWeight: "bold", color: "#017fc8" }}
          >
            Tin tức
          </span>
          <News></News>
        </div>
      </Box>
    </>
  );
}

export default SidebarApp;

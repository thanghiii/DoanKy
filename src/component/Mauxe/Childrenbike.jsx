import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react";
import { Box } from "@mui/material";

function Childrenbike() {
  return (
    <>
      <Box>
        <Box
          px={2}
          sx={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <CCard style={{ width: "18rem" }}>
            <CCardImage
              orientation="top"
              src="https://xedapgiakho.com/wp-content/uploads/2024/06/Xe-Dap-Tre-Em-Be-Trai-Shukyo-K2-400x300.jpg"
            />
            <CCardBody>
              <CCardTitle>Xe Đạp Trẻ Em Bé Trai Hector Polo 12 Inch</CCardTitle>
              <CCardText style={{ color: "blue" }}>6.6666.666đ</CCardText>
              <CButton color="info" href="#">
                <span style={{ color: "white" }}>Thêm giỏ hàng</span>
              </CButton>
              <CButton color="info" href="#" style={{ marginLeft: "8px" }}>
                <span style={{ color: "white" }}>mua</span>
              </CButton>
            </CCardBody>
          </CCard>
          <CCard style={{ width: "18rem" }}>
            <CCardImage
              orientation="top"
              src="https://xedapgiakho.com/wp-content/uploads/2024/07/Xe-Dap-Tre-Em-Be-Gai-Shukyo-S1-1-400x300.jpg"
            />
            <CCardBody>
              <CCardTitle>Xe Đạp Trẻ Em Xaming Baga 18 Inch</CCardTitle>
              <CCardText style={{ color: "blue" }}>6.6666.666đ</CCardText>
              <CButton color="info" href="#">
                <span style={{ color: "white" }}>Thêm giỏ hàng</span>
              </CButton>
              <CButton color="info" href="#" style={{ marginLeft: "8px" }}>
                <span style={{ color: "white" }}>mua</span>
              </CButton>
            </CCardBody>
          </CCard>
          <CCard style={{ width: "18rem" }}>
            <CCardImage
              orientation="top"
              src="https://xedapgiakho.com/wp-content/uploads/2024/07/Xe-Dap-Tre-Em-Be-Trai-Skukyo-K2-1-400x300.jpg"
            />
            <CCardBody>
              <CCardTitle>Xe Đạp Trẻ Em JsXiong 2301 Hiphop 14 Inch</CCardTitle>
              <CCardText style={{ color: "blue" }}>6.6666.666đ</CCardText>
              <CButton color="info" href="#">
                <span style={{ color: "white" }}>Thêm giỏ hàng</span>
              </CButton>
              <CButton color="info" href="#" style={{ marginLeft: "8px" }}>
                <span style={{ color: "white" }}>mua</span>
              </CButton>
            </CCardBody>
          </CCard>
        </Box>
        <Box
          px={2}
          sx={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <CCard style={{ width: "18rem" }}>
            <CCardImage
              orientation="top"
              src="https://xedapgiakho.com/wp-content/uploads/2024/06/hinh-xe-dap-tre-em-nam-xaming-baga-12-inch-400x300.jpg"
            />
            <CCardBody>
              <CCardTitle>Xe Đạp Trẻ Em XDD 2 Dóng 01 18 Inch</CCardTitle>
              <CCardText style={{ color: "blue" }}>6.6666.666đ</CCardText>
              <CButton color="info" href="#">
                <span style={{ color: "white" }}>Thêm giỏ hàng</span>
              </CButton>
              <CButton color="info" href="#" style={{ marginLeft: "8px" }}>
                <span style={{ color: "white" }}>mua</span>
              </CButton>
            </CCardBody>
          </CCard>
          <CCard style={{ width: "18rem" }}>
            <CCardImage
              orientation="top"
              src="https://xedapgiakho.com/wp-content/uploads/2024/06/xe-dap-cho-be-gai-jsxiong-2304-12-inch-400x300.jpg"
            />
            <CCardBody>
              <CCardTitle>Xe Đạp Trẻ Em Bé Gái Melody 16 Inch</CCardTitle>
              <CCardText style={{ color: "blue" }}>6.6666.666đ</CCardText>
              <CButton color="info" href="#">
                <span style={{ color: "white" }}>Thêm giỏ hàng</span>
              </CButton>
              <CButton color="info" href="#" style={{ marginLeft: "8px" }}>
                <span style={{ color: "white" }}>mua</span>
              </CButton>
            </CCardBody>
          </CCard>
          <CCard style={{ width: "18rem" }}>
            <CCardImage
              orientation="top"
              src="https://xedapgiakho.com/wp-content/uploads/2024/06/xe-dap-tre-em-xdd-2-dong-01-18-inch-2-400x300.jpg"
            />
            <CCardBody>
              <CCardTitle>Xe Đạp Trẻ Em JsXiong 2301 Hiphop 14 Inch</CCardTitle>
              <CCardText style={{ color: "blue" }}>6.6666.666đ</CCardText>
              <CButton color="info" href="#">
                <span style={{ color: "white" }}>Thêm giỏ hàng</span>
              </CButton>
              <CButton color="info" href="#" style={{ marginLeft: "8px" }}>
                <span style={{ color: "white" }}>mua</span>
              </CButton>
            </CCardBody>
          </CCard>
        </Box>
      </Box>
    </>
  );
}

export default Childrenbike;

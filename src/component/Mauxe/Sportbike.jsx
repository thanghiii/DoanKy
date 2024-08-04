import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react";
import { Box } from "@mui/material";

function Sportbike() {
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
              src="https://xedapgiakho.com/wp-content/uploads/2024/07/Xe-Dap-Dia-Hinh-Dtfly-Black-Line-Xt350-1-400x300.jpg"
            />
            <CCardBody>
              <CCardTitle>Xe Đạp Địa Hình Fascino FS126S 26 Inch</CCardTitle>
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
              src="https://xedapgiakho.com/wp-content/uploads/2024/06/xe-dap-dia-hinh-fs124s-den-do-400x300.jpg"
            />
            <CCardBody>
              <CCardTitle>Xe Đạp Địa Hình Fascino FS124S 24 Inch</CCardTitle>
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
              src="https://xedapgiakho.com/wp-content/uploads/2024/06/xe-dap-dia-hinh-shukyo-s650-26-inch-1-1-400x300.jpg"
            />
            <CCardBody>
              <CCardTitle>Xe Đạp Địa Hình MTB Shukyo S650 24 Inch </CCardTitle>
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
              src="https://xedapgiakho.com/wp-content/uploads/2024/06/Xe-Dap-Dia-Hinh-MTB-Vicky-Crazy-VC800-26-Inch-2-400x300.jpg"
            />
            <CCardBody>
              <CCardTitle>
                Xe Đạp Địa Hình MTB Vicky Crazy VC800 26 Inch
              </CCardTitle>
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
              src="https://xedapgiakho.com/wp-content/uploads/2024/07/Xe-Dap-Dia-Hinh-MTB-Califa-QL680-27.5-Inch-400x300.jpg"
            />
            <CCardBody>
              <CCardTitle>Xe Đạp Địa Hình MTB Califa C240 24 Inch</CCardTitle>
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
              src="https://xedapgiakho.com/wp-content/uploads/2024/06/Xe-Dap-Dia-Hinh-MTB-Califa-CK6-26-Inch-4-400x300.jpg"
            />
            <CCardBody>
              <CCardTitle>Xe Đạp Địa Hình Shukyo S150 26 Inch</CCardTitle>
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

export default Sportbike;

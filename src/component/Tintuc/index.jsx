import { CCard, CCardBody, CCardImage, CCardText } from "@coreui/react";
import { Box, Link } from "@mui/material";

function News() {
  return (
    <>
      <Link to="/Mauxe">dsada</Link>
      <Box
        sx={{
          display: "flex",
          gap: 4,
        }}
      >
        <CCard style={{ width: "18rem" }}>
          <CCardImage
            orientation="top"
            src="https://xedapgiakho.com/wp-content/uploads/2024/07/Xe-Dap-Gia-Kho-Xe-Dap-Khuyen-Mai-3-2.jpg"
          />
          <CCardBody>
            <CCardText>
              Mua Xe Đạp Về – Tặng Ngay 50 Ngàn Đồng. Khuyến mãi Xe Đạp cực Hot
              2024
            </CCardText>
          </CCardBody>
        </CCard>
        <CCard style={{ width: "18rem" }}>
          <CCardImage
            orientation="top"
            src="https://xedapgiakho.com/wp-content/uploads/2024/07/Xe-Dap-Gia-Kho-Xe-Dap-Khuyen-Mai-1-2.jpg"
          />
          <CCardBody>
            <CCardText>Xe đạp khuyến mãi- Ưu đãi ngập tràn</CCardText>
          </CCardBody>
        </CCard>
        <CCard style={{ width: "18rem" }}>
          <CCardImage
            orientation="top"
            src="https://xedapgiakho.com/wp-content/uploads/2024/07/Xe-Dap-Gia-Kho-Xe-Dap-Khuyen-Mai-5-1.jpg"
          />
          <CCardBody>
            <CCardText>Top 5 Thương Hiệu Xe Đạp Địa Hình Khuyến Mãi</CCardText>
          </CCardBody>
        </CCard>
      </Box>
      <div className="Textcenter">
        <div>
          <h3 style={{ textAlign: "center" }}>
            Giới Thiệu Hệ Thống Cửa Hàng Xe Đạp Giá Kho
          </h3>
          <span>
            Khám phá thế giới xe đạp tại Hệ thống Cửa hàng Xe Đạp Giá Kho, nơi
            Quý Khách hàng có thể trải nghiệm sự đa dạng và chất lượng hàng đầu
            các mẫu xe trên thị trường: Xe đạp Thể thao, Xe đạp đua, Xe đạp địa
            hình, Xe đạp trẻ em, Xe đạp phổ thông, Xe đạp Gấp, Xe đạp Fix Gear…
          </span>
          <span>
            Chúng tôi tự hào là đại diện chính thức của những thương hiệu hàng
            đầu tại Việt Nam như Catani, DTFly, Giant, Twitter, Sava, Fascino,
            Royal Baby, Life,… Cam kết mang đến cho khách hàng sản phẩm chính
            hãng và chế độ bảo hành hấp dẫn, cùng chính sách Giao hàng Miễn phí
            toàn quốc.
          </span>
          <button
            className="btn-tt"
            style={{
              borderRadius: "3px",
              width: "100px",
              marginLeft: "150px",
              marginTop: "10px",
            }}
          >
            xem thêm
          </button>
        </div>
        <div>
          <iframe
            width="560"
            height="355"
            src="https://www.youtube.com/embed/KInILPAJEzc?si=mQTv31h7YyBSsY0x"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default News;

import { CFooter } from "@coreui/react";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footers() {
  return (
    <div>
      <CFooter style={{ backgroundColor: "#c9e3f4" }}>
        <div>
          <h3 style={{ marginLeft: "30px" }}>Thông tin liên hệ</h3>
          <ul>
            <li>
              <span style={{ fontWeight: "bold " }}>Hotline</span>: 028 9996
              5775
            </li>
            <li>
              <span style={{ fontWeight: "bold " }}>Email</span>:
              Xedapgiakho@gmail.com
            </li>
            <li>
              <span style={{ fontWeight: "bold " }}>
                Phương thức thanh toán:
              </span>
            </li>
            <li>
              <img
                style={{ width: "300px" }}
                src="https://xedapgiakho.com/wp-content/uploads/2022/10/payment-method-3.png"
                alt=""
              />
            </li>
            <li>
              <span style={{ fontWeight: "bold " }}>
                Kết nối với chúng tôi:
              </span>
            </li>
            <li>
              <FacebookIcon />
              <EmailIcon />
              <YouTubeIcon />
            </li>
          </ul>
        </div>
        <div>
          <h3 style={{ marginLeft: "30px", marginTop: "-30px" }}>
            Thông tin Chính sách
          </h3>
          <ul>
            <li>Hướng Dẫn Mua Hàng</li>
            <li>Chính Sách Thanh Toán</li>
            <li>Chính Sách Giao Hàng</li>
            <li>Chính Sách Đổi Trả Hàng</li>
            <li>Chính Sách Bảo Hành </li>
          </ul>
        </div>
        <div>
          <h3 style={{ marginLeft: "30px", marginTop: "-60px" }}>
            Hệ thống của hàng
          </h3>
          <ul>
            <li>
              <span style={{ fontWeight: "bold" }}>Cn1:</span>
              Đa Chất-Đại Xuyên-Phú Xuyên-Hà Nội
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Cn2:</span>
              Đa Chất-Đại Xuyên-Phú Xuyên-Hà Nội
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Cn3:</span>
              Đa Chất-Đại Xuyên-Phú Xuyên-Hà Nội
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Cn4:</span>
              Đa Chất-Đại Xuyên-Phú Xuyên-Hà Nội
            </li>
          </ul>
        </div>
      </CFooter>
      <CFooter>
        <div></div>
        <div>
          <span style={{ marginLeft: "100px", fontWeight: "bold" }}>
            Công ty TNHH 1 thành viên Nguyễn Tất Thắng
          </span>{" "}
          <br />
          Copyright 2024 © Thanghii All rights reserved. Web Design by Thangdz
          MEDIA
        </div>
        <div></div>
      </CFooter>
    </div>
  );
}

export default Footers;

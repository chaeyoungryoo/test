import React from "react";
import styled from "styled-components";

Profile.defaultProps = {
  size: "large", // large, medium, small : 크기를 제어합니다.
  group: false, //그룹 여부 제어
  profile: [
    {
      imgUrl : false, //이미지url
      btnRegister: false // 등록 버튼 제어 
    }
  ]
};

function Profile(props) {
  return (
    <ProfileWrap
      className={"profile-wrap " + props.size + " " + (props.group ? "group" : "")}
    >
      {props.profile.map(function (item) {
        return (
          <div className="pic-thumb">
            {item.imgUrl && (
              <div className="profile-img" style={{backgroundImage: `url(${item.imgUrl})`, 
              backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
            )}
            {/* 등록버튼 */}
            {item.btnRegister && (
              <button type="button" className="btn btn-register">
              <i className="icon ic-register" />
            </button>
            )}
          </div>
        );
      })}
      {props.group && (
        <div className="like-count">
          <span className="num">+24</span>
        </div>
      )}
    </ProfileWrap>
  );
}

const ProfileWrap = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  .ic-register {
    width: 32px;
    height: 32px;
    display: inline-block;
    background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='16' cy='16' r='15.5' fill='%23F7F7F7' stroke='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.525 16.25l5.723-5.725a.2.2 0 01.283 0l.942.943a.2.2 0 010 .283l-5.722 5.724a.2.2 0 01-.141.058h-1.143v-1.142a.2.2 0 01.058-.142zm-1.192.14c0-.353.14-.692.39-.942l5.723-5.724a1.335 1.335 0 011.886 0l.943.943c.52.52.52 1.365 0 1.885l-5.723 5.724c-.25.25-.589.39-.942.39H14a.667.667 0 01-.667-.666v-1.61zm-2.2-4.49c0-.423.344-.767.767-.767h3.433a.567.567 0 000-1.133H11.9a1.9 1.9 0 00-1.9 1.9v8.2c0 1.05.85 1.9 1.9 1.9h8.2a1.9 1.9 0 001.9-1.9v-3.433a.567.567 0 00-1.133 0V20.1a.767.767 0 01-.767.767h-8.2a.767.767 0 01-.767-.767v-8.2z' fill='%238E8E8E'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
  }
  .pic-thumb {
    position: relative;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    background-image: url("data:image/svg+xml,%3Csvg width='97' height='96' viewBox='0 0 97 96' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='48.0012' cy='48' r='48' fill='%23E3E3E3'/%3E%3Ccircle cx='48.0012' cy='48' r='47.5' stroke='none'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M47.9999 33.4C43.887 33.4 40.5499 36.7379 40.5499 40.8588C40.5499 44.9798 43.887 48.3176 47.9999 48.3176C52.1129 48.3176 55.4499 44.9798 55.4499 40.8588C55.4499 36.7379 52.1129 33.4 47.9999 33.4ZM37.1499 40.8588C37.1499 34.8632 42.0061 30 47.9999 30C53.9938 30 58.8499 34.8632 58.8499 40.8588C58.8499 46.8544 53.9938 51.7176 47.9999 51.7176C42.0061 51.7176 37.1499 46.8544 37.1499 40.8588ZM47.9999 59.8588C41.4112 59.8588 35.3979 62.7301 30.9374 67.4656C30.2937 68.1491 29.2178 68.1812 28.5343 67.5375C27.8509 66.8937 27.8187 65.8178 28.4625 65.1344C33.5008 59.7854 40.3839 56.4588 47.9999 56.4588C55.616 56.4588 62.499 59.7854 67.5374 65.1344C68.1812 65.8178 68.149 66.8937 67.4656 67.5375C66.7821 68.1812 65.7062 68.1491 65.0625 67.4656C60.602 62.7301 54.5887 59.8588 47.9999 59.8588Z' fill='white'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-size: cover;
    .profile-img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      img,
      svg {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }
  .btn-register {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 32px;
    height: 32px;
    background: none;
    border: 0;
    cursor: pointer;
  }
  .like-count {
    margin-left: 8px;
    .num {
      font-size: 12px;
      font-weight: 400;
      color: #8e8e8e;
      line-height: 18px;
    }
  }
  &.group {
    .pic-thumb {
      border: 1px solid #ffffff;
    }
  }
  &.large {
    .pic-thumb {
      width: 94px;
      height: 94px;
      & + .pic-thumb {
        margin-left: -24px;
      }
    }
    .like-count {
      margin-left: 16px;
      .num {
        font-size: 22px;
        line-height: 30px;
      }
    }
  }
  &.medium {
    .pic-thumb {
      width: 46px;
      height: 46px;
      & + .pic-thumb {
        margin-left: -16px;
      }
    }
  }
  &.small {
    .pic-thumb {
      width: 30px;
      height: 30px;
      & + .pic-thumb {
        margin-left: -8px;
      }
    }
  }
`;
export default Profile;

import React, { useEffect } from "react";
import styled from "styled-components";

Button.defaultProps = {
  buttonVerAlign: false, //버튼 수직정렬 유무 
  segment: null, //segemnt single : 단일 선택, dobule : 복수 선택
  button: [
    {
      id: "button1",
      type: "box", //box, text, icon-only : 버튼 타입 제어합니다. 
      color: "primary", //primary, secondary, tertiary, danger, outlined, standard, bg, fill : color타입 제어합니다. 
      size: "large", //large, medium, small : 크기를 제어합니다.
      icon: {
        align: "", //left: icon left정렬인 경우에 사용
        name: "ic-plus",
      },
      extraClassname: '',
      label: "버튼", //버튼 text명 입력
      disabled: false, //비활성화 제어
    },
  ],
};

function Button(props) {
  useEffect(() => {
    // Single //
    const singWrap = document.querySelectorAll(".single-select");

    singWrap.forEach(function (elem) {
      const singleBtn = elem.querySelectorAll(".btn");
      if (singleBtn) {
        singleBtn.forEach(function (element, key) {
          element.addEventListener("click", singleHandler);
        });
      }
    });

    // Multi //
    const multigWrap = document.querySelectorAll(".multi-select");
    multigWrap.forEach(function (eBtn) {
      const multiBtn = eBtn.querySelectorAll(".btn");
      if (multiBtn) {
        multiBtn.forEach(function (element, key) {
          element.addEventListener("click", multiHandler);
        });
      }
    });
  });

  function singleHandler(e) {
    const element = e.currentTarget;
    const singleBtn = element
      .closest(".button-container")
      .querySelectorAll(".btn");

    if (element.className.indexOf("active") > -1) {
      element.classList.remove("active");
    } else {
      singleBtn.forEach(function (button, els) {
        button.classList.remove("active");
      });

      element.classList.add("active");
    }
  }

  function multiHandler(e) {
    const element = e.currentTarget;

    if (element.className.indexOf("active") > -1) {
      element.classList.remove("active");
    } else {
      element.classList.add("active");
    }
  }

  return (
    <>
      {/*
       .btn-container 제어 클래스 
       - 정렬 : align-ver (수직)
       - segment : segment, single-select , multi-select
       
       .btn 제어 클래스 : 
          - 타입 : type-box, type-text, type-icon-only
          - btn-primary, btn-secondary, btn-tertiary, btn-danger, btn-outlined, btn-standard, btn-bg, btn-fill : 타입을 제어합니다.
         - large, medium, small : 크기를 제어합니다.
         - icon-left : 아이콘 왼쪽 위치를 제어합니다. (ex) icon-left: 아이콘 왼쪽, 텍스트 오른쪽)
         disabled(비활성화) : <button>태그에 disabled 적용
     
           - ic-plus : 플러스 모양 아이콘을 출력합니다. (필요한 아이콘은 css에 클래스로 추가해줘야 합니다.)
     */}
      <ButtonBox
        className={
          "button-container " +
          (props.buttonVerAlign ? " align-ver" : "") +
          (props.segment === "single" ? " segment single-select" : "") +
          (props.segment === "multi" ? " segment multi-select" : "")
        }
      >
        {props.button.map(function (item) {
          return (
            <button
              type="button"
              key={item.id}
              className={`
            btn 
            ${item.type ? `type-${item.type}` : ""} 
            ${item.color ? `btn-${item.color}` : ""} 
            ${item.size ? item.size : ""} 
            ${item.icon && item.icon.align === "left" ? "icon-left" : ""} 
            ${item.extraClassname ? item.extraClassname : ""}`}
              disabled={item.disabled}
            >
              {item.label ? <span className="text">{item.label}</span> : null}
              {item.icon ? <i className={"icon " + item.icon.name}></i> : null}
            </button>
          );
        })}
      </ButtonBox>
    </>
  );
}

const ButtonBox = styled.div`
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
    &.align-ver {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
        .btn {
        & + .btn:not(:first-child) {
          margin: 12px 0 0 0;
        }
        &.type-box {
          & + .btn:not(:first-child) {
            margin: 12px 0 0 0;
          }
        }
      }
    }

    &.segment {
      .btn {
        &:not(:first-child, :last-child) {
          border-radius: 0;
        }
        & + .btn:not(:first-child) {
          margin: 0;
        }
        &:first-child {
          border-radius: 2px 0 0 2px;
          &::after {
            display: none;
          }
        }
        &:last-child {
          border-radius: 0 2px 2px 0;
        }
        &:not(.btn-outlined) {
          &::after {
            content: "";
            width: 1px;
            height: 18px;
            background: rgba(0, 0, 0, 0.05);
            position: absolute;
            left: 0;
            top: 50%;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
          }
        }

        &.active {
          z-index: 5;
          background-color: #004181 !important;
          &:hover:not(:disabled) {
            background-color: #004181 !important;
            .text {
              color: #ffffff !important;
            }
          }
          .text {
            color: #ffffff !important;
          }
          .ic-plus {
            background-image: url("data:image/svg+xml,%3Csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.8499 1.35C8.8499 0.880558 8.46934 0.5 7.9999 0.5C7.53046 0.5 7.1499 0.880558 7.1499 1.35V7.65002H0.85C0.380558 7.65002 0 8.03058 0 8.50002C0 8.96947 0.380558 9.35002 0.85 9.35002H7.1499V15.65C7.1499 16.1194 7.53046 16.5 7.9999 16.5C8.46934 16.5 8.8499 16.1194 8.8499 15.65V9.35002H15.15C15.6194 9.35002 16 8.96947 16 8.50002C16 8.03058 15.6194 7.65002 15.15 7.65002H8.8499V1.35Z' fill='white'/%3E%3C/svg%3E%0A");
          }
        }
        &.btn-outlined {
          border: 1px solid rgba(0, 0, 0, 0.15);
          background-color: white;
          .text {
            color: #585858;
          }
          &:not(:last-child) {
            border-right: 0;
          }
          &:disabled {
            background: none;
          }
          .ic-plus {
            background-image: url("data:image/svg+xml,%3Csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.8499 1.35C8.8499 0.880558 8.46934 0.5 7.9999 0.5C7.53046 0.5 7.1499 0.880558 7.1499 1.35V7.65002H0.85C0.380558 7.65002 0 8.03058 0 8.50002C0 8.96947 0.380558 9.35002 0.85 9.35002H7.1499V15.65C7.1499 16.1194 7.53046 16.5 7.9999 16.5C8.46934 16.5 8.8499 16.1194 8.8499 15.65V9.35002H15.15C15.6194 9.35002 16 8.96947 16 8.50002C16 8.03058 15.6194 7.65002 15.15 7.65002H8.8499V1.35Z' fill='%235B5B5B'/%3E%3C/svg%3E%0A");
          }
          &.active {
            .ic-plus {
              background-image: url("data:image/svg+xml,%3Csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.8499 1.35C8.8499 0.880558 8.46934 0.5 7.9999 0.5C7.53046 0.5 7.1499 0.880558 7.1499 1.35V7.65002H0.85C0.380558 7.65002 0 8.03058 0 8.50002C0 8.96947 0.380558 9.35002 0.85 9.35002H7.1499V15.65C7.1499 16.1194 7.53046 16.5 7.9999 16.5C8.46934 16.5 8.8499 16.1194 8.8499 15.65V9.35002H15.15C15.6194 9.35002 16 8.96947 16 8.50002C16 8.03058 15.6194 7.65002 15.15 7.65002H8.8499V1.35Z' fill='white'/%3E%3C/svg%3E%0A");
            }
          }
        }
        &.type-box {
          & + .btn:not(:first-child) {
            margin: 0;
          }
        }
      }
    }

    // btn common
    .btn {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      flex-shrink: 0;
      position: relative;
      border: 0;
      transition: all 0.3s;
      background: none;
      border-radius: 2px;
      cursor: pointer;
      & + .btn:not(:first-child) {
        margin: 0 0 0 12px;
      }
      //공통 disabled ic-plus
      &:disabled {
        .ic-plus {
          background-image: url("data:image/svg+xml,%3Csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.8499 1.35C8.8499 0.880558 8.46934 0.5 7.9999 0.5C7.53046 0.5 7.1499 0.880558 7.1499 1.35V7.65002H0.85C0.380558 7.65002 0 8.03058 0 8.50002C0 8.96947 0.380558 9.35002 0.85 9.35002H7.1499V15.65C7.1499 16.1194 7.53046 16.5 7.9999 16.5C8.46934 16.5 8.8499 16.1194 8.8499 15.65V9.35002H15.15C15.6194 9.35002 16 8.96947 16 8.50002C16 8.03058 15.6194 7.65002 15.15 7.65002H8.8499V1.35Z' fill='black'/%3E%3C/svg%3E%0A") !important;
          opacity: 0.15;
        }
      }
      &.full-size {
        width: 100%;
      }
      &.type-box {
        padding: 0 16px;
        & + .btn:not(:first-child) {
          margin: 0 0 0 12px;
        }
        &:disabled {
          background: rgba(0, 0, 0, 0.05); //Type-box common
          .text {
            color: rgba(0, 0, 0, 0.15);
          }
        }
        &.btn-outlined {
          &.large {
            padding: 12px 15px;
          }
          &.medium {
            padding: 10px 15px;
          }
          &.small {
            padding: 6px 15px;
          }
        }
      }
      &.type-text {
        padding: 0 16px;
        &:hover:not(:disabled) {
          .text {
            &:after {
              left: 0;
              width: 100%;
            }
          }
        }
        .text {
          &:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 1px;
            transition: all 0.3s;
          }
        }
        &:disabled {
          background: none !important;
          .text {
            color: rgba(0, 0, 0, 0.15) !important;
          }
        }
        &.btn-primary {
          background-color: transparent;
          .text {
            color: #004181;
          }
          .ic-plus {
            background-image: url("data:image/svg+xml,%3Csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.8499 1.35C8.8499 0.880558 8.46934 0.5 7.9999 0.5C7.53046 0.5 7.1499 0.880558 7.1499 1.35V7.65002H0.85C0.380558 7.65002 0 8.03058 0 8.50002C0 8.96947 0.380558 9.35002 0.85 9.35002H7.1499V15.65C7.1499 16.1194 7.53046 16.5 7.9999 16.5C8.46934 16.5 8.8499 16.1194 8.8499 15.65V9.35002H15.15C15.6194 9.35002 16 8.96947 16 8.50002C16 8.03058 15.6194 7.65002 15.15 7.65002H8.8499V1.35Z' fill='%23004181'/%3E%3C/svg%3E%0A");
          }
          &:hover:not(:disabled) {
            background: none;
            .text {
              &:after {
                background: #004181;
              }
            }
          }
        }
        &.btn-secondary {
          background-color: transparent;
          .text {
            color: #585858;
          }
          .ic-plus {
            background-image: url("data:image/svg+xml,%3Csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.8499 1.35C8.8499 0.880558 8.46934 0.5 7.9999 0.5C7.53046 0.5 7.1499 0.880558 7.1499 1.35V7.65002H0.85C0.380558 7.65002 0 8.03058 0 8.50002C0 8.96947 0.380558 9.35002 0.85 9.35002H7.1499V15.65C7.1499 16.1194 7.53046 16.5 7.9999 16.5C8.46934 16.5 8.8499 16.1194 8.8499 15.65V9.35002H15.15C15.6194 9.35002 16 8.96947 16 8.50002C16 8.03058 15.6194 7.65002 15.15 7.65002H8.8499V1.35Z' fill='%235B5B5B'/%3E%3C/svg%3E%0A");
          }
          &:hover:not(:disabled) {
            background: none;
            .text {
              &:after {
                background: #585858;
              }
            }
          }
        }
      }
      &.type-icon-only {
        padding: 12px;
        &:disabled {
          background: rgba(0, 0, 0, 0.05);
        }
        &.medium {
          padding: 10px;
        }
        &.small {
          padding: 8px;
        }
      }
      .text {
        display: inline-block;
        position: relative;
        font-size: 14px;
        font-weight: 600;
        color: #585858;
        line-height: 20px;
        & + .icon {
          //medium,small common
          margin-left: 4px;
        }
      }

      .icon {
        &.ic-plus {
          display: inline-block;
          background-position: 50%;
          background-repeat: no-repeat;
        }
      }

      &:disabled {
        cursor: default;
      }

      &.icon-left {
        flex-direction: row-reverse;
        .text {
          //medium,small common
          + .icon {
            margin-left: 0;
            margin-right: 4px;
          }
        }
        &.large {
          .text {
            + .icon {
              margin-left: 0;
              margin-right: 8px;
            }
          }
        }
      }

      &.large {
        height: 48px;
        .text {
          font-size: 16px;
          line-height: 24px;
          + .icon {
            margin-left: 8px;
            margin-right: 0;
          }
        }
        .ic-plus {
          width: 24px;
          height: 24px;
          background-size: 16px 16px;
        }
      }

      &.medium {
        height: 40px;
        .ic-plus {
          width: 20px;
          height: 20px;
          background-size: 13px 13px;
        }
      }

      &.small {
        height: 32px;
        .ic-plus {
          width: 16px;
          height: 16px;
          background-size: 11px 11px;
        }
      }

      &.btn-primary {
        background: #004181;
        .text {
          color: #fff;
        }

        &:hover:not(:disabled) {
          background: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #004181;
        }
        .ic-plus {
          background-image: url("data:image/svg+xml,%3Csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.8499 1.35C8.8499 0.880558 8.46934 0.5 7.9999 0.5C7.53046 0.5 7.1499 0.880558 7.1499 1.35V7.65002H0.85C0.380558 7.65002 0 8.03058 0 8.50002C0 8.96947 0.380558 9.35002 0.85 9.35002H7.1499V15.65C7.1499 16.1194 7.53046 16.5 7.9999 16.5C8.46934 16.5 8.8499 16.1194 8.8499 15.65V9.35002H15.15C15.6194 9.35002 16 8.96947 16 8.50002C16 8.03058 15.6194 7.65002 15.15 7.65002H8.8499V1.35Z' fill='white'/%3E%3C/svg%3E%0A");
        }
      }

      &.btn-secondary {
        background: #f0f4f8;
        .text {
          color: #004181;
        }
        &:hover:not(:disabled) {
          background: linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), #F0F4F8;
        }
        .ic-plus {
          background-image: url("data:image/svg+xml,%3Csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.8499 1.35C8.8499 0.880558 8.46934 0.5 7.9999 0.5C7.53046 0.5 7.1499 0.880558 7.1499 1.35V7.65002H0.85C0.380558 7.65002 0 8.03058 0 8.50002C0 8.96947 0.380558 9.35002 0.85 9.35002H7.1499V15.65C7.1499 16.1194 7.53046 16.5 7.9999 16.5C8.46934 16.5 8.8499 16.1194 8.8499 15.65V9.35002H15.15C15.6194 9.35002 16 8.96947 16 8.50002C16 8.03058 15.6194 7.65002 15.15 7.65002H8.8499V1.35Z' fill='%23004181'/%3E%3C/svg%3E%0A");
        }
      
      }

      &.btn-tertiary {
        background: #f7f7f7;
        &:hover:not(:disabled) {
          background: linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), #F7F7F7;
        }
        .ic-plus {
          background-image: url("data:image/svg+xml,%3Csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.8499 1.35C8.8499 0.880558 8.46934 0.5 7.9999 0.5C7.53046 0.5 7.1499 0.880558 7.1499 1.35V7.65002H0.85C0.380558 7.65002 0 8.03058 0 8.50002C0 8.96947 0.380558 9.35002 0.85 9.35002H7.1499V15.65C7.1499 16.1194 7.53046 16.5 7.9999 16.5C8.46934 16.5 8.8499 16.1194 8.8499 15.65V9.35002H15.15C15.6194 9.35002 16 8.96947 16 8.50002C16 8.03058 15.6194 7.65002 15.15 7.65002H8.8499V1.35Z' fill='%235B5B5B'/%3E%3C/svg%3E%0A");
        }
      }

      &.btn-outlined {
        border: 1px solid #004181;
        .text {
          color: #004181;
        }
        &:hover:not(:disabled) {
          background: rgba(0, 0, 0, 0.05);
        }
        &:disabled {
          border-color: rgba(0, 0, 0, 0.1);
        } 
        .ic-plus {
          background-image: url("data:image/svg+xml,%3Csvg width='16' height='1 ' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.8499 1.35C8.8499 0.880558 8.46934 0.5 7.9999 0.5C7.53046 0.5 7.1499 0.880558 7.1499 1.35V7.65002H0.85C0.380558 7.65002 0 8.03058 0 8.50002C0 8.96947 0.380558 9.35002 0.85 9.35002H7.1499V15.65C7.1499 16.1194 7.53046 16.5 7.9999 16.5C8.46934 16.5 8.8499 16.1194 8.8499 15.65V9.35002H15.15C15.6194 9.35002 16 8.96947 16 8.50002C16 8.03058 15.6194 7.65002 15.15 7.65002H8.8499V1.35Z' fill='%23004181'/%3E%3C/svg%3E%0A");
        }
      }


      &.btn-danger {
        background: #ffecec;
        .text {
          color: #d61032;
        }
        &:hover:not(:disabled) {
          background: linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), #FFECEC;
        }
        .ic-plus {
          background-image: url("data:image/svg+xml,%3Csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.8499 1.35C8.8499 0.880558 8.46934 0.5 7.9999 0.5C7.53046 0.5 7.1499 0.880558 7.1499 1.35V7.65002H0.85C0.380558 7.65002 0 8.03058 0 8.50002C0 8.96947 0.380558 9.35002 0.85 9.35002H7.1499V15.65C7.1499 16.1194 7.53046 16.5 7.9999 16.5C8.46934 16.5 8.8499 16.1194 8.8499 15.65V9.35002H15.15C15.6194 9.35002 16 8.96947 16 8.50002C16 8.03058 15.6194 7.65002 15.15 7.65002H8.8499V1.35Z' fill='%23D61032'/%3E%3C/svg%3E%0A");
        }
      }

      &.btn-standard {
        border-radius: 50%;
        &:hover:not(:disabled) {
          background: rgba(0, 0, 0, 0.05);
        }
        &:disabled {
          background: none;
        }
        .ic-plus {
          background-image: url("data:image/svg+xml,%3Csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.8499 1.35C8.8499 0.880558 8.46934 0.5 7.9999 0.5C7.53046 0.5 7.1499 0.880558 7.1499 1.35V7.65002H0.85C0.380558 7.65002 0 8.03058 0 8.50002C0 8.96947 0.380558 9.35002 0.85 9.35002H7.1499V15.65C7.1499 16.1194 7.53046 16.5 7.9999 16.5C8.46934 16.5 8.8499 16.1194 8.8499 15.65V9.35002H15.15C15.6194 9.35002 16 8.96947 16 8.50002C16 8.03058 15.6194 7.65002 15.15 7.65002H8.8499V1.35Z' fill='%23004181'/%3E%3C/svg%3E%0A");
        }
      }

      &.btn-bg {
        border-radius: 50%;
        &:hover:not(:disabled) {
          background-color: rgba(0, 0, 0, 0.05);
        }
        &:disabled {
          background: none;
        }
        &.large,
        &.medium,
        &.small {
          height: auto;
          padding: 2px;
        }
        
        .ic-plus {
          background-image: url("data:image/svg+xml,%3Csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.8499 1.35C8.8499 0.880558 8.46934 0.5 7.9999 0.5C7.53046 0.5 7.1499 0.880558 7.1499 1.35V7.65002H0.85C0.380558 7.65002 0 8.03058 0 8.50002C0 8.96947 0.380558 9.35002 0.85 9.35002H7.1499V15.65C7.1499 16.1194 7.53046 16.5 7.9999 16.5C8.46934 16.5 8.8499 16.1194 8.8499 15.65V9.35002H15.15C15.6194 9.35002 16 8.96947 16 8.50002C16 8.03058 15.6194 7.65002 15.15 7.65002H8.8499V1.35Z' fill='%238E8E8E'/%3E%3C/svg%3E%0A");
        }
      }

      &.btn-fill {
        background-color: transparent;
        padding: 0;
        &:disabled {
          background: none;
        }
        &:hover:not(:disabled) {
          .ic-plus {
            background-image: url("data:image/svg+xml,%3Csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.8499 1.35C8.8499 0.880558 8.46934 0.5 7.9999 0.5C7.53046 0.5 7.1499 0.880558 7.1499 1.35V7.65002H0.85C0.380558 7.65002 0 8.03058 0 8.50002C0 8.96947 0.380558 9.35002 0.85 9.35002H7.1499V15.65C7.1499 16.1194 7.53046 16.5 7.9999 16.5C8.46934 16.5 8.8499 16.1194 8.8499 15.65V9.35002H15.15C15.6194 9.35002 16 8.96947 16 8.50002C16 8.03058 15.6194 7.65002 15.15 7.65002H8.8499V1.35Z' fill='%23444444'/%3E%3C/svg%3E%0A");
          }
        }
        .ic-plus {
          background-image: url("data:image/svg+xml,%3Csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.8499 1.35C8.8499 0.880558 8.46934 0.5 7.9999 0.5C7.53046 0.5 7.1499 0.880558 7.1499 1.35V7.65002H0.85C0.380558 7.65002 0 8.03058 0 8.50002C0 8.96947 0.380558 9.35002 0.85 9.35002H7.1499V15.65C7.1499 16.1194 7.53046 16.5 7.9999 16.5C8.46934 16.5 8.8499 16.1194 8.8499 15.65V9.35002H15.15C15.6194 9.35002 16 8.96947 16 8.50002C16 8.03058 15.6194 7.65002 15.15 7.65002H8.8499V1.35Z' fill='%238E8E8E'/%3E%3C/svg%3E%0A");
        }
      }
    }
`;
export default Button;

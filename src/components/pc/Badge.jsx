import React from 'react';
import styled from 'styled-components';

Badge.defaultProps = {
  type : 'new', //new, label 배지 상태 제어 
  color : 'new', //new, info, confirm, ing, warning, cancel // --dark: dark 모드 , --light : light 모드 
  size : null, //large , small 제어 
  text : 'N', //배지 내부 텍스트 입력
  label : null //new 타입의 label명 필요시 텍스트 입력
}

function Badge(props) {
  return (
    <BadgeComp className="badge-container">
        <div className={"badge-button " + (props.size ? props.size : '') + " " + (props.type) + " " + (props.color)}>
          <span className="badge-text">{props.text}</span>
        </div>
        <span className="badge-label">
          { /* Label 필요시 태그안에 내용입력 */ }
          {props.label}
        </span>
    </BadgeComp>
  );
}

const BadgeComp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  .badge-label {
    margin-left: 8px;
    font-size: 14px;
    font-weight: 500;
    color: #444444;
    line-height: 20px;
  }

.badge-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  border-radius: 9999px;
  box-sizing: border-box;

  &.new {
    padding: 2px 6px;
    background: #ef3939;

    .badge-text {
      line-height: 16px;
    }
  }

  &.label {
    border-radius: 2px;

    .badge-text {
      font-weight: 600;
    }
    &.large {
      padding: 4px 10px;
      .badge-text{
        font-weight: 600;
        line-height: 20px;
      }
    }
    &.medium {
      padding: 0 6px;
      .badge-text{
        font-weight: 500;
        line-height: 18px;
      }
    }
  }

  .badge-text {
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    line-height: 20px;
  }

  &.cancel {
    &--dark {
      background: #ef3939;
    }
    &--light {
      background: #ffecec;

      .badge-text {
        color: #ef3939;
      }
    }
  }

  &.info {
    &--dark {
      background: #1472ce;
    }

    &--light {
      background: #f1f7fc;

      .badge-text {
        color: #1472ce;
      }
    }
  }

  &.confirm {
    &--dark {
      background: #09C26A;
    }

    &--light {
      background: #f0f9f5;

      .badge-text {
        color: #09C26A;
      }
    }
  }

  &.ing {
    &--dark {
      background: #727272;
    }

    &--light {
      background: #f7f7f7;

      .badge-text {
        color: #727272;
      }
    }
  }

  &.inactive {
    &--dark {
      background: #727272;
    }

    &--light {
      background: #f7f7f7;

      .badge-text {
        color: #727272;
      }
    }
  }

  &.warning {
    &--dark {
      background: #ffcf23;
    }

    &--light {
      background: #fff9e4;

      .badge-text {
        color: #ffcf23;
      }
    }
  }
}

`;
export default Badge;

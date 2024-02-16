import React from "react";
import * as S from "./style";

export const buttonsPagination = (data, pages, setPages) => {
  const buttonCount = Math.min(~~(data?.total_count / 30), 34);
  const buttons = [];

  const visibleButtons = 7;
  const ellipsisStart = <S.EllipsisBtn key="ellipsis-start">...</S.EllipsisBtn>;
  const ellipsisEnd = <S.EllipsisBtn key="ellipsis-end">...</S.EllipsisBtn>;

  if (buttonCount <= visibleButtons) {
    for (let i = 1; i <= buttonCount; i++) {
      buttons.push(
        <S.BtnNumber
          key={i}
          onClick={() => setPages(i)}
          className={pages === i ? "active" : ""}
        >
          {i}
        </S.BtnNumber>,
      );
    }
  } else {
    const firstButton = (
      <S.BtnNumber
        key={1}
        onClick={() => setPages(1)}
        className={pages === 1 ? "active" : ""}
      >
        1
      </S.BtnNumber>
    );
    const lastButton = (
      <S.BtnNumber
        key={buttonCount}
        onClick={() => setPages(buttonCount)}
        className={pages === buttonCount ? "active" : ""}
      >
        {buttonCount}
      </S.BtnNumber>
    );

    buttons.push(firstButton);

    const sideButtons = Math.floor((visibleButtons - 3) / 2);
    let start = pages - sideButtons;
    let end = pages + sideButtons;

    if (start <= 1) {
      start = 2;
      end = start + sideButtons * 2;
    } else if (end >= buttonCount) {
      end = buttonCount - 1;
      start = end - sideButtons * 2;
    }

    if (start > 2) {
      buttons.push(ellipsisStart);
    }

    for (let i = start; i <= end; i++) {
      buttons.push(
        <S.BtnNumber
          key={i}
          onClick={() => setPages(i)}
          className={pages === i ? "active" : ""}
        >
          {i}
        </S.BtnNumber>,
      );
    }

    if (end < buttonCount - 1) {
      buttons.push(ellipsisEnd);
    }

    buttons.push(lastButton);
  }
  return buttons;
};

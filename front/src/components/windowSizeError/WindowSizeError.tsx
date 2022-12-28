import React, { useEffect } from "react";
import * as S from "./WindowSizeErrorStyle";
import * as FixModal from "../../utils/FixModalScroll";
import windowSizeErrImg from "../../assets/img/window_size_err_img.png";

const WindowSizeError = () => {
  useEffect(() => {
    window.innerWidth < 1200 && FixModal.disableScroll();
  }, []);

  const windowWidthSize = () => {
    window.innerWidth < 1200
      ? FixModal.disableScroll()
      : FixModal.enableScroll();
  };

  window.onresize = windowWidthSize;

  return (
    <S.WindowSizeErrorContent>
      <div className="inner">
        <img src={windowSizeErrImg} alt="" />
        <p>
          본 서비스는 <span>1200px이상</span>
          <br />
          <span>데스크톱, 노트북 환경</span> 에서 사용을 권장드립니다.
        </p>
      </div>
    </S.WindowSizeErrorContent>
  );
};

export default WindowSizeError;

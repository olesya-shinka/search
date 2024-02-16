import { Link } from "react-router-dom";
import * as S from "./style";

export const NotFound = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Message>404</S.Message>
        <S.MessageText>Страница не найдена</S.MessageText>
        <Link to={`/`}>
          <button>На главную</button>
        </Link>
      </S.Container>
    </S.Wrapper>
  );
};

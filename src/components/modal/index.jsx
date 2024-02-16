import { useGetUserDataQuery } from "../../api/api";
import * as S from "./style";

export const Modal = ({ onClose, user, repos }) => {
  const username = user.login;
  const { data } = useGetUserDataQuery(username);
  const hrefUrl = data?.html_url;

  if (!data) return <S.Loading>Loading</S.Loading>;

  return (
    <S.ModalAbove>
      <S.ModalContent>
        <S.ModalContentName>
          <S.Username> {user?.login}</S.Username>
        </S.ModalContentName>
        <S.ModalClose onClick={onClose}>
          <S.ModalCloseLine />
        </S.ModalClose>
        <a href={hrefUrl} target="_blank" rel="noreferrer">
          <S.UserAvatar src={user?.avatar_url} />
        </a>
        <S.ModalDataUser>
          <p>имя: {data?.name ? data.name : "не указано"}</p>
          <p>подписчиков: {data?.followers}</p>
          <p>подписок: {data?.following}</p>
          <p>репозиториев: {repos.length} </p>
          <S.Sity>
            Место нахождения: {data?.location ? data.location : "не указано"}
          </S.Sity>
        </S.ModalDataUser>

        <S.Button onClick={onClose}>
          <S.Url href={hrefUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </S.Url>
        </S.Button>
      </S.ModalContent>
    </S.ModalAbove>
  );
};

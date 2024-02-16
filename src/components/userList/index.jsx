import { useState } from "react";
import * as S from "./style";
import { useSelector } from "react-redux";
import { Modal } from "../modal/index";
import { getUsersRepos } from "../../api/api";

export const UserList = ({ userNameInput }) => {
  const users = useSelector((state) => state.users.users);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [repos, setRepos] = useState([]);

  if (!users || !users.items) return "";
  if (users.total_count === 0) return <>Пользователя с таким именем нет</>;

  const openModal = async (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
    const reposUser = await getUsersRepos(userNameInput);
    console.log(reposUser);
    setRepos(reposUser);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  return (
    <>
      {users.items.map((user, index) => (
        <S.UserList key={index}>
          <S.UserListItem onClick={() => openModal(user)}>
            <S.UserListImage>
              <S.UserListImg src={user.avatar_url} alt="picture" />
            </S.UserListImage>
            <S.UserListContent>
              <S.UserListName>{user.login}</S.UserListName>
            </S.UserListContent>
          </S.UserListItem>
        </S.UserList>
      ))}
      {isModalOpen && selectedUser && (
        <Modal user={selectedUser} onClose={closeModal} repos={repos} />
      )}
    </>
  );
};

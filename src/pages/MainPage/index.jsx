/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useGetUsersIncreaseQuery, useGetUsersInfoQuery } from "../../api/api";
import { UserList } from "../../components/userList/index";
import * as S from "./style";
import { useDispatch } from "react-redux";
import {
  searchingUser,
  updatingUserNameInput,
} from "../../store/slice/userSlice";
import { useSelector } from "react-redux";
import { buttonsPagination } from "../../components/pagination/index";

export const MainPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const userNameInput = useSelector((state) => state.users.userNameInput);
  const [username, setUsername] = useState(userNameInput || "");
  const [pages, setPages] = useState(1);
  const [pass, setPass] = useState(false);
  const setData = { username, pages };
  const [isIncrease, setIncrease] = useState(true);
  const [activeButton, setActiveButton] = useState("increasing");
  const [message, setMessage] = useState(null);

  const showMessage = (text, duration = 2000) => {
    setMessage(text);
    setTimeout(() => {
      setMessage(null);
    }, duration);
  };

  useEffect(() => {
    dispatch(updatingUserNameInput(userNameInput));
  }, [dispatch, userNameInput]);

  const { data, isLoading, error } = isIncrease
    ? useGetUsersIncreaseQuery(setData, {
        skip: !pass,
        onSuccess: () => {
          setPass(false);
        },
      })
    : useGetUsersInfoQuery(setData, {
        skip: !pass,
        onSuccess: () => {
          setPass(false);
        },
      });

  useEffect(() => {
    if (data && !isLoading) {
      dispatch(searchingUser(data));
    }
  }, [data, isLoading]);

  useEffect(() => {
    if (error) {
      if (error.status === 403) {
        showMessage("Произошла ошибка. Попробуйте позже.");
      } else {
        showMessage("Произошла ошибка. Попробуйте позже.");
      }
    }
  }, [error]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUsername(userNameInput);
    dispatch(updatingUserNameInput(userNameInput));
    setPass(true);
  };

  useEffect(() => {
    if (data && !isLoading) {
      dispatch(searchingUser(data));
    }
  }, [data, isLoading]);

  const handleInputChange = (event) => {
    dispatch(updatingUserNameInput(event.target.value));
  };

  const handleIncrease = (e) => {
    e.preventDefault();
    setIncrease(true);
    setActiveButton("increasing");
    setPass(true);
  };

  const handleIncreasingBtn = (e) => {
    e.preventDefault();
    setIncrease(false);
    setActiveButton("decreasing");
    setPass(true);
  };

  return (
    <S.Wrapper>
      <img
        style={{ width: 50, height: 50, marginTop: 30 }}
        src="25231.png"
        alt="icongit"
      />
      <S.Form id="wrapper">
        <S.Input
          type="search"
          value={userNameInput}
          onChange={handleInputChange}
          placeholder="Введите логин пользователя"
        />
        <S.Button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? "Ищем" : "Искать"}
        </S.Button>
        <br />
      </S.Form>

      <S.ButtonBox>
        <p>сортировать по:</p>
        <S.ButtonsRegulate
          onClick={handleIncrease}
          className={activeButton === "increasing" ? "active" : ""}
          data-isactive={activeButton === "increasing"}
        >
          по возрастанию
        </S.ButtonsRegulate>

        <S.ButtonsRegulate
          onClick={handleIncreasingBtn}
          className={activeButton === "decreasing" ? "active" : ""}
          data-isactive={activeButton === "decreasing"}
        >
          по убыванию
        </S.ButtonsRegulate>
      </S.ButtonBox>
      <S.PaginButton> {buttonsPagination(data, pages, setPages)}</S.PaginButton>
      {message && <S.Message>{message}</S.Message>}
      <S.UserListContent>
        <UserList users={users} userNameInput={userNameInput} />
      </S.UserListContent>
      <S.PaginButton> {buttonsPagination(data, pages, setPages)}</S.PaginButton>
    </S.Wrapper>
  );
};

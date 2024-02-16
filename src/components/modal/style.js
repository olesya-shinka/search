import { styled } from "styled-components";

export const Loading = styled.p`
  align-items: center;
  font-size: 30px;
  color: #092a7f;;
  position: absolute;
`;

const modileWidth = "600px";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: relative;
  padding: 50px;
  width: 400px;
  height: auto;
  border-radius: 10px;
  background-color: #d6d6d6;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Username = styled.h2`
  text-align: center;
`;
export const Url = styled.a`
  font-size: 22px;
  color: white;
`;
export const UserAvatar = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 8px;
  border-radius: 50%;
`;

export const ModalDataUser = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
export const ModalContentName = styled.div`
  margin-bottom: 10px;
`;
export const ModalAbove = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: #6a8ade;
  border-radius: 6px;
  color: #fff;
  border: 0;
  font-size: 20px;
  font-style: normal;
`;
export const Sity = styled.p`
  margin-bottom: 20px;
`;
export const ModalClose = styled.div`
  width: 23px;
  height: 23px;
  position: absolute;
  top: 25px; /* расстояние от верхнего края */
  right: 25px; /* расстояние от правого края */

  z-index: 3;
  cursor: pointer;

  @media screen and (max-width: ${modileWidth}) {
    margin-top: 10px;
  }
`;

export const ModalCloseLine = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: black;
    top: 47%;
    right: -4px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  &::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: black;
    top: 47%;
    right: -4px;
    webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  &:hover {
    background-color: #0080c1;
  }
`;

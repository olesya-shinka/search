import styled from "styled-components";

const modileWidth = "620px";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${modileWidth}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
  margin-left: 20px;
  transition: all 500ms ease;
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: ${modileWidth}) {
    margin-top: 20px;
  }
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 6px;
  padding-left: 10px;
`;

export const ButtonBox = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;

  @media screen and (max-width: ${modileWidth}) {
    margin-top: 10px;
    flex-direction: column;
    gap: 15px;
  }
`;

export const ButtonsRegulate = styled.button`
  width: 130px;
  height: 30px;
  background-color: #6a8ade;
  border-radius: 6px;
  color: #fff;
  border: 0;
  font-size: 14px;
  font-style: normal;
  &.active {
    background-color: #6a8ade;
  }
  &:hover {
    transform: scale(1.05);
    transition: all 500ms ease;
  }
`;

export const PaginButton = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
  gap: 5px;
`;

export const Message = styled.div`
  display: flex;
  color: red;
  color: #7f00ff;
  font-size: 18px;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
`;

export const UserListContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100vh;
  width: 100%;
  grid-gap: 40px 26px;
  justify-content: center;
  padding-bottom: 40px;

  &::-webkit-scrollbar {
    width: 0px;
    background-color: #009ee4;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0080c1;
    border-radius: 3px;
  }
`;

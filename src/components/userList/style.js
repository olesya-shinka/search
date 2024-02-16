import styled from "styled-components";

const modileWidth = "620px";

export const UserList = styled.div`
  margin: 0;
  width: 150px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.05);
    transition: all 500ms ease;
  }
  @media screen and (max-width: ${modileWidth}) {
    margin: 0;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;
export const UserListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${modileWidth}) {
    display: flex;
    flex-direction: column;
  }
`;
export const UserListImage = styled.div`
  background-color: #f0f0f0;

  @media screen and (max-width: ${modileWidth}) {
    background-color: #d9d9d9;
  }
`;
export const UserListImg = styled.img`
  width: 150px;
  height: 150px;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 50%;

  @media screen and (max-width: ${modileWidth}) {
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;

export const UserListContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
`;

export const UserListName = styled.p`
  overflow-wrap: break-word;
  word-wrap: break-word;
  text-wrap: wrap;
  width: 130px;
  text-align: center;
  margin-bottom: 10px;
`;

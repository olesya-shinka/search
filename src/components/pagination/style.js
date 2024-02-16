import { styled } from "styled-components";

export const BtnNumber = styled.button`
  background-color: #c0caf1;
  height: 25px;
  width: 25px;
  border-radius: 4px;
  font-size: 15px;
  &.active {
    background-color: #6a8ade;
  }
  &:hover {
    transform: scale(1.05);
    transition: all 500ms ease;
  }
`;

export const EllipsisBtn = styled.div`
  font-size: 30px;
  display: flex;
  align-items: flex-end;
`;

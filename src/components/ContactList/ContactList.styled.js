import styled, { keyframes } from 'styled-components';

export const List = styled.ul`
  padding-left: 30px;
`;

export const Item = styled.li`
  width: 500px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 17px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Text = styled.p`
  display: inline-block;
  min-width: 300px;
`;

export const Button = styled.button`
  width: 70px;
  padding-top: 3px;
  padding-bottom: 3px;
  margin-left: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.5s ease;

  &:hover,
  &:focus {
    background-color: #c4c4c4;
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #333;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-bottom: 20px;
  margin-left: 70px;

  animation: ${spin} 1s ease-in-out infinite;
`;

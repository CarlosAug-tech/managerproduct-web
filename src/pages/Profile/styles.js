import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 64px 10px 0;
`;

export const Content = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    > input {
      height: 44px;
      margin-bottom: 20px;
      padding: 0 10px;
      border: 0;
      border-radius: 4px;
      color: #fff;
      background: rgba(0, 0, 0, 0.1);

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    hr {
      width: 100%;
      height: 1px;
      margin-bottom: 20px;
      border: 0;
      background: rgba(255, 255, 255, 0.2);
    }

    button {
      height: 44px;
      margin-bottom: 5px;
      border: 0;
      border-radius: 4px;
      color: #fff;
      background: #054f77;
      transition: background 0.4s;

      &:hover {
        background: ${darken(0.03, '#054f77')};
      }

      &:nth-of-type(2) {
        background: #ff4c4c;

        &:hover {
          background: ${darken(0.03, '#ff4c4c')};
        }
      }
    }

    label {
      cursor: pointer;
      text-align: center;
      margin-bottom: 20px;

      &:hover {
        opacity: 0.7;
      }

      img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 3px solid rgba(255, 255, 255, 0.3);
        background: #eee;
      }

      > input {
        display: none;
      }
    }
  }
`;

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

    > input,
    > textarea {
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

    > textarea {
      height: unset;
      padding: 10px;
      resize: none;
      border-radius: 4px;
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

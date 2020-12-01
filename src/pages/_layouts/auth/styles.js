import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #212529;
`;

export const Content = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 40px 20px;
  text-align: center;
  border-radius: 4px;
  background: #f8f9fa;

  > img {
    height: 150px;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;

    input {
      height: 44px;
      padding: 0 10px;
      margin-bottom: 20px;
      border: 0;
      border-radius: 4px;
      color: #fff;
      background: #6c757d;

      &::placeholder {
        color: #eee;
      }
    }

    button {
      height: 44px;
      margin-bottom: 10px;
      border: 0;
      border-radius: 4px;
      color: #fff;
      background: #054f77;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#054f77')};
      }
    }

    a {
      color: #054f77;
      transition: color 0.2s;

      &:hover {
        color: ${lighten(0.3, '#054f77')};
      }
    }
  }
`;

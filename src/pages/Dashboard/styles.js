import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 64px 10px;
  position: relative;
`;

export const Content = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 50px auto 0;
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media (max-width: 850px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  li {
    max-width: 300px;
    width: 100%;
    margin: 0 auto;
    border-radius: 4px;
    border: 1px solid #eee;
    color: #333;
    background: #fff;

    img {
      width: 100%;
    }

    > div {
      margin: 10px;

      h3 {
        text-align: center;
      }

      p {
        margin: 10px 0;
      }

      &:nth-of-type(2) {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      button {
        display: flex;
        align-items: center;
        padding: 5px 8px;
        margin: 0 5px;
        border: 2px solid #054f77;
        border-radius: 4px;
        color: #054f77;
        background: none;
        transition: all 0.4s;

        &:hover {
          color: #fff;
          background: #054f77;

          > svg {
            color: #fff !important;
          }

          > a {
            color: #fff;
          }
        }

        > a {
          color: #054f77;
        }
      }
    }
  }
`;

export const ConfirmDel = styled.div`
  z-index: 2000;
  display: ${(props) => (props.modal ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);

`;

export const ModalDeleteContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  padding: 10px;
  position: relative;
  border-radius: 4px;
  background: #fff;

  > h2 {
    text-align: center;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0;

    button {
      width: 80px;
      padding: 5px 10px;
      margin: 0 5px;
      border: 2px solid #212529;
      border-radius: 4px;
      background: transparent;
      transition: all .4s;

      &:hover {
        color: #fff;
        background-color: #212529;
      }
    }
  }
  
`

export const ButtonCloseModal = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  top: -10px;
  right: -10px;
  position: absolute;
  border: 0;
  background: transparent;
`
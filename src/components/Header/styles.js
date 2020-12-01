import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  z-index: 1000;
  width: 100%;
  padding: 0 10px;
  position: fixed;
  background: #fff;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  height: 64px;
  margin: 0 auto;



  nav {
    display: flex;
    align-items: center;

    a {
      > img {
        height: 70px;
      }
    }

    ul {
      display: flex;
      align-items: center;
      margin-left: 15px;
      padding-left: 15px;
      border-left: 1px solid #eee;

      @media (max-width: 850px) {
        display: none;
      }

      li {
        a {
          font-weight: bold;
          color: #054f77;
          transition: color 0.4s;

          &:hover {
            color: ${lighten(0.1, '#054f77')};
          }

        
        }

        & + li {
          margin-left: 8px;
          padding-left: 8px;
          border-left: 2px solid #eee;
        }
      }
    }
  }

  aside {
    > div {
      a {
        color: #333;

        &:hover {
          color: #999;
        }
      }
    }

    button {
      display: none;
      border: 0;
      background: none;

      @media (max-width: 850px) {
        display: block;
      }

      > div {
        display: inline-block;
        width: 24px;
        height: 20px;
        position: relative;

        > div {
          width: 100%;
          height: 3px;
          margin: 6px auto;
          border-radius: 20px;
          background: ${(props) => (props.visible ? 'none' : '#7159c1')};

          &::after,
          &::before {
            content: '';
            display: block;
            width: 100%;
            height: 3px;
            margin: 6px auto;
            position: absolute;
            border-radius: 20px;
            background: #7159c1;
            transition: all 0.4s;
          }

          &::before {
            top: -7px;
            transform: ${(props) =>
              props.visible ? 'rotate(45deg) translate(7px, 7px)' : 'unset'};
          }

          &::after {
            top: 7px;
            transform: ${(props) =>
              props.visible ? 'rotate(-45deg) translate(3px, -3px)' : 'unset'};
          }
        }
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 850px) {
    display: none;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    padding-right: 10px;
    border-right: 1px solid #eee;
    text-align: right;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #dbdbdb;
  }
`;

export const Sidebar = styled.div`
  z-index: 1;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  transform: ${(props) =>
    props.visible ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.4s;

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 250px;
    height: 100vh;
    margin-top: 64px;
    top: 0;
    right: 0;
    position: absolute;
    overflow: auto;
    border-top: 1px solid #eee;
    background: #fff;

    img {
      width: 50px;
      height: 50px;
      margin: 10px 0;
      border-radius: 50%;
    }

    > a {
      color: #999;
      margin-bottom: 10px;
    }
  }
`;

export const SideItems = styled.ul`
  width: 100%;
  border-top: 1px solid #eee;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;

    &:last-child {
      border-bottom: 1px solid #eee;
    }

    & + li {
      border-top: 1px solid #eee;
    }

    > a {
      font-size: 16px;
      font-weight: bold;
      color: #444;
    }
  }
`;

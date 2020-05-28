import styled from 'styled-components'

const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #aaa;
    font-size: 16px;
    text-decoration: none;
    align-self: flex-end;
  }

  img {
    width: 150px;
    border: 1px solid #eee;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    font-size: 14px;
    margin-top: 5px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`

const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #0B0A0D;
          margin-right: 10px;
          transition: color 400ms;

          &:hover {
            color: #666;
          }
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-right: 5px;
          display: inline-block;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`

export { Loading, Owner, IssueList }

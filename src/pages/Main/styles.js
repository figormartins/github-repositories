import styled, { keyframes, css } from 'styled-components'

const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`

const rotate = keyframes`
  from {
    tranform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const SubmitButton = styled.button.attrs(({ loading }) => ({
  type: 'submit',
  disabled: loading,
}))`
  background: #0B0A0D;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  svg {
    padding: 0;
    margin: 0;

    ${({ loading }) =>
    loading &&
    css`
      animation: ${rotate} 2s linear infinite;
    `}
  }
`

const List = styled.ul`
  list-style: none;
  margin-top: 10px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #0B0A0D;
      text-decoration: none;
    }
  }
`

export { Form, SubmitButton, List }

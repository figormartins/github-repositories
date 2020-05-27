import styled from 'styled-components'

const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-content: center;
  }

  svg {
    margin-right: 10px;
  }
`

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

const SubmitButton = styled.button.attrs({
  type: 'submit'
})`
  background: #0B0A0D;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  svg {
    padding: 0;
    margin: 0;
  }
`

export { Container, Form, SubmitButton }

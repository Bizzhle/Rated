import styled from "@emotion/styled";

export const Main = styled.div`
  min-height: 100vh;
`;

export const MainPadding = styled.div`
  padding: 115px 20px;

  @media screen and (min-width: 600px) {
    max-width: 56rem;
    margin: 0 auto;
  }
`;

export const CardInfo = styled.div`
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  background-color: #dce0fa;
  color: #0a0213;
  h3,
  p {
    margin: 0;
    padding: 4px;
    font-size: 15px;
  }

  span {
    p {
      padding-right: 10px;
    }
  }
`;

export const FormPadding = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #bde0e7;
  padding: 101px 10px 10px 10px;

  min-height: 100vh;
`;

export const LoginForm = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  padding: 30px 30px;

  label {
    font-weight: 700;
    font-size: 1.2rem;
  }

  h1,
  h2 {
    font-size: 25px;
    font-family: "Open Sans Condensed", sans-serif;
    margin: 0px 0 30px 0;
  }

  p {
    padding: 0;
    color: red;
    /* margin-bottom: 10px; */
    font-size: 13px;
    font-family: "Open Sans Condensed", sans-serif;
  }

  input:first-of-type,
  textarea,
  select {
    font: sans-serif;
    padding: 7px 20px;
    font-size: 1.2rem;
    width: 100%;

    border: 1px solid #999;
    border-radius: 5px;
    outline: none;
  }

  div {
    margin-bottom: 20px;
  }

  div:last-of-type {
    margin-bottom: 5px;
  }

  button[type="submit"] {
    background-color: #fff;
    letter-spacing: 1px;
    color: #429ecb;
    font-weight: 700;

    cursor: pointer;
    padding: 12px 5px;
    margin: 12px 0;
    font: 1.3em sans-serif;
    width: 100%;
    border: 1px solid #429ecb;

    :hover {
      background-color: #429ecb;
      color: #fff;
    }
  }

  span {
    color: #429ecb;
  }

  @media screen and (max-width: 415px) {
    width: 350px;
    padding: 20px 20px;

    h1,
    h2 {
      margin: 0px 0 20px 0;
    }

    input,
    textarea,
    select {
      font: sans-serif;
      padding: 10px 10px;
      font-size: 1rem;
      width: 100%;

      border: 1px solid #999;
      border-radius: 5px;
      outline: none;
      margin-bottom: 10px;
    }
  }
`;

export const List = styled.div`
  padding: 5px 0;

  li {
    list-style-type: none;
    margin: 10px 0;

    /* box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); */
  }

  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`;

export const ExtendList = styled(List)`
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`;

export const Button = styled.div`
  background-color: #429ecb;
  color: white;
  letter-spacing: 1px;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 12px 5px;
  margin: 12px 0;
  font: 1.1em sans-serif;
  width: 100%;
  text-align: center;

  :hover {
    opacity: 0.5;
    color: #fff;
  }
`;

export const CardDiv = styled.div`
  background-color: #f7f7f7;
  font-family: Open Sans Condensed;
  font-weight: light;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #aeaeae;
  padding: 5px 10px;
  margin-bottom: 10px;
  :hover,
  :focus,
  :active {
    border: 2px solid #429ecb;
  }

  p {
    /* margin: 3px 0; */
    display: grid;
    grid-template-columns: 1fr 3fr;

    span {
      font-family: Open Sans Condensed;
      font-weight: Bold;
    }
  }

  @media screen and (max-width: 415px) {
    font-size: 15px;
  }
`;

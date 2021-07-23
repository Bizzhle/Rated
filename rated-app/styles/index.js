import styled from "@emotion/styled";

export const Main = styled.div`
  margin: 0 auto;
  padding: 10px 10px;
  margin-top: 100px;

  @media screen and (min-width: 600px) {
    max-width: 56rem;
    margin-top: 100px;
  }
`;

export const MainBody = styled.div`
  width: 100vw;
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

export const Form = styled.div`
  border-radius: 2px;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  /* width: 100%; */
  max-width: 28rem;
  margin: 10px auto;
  padding: 20px 10px;
  /* background-color: #d1d5eb; */

  label {
    font-weight: 700;
    font-size: 1.2rem;
  }

  input,
  textarea,
  select {
    font: sans-serif;
    font-size: 1.3rem;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #999;
    outline: none;
  }

  input,
  select {
    padding: 12px 10px;
    /* margin: 5px 0; */
    font-size: 1.3rem;
  }

  textarea {
    height: 60px;
    margin: 10px 0;
    padding: 5px;
  }

  select {
    padding: 8px 5px;
    /* margin: 8px 0; */
  }
  /* 
  & div {
    margin: 10px 0;
  } */
  input[type="submit"] {
    background-color: #006fff;
    color: white;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button[type="submit"] {
    background-color: #429ecb;
    color: white;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 12px 5px;
    margin: 12px 0;
    font: 1em sans-serif;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #429ecb;
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
  font-size: 18px;
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
`;

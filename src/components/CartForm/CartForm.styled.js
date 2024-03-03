import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  width: 100%;
`;

export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 290px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Input = styled.input`
  border: 1px solid teal;
  border-radius: 12px;

  margin-top: 8px;
  padding: 6px 12px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`;

export const Button = styled.button`
  background-color: white;

  border: 1px solid teal;
  border-radius: 12px;

  padding: 6px 24px;

  transition: color background-color 0.3 ease;

  &:hover,
  &:focus {
    color: white;
    background-color: teal;
  }
`;

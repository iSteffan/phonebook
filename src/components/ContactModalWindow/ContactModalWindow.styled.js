import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikInput,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const ErrorMessageName = styled(FormikErrorMessage)`
  position: absolute;
  top: 90px;
  font-size: 14px;
  color: red;
`;

export const ErrorMessageNumber = styled(FormikErrorMessage)`
  position: absolute;
  top: 184px;
  font-size: 14px;
  color: red;
`;

export const Form = styled(FormikForm)`
  position: relative;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 40px;

  background-color: white;
  border: 1px solid gray;
  border-radius: 12px;
`;

export const Field = styled(FormikInput)`
  box-sizing: border-box;

  padding: 5px 20px;
  font-size: 20px;
  line-height: 1.5;

  border-radius: 12px;
`;

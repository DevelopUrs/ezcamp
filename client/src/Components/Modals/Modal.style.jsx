import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0,0,0,0.3);
`;

export const ModalBox = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 75%;
  width: 80%;
  overflow-y: auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.25);
  z-index: 101;
  padding: 40px;
  text-align: center;
`;

export const CloseIcon = styled.div`
  text-align: right;
`;

export const THead = styled.div`
  text-align: center;
  margin-bottom: 10px;
  font-size: clamp(1rem, 5vw, 2rem);
  font-weight: 900;
  letter-spacing: .4rem;
  line-height: 1.3;
`;

export const BigText = styled.h1`
  text-align: center;
  margin-bottom: 0;
  font-weight: 900;
  letter-spacing: .5rem;
  line-height: 1.3;
  color: #FBC740;
`;

export const Select = styled.select`
  display: inline-block;
  width: 20%;
  margin: 15px;
  margin-left: 10px;
  border-radius: 0.12em;
  font-weight: 300;
  transition: all 0.2s;
  max-height:250px;
  overflow: auto;

  @media only screen and (max-width:1000px) {
    margin: 10px;
    width: 40%;
  }

  @media only screen and (max-width:375px) {
    margin: 10px;
    width: 75%;
  }
`;

export const SelectContainer = styled.div`
  text-align: center;
`;

export const Radio = styled.input`
  margin-left: 10px;
`;

export const RadioContainer = styled.div`
  margin-top: 25px;
  text-align: center;
`;

export const Checkbox = styled.input`

`;

export const CheckboxContainer = styled.div`
  margin-top: 25px;
  margin-bottom: 30px;
  text-align: center;
`;

export const Label = styled.label`
  font-size: clamp(1rem, 2vw, 2rem);
  font-weight: 500;
  letter-spacing: .2rem;
  line-height: 1.3;
  margin-left: 0;
`;

export const Form = styled.form`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Text = styled.input`
  margin-top: 10px;
  margin-bottom: 0px;
`;
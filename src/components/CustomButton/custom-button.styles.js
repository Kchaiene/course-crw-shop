import styled, {css} from 'styled-components'



const invertedCustomType = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover{
      background-color: black;
      color:white;
      border:none;
    }
`;
const googleCustomType = css`
    background-color: #4285f4;
    color: white;

    &:hover{
      background-color: #1131f7;
      border:none;
    }
`;

const typeSelector = (props) =>{
    switch(props.customType) {
        case 'inverted':
            return invertedCustomType;
        case 'google':
            return googleCustomType;

        default:
            return '';
    }
};


export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 5px 0 5px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  
  ${typeSelector}
  
`;

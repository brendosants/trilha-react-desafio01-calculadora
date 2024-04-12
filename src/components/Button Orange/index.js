import { ButtonZeroContainer } from './styles';

const ButtonZero = ({label, onClick}) =>{
    return (
      <ButtonZeroContainer onClick={onClick}>
        {label}
      </ButtonZeroContainer>
    );
  }
  
  export default ButtonZero;
  
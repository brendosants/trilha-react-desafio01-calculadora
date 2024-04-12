import { ButtonGrayContainer } from './styles';

const ButtonGray = ({label, onClick}) =>{
    return (
      <ButtonGrayContainer onClick={onClick}>
        {label}
      </ButtonGrayContainer>
    );
  }
  
  export default ButtonGray;
  
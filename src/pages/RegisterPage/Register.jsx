
import styled from 'styled-components';
import Button from './Button';
import Icon from './Icon';
import Input from './Inputs';
import {FaFacebookF, FaGoogle, FaInstagram, FaTwitter} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
     <>
      <div className='flex justify-center items-center'>
          <MainContainer className='mt-20'>
        <WelcomeText className='text-[#993922] text-3xl font-extrabold'>Register </WelcomeText>
   
        <InputContainer>
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </InputContainer>
        <ButtonContainer>
          <Button content="Register" />
        </ButtonContainer>
        <LoginWith>OR Register WITH</LoginWith>
        <HorizontalRule />
        <IconsContainer>
          <Icon color= "#F4B422">
            <FaGoogle />
          </Icon>
          <Icon color= "blue">
            <FaFacebookF />
          </Icon>
          <Icon color="red">
            <FaInstagram />
          </Icon>
          <Icon color="green">
            <FaTwitter />
          </Icon>
        </IconsContainer>
        <ForgotPassword className='text-black font-bold'>Do not have an account?<Link className='text-blue-500  font-bold text-lg' to={"/login"}>Login</Link></ForgotPassword>

       
      </MainContainer>
     
      </div>
       <div className='flex justify-center items-end'> <Link className='text-white bg-blue-500 text-xl font-bold btn btn-xl mt-20' to={'/'}>  Register later </Link></div>
     </>
    );

   
};

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  /* background: rgba(255, 255, 255, 0.15); */
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export default Register;
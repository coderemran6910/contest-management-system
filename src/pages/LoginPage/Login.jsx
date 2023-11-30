import styled from "styled-components";
import Button from "./Button";
import Icon from "./Icon";
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login = () => {
  const axiosPublic = useAxiosPublic();
  const { googleSignIn, signIn } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signIn(data.email, data.password).then((result) => {
      toast.success("Logged in successfully");
      console.log(result.user);
      navigate("/");
    });
  };

  const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(result =>{
        console.log(result.user);
        toast.success('SIgn in with google successfully')
        navigate('/')
        const userInfo = {
            email: result.user?.email,
            name: result.user?.displayName,
            image: result.user?.photoURL,
            role: 'user'
        }
        console.log(userInfo);

        axiosPublic.post('/users', userInfo)
        .then(() =>{
            navigate('/');
        })
    })
}

  return (
    <>
      <div className="flex justify-center items-center">
        <MainContainer className="mt-20 p-10">
          <WelcomeText className="text-[#993922] text-3xl font-extrabold">
            Login{" "}
          </WelcomeText>

          <InputContainer>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
              <input
                style={{ boxShadow: "9px 6px 10px 1px #000000" }}
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-full  bg-slate-100 text-black  shadow-xl  border-2  "
                {...register("email", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600">Email is required</span>
              )}

              <input
                style={{ boxShadow: "9px 6px 10px 1px #000000" }}
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-full  bg-slate-100 text-black  shadow-xl  border-2  "
                {...register("password", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600">password is required</span>
              )}

              <ButtonContainer>
                <Button content="Login" />
              </ButtonContainer>
            </form>
          </InputContainer>

          <LoginWith>OR LOGIN WITH</LoginWith>
          <HorizontalRule />
          <IconsContainer>
            <div onClick={handleGoogleSignIn}>
              <Icon color="#F4B422">
                <FaGoogle />
              </Icon>
            </div>
            <Icon color="blue">
              <FaFacebookF />
            </Icon>
            <Icon color="red">
              <FaInstagram />
            </Icon>
            <Icon color="green">
              <FaTwitter />
            </Icon>
          </IconsContainer>
          <ForgotPassword className="text-black font-bold">
            Do not have an account?
            <Link className="text-blue-500  font-bold text-lg" to={"/register"}>
              Register
            </Link>
          </ForgotPassword>
        </MainContainer>
      </div>
      <div className="flex justify-center items-end">
        {" "}
        <Link
          className="text-white bg-blue-500 text-xl font-bold btn btn-xl mt-20"
          to={"/"}
        >
          {" "}
          login later{" "}
        </Link>
      </div>
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
  padding: 1rem 2rem;
  /* letter-spacing: 0.4rem; */
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
  height: 50%;
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
  color: #000000;
  font-weight: 500;
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

export default Login;

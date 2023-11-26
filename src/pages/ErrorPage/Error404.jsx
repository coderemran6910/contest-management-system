import error404 from '../../assets/error.json'
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const Error404 = () => {
    return (
        <div className='flex flex-col  justify-center items-center w-10/12 mx-auto'>
            
            <Lottie animationData={error404} loop></Lottie>
            <Link className='btn bg-[#993922] text-white font-bold ' to={'/'} > <span className='text-white'> <FaArrowLeft /> </span>  Back to home </Link>
            
        </div>
    );
};

export default Error404;
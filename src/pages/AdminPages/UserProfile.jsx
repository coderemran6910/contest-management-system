import Lottie from 'lottie-react';
import userAnimation from '../../assets/user.json'
const UserProfile = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-32'>
            <h2 className="text-3xl font-bold text-center">Welcome to User Profile</h2>

            <Lottie
          className="w-72 md:w-96"
          animationData={userAnimation}
          loop={true}
        />
        </div>
    );
};

export default UserProfile;
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import loader from '../assets/loader.lottie';

const Loader = () => {
    return (
        <DotLottieReact
            src={loader}
            loop={true}
            autoplay={true}
            className='size-36 place-self-center items-center'
        />
    );
};

export default Loader;

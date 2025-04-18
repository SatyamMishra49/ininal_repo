import Button from '../components/Button';
import Heading from '../components/Heading';
import Inputbox from '../components/InputBox';

export default function Signin() {
    return (
        <div className="bg-white h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <div className="rounded-lg bg-white w-[460px] p-6 shadow-xl">
                    <div className="flex justify-center mb-4">
                        <Heading />
                    </div>
                    <div className="font-bold text-purple-800 text-xl">
                        Welcome Back
                    </div>
                    <div className="text-gray-700">Login to continue</div>
                    <div className="w-16 h-2 bg-purple-800 mt-2 mb-2"></div>
                    <Inputbox label={'Email'} placeholder={''} />
                    <Inputbox label={'Password'} placeholder={''} />
                    <div className="pt-2.5">
                        <Button text={'Login'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

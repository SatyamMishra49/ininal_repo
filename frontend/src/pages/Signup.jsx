import Button from '../components/Button';
import Heading from '../components/Heading';
import Inputbox from '../components/InputBox';

export default function Signup() {
    return (
        <div className="bg-amber-50 h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <div className="rounded-lg bg-white w-96 md:w-[400px] p-4 shadow-xl">
                    <div className="flex justify-center mb-4">
                        <Heading />
                    </div>
                    <Inputbox />
                    <Inputbox />
                    <div className="pt-1.5">
                        <Button text={'SignIn'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

import Button from '../components/Button';
import Heading from '../components/Heading';
import Inputbox from '../components/InputBox';

export default function Transfer() {
    return (
        <div className="bg-white h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <div className="rounded-lg bg-white w-[460px] p-6 shadow-xl">
                    <div className="flex justify-center mb-4">
                        <Heading />
                    </div>
                    <div className="flex items-center font-bold text-purple-800 text-xl gap-2">
                        Transfer Money
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="size-6"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="">
                        <Inputbox
                            label={'Amount'}
                            placeholder={'Enter your amount'}
                        />
                    </div>
                    <div className="">
                        <Button text={'Send Money'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

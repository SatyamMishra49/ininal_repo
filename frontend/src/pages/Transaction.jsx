import Inputbox from '../components/InputBox';

export default function Transfer() {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center rounded-lg border shadow-xl">
                <div className="m-2 p-2 text-center">Transfer Money</div>
                <div>
                    <Inputbox />
                </div>
            </div>
        </div>
    );
}

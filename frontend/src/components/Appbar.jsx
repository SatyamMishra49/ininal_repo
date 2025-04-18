import Logo from '../assets/PhonePe.svg';

export default function Appbar() {
    return (
        <div className="shadow flex justify-between h-16">
            <div className="w-[175px] flex justify-center pl-1">
                <img src={Logo} alt="PhonePe_Logo"></img>
            </div>
        </div>
    );
}

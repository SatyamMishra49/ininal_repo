import Button from '../components/Button';
import Heading from '../components/Heading';
import Inputbox from '../components/InputBox';

export default function Signin() {
    return (
        <div>
            <div>SignIn Page</div>
            <Heading heading={'SignIn'} />
            <Inputbox label={'Email'} placeholder={'Enter your Email'} />
            <Inputbox label={'Password'} placeholder={'Enter your Password'} />
            <Button />
        </div>
    );
}

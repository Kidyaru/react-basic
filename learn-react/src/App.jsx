import { IconBrandGithub } from '@tabler/icons-react';
import Card from './components/Cardx';
import Button from './components/Button';
import PlaceContentCenter from './components/PlaceContentCenter';
import Input from './components/Input';
import Label from './components/Label';

export default function App() {
    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Sign up for new Account</Card.Title>
                <Card.Body className='bg-black'>
                    <div className='mb-6 '>
                        <Label htmlFor='name' value={'Name'}></Label>
                        <Input name={'nama'} id='name' type='text' autoComplete='name'></Input>
                    </div>
                    <div className='mb-6 '>
                        <Label htmlFor='email' value={'Email'}></Label>
                        <Input name={'email'} type='text' id='email' autoComplete='email'></Input>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Button className={'bg-black'}>
                        <IconBrandGithub />
                        Register
                    </Button>
                </Card.Footer>
            </Card>
        </PlaceContentCenter>
    );
}

import { IconBrandGithub } from '@tabler/icons-react';
import Card from './components/Cardx';
import Button from './components/Button';
import PlaceContentCenter from './components/PlaceContentCenter';
import Input from './components/Input';
import Label from './components/Label';
import { useState } from 'react';

export default function App() {
    const [form, setForm] = useState({
        name: '',
        email: '',
    });

    function submit(e){
        e.preventDefault();
        console.log(form);
    }

    function onChange(e){
        setForm( (form) => ({...form, [e.target.id] : e.target.value}))
    }


    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Sign up for new Account</Card.Title>
                <form onSubmit={submit}>
                    <Card.Body className='bg-black'>
                    <div className='mb-5 border rounded-lg p-5'>
                        <p>Name : {form.name || "-----"} </p>
                        <p>email : {form.email || "-----" }</p>
                    </div>

                    <div className='mb-6 '>
                        <Label htmlFor='name' value={'Name'}></Label>
                        {/* pake function */}
                        <Input
                            onChange={onChange}
                            value={form.name}
                            name={'nama'}
                            id='name'
                            type='text'
                            autoComplete='name'></Input>
                        {/* <Input value={name} onChange={(e) => setForm( {...form, name : e.target.value })} name={'nama'} id='name' type='text' autoComplete='name'></Input> */}
                    </div>
                    <div className='mb-6 '>
                        <Label htmlFor='email' value={'Email'}></Label>
                        <Input
                            onChange={onChange}
                            value={form.email}
                            name={'email'}
                            type='text'
                            id='email'
                            autoComplete='email'></Input>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Button className={'bg-black'}>
                        <IconBrandGithub />
                        Register
                    </Button>
                </Card.Footer>
                </form>
            </Card>
        </PlaceContentCenter>
    );
}

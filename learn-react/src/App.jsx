import { IconBrandFacebook, IconBrandGithub, IconBrandTiktok, IconBrandTwitter } from '@tabler/icons-react';
import clsx from 'clsx';
import { Fragment } from 'react';
import Button from './components/button';

function App() {
    const type = 'submit';
    const onClick = () => console.log('login dengan gaya lain');

    return (
        <div className='bg-slate-900 grid place-content-center min-h-screen'>
            <div className='flex gap-x-2'>
                <Button {...{ type, onClick }}>
                    <IconBrandTiktok />
                    login
                </Button>
                <Button onClick={() => console.log('Aku memencet tombol Register')} type='submit'>
                    <IconBrandFacebook />
                    Register
                </Button>
                <Button className='bg-pink-600' type='button'>
                    <IconBrandTwitter />
                    Login
                </Button>
                <Button className='bg-black'>
                    <IconBrandGithub />
                    Login
                </Button>
            </div>
        </div>
    );
}



export default App;
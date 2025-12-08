import { IconBrandFacebook, IconBrandGithub, IconBrandTiktok, IconBrandTwitter } from '@tabler/icons-react';
import clsx from 'clsx';

export default function App() {
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

function Button(props) {
    const { className = 'bg-blue-600', children, text, type = 'submit' } = props;

    return (
        <button
            {...props}
            type={type}
            className={clsx(
                className,
                '${className} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1  text-white px-4 py-2 rounded flex items-center gap-1',
            )}
        >
            {text || children}
        </button>
    );
}

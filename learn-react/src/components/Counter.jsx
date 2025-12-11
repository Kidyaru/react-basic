import { useState } from 'react';
import Button from './Button';

export default function Counter({ initialValue }) {
    const [counter, setCounter] = useState(initialValue);

    function handleClick() {
        setCounter((x) => {
            console.log(x);
            return x + 1;
        });
    }

    return (
        <div>
            <h1 className='text-5xl font-bold text-center'>{counter}</h1>
            <div className='mt-5 flex gap-5 justify-center'>
                <Button className='bg-amber-600' type='submit' onClick={handleClick}>
                    Count +1
                </Button>
                <Button
                    className='bg-amber-600'
                    type='submit'
                    onClick={() => {
                        handleClick();
                        handleClick();
                        handleClick();
                    }}>
                    Count +3
                </Button>
            </div>
        </div>
    );
}

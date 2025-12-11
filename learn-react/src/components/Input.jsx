import clsx from 'clsx';

export default function Input(props) {
    const { type = 'text', className, ...rest } = props;

    return (
        <input
            {...rest}
            type={type}
            className={clsx(
                className,
                'transition duration-300 w-full  focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm rounded-lg',
            )}
        />
    );
}

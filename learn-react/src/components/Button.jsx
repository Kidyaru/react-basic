import clsx from 'clsx';

function Button(props) {
    const { className = 'bg-blue-600', children, text, type = 'submit', ...rest } = props;

    return (
        <button
            {...rest}
            type={type}
            className={clsx(
                className,
                ' [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1  text-white px-4 py-2 rounded flex items-center gap-1',
            )}>
            {text || children}
        </button>
    );
}



export default Button;

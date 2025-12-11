import clsx from 'clsx';

function Card(card) {
    const { children } = card;
    return <div className={'w-full shadow rounded-lg overflow-hidden bg-white'}>{children}</div>;
}

function Title({ children }) {
    return (
        <div className={'border-b border-slate-50 p-4'}>
            <h1 className='text-xl text-black'>{children}</h1>
        </div>
    );
}

// body overdrive class
function Body(props) {
    const { className = 'bg-white', children, text, ...rest} = props;

    return (
        <div {...rest} className={clsx(className, ' leading-relaxed p-4 text-slate-600')}>
            {text || children}
        </div>
    );
}

// function Body({ children }) {
//     return <div className={'leading-relaxed p-4 text-slate-600'}>{children}</div>;
// }

function Footer({ children }) {
    return <div className={'bg-slate-50 p-4'}>{children}</div>;
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;

function Card(card) {
    const { children } = card;
    return <div className={'w-50 shadow rounded-lg overflow-hidden bg-white'}>{children}</div>;
}

function Title({ children }) {
    return (
        <div className={'border-b border-slate-50 p-4'}>
            <h1 className='text-xl'>{children}</h1>
        </div>
    );
}

function Body({ children }) {
    return <div className={'leading-relaxed p-4'}>{children}</div>;
}

function Footer({ children }) {
    return <div className={'bg-slate-50 p-4'}>{children}</div>;
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;

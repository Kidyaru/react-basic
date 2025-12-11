import clsx from 'clsx';

// export default function Label(props) {
//     const { className = '', children, value, ...rest } = props;

//     return (
//         <label {...rest} className={clsx(className, 'text-slate-600 mb-3 block')}>
//             {value || children}
//         </label>
//     );
// }


export default function Label({value, children, ...props}){
    return (<label className={' text-slate-600 mb-1 block'} {...props}> { value || children}</label>
        

    )}
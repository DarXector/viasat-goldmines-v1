export function Slide ({children}: {children: any}) {
    return (
       <div className='slide'>
           <div className='slide-content'>
            {children}
           </div>
       </div>
    );
};

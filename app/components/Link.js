export default function Link({href, children, className}) 
{
    const classes = `px-5 py-2  border-x border-solid border-y border-white shadow-drop-center hover:text-black hover:bg-first duration-500 ${className || ""}`;
    const spanClasses =`${className || ""}`;
    return (
        <a href={href} className={classes}>
           <span className={spanClasses}>{children}</span>
        </a>
    );
    
}
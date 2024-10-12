
export default function Contact() {
    return (
        <main id="contact" style={{ backgroundImage : `url(/assets/contbg.jpg)`,
        }} className=" w-11/12 bg-center bg-fixed bg-cover bg-hero bg-sec rounded-2xl ">
            <div className="flex flex-col justify-around  items-center  px-8 py-5 text-white  h-screen  ">
             <h2 className="text-5xl mb-5">See yourself through My lens</h2>
             <ul className="h-2/4 flex flex-col items-center">
                <a className="mb-5" href="mailto:hello@reallygreatsite.com" >hello@reallygreatsite.com</a>
                <a className="mb-5" href="http://reallygreatsite.com" >reallygreatsite.com</a>
                <a className="mb-5" href="" ><address>123 Anywhere St., Any City, ST 12345</address></a>
                <a className="mb-5" href="tel:+123-456-7890">+123-456-7890</a>
             </ul>
         </div>
        </main>
    );
    
}
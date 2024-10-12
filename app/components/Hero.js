import Header from "./Header";
import Hpage from "./Hpage";

export default function Hero() {
    return (
        <main style={{ backgroundImage : `url(/assets/herobg.jpg)`,
        }} className= "rounded-2xl flex flex-col px-8 py-5 text-white  h-screen w-11/12 bg-center bg-fixed bg-cover bg-hero bg-sec ">
            <Header />
            <Hpage />
        </main>
    );

}


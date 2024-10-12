import Link from "./Link"
export default function SectionOne() {
    return (
        <main className="h-mid w-11/12 px-8 py-5 flex flex-col items-center ">
        <div className=" w-4/5 bg-sec m-auto p-12 rounded-2xl text-center  ">
            <h2 className="text-3xl mb-5">Get to know me</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas accusantium et odio, possimus tempora, voluptas tempore optio porro numquam ab molestiae asperiores debitis nihil quis, ipsam sunt facere atque doloribus</p>
            <Link href="#" >
              read more
            </Link>
        </div>
        </main>
    )
    
}
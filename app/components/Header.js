import Link from "./Link"
export default function Header() {
    return (
        <main className="flex justify-between">
            <div>
                <span className="text-2xl  ">P&H</span>
            </div>
            <Link href="#contact" >
              work with me
            </Link>
        </main>
    )
    
}
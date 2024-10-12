import Link from "./Link"
export default function Hpage() {
    return (
        <main className="flex flex-col justify-center items-center h-ful">
            <h1 className="text-5xl mb-4 focus-in-contract">Photograper Name</h1>
            <p className="mb-3">Professional Photography portfolio</p>
            <Link href="#work">
              see my work
            </Link>
        </main>
    )
    
}
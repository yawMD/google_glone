import Link from "next/link";
import { CgLayoutGridSmall } from "react-icons/Cg"

export default function HomeHeader(){
    return(
        <header className="flex justify-end">
            <div className="flex  items-center p-5" >
                <Link className="hover:underline mx-2 text-sm" href={"https://mail.google.com"}>
                    Gmail
                </Link>
                <Link className="hover:underline mx-2 text-sm" href={"https://www.google.com.gh/imghp?hl=en&ogbl"}>
                    Images
                </Link>
                <CgLayoutGridSmall className="bg-transparent hover:bg-gray-200 rounded-full text-5xl cursor-pointer p-2 mx-2"/>
                <button className="py-1 px-3 text-sm bg-blue-400 rounded-lg text-white hover:shadow-md">sign in</button>
            </div>
        </header>
    )
}
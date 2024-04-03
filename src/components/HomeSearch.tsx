import {useState} from 'react'
import { SlMagnifier } from "react-icons/Sl";
import {FaMicrophone} from "react-icons/Fa";
import { useRouter } from 'next/navigation';

export default function HomeSearch(){
    const router = useRouter()
    const [input, setInput] = useState("")
    const handleSubmit =(event:React.FormEvent)=>{
        event.preventDefault();
        if(!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`) 
    }
    return (
            <>
               <form onSubmit={handleSubmit} className="flex border items-center rounded-full p-1 w-11/12 md:w-1/3 justify-between hover:shadow-lg my-4">
                <SlMagnifier className="text-sm mx-4"/>
                <input type="text" className=" m-2 w-full outline-none" onChange={(e)=>setInput(e.target.value)}/>
                <FaMicrophone className="mx-4"/>
               </form>
            </>
    )
}
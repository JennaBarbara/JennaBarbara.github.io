import Link from 'next/link'


export default function LinkButton ({href, text}: {href: string, text: string}) {
    

    return (<Link href={href} className="bg-cyan-50/50 hover:bg-cyan-50 focus:outline-offset-2 text-slate-500 font-bold m-2 py-2 px-4 rounded-xl text-2xl w-md md:w-auto md:text-sm" >
    {text}
    </Link>)


}
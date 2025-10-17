import { ReactNode } from 'react'


export default function Card (  {children, title}:{children?: ReactNode,title?: string} ) {


return (

      <div className="bg-cyan-50/30 rounded-xl p-10 grid grid-cols-1 gap-4 max-w-5xl text-slate-600 text-left text-sm " >
          <div className="flex flex-col gap-4">
            {
                title &&  <h2 className="text-2xl font-bold">{title}</h2>
            }
            {children}
          </div>
      </div>
)

}
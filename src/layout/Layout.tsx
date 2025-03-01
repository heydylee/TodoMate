import { HTMLAttributes } from "react"
import Sidebar from "./Sidebar"


const Layout = ({children}: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className="flex w-full min-h-screen text-gray-900 bg-gray-100">
            <Sidebar>

            </Sidebar>
            <div className="flex flex-col flex-grow gap-8 p-16">
                {children}
            </div>
        </div>
    )
}

export default Layout
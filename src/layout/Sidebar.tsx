import Logo from "../components/Logo";
import { CheckboxBlankCircleIcon ,CheckboxMarkedCircleIcon } from "../components/Icons"
import { Todo } from "../api/types";
import { useNavigate , useLocation} from "react-router-dom";
import { getAllTodo } from "../api/apis";
import { useEffect, useState } from "react";


const Sidebar = () => {
    const location =useLocation()
    const navigate = useNavigate();
    const [data, setData] = useState<Todo[]>([])
    useEffect ( () => { getAllTodo().then((data) => {setData(data)})}, [location] )
    
   
    const DoneTodo = data.filter((todo) => !todo.done)
    const NotDoneTodo = data.filter((todo) => todo.done)
   
   

    return (
        <aside className="flex flex-col w-[400px] gap-4 p-4 bg-white">
            <Logo />
                <div >
                    <div className="flex  items-center h-8 text-2xl gap-[4px] ">
                        <CheckboxBlankCircleIcon/>
                        할 일
                        <div className="flex-grow h-[2px] bg-gray-500"></div>
                    </div>  

                        <ul className="list-disc pl-6 space-y-2 gap-[10px]">
                        
                        { DoneTodo.map((todo)=> (   
                        <li className="cursor-pointer hover:text-blue-500"
                         onClick={()=>navigate(`/${todo.id}`)}>
                            {todo.title}
                        </li> ))
                        } 
                        </ul>
                        
                    
                </div>
                
                <div>               
                    <div className="flex items-center h-8 text-2xl gap-[4px] ">
                        <CheckboxMarkedCircleIcon/>
                        한 일 
                        <div className="flex-grow h-[2px] bg-gray-500"></div>
                    </div>  

                        <ul className="list-disc pl-6 space-y-2 gap-[10px] line-through  text-gray-400">
                        { NotDoneTodo.map((todo)=> (   
                        <li className="cursor-pointer"
                        onClick={()=>navigate(`/${todo.id}`)}>
                            {todo.title}
                        </li> ))
                        } 
                        </ul>
                </div>
        </aside>
    )
}
export default Sidebar;
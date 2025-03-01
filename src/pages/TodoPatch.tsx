import {patchTodo, Todo} from "../api/types";
import { useNavigate} from "react-router-dom";
import {NoteCheckIcon} from "../components/Icons";
import { useState, useEffect} from "react";
import { modifyTodo , getOneTodo} from "../api/apis";


const TodoPatch =() =>{
        const navigate = useNavigate()
        const id = location.pathname.split("/")[1]
        
        const [data, setData] = useState<patchTodo>()
        useEffect (() => {getOneTodo(+id).then((data) => {const {id, ...patchedData} = data; setData(patchedData)})}, [])

        const updateTodo = () => {
            if (data!=undefined)
                    modifyTodo(+id, data).then((res) => {navigate(`/`)})
            else
                alert("Data가 비어있습니다")
        };

    return(
        <div className="flex flex-col flex-grow w-full gap-8 ">
            <input className="p-2 text-5xl font-semibold" value={data?.title || ""}
            onChange={(e) => { 
                if (data!= undefined) {setData({...data, title: e.target.value})}}}/>

            <textarea className="flex p-2 resize-none text-3xl flex-grow  align-top font-normal"  value={data?.content || ""}
            onChange={(e) => { 
                if (data!= undefined) {setData({...data, content: e.target.value})}}}/>

            <div className="flex justify-start h-16 gap-4 ">
                <button className="flex p-4 gap-2 items-center justify-center bg-green-500 text-white font-bold rounded-2xl" onClick={updateTodo}>
                    <NoteCheckIcon className="w-8 h-8"/>
                    저장
                </button>
            </div>
        </div>
    )
}

export default TodoPatch
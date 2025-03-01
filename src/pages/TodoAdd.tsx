import {newTodo} from "../api/types";
import { useNavigate} from "react-router-dom";
import {NoteCheckIcon} from "../components/Icons";
import { useState,} from "react";
import { postTodo } from "../api/apis";


const TodoAdd =() =>{
    const navigate = useNavigate()
    const [data, setData] = useState<newTodo>({title:"", content: ""})


    const saveTodo = () => {
        if (data!=undefined)
            {
            postTodo(data).then((res) => {navigate(`/`)})
            }
        else
            // data가 언디파인드일떄
            alert("Data가 비어있습니다")
    };
    
    return(
        <div className="flex flex-col flex-grow w-full gap-8 ">
            <input className="p-2 text-5xl font-semibold" placeholder="제목을 입력하세요" onChange={(e) => setData({...data, title: e.target.value})}/>
            <textarea className="flex p-2 resize-none text-3xl flex-grow  align-top font-normal" placeholder="내용을 입력하세요" onChange={(e) => setData({...data, content: e.target.value})}/>
            <div className="flex justify-start h-16 gap-4 ">
                <button className="flex p-4 gap-2 items-center justify-center bg-green-500 text-white font-bold rounded-2xl" onClick={saveTodo}>
                    <NoteCheckIcon className="w-8 h-8"/>
                    저장
                </button>
            </div>
        </div>
    )
}

export default TodoAdd
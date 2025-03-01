import { useNavigate } from "react-router-dom";
import { ClickIcon, NoteAddIcon } from "../components/Icons"

const Main = () => {
    
    const navigate = useNavigate()
    return(
        <div className=" flex w-full  flex-grow flex-col  gap-8 ">
        <div className="flex flex w-full flex-grow flex-col items-center justify-center gap-8 font-bold text-gray-400">
            <ClickIcon className="w-64 h-64"/>
            <div className="text-4xl">
            왼쪽 목록에서 할 일을 선택 해 주세요!
            </div>
        </div>
        
        <div className="flex justify-start">
                <button className="flex p-4 gap-2 items-center justify-center bg-gray-800 text-white font-bold rounded-2xl"
                onClick={()=>navigate(`/add`)}>
                    <NoteAddIcon className="w-8 h-8"/>
                    할 일 생성
                </button>
        </div>
        </div>
    )
}

export default Main
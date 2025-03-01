import { api } from "../config/axios";
import { Todo, newTodo, patchTodo } from "./types";

export async function getAllTodo() {
    const response = await api.get<Todo[]>("/todo");
    return response.data;
}

export async function getOneTodo(params: number) {
    const response = await api.get<Todo>(`/todo/${params}`);
    return response.data;
}

export async function postTodo(req: newTodo){
    const response = await api.post<Todo>('/todo', req);
    return response.data;
}

export async function deleteTodo(params:number) {
    await api.delete<void>(`/todo/${params}`);
}

export async function modifyTodo(params:number, req: patchTodo){
    const response = await api.patch<Todo>(`/todo/${params}`, req);
    return response.data;
}

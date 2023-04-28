import { IQuestion } from "@/components/screens/game/game.interface"
import axios from "axios"
import { useQuery } from "react-query"

export const useQuestions = () => {
    const {data: questions, isLoading, isError} = useQuery('questions', async () => {
        const {data} = await axios.get<IQuestion[]>('https://6335af38ea0de5318a1905fd.mockapi.io/questions')

        return data
    })

    return {questions, isError, isLoading}
}
import { useParams } from "react-router-dom"

export default function DemoQuizResult()
{
      let score=useParams('score');
      return(
            <>
            Hiie your score is = {score}
            </>
      )
}
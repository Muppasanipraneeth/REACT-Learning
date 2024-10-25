import { useSetRecoilState } from "recoil"
import { jobs } from "./atoms"

export const Button = () => {
    const setjobs=useSetRecoilState(jobs);
  return (
    <div>
        <div>
            jobs<button onClick={setjobs((c)=>c+1)} >add jobs</button>
        </div>
    </div>
  )
}

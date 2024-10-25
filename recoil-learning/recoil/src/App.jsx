import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { jobs, Messaging, mynet, mynotification, totalnotificaton } from "./atoms"

export const App = () => {
  const notification =useRecoilValue(mynotification)
  const jobscount=useRecoilValue(jobs);
  const networkcount=useRecoilValue(mynet);
  // const messagescount =useRecoilValue(Messaging);
const [messagescount,setMessagescount]=useRecoilState(Messaging);
// const totaolcount=jobscount+networkcount+notification+messagescount;
const totalnotification=useRecoilValue(totalnotificaton);
// const totalcount =useMemo(()=>{
// return jobscount+networkcount+notification+messagescount;
// },[jobscount,networkcount,notification,messagescount])
// this is by using the useMemo
  return (
    <div>
      <button >Home</button>
      <button>notification({notification>=100?"99+":notification})</button>
      <button>Jobs({jobscount})</button>
      <button>Messaging({messagescount})</button>
      <button >My network ({networkcount})</button>
        <button  onClick={()=>{
        setMessagescount((c)=>c+1);
      }}>ME({totalnotification})</button>
      <Buttonupdater />
    </div>
  )
}

const Buttonupdater=()=>{
  const setJobcount=useSetRecoilState(jobs);
  return (<div>
    <button  onClick={()=>{
      setJobcount((c)=>c+1)
    }}>add jobs</button>

  </div>)

}
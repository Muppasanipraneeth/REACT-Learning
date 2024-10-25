import {atom, selector} from "recoil";
export const mynet=atom({
    key:"mynet",
    default:100
})
export const jobs=atom({
    key:"jobs",
    default:0

})
export const Messaging=atom({
    key:"messaging",
    default:1
})
export const mynotification=atom({
    key:"notification",
    default:100
})
export const totalnotificaton =selector({
    key:"totalnotification",
    value:({get})=>{
        const networkcoutn=get(mynet);
        const notification=get(Notification);
        const messagescount=get(Messaging);
        const job=get(jobs);
        return job+messagescount+notification+networkcoutn;
    }
})
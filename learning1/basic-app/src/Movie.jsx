const Watch=()=>{
    return (<>
    <button onClick={()=>alert(" you are now watching this movie")}>Watch</button>
    </>)
}
const Upload=()=>{
    return (<>
    <button onClick={()=>alert("Uploading !")} >  Upload</button>
    </>)
}
const Rating=()=>{
    return (<>
    <p onMouseOver={()=>{alert("remove the mouse")}}> you can rate this </p>
    </>)
} 
const Movie=()=>{
    return (<>
<Watch />
<Upload />
<Rating />
    </>)
}
export default Movie
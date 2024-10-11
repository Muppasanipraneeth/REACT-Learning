const Form=()=>{
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(" the form was submited");
        
    }
    return (<>
    <form >
        <input placeholder="enter something" />
        <button onClick={handleSubmit}> submit</button>
    </form>
    
    </>)
}
export default Form;

// import Card from "./AmazonCard";

// const App=()=>{
//   return (<>
// <div className="flex">
// <Card  name="AirPods" img="https://images-eu.ssl-images-amazon.com/images/I/81FnSOE94NL._AC_UL165_SR165,165_.jpg" details="3.7 out of 5 stars64
// 6K+ viewed in past month" />  
// <Card name="Samsung" img="https://images-eu.ssl-images-amazon.com/images/I/61Qqg+T8nsL._AC_UL165_SR165,165_.jpg" details="3.7 out of 5 stars64
// 6K+ viewed in past month" />  
// <Card name="oneplus"  img ="https://images-eu.ssl-images-amazon.com/images/I/51h7CQTRJ1L._AC_UL165_SR165,165_.jpg" details="3.7 out of 5 stars64
// 6K+ viewed in past month"/>  
// <Card name="Iwatch" img="https://images-eu.ssl-images-amazon.com/images/I/91z5KuonXrL._AC_UL165_SR165,165_.jpg"  details="3.7 out of 5 stars64
// 6K+ viewed in past month"/>
// </div>
// <div className ="flex">
//   <Card name="dell" img="https://m.media-amazon.com/images/I/61mIyqErSnL._AC_UY218_.jpg" details="3.7 out of 5 stars64
// 6K+ viewed in past month" />
//   <Card name="Hp" img="https://m.media-amazon.com/images/I/71-oBEGEnOL._AC_UY218_.jpg" details="3.7 out of 5 stars64
// 6K+ viewed in past month"/>
//   <Card name="Lenova" img="https://m.media-amazon.com/images/I/71MuvuEjyAL._AC_UY218_.jpg" details="3.7 out of 5 stars64
// 6K+ viewed in past month" />
//   <Card name="Mac" img="https://m.media-amazon.com/images/I/618d5bS2lUL._AC_UY218_.jpg" details="3.7 out of 5 stars64
// 6K+ viewed in past month" />
//  </div>
 

//   </>)
// }
// export default App;
// /**
//  * 
//  * New Apple AirPods Max - Green
// New Apple AirPods Max - Green
// 3.7 out of 5 stars64
// 6K+ viewed in past month
// ₹59,900.00
// Get it by Wednesday, September 4
// FREE Delivery by Amazon
// Only 2 left in stock.
import Question from "./Gate";

const App = () => {
  const questionId = '64f9c27b99a1b3b9b4d0252d'; // Replace with your actual question ID

  return (
    <div className="App">
      <h1 className="text-2xl font-bold text-center my-4">GATE Preparation</h1>
      <Question questionId={questionId} />
    </div>
  );
};

export default App;

//  * 
//  */
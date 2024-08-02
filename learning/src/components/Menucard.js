const Menucards = (props) => {
    const imgurl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
const {res}=props;
    console.log(props);
    console.log("itemscard");

    return (
        <div className="border-s  shadow-sm p-2 m-4 flex">
            <div className="w-6/12">
            <div className="text-left font-semibold ">{res.name}
              
              </div>
              <div>{parseFloat(res.finalPrice) / 100}</div>
              <div>
                  {res.description}
              </div>
            </div >
          <div className="3/12">
            <img src={imgurl+res.imageId}></img>
          </div>
        </div>
    );
};

export default Menucards;

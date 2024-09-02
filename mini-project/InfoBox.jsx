import PropTypes from "prop-types";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SevereColdIcon from '@mui/icons-material/SevereCold';


const Info=(props)=>{
    const {result}=props;
    console.log(result);
    const Rain="https://img.freepik.com/premium-photo/rainy-weather-city-street_875825-82222.jpg";
    const Img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3tGZCaQk-Knhk_Xk8XtwhNakbNnDto4sjEQ&s";
    const Sun="https://s7d2.scene7.com/is/image/TWCNews/sun_and_clouds_orangeskypng";
    return (<>
    <div className="flex items-center justify-center">
       <div className="font-boldf  ">Weather Info</div>
    </div>
<div className="justify-center items-center flex">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={result.humidity>50?Rain:result.feelslike_c >15?Sun:Img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          City :{result.city}          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         <div>
         Temperature : {result.feelslike_c} {result.humidity>50?<ThunderstormIcon />:result.feelslike_c >15?<SevereColdIcon />:<WbSunnyIcon />}
         </div>
         <div>
         Region : {result.region}
         </div>
         <div>
         humidity:{result.humidity}
         </div>
         <div>
         last_updated :{result.last_updated}
         </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    
    </>)
}
export default Info;
Info.propTypes={
result:PropTypes.string.isRequired,
}
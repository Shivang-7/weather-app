import './InfoBox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}) {

    let HOT_URL = "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?w=800&auto=format&fit=crop";
    let COLD_URL = "https://images.unsplash.com/photo-1505322266409-1c77f8b33a8a?w=800&auto=format&fit=crop";
    let RAIN_URL = "https://images.unsplash.com/photo-1558409057-bbe679023136?w=800&auto=format&fit=crop";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city} {info.humidity>80 ? <ThunderstormIcon /> : 
                        info.temp>15 ? <SunnyIcon /> : <AcUnitIcon />}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <div>Temperature = {info.temp}&deg;C</div>
                        <div>Humidity = {info.humidity}</div>
                        <div>Min Temp = {info.tempMin}&deg;C</div>
                        <div>Max Temp = {info.tempMax}&deg;C</div>
                        <div>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</div>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    );
};
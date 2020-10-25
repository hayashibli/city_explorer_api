let express = require('express');

let cors = require('cors');

let app = express();
app.use(cors());

require('dotenv').config();
const PORT = process.env.PORT;

app.get('/location', handleLocation);
function handleLocation(request, response){
    let city = request.query.city;
    let jsonData = require('./data/location.json');
    let jsonObj = jsonData[0];
    let locationObj = new Location(city,jsonObj.display_name,jsonObj.lat,jsonObj.lon);
    response.status(200).json(locationObj);
}
function Location(search_query,formatted_query,latitude,longitude){
this.search_query = search_query;
this.formatted_query = formatted_query;
this.latitude = latitude;
this.longitude = longitude;
}

app.listen(PORT, () =>{
    console.log(`app is listening on port ${PORT}`)
})
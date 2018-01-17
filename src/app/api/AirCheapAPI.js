import 'whatwg-fetch';
import AirportActionCreators from "../actions/AirportActionCreators";

let AirCheapApi= {

    fetchAirports() {
        fetch('/public/airports.json')
            .then((response) => {
                return response.json()
            })
            .then((responseData) =>{
                // Call the AirportActionCreators success action with the parsed data
                AirportActionCreators.fetchAirportsSuccess(responseData);
            })
            .catch((error) => {
                // Call the AirportActionCreators error action with the error object
                AirportActionCreators.fetchAirportsError(error);
            });
    }
}

export default AirCheapApi;
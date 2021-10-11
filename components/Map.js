import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import{ useState } from 'react';
import getCenter from 'geolib/es/getCenter'

function Map({ searchResults }) {
    const [selectedlocation, setSelectedlocation] = useState({});
    

    const coordinates = searchResults.map(result =>({
        longitude: result.long,
        latitude: result.lat,
    }))

    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 6,
    });

    // console.log(selectedlocation);


    return <ReactMapGL mapStyle='mapbox://styles/harriemburu/ckulfewgp0e8518piagekr6ma'
     mapboxApiAccessToken={process.env.mapbox_key}
     {...viewport}
     onViewportChange={(nextViewport) => setViewport(nextViewport)}
     >
         {searchResults.map((result) => (
             <div key={result.long}>
                 <Marker longitude={result.long} latitude={result.lat} offsetTop={-10} offsetLeft={-20}>
                     <p onClick={() => setSelectedlocation(result)}
                     className='cursor-pointer text-2xl animate-bounce'
                     aria-label='push-pin'>📍</p>
                 </Marker>
                 {selectedlocation.long === result.long ? (
                     <Popup 
                     onClose={() => setSelectedlocation({})}
                     latitude={result.lat}
                     longitude={result.long}
                     closeOnClick={true}>
                         {result.title}
                     </Popup>
                 ):(
                     false
                 )}
             </div>
         ))}
    </ReactMapGL>
}

export default Map;

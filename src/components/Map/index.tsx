import GoogleMapReact from "google-map-react";
import Local from "../Local";


export default function Map() {
    const defaultProps = {
        center: {
            lat: -15.7420889,
            lng: -43.0286046
        },
        zoom: 15
    };

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: `AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek` }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Local
                    lat={-15.7420889}
                    lng={-43.0286046}
                    text="Poly"
                />
            </GoogleMapReact>
        </div>
    )
}

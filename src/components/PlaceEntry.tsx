interface PlaceEntryProps {
    title: string
    placename: string;
    country: string;
    image: string;
    location: string;
    explanation: string;
}

function PlaceEntry(props: PlaceEntryProps): JSX.Element{
    return ( 
        <section>
            <h2>{props.title}</h2>
                <h4>{props.placename}
                <span> | </span>
                {props.country}
                <span> | </span> 
                <a href={props.location}>Find on Google Maps</a>
            </h4>
            <img src={props.image} alt="This particular place"/>
            
            <p>{props.explanation}</p>
        </section>
    );
}

export default PlaceEntry; 
import PlaceEntryProps from "../utils/place-entry-props";
import PlaceEntry from "./PlaceEntry";

function transformPlaceEntries(placeEntryProp: PlaceEntryProps): JSX.Element {
  return (
    <PlaceEntry
      title={placeEntryProp.title}
      placename={placeEntryProp.placename}
      country={placeEntryProp.country}
      image={placeEntryProp.image}
      location={placeEntryProp.location}
      explanation={placeEntryProp.explanation}
    />
  );
}

export default transformPlaceEntries;

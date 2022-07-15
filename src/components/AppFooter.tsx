import placeEntries from "../utils/PlaceEntryData";

function AppFooter(): JSX.Element {
  return (
    <footer>
      <p>Image sources:</p>
      <small>
        <p>{placeEntries[0].image}</p>
        <p>{placeEntries[1].image}</p>
        <p>{placeEntries[2].image}</p>
        <p>{placeEntries[3].image}</p>
      </small>
    </footer>
  );
}

export default AppFooter;

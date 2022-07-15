import placeEntries from "../utils/PlaceEntryData";
import transformPlaceEntries from "./transform-place-entries";
import styles from "./placestyles.module.css";

function AllPlaceEntries(): JSX.Element {
  const readyPlaceEntries: JSX.Element[] = placeEntries.map(
    transformPlaceEntries
  );
  return <ul className={styles.content}>{readyPlaceEntries}</ul>;
}

export default AllPlaceEntries;

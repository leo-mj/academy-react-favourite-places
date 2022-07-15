import PlaceEntryProps from "../utils/place-entry-props";
import styles from "./placestyles.module.css";

function PlaceEntry(props: PlaceEntryProps): JSX.Element {
  const divider: string = "_".repeat(100);
  return (
    <>
      <section className={styles.entry}>
        <h2 className={styles.title}>{props.title}</h2>
        <h4 className={styles.subtitle}>
          {props.placename}
          <span> | </span>
          {props.country}
        </h4>
        <a href={props.location} className={styles.loc}>
          Find on Google Maps
        </a>
        <img
          src={props.image}
          alt="This particular place"
          className={styles.picture}
        />
        <p className={styles.explanation}> {props.explanation} </p>
        <p className={styles.explanation}> {divider} </p>
      </section>
    </>
  );
}

export default PlaceEntry;

import styles from "./placeentry.module.css";

interface PlaceEntryProps {
  title: string;
  placename: string;
  country: string;
  image: string;
  location: string;
  explanation: string;
}

function PlaceEntry(props: PlaceEntryProps): JSX.Element {
  return (
    <section className={styles.sectionbody}>
      <h2 className={styles.sectionheader}>{props.title}</h2>
      <h4>
        {props.placename}
        <span> | </span>
        {props.country}
        <span> | </span>
        <a href={props.location}>Find on Google Maps</a>
      </h4>
      <img src={props.image} width="70%" alt="This particular place" />

      <p>{props.explanation}</p>
    </section>
  );
}

export default PlaceEntry;

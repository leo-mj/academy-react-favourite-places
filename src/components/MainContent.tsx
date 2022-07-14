import PlaceEntry from "./PlaceEntry";

function MainContent(): JSX.Element {
  return (
    <>
      <ul>
        <PlaceEntry
          title={"Volcanic Green"}
          placename={"Landmannalaugar"}
          country={"Iceland"}
          image={
            "https://images.unsplash.com/photo-1547626740-02cb6aed9ef8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          location={"https://goo.gl/maps/EiJjivoNxWRfehwH8"}
          explanation={
            "Impressive and diverse landscape, very suitable for hikes"
          }
        />
        <PlaceEntry
          title={"A Growing Megacity"}
          placename={"Nanning"}
          country={"China"}
          image={
            "https://images.unsplash.com/photo-1595698612005-09bb2f1197e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80"
          }
          location={"https://goo.gl/maps/v6kD2acz5NFscbc8A"}
          explanation={"A developing city in Southern China - great food!"}
        />
        <PlaceEntry
          title={"Hikes, Hikes, Hikes"}
          placename={"Leysin"}
          country={"Switzerland"}
          image={
            "https://images.unsplash.com/photo-1564786632542-299f7d3550b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          location={"https://goo.gl/maps/DCj9DMcCob9YMipG7"}
          explanation={
            "A small town in the Swiss Alps, perfect for hikes to nearby peaks"
          }
        />
        <PlaceEntry
          title={"Concert Hall on the Water"}
          placename={"Elbphilharmonie Hamburg"}
          country={"Germany"}
          image={
            "https://images.unsplash.com/photo-1608745211459-29dac5b0d5ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          }
          location={"https://g.page/elbphilharmonie-hh?share"}
          explanation={
            "If you're not there for the music, go for the views from the inside. If you're not there for the views from the inside, go for the view from the outside"
          }
        />
      </ul>
    </>
  );
}

export default MainContent;

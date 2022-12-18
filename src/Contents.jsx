import { useState } from "react";

function Contents({ person }) {
  //State Variables

  const [fullView, setFullView] = useState(false);
  const [currentStyle, setCurrentStyle] = useState("item");
  const [hide, setHide] = useState(false);

  // returns the Content item as just the name and the surname in a small block
  function GetBasic() {
    //if hide is flase it shows the text int he small box
    if (hide === false) {
      return (
        <p>
          <b>
            {person.first_name} {person.last_name}
          </b>
        </p>
      );
    } else {
      // else if hide is true the text is hidden which helps with a fluid animation
      return <p> </p>;
    }
  }

  // returns the full data of the person
  function GetFull() {
    return (
      <>
        <p>
          <b>Name:</b>{" "}
          <p>
            {person.first_name} {person.last_name}
          </p>
        </p>
        <p>
          <b>Date of birth:</b>
          <p> {person.date_of_birth}</p>
        </p>
        <p>
          <b>Email:</b> <p>{person.email_address}</p>
        </p>
        <p>
          <b>Address:</b>
          <p>
            {person.address}, {person.city}, {person.zip_code}
          </p>
        </p>
        <p>
          <b>Country:</b> <p>{person.country}</p>
        </p>
      </>
    );
  }

  return (
    <div
      className={currentStyle}
      onClick={() => {
        // if the item is expanded (ie full  view is true)
        if (fullView === true) {
          // changing these state varibales buts the expanded item back into its small form
          setCurrentStyle("item");
          setFullView(false);
          setHide(false);
        } else {
          // otherwise we assume the item was small when clicked on and we change the state variables to expand the item
          setCurrentStyle("item-expanded");
          setHide(true);
          // small delay before the text is shown to help with fluid animation
          setTimeout(() => setFullView(true), 100);
        }
      }}
    >
      {/* Dynamically render the correct componant depending on the state if fullView (ie is the item expanded or not) */}
      {fullView === false ? <GetBasic /> : <GetFull />}
    </div>
  );
}

export default Contents;

import { useState } from "react";

function Contents({ person }) {
  const [fullView, setFullView] = useState(false);
  const [currentStyle, setCurrentStyle] = useState("item");
  const [hide, setHide] = useState(false);

  // returns the Content item as just the name and the surname in a small block
  function GetBasic() {
    if (hide === false) {
      return (
        <p>
          <b>
            {person.first_name} {person.last_name}
          </b>
        </p>
      );
    } else {
      return <p></p>;
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
        if (fullView === true) {
          setCurrentStyle("item");
          setFullView(false);
          setHide(false);
        } else {
          setCurrentStyle("item-expanded");
          setHide(true);
          setTimeout(() => setFullView(true), 200);
        }
      }}
    >
      {fullView === false ? <GetBasic /> : <GetFull />}
    </div>
  );
}

export default Contents;

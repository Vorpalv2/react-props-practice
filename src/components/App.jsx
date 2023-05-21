import React from "react";
import Card from "/src/components/card";
import Contacts from "/src/contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={Contacts[0].name}
        image={Contacts[0].image}
        phone={Contacts[0].phone}
        email={Contacts[0].email}
      />
      <Card
        name={Contacts[1].name}
        image={Contacts[1].image}
        phone={Contacts[1].phone}
        email={Contacts[1].email}
      />
      <Card
        name={Contacts[2].name}
        image={Contacts[2].image}
        phone={Contacts[2].phone}
        email={Contacts[2].email}
      />
    </div>
  );
}

export default App;

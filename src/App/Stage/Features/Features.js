import React, { useState, useEffect } from "react";
import FeaturesLayout from "./FeaturesLayout";
import Feature from "./Feature";

const Features = () => {
  // const [notes, setNotes] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const onLoad = async () => {
  //     if (!authenticated) {
  //       return;
  //     }

  //     try {
  //       const noteData = await loadNotes();
  //       setNotes(noteData);
  //     } catch (error) {
  //       console.error(error);
  //     }

  //     setLoading(false);
  //   };

  //   onLoad();
  // }, [authenticated]);

  return (
    <FeaturesLayout>
      <Feature title="Create Filter" />
    </FeaturesLayout>
  );
};

// Features.propTypes = {
//   authenticated: PropTypes.bool.isRequired,
// };

export default Features;

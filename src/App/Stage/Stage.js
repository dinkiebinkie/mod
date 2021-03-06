import React, { useState, useEffect } from "react";
import StageLayout from "./StageLayout";

import Features from "./Features";
import DragContainer from "./DragContainer";

const Stage = () => {
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
    <StageLayout>
      <Features />
      <DragContainer />
    </StageLayout>
  );
};

// Stage.propTypes = {
//   authenticated: PropTypes.bool.isRequired,
// };

export default Stage;

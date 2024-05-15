import React, { useState } from "react";
import styles from "./Anotation.module.css";
import Navbar from "./../../components/Navbar/Navbar";

function Annotation() {
  const [imageUrl, setImageUrl] = useState("");
  const [point, setPoint] = useState(null);
  const [annotationText, setAnnotationText] = useState("");
  const [savingAnnotation, setSavingAnnotation] = useState(false);
  const [annotationSaved, setAnnotationSaved] = useState(false);
  const [clickedAnnotation, setClickedAnnotation] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setImageUrl(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleImageClick = (e) => {
    if (!imageUrl) return;

    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPoint({ x, y });
    setAnnotationText("");
  };

  const handleSaveAnnotation = () => {
    if (savingAnnotation) return;

    setSavingAnnotation(true);

    setTimeout(() => {
      console.log("Image URL:", imageUrl);
      console.log("Annotation Text:", annotationText);
      console.log("Point:", point);

      setSavingAnnotation(false);
      setAnnotationSaved(true);

      // Reset state after some time
      setTimeout(() => {
        setAnnotationSaved(false);
      }, 3000);
    }, 2000);

    setClickedAnnotation({ imageUrl, annotationText });
  };

  return (
    <div className={styles.annotation}>
      <Navbar />
      <div className={styles.annotationForm}>
        {" "}
        {/* Change form to div */}
        <label htmlFor="imageFile">Upload Image:</label>
        <input
          type="file"
          id="imageFile"
          name="imageFile"
          accept="image/*"
          onChange={handleImageUpload}
        />
        {imageUrl && (
          <div className={styles.imageContainer} onClick={handleImageClick}>
            <img
              src={imageUrl}
              alt="Annotated Image"
              style={{ maxWidth: "100%", maxHeight: "90vh" }}
            />
            {/* Display point as a marker */}
            {point && (
              <div
                style={{
                  position: "absolute",
                  left: point.x,
                  top: point.y,
                  width: "20px",
                  height: "20px",
                  background: "red",
                  borderRadius: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
            )}
          </div>
        )}
        {annotationSaved && <p>Annotation saved successfully!</p>}
        {imageUrl && (
          <div className={styles.annotationArea}>
            <label htmlFor="annotationText">Annotation Text:</label>
            <input
              type="text"
              id="annotationText"
              value={annotationText}
              onChange={(e) => setAnnotationText(e.target.value)}
              placeholder="Enter annotation text"
              style={{ width: "90%" }} // Increase text input width
            />
            <button
              className={styles.saveAnnotationBtn}
              onClick={handleSaveAnnotation}
            >
              {savingAnnotation ? "Saving..." : "Save Annotation"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Annotation;

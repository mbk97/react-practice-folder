import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./style.css";

const DropzoneRender = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
  });

  const removeFile = (file) => () => {
    const newFiles = [...files];
    newFiles.splice(files.indexOf(file), 1);
    setFiles(newFiles);
  };

  const result = files.map((file, index) => {
    return (
      <div
        key={index}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p>{file.name}</p>

        <button
          style={{
            borderRadius: "8px",
            background: "red",
            color: "white",
            outline: 0,
            border: 0,
            cursor: "pointer",
          }}
          onClick={() => removeFile(index)()}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div>
      <h1>Drag and drop here</h1>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drang 'n' Drop your files here</p>
      </div>
      {result}
    </div>
  );
};

export default DropzoneRender;

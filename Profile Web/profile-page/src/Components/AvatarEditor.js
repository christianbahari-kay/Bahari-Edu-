// import React, { useState } from "react";
// import Cropper from "react-easy-crop";

// const AvatarEditor = ({ image, onSave, onCancel }) => {
//   const [crop, setCrop] = useState({ x: 0, y: 0 });
//   const [zoom, setZoom] = useState(1);
//   const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

//   const onCropComplete = (_, croppedAreaPixels) => {
//     setCroppedAreaPixels(croppedAreaPixels);
//   };

//   return (
//     <div className="avatar-editor">
//       <Cropper
//         image={image}
//         crop={crop}
//         zoom={zoom}
//         aspect={1}
//         onCropChange={setCrop}
//         onZoomChange={setZoom}
//         onCropComplete={onCropComplete}
//       />
//       <button onClick={() => onSave(croppedAreaPixels)}>Save</button>
//       <button onClick={onCancel}>Cancel</button>
//     </div>
//   );
// };

// export default AvatarEditor;

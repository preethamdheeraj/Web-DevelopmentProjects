/* now we will be reading props in event handlers */

function AlertButton({ onClick, children }) {
  return <button onClick={onclick}>{children}</button>;
}

/* in this case we are passing event handlers as props */
export default function ToolbarOne() {
  return (
    <div>
      <AlertButton message="Playing">Play Movie</AlertButton>
      <AlertButton message="Uploading">Upload Image</AlertButton>
    </div>
  );
}

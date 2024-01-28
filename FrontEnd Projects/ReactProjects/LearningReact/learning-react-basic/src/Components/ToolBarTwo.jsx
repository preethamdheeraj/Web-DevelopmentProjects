/* passing event handlers as props to the child components that will be by default exported the app.jsx file */

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return <Button onclick={handlePlayClick}>Play '{movieName}'</Button>;
}

function UploadButton() {
  return <Button onclick={() => alert('Uploading!')}>Upload Image</Button>;
}

export default function ToolBarTwo() {
  return (
    <div>
      <PlayButton movieName="Kikis Delivery service" />
      <UploadButton />
    </div>
  );
}

import ReactJson from "react-json-view";

function Viewer({ response }) {
  return (
    <div class="container">
      <div style={{ "text-align": "left", padding: "16px" }}>
        {response.length > 0 ? (
          <ReactJson
            src={JSON.parse(response)}
            // theme="shapeshifter:inverted"
            theme="monokai"
            displayDataTypes={false}
            displayObjectSize={false}
            // enableClipboard={false}
            displayArrayKey={false}
            style={{ fontSize: 13, padding: "16px" }}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Viewer;

let TextInput = () => {
  return <input type="text" placeholder="text input" />;
};

let YesNoRadio = () => {
  return (
    <div>
      <input type="radio" value="yes" />
      <label>Yes</label>
      <input type="radio" value="no" />
      <label>No</label>
    </div>
  );
};

let SubmitButton = () => {
  return <button>Submit</button>;
};

let Form = () => {
  return (
    <div>
      <TextInput />
      <YesNoRadio />
      <SubmitButton />
    </div>
  );
};

ReactDOM.render(<Form />, document.getElementById("root"));

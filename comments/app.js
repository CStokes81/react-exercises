let ProfilePic = () => {
  return (
    <img
      src="https://avatars.dicebear.com/v2/female/7f9a28abe6371d82dff8e70d79c1d109.svg"
      style={{ width: "50px" }}
    ></img>
  );
};

let CommentBody = () => {
  return <b>Crystal</b>;
};

let Comment = () => {
  return (
    <div>
      <ProfilePic />
      <CommentBody />
    </div>
  );
};

let Comments = () => {
  return (
    <div>
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

ReactDOM.render(<Comments />, document.getElementById("root"));

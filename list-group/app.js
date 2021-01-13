let ListGroupItem = () => {
  return <li>List Items</li>;
};

let ListGroup = () => {
  return (
    <div>
      <ListGroupItem />
      <ListGroupItem />
      <ListGroupItem />
    </div>
  );
};

ReactDOM.render(<ListGroup />, document.getElementById("root"));

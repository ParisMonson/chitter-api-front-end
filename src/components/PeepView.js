const PeepView = (props) => {
  return (
    <div>
      {props.peeps.map((peep) => (
        <Peep peep={peep} key={peep.id} />
      ))}
    </div>
  );
};

const Peep = (props) => {
  return (
    <div class="peeps">
      <h3>{props.peep.user.handle}</h3>
      <p class="peep-content">{props.peep.body}</p>
      <footer>
        Created at: {props.peep.created_at} Updated_at: ${props.peep.updated_at}{" "}
        Likes: {props.peep.likes.length}
      </footer>
    </div>
  );
};

export default PeepView;

import { render } from "enzyme";
import { useState } from "react";
const Api = require("../services/Api");

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
  const [singlePeep, setSinglePeep] = useState({});

  const viewPeep = async (id) => {
    const api = new Api();
    const peep = await api.getSinglePeep(id);
    setSinglePeep(peep);
  };

  return (
    <div class="peeps">
      <h3>{props.peep.user.handle}</h3>
      <p class="peep-content">{props.peep.body}</p>
      <footer>
        Created at: {props.peep.created_at} Updated_at: ${props.peep.updated_at}{" "}
        Likes: {props.peep.likes.length}
      </footer>
      <button onClick={() => viewPeep(props.peep.id)}>View</button>
    </div>
  );
};

export default PeepView;

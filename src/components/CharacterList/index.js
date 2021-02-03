import { Children, Component } from "react";

// const { Children } = require("react");

// const CharacterList = ({ children }) => {
//   let rand1 = Math.floor(Math.random() * (10 - 0) + 0);
//   let rand2 = Math.floor(Math.random() * (10 - 0) + 0);
//   let rand3 = Math.floor(Math.random() * (10 - 0) + 0);

//   const CharList = children;
//   console.log(CharList[rand1]);
//   return (
//     <div>
//       {/* <div>{CharList[rand1].name}</div>
//       <div>{CharList[rand2].name}</div>
//       <div>{CharList[rand3].name}</div> */}
//     </div>
//   );
// };
// export default CharacterList;

export default class CharacterList extends Component {
  idxRandon = () => {
    const rand = Math.floor(Math.random() * (10 - 0) + 0);
    return rand;
  };

  idx = this.idxRandon();

  render() {
    console.log(this.idx);
    //     const rand2 = Math.floor(Math.random() * (10 - 0) + 0);
    //     const rand3 = Math.floor(Math.random() * (10 - 0) + 0);

    const { charList } = this.props.children;

    // console.log(charList[rand1]);
    return <div>{charList}</div>;
  }
}

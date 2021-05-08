import React from "react";
import RoomsFilter2 from "./RoomsFilter2";
import RoomsList2 from "./RoomsList2";
import { withRoomConsumer } from "../context2";
import Loading from "./Loading";

function RoomContainer2({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter2 rooms={rooms} />
      <RoomsList2 rooms={sortedRooms} />
    </div>
  );
}


export default withRoomConsumer(RoomContainer2)


// import React from "react";
// //import { withRoomConsumer } from "../context";
// //import Loading from "./Loading";
// import RoomsFilter2 from "./RoomsFilter2";
// import RoomsList2 from "./RoomsList2";
// import {RoomConsumer} from "../context2";
// import Loading from "./Loading";

// export default function RoomsContainer2() {
//   return (
//     <RoomConsumer>
//     {
//       (value)=> {        
//          const{loading,sortedRooms,rooms} = value;
//          if(loading){
//            return <Loading />;
//          }
//         return (
//           <div>
//           Hello From Rooms Container2
//           <RoomsFilter2  rooms={rooms} />
//           <RoomsList2  rooms={sortedRooms} />
//         </div>
//         );
//       }}
//     </RoomConsumer>    
//   );
// }

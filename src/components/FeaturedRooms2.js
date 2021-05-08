import React, { Component } from "react";
import { RoomContext } from "../context2";
import Room2 from "./Room2";
import Loading from "./Loading";
import Title from "./Title";
export default class FeaturedRooms2 extends Component {
    static contextType = RoomContext;
  render() {
    let { loading,  featuredRooms: rooms} = this.context;    
    rooms = rooms.map(room => {
        return <Room2 key={room.id} room={room} />;
      });
    
    return (
      <section className="featured-rooms">
         <Title title="featured rooms" />
         <div className="featured-rooms-center">
           {loading ? <Loading /> : rooms}
         </div>
         
       </section>
    );
  }
}

import React from "react";
import Room2 from "./Room2";
export default function RoomsList2({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    )
  }

  return (
    <section className="roomslist">

      <div className="roomslist-center">
        {rooms.map(item => {
          return <Room2 key={item.id} room={item} />;
        })}
      </div>
    </section>

  )
}

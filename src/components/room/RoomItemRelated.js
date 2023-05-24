import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function RoomItemRelated(props) {
    let { the_key, room } = props
    return (
        <div className="col-sm-6 col-md-3 col-lg-3">

            <div className="product-detail_item">
                <div className="img">
                <Link to={"/RoomDetail/" + room.id} className="btn">
                        <img src={room.image} alt="#" />
                        </Link>
                </div>
                <div className="text">
                    <h2>
                        <a >{room.name}</a>
                    </h2>
                    <Link to={"/RoomDetail/" + room.id} className="btn">
                        CHI TIẾT PHÒNG 
                        </Link>
                </div>
            </div>
        </div>
    );
}
export default RoomItemRelated;
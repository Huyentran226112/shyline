import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function RoomItemRelated(props) {
    // const { room} = props;
    let { the_key, room } = props
    return (
        <div className="col-sm-6 col-md-3 col-lg-3">

            <div className="product-detail_item">
                <div className="img">
                    <a href="#">
                        <img src={room.image} alt="#" />
                    </a>
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
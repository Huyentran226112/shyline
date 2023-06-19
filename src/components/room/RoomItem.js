import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function RoomItem(props) {
    const { the_key, room } = props;

    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="room-item-1" key={the_key}>
                <Link to={room.status === 1 ? "/RoomDetail/" + room.id : "#"} className={room.status === 1 ? "" : "disabled-link"}>
                    <h2>
                        <a href="#">
                            {room.name}
                        </a>
                    </h2>
                    <h5>{room.category_name}</h5>
                    <h5>
                        {room.status === 1 ? 'Còn phòng' : 'Hết phòng'}
                    </h5>
                    <div className="img">
                        <a href="/roomdetail">
                            <img src={room.image} alt="#" />
                        </a>
                    </div>
                </Link>
                <div className="content">
                    <p>{room.description}</p>
                </div>
                <div className="bottom">
                    <span className="price">
                        Giá : <span className="amout">{room.price_format} vnđ</span> / Ngày
                    </span>
                    <Link to={room.status === 1 ? "/RoomDetail/" + room.id : "#"} className={`btn ${room.status === 1 ? "" : "disabled-button"}`} disabled={room.status !== 1}>
                        CHI TIẾT PHÒNG
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RoomItem;
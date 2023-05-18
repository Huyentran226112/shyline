import React, { useEffect, useState } from 'react';

function RoomItem(props) {
   const { room} = props;
    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="room-item-1">
                <h2>
                    <a href="#">
                        {room.name}
                        </a> </h2> 
                        <h5>{room.category_name}</h5>
                <div className="img">
                    <a href="/roomdetail">
                        <img src={room.image} alt="#" />
                    </a>
                </div>
                <div className="content">
                    <p>
                    {room.description}
                    </p>
                </div>
                <div className="bottom">
                    <span className="price">
                        Giá : <span className="amout">
                            {room.price_format} vnđ
                            </span> / Ngày
                    </span>
                    <a href="/roomdetail" className="btn">
                        VIEW DETAILS
                    </a>
                </div>
            </div>
        </div>
    );
}

export default RoomItem;
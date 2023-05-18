import React from 'react';

function RoomItem(props) {
    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="room-item-1">
                <h2>
                    <a href="#">STANDARD ROOM</a>
                </h2>
                <div className="img">
                    <a href="#">
                        <img src="images/Room/room-4.jpg" alt="#" />
                    </a>
                </div>
                <div className="content">
                    <p>
                        Located in the heart of Aspen with a unique blend of
                        contemporary luxury and historic heritage, deluxe
                        accommodations, superb amenities, genuine hospitality and
                        dedicated service for an elevated experience in the Rocky
                        Mountains.
                    </p>
                    <ul>
                        <li>Max: 4 Person(s)</li>
                        <li>View: Ocean</li>
                        <li>Size: 35 m2 / 376 ft2</li>
                        <li>Bed: King-size or twin beds</li>
                    </ul>
                </div>
                <div className="bottom">
                    <span className="price">
                        Starting <span className="amout">$260</span> /days
                    </span>
                    <a href="#" className="btn">
                        VIEW DETAILS
                    </a>
                </div>
            </div>
        </div>
    );
}

export default RoomItem;
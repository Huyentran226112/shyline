import React, { useEffect, useState } from 'react';
import LayoutMaster from '../layouts/LayoutMaster';
import PageBanner from '../components/global/PageBanner';
import RoomModel from '../models/RoomModel';
import RoomItem from '../components/room/RoomItem';

function Room(props) {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        RoomModel.getAll()
            .then((res) => {
                console.log(res.data.data);
                setRooms(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                throw err;
            });
    }, []);
    return (
        <LayoutMaster>
            <PageBanner pageTitle="Rooms" pageSubTitle="All Rooms" />
            {loading ? (
            "Loading"
          ) : (
            <section className="body-room-1 ">
                <div className="container">
                    <div className="room-wrap-1">
                        <div className="row">
                            {
                                rooms.map((room,key) => (
                                    <RoomItem room={room} key={key}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
          )}
        </LayoutMaster>
    );
}

export default Room;
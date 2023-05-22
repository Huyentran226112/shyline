import React, { useEffect, useState } from 'react';
import LayoutMaster from '../layouts/LayoutMaster';

import RoomItem from '../components/room/RoomItem';
import PageBanner from '../components/global/PageBanner';
import { useParams } from 'react-router';
import CategoryModel from '../models/CategoryModel';

function Category(props) {
    const { id } = useParams();
    
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        CategoryModel.getRooms(id)
            .then((res) => {
                console.log(res.data);
                setRooms(res.data);
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

export default Category;
import React, { useEffect, useState } from 'react';
import LayoutMaster from '../layouts/LayoutMaster';
import PageBanner from '../components/global/PageBanner';
import RoomModel from '../models/RoomModel';
import RoomItem from '../components/room/RoomItem';
import Pagination from '../components/global/Pagination';


function Room(props) {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [pageData, setPageData] = useState({});
    useEffect(() => {
        RoomModel.getAll(page)
            .then((res) => {
                console.log(res);
                setRooms(res.data.data);
                setPageData(res.data.meta)
                setLoading(false);
            })
            .catch((err) => {
                throw err;
            });
    }, [page]);
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
                    <Pagination pageData={pageData} setPage={setPage}/>

                </div>
            </section>
          )}
        </LayoutMaster>
    );
}

export default Room;
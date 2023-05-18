import React from 'react';
import LayoutMaster from '../layouts/LayoutMaster';
import PageBanner from '../components/global/PageBanner';
import RoomItem from '../components/room/RoomItem';

function Shop(props) {
    return (
        <LayoutMaster>
            <PageBanner pageTitle="Rooms" pageSubTitle="All Rooms" />
            <section className="body-room-1 ">
                <div className="container">
                    <div className="room-wrap-1">
                        <div className="row">
                            <RoomItem/>
                            <RoomItem/>
                            <RoomItem/>
                            <RoomItem/>
                        </div>
                    </div>
                </div>
            </section>
        </LayoutMaster>
    );
}

export default Shop;
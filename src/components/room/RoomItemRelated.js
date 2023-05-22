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
                        <a href="#">{room.name}</a>
                    </h2>
                    <ul>
                        <li>
                            <i className="fa fa-child" aria-hidden="true" /> Max: 2
                            Person(s)
                        </li>
                        <li>
                            <i className="fa fa-bed" aria-hidden="true" /> Bed:
                            King-size or twin beds
                        </li>
                        <li>
                            <i className="fa fa-eye" aria-hidden="true" /> View: Ocen
                        </li>
                    </ul>
                    <a href={"/RoomDetail/" + room.id}className="btn">
                        VIEW DETAIL
                    </a>
                </div>
            </div>
        </div>
    );
}
export default RoomItemRelated;
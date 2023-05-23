
import React, { useEffect, useState } from "react";
import LayoutMaster from "../layouts/LayoutMaster";
import PageBanner from "../components/global/PageBanner";
import RoomModel from "../models/RoomModel";
import {
  Navigate,
  resolvePath,
  useNavigate,
  useParams,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import RoomItemRelated from "../components/room/RoomItemRelated";
import RoomForm from "../components/room/RoomForm";

function RoomDetail(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(true);
  const [room, setRoom] = useState([]);
  const [relateds, setRelateds] = useState([]);
  const carts = useSelector((state) => state.cart);
  const formattedPrice =
    room?.price?.toLocaleString("vi-VN") || "Price not available";
  useEffect(() => {
    RoomModel.find(id)
      .then((res) => {
        setRoom(res.data.data);
        setLoading(false);
        RoomModel.getRelatedRooms(id)
          .then((res) => {
            setRelateds(res.data.data);
          })
          .catch((err) => {
            throw err;
          });
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  // const handleAddToCart = () => {
  //     const cart = {
  //         id: id,
  //     };
  //     RoomModel.addtocart(cart)
  //         .then((res) => {
  //             Navigate("/Checkout");
  //         });
  // };
  return (
    <LayoutMaster>
      <PageBanner pageTitle="Chi tiết phòng" pageSubTitle="Tận hưởng trải nghiệm sang trọng" />
      {loading ? (
        "Loading.."
      ) : (
        <section className="section-product-detail">
          <div className="container">
            {/* DETAIL */}
            <div className="product-detail margin">
              <div className="row">
                <div className="col-lg-9">
                  {/* LAGER IMGAE */}
                  <div className="wrapper">
                    <div className="gallery3">
                      <div className="gallery__img-block  ">
                        <img
                          src={room.image}
                          alt="images/Product/img-1.jpg"
                          className=""
                        />
                        {/* <img src={room.image} alt="#" /> */}
                      </div>
                      <div className="gallery__controls"></div>
                    </div>
                  </div>
                  {/* END / LAGER IMGAE */}
                </div>
                <div className="col-lg-3">
                  {/* FORM BOOK */}
                  <div className="product-detail_book">
                    <div className="product-detail_total">
                      <img
                        src="/images/Product/icon.png"
                        alt="#"
                        className="icon-logo"
                      />
                      <h1 className="amout">SKYLINE</h1>
                    </div>
					<RoomForm room={room}/>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="product-detail_tab">
              <div className="row">
                <div className="col-md-3">
                  <ul className="product-detail_tab-header">
                    <li className="active">
                      <a href="#amenities" data-toggle="tab">
                        MÔ TẢ
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-9">
                  <div className="product-detail_tab-content tab-content">
                    {/* OVERVIEW */}
                    <div className="tab-pane fade" id="overview">
                      <div className="product-detail_overview">
                        <h1 className="price">
                          <span className="amout">{room.price_format}vnd</span>{" "}
                          /days
                        </h1>
                      </div>
                    </div>
                    <div className="tab-pane fade active in" id="amenities">
                      <div className="product-detail_amenities">
                        <p>{room.description}</p>
                      </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END / TAB */}
                        {/* ANOTHER ACCOMMODATION */}
                        <div className="product-detail">
                            <h2 className="product-detail_title">Another accommodations</h2>
                            <div className="product-detail_content">
                                <div className="row">
                                    {/* ITEM */}
                                    {
                                        relateds.map((related, key) => (
                                            <RoomItemRelated room={related} />
                                        ))}
                                </div>
                            </div>
                        </div>
                        {/* END / ANOTHER ACCOMMODATION */}
                 
            </div>
        
        </section>
      )}
    </LayoutMaster>
  );
}

export default RoomDetail;



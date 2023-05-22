import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import CategoryModel from '../../models/CategoryModel';
import { Link } from 'react-router-dom';
function Room(props) {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        CategoryModel.getAll()
        .then((res) => {
            setCategories(res.data);
            // console.log(res.data);
        })
        .catch((err) => {   
          throw err;
        });
    }, []);
    return (
        <>
            <section className="rooms">
                <div className="container">
                    <h2 className="title-room">Our Rooms</h2>
                    <div className="outline" />
                    <p className="rooms-p">
                        When you host a party or family reunion, the special celebrations let
                        you streng then bonds with
                    </p>
                    <div className="wrap-rooms">
                   
                        <div className="row">
                        {categories.map((category, key) => (
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 ">
                                <div className="wrap-box">
                                    <Link to={"/category/" + category.id}>
                                        <div className="box-img">
                                            <img
                                                src={category.image}
                                                className="img-responsive"
                                                alt="PLuxury Room"
                                                title="Luxury Room"
                                            />
                                        </div>
                                    </Link>
                                    <div className="rooms-content">
                                        <Link to={"/category/" + category.id}>
                                            <h4 className="sky-h4">{category.name}</h4>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                 
                 ))}
                        </div>
                    </div>
                </div>
                {/* /container */}
            </section>
        </>
    );
}

export default Room;
import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import CategoryModel from '../../models/CategoryModel';
function Room(props) {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        CategoryModel.getAll()
        .then((res) => {
            setCategories(res.data);
          // console.log(res,44 );
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
                                    <div className="box-img">
                                        <img
                                            src="images/Home-1/our-1.jpg"
                                            className="img-responsive"
                                            alt="PLuxury Room"
                                            title="Luxury Room"
                                        />
                                    </div>
                                    <div className="rooms-content">
                                        <h4 className="sky-h4">{category.name}</h4>
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
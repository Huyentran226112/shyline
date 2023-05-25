import React, { useEffect, useState } from 'react';
import CategoryModel from '../../models/CategoryModel';
import { Link } from 'react-router-dom';
function Room(props) {
    const [categories, setCategories] = useState([]);
    const [page, setPage] = useState(1);
    const [pageData, setPageData] = useState({});
    useEffect(() => {
        CategoryModel.getAll()
        .then((res) => {
            setCategories(res.data);
            console.log(res );
        }) 
        .catch((err) => {   
          throw err;
        });
    }, [page]);
    return (
        <>
            <section className="rooms">
                <div className="container">
                    <h2 className="title-room">CÁC HẠNG PHÒNG </h2>
                    <div className="outline" />
                    <p className="rooms-p">
                    Khi bạn tổ chức một bữa tiệc hoặc đoàn tụ gia đình, các lễ kỷ niệm đặc biệt sẽ giúp bạn củng cố và gắn kết với nhau
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
            </section>
        </>
    );
}

export default Room;
import React from 'react';

function PageBanner(props) {
    const {pageTitle,pageSubTitle} = props
    return (
        <>
            <section className="banner-tems text-center">
                <div className="container">
                    <div className="banner-content">
                        <h2>{pageTitle}</h2>
                        <p>{pageSubTitle}</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PageBanner;
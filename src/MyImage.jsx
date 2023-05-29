import React, { useState } from 'react'

const MyImage = ({ imgs = [{ url: " " }] }) => {

    const [mainImg, setMainImg] = useState(imgs[0]);

    return (
        <>
            <div className="myImageSection row">
                <div className="smallImages col-lg-4 col-md-3 col-sm-3 col-3">
                    {imgs.map((currElem, index) => {
                        return (
                            <>
                                <img
                                    src={currElem.url}
                                    alt={currElem.filename}
                                    className='box-image-style img-fluid'
                                    key={index}
                                    // onClick=
                                    onMouseOver={()=> setMainImg(currElem)}
                                />
                                {/* <h1>{currElem.url}</h1> */}
                            </>
                        )
                    })}
                </div>
                <div className="main-image col-lg-8 col-md-9 col-sm-9 col-9">
                    <img className='mainImage ing-fluid' src={mainImg.url} alt={mainImg.filename} />
                </div>
            </div>
        </>
    )
}

export default MyImage

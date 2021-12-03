import React from 'react';

function DetailThumb({ images, imgCurrent, onClickThumbImg }) {
    const handleClickImage = (img) => {
        onClickThumbImg(img);
    };
    return (
        <div className="thumbs">
            {images.map((image, index) => (
                <img
                    className={imgCurrent === image ? "active" : ""}
                    onClick={() => handleClickImage(image)}
                    src={image}
                    alt=""
                    key={index}
                />
            ))}
        </div>
    );
}

export default DetailThumb;
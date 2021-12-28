import React, { useState } from "react";

interface IImg {
    src: string;
    alt: string;
    className?: any,
}

const Img: React.FC<IImg> = (props) => {
    const { src, alt, className } = props
    const [loading, setLoading] = useState<boolean>(true);
    const imageLoaded = () => {
        setLoading(false);
    };

    console.log(className)

    return (
        <>
            <div style={{display: loading ? "block" : "none"}}>loading image</div>
            <div>
                <img 
                    alt={alt}
                    src={src}
                    className={className} 
                    onLoad={imageLoaded} />
            </div>
        </>
    );
};

export default Img;
import React, { useState } from "react";
import cx from "classnames";

import { Loader } from "src/components";

import styles from "./Img.module.css";

interface IImg {
    src: string;
    alt: string;
    className?: any;
}

const Img: React.FC<IImg> = (props) => {
    const { src, alt, className } = props;
    const [loading, setLoading] = useState<boolean>(true);
    const imageLoaded = () => {
        setLoading(false);
    };

    return (
        <div className={styles.img}>
            <div
                className={cx({
                    [styles.imgHide]: !loading
                })}
            >
                <Loader />
            </div>

            <div>
                <img
                    alt={alt}
                    src={src}
                    className={className}
                    onLoad={imageLoaded}
                />
            </div>
        </div>
    );
};

export default Img;

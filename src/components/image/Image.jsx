import { useRef, useState } from "react";
import styles from "./Image.module.css";
import cn from "classnames";

const Image = ({ src, alt, style }) => {
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);
  const fallbackURL = "https://placehold.co/500x750/424242/232323?text=No+image&font=roboto";

  const classnames = cn({
    [styles.figure]: true,
    loading: isLoading,
  });

  const showImage = () => setIsLoading(false);
  const handleError = () => ref.current.src = fallbackURL;

  return (
    <figure style={style} className={classnames}>
      <img
        ref={ref}
        data-testid="poster"
        src={src}
        alt={alt}
        onError={handleError}
        onLoad={showImage}
      />
    </figure>
  );
};

export default Image;

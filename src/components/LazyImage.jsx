import { useEffect, useRef, useState } from "react";

function LazyImage({
    src,
    alt,
    className,
    width,
    height,
    loading = "lazy",
    decoding = "async",
    fetchPriority,
    onLoad,
    onError,
    style,
    ...props
}) {
    const imageRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
        setHasError(false);
    }, [src]);

    useEffect(() => {
        if (imageRef.current?.complete && imageRef.current.naturalWidth > 0) {
            setIsLoaded(true);
        }
    }, [src]);

    const handleLoad = (event) => {
        setIsLoaded(true);
        setHasError(false);
        onLoad?.(event);
    };

    const handleError = (event) => {
        setIsLoaded(true);
        setHasError(true);
        onError?.(event);
    };

    return (
        <img
            ref={imageRef}
            src={src}
            alt={alt}
            className={className}
            width={width}
            height={height}
            loading={loading}
            decoding={decoding}
            fetchPriority={fetchPriority}
            onLoad={handleLoad}
            onError={handleError}
            style={{
                filter: !isLoaded ? "blur(18px)" : "blur(0)",
                transform: !isLoaded ? "scale(1.03)" : "scale(1)",
                opacity: hasError ? 0.7 : 1,
                transition: "filter 0.45s ease, transform 0.45s ease, opacity 0.3s ease",
                ...style,
            }}
            {...props}
        />
    );
}

export default LazyImage;

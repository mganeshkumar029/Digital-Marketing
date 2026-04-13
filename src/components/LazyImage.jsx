function LazyImage({
    src,
    alt,
    className,
    width,
    height,
    loading = "lazy",
    decoding = "async",
    fetchPriority,
    ...props
}) {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            width={width}
            height={height}
            loading={loading}
            decoding={decoding}
            fetchPriority={fetchPriority}
            {...props}
        />
    );
}

export default LazyImage;

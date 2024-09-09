function Button({ imgSrc, alt, value, onClick }) {
  return (
    <>
      <img
        className="choice"
        src={imgSrc}
        alt={alt}
        value={value}
        onClick={onClick}
      />
    </>
  );
}

export default Button;

export default function Error({ children }) {
  return (
    <div
      className="invalid-feedback flex justify-left "
      style={{
        marginTop: "-12px",
        display: "flex",
        justifyContent: "items-start",
        marginBottom: "6px",
      }}
    >
      {children}
    </div>
  );
}

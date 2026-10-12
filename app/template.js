export default function Template({ children }) {
  return (
    <>
      {children}
      <div className="page-veil" aria-hidden="true" />
    </>
  );
}
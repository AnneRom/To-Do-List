const Footer = () => {
  return (
    <footer
      style={{
        background: "#f3f3f3",
        padding: "1rem",
        textAlign: "center",
        borderTop: "1px solid #ddd",
      }}
    >
      <p>© {new Date().getFullYear()} My React Shop</p>
    </footer>
  );
};

export default Footer;
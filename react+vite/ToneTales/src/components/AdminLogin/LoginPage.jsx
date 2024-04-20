import { Container, Form, Button } from "react-bootstrap";
import ToneTalesLogo from "../../assets/ToneTalesLogo.jpg"

function AdminLogin() {
  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          padding: "50px",
          margin: "auto",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Form>
          <img
            src={ToneTalesLogo}
            alt=""
            style={{
              marginBottom: "8px",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
              width: "250px",
              height: "80px",
            }}
          />
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "normal",
              textAlign: "center",
              marginBottom: "1.5rem",
            }}
          >
            Please sign in
          </h1>

          <Form.Group className="mb-3" controlId="floatingInput">
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="floatingPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Check
            className="text-start my-3"
            type="checkbox"
            id="flexCheckDefault"
          >
            <Form.Check.Input type="checkbox" value="remember-me" />
            <Form.Check.Label>Remember me</Form.Check.Label>
          </Form.Check>
          <Button
            variant="primary"
            style={{
              width: "100%",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
            }}
            type="submit"
          >
            Sign in
          </Button>
          <p
            className="mt-5 mb-3 text-body-secondary"
            style={{ textAlign: "center" }}
          >
            © 2023–2024
          </p>
        </Form>
      </div>
    </Container>
  );
}

export default AdminLogin;

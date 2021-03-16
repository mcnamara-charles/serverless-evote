import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Header from "../components/header"

export default function Layout({ children, user }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert />
        <Header user={user}/>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

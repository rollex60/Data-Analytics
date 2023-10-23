import Advantages from "./advantages/Advantages"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import Main from "./main/Main"
import PreFooter from "./pre_footer/PreFooter"
import Reviews from "./reviews/Reviews"
// import Reviews from "./reviews/Reviews"

const Layout = () => {
 return (
  <>
  <Header />
  <Advantages />
  <Main />
  <Reviews />
  <PreFooter />
  <Footer />
  </>
 )
}

export default Layout
import React, { Component } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from "../imageFiles/logo.png";
import megaMenu from "../imageFiles/mega-menu.png";
import "../CssComponent/ContactPage.scss";
import smallDog from "../imageFiles/1.png";
import smallRabbit from "../imageFiles/2.png";
import payment from "../imageFiles/payment.png";
import {
  FaRegAddressBook,
  FaRegUser,
  FaHeart,
  FaTimesCircle,
  FaTimes,
  FaBaseballBall,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaCopyright,
} from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import {
  AiOutlineMenu,
  AiOutlineMail,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosCall } from "react-icons/io";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positionState: "absolute",
      popupWidth: "0%",
      iconColor: "unset",
      iconColor2: "unset",
      iconColor3: "unset",
      iconColor4: "unset",
      iconColor5: "unset",
      iconState: "rotate(0deg)",
      accordionHome: "0px",
      iconState2: "rotate(0deg)",
      accordionShop: "0px",
      iconState3: "rotate(0deg)",
      accordionProduct: "0px",
      iconState4: "rotate(0deg)",
      accordionPage: "0px",
      iconState5: "rotate(0deg)",
      accordionBlog: "0px",
      nextone: "0px",
      nextfour: true,
      searchState: BsSearch,
      search: "none",
      shoppingBorder: "0px",
      iconBorder: "none",
      class: "keepPet",
      zero: "0px",
      one: "0px",
      cursor: "point",
      border: "0px",
      border1: "0px",
      two: "0px",
      border2: "0px",
      three: "0px",
      border3: "0px",
    };
    this.showShop = this.showShop.bind(this);
    this.hideShop = this.hideShop.bind(this);
    this.showHome = this.showHome.bind(this);
    this.hideHome = this.hideHome.bind(this);
    this.showPage = this.showPage.bind(this);
    this.hidePage = this.hidePage.bind(this);
    this.showBlog = this.showBlog.bind(this);
    this.hideBlog = this.hideBlog.bind(this);
    this.iconSearch = this.iconSearch.bind(this);
    this.showThem = this.showThem.bind(this);
    this.homeFunction = this.homeFunction.bind(this);
    this.shopFunction = this.shopFunction.bind(this);
    this.productFunction = this.productFunction.bind(this);
    this.pageFunction = this.pageFunction.bind(this);
    this.blogFunction = this.blogFunction.bind(this);
    this.functionPopup = this.functionPopup.bind(this);
    this.functionPopupClose = this.functionPopupClose.bind(this);
    this.goHome = this.goHome.bind(this);
    this.goAbout = this.goAbout.bind(this);
    this.goContact = this.goContact.bind(this);
    this.goFaq = this.goFaq.bind(this);
    this.goLogin = this.goLogin.bind(this);
    this.goRegister = this.goRegister.bind(this);
  }
  componentDidMount() {
    Aos.init({ duration: 2000 });
  }
  goHome() {
    this.props.history.push({
      pathname: "/",
    });
  }
  goAbout() {
    this.props.history.push({
      pathname: "/about",
    });
  }
  goContact() {
    this.props.history.push({
      pathname: "/contact",
    });
  }
  goFaq() {
    this.props.history.push({
      pathname: "/faq",
    });
  }
  goLogin() {
    this.props.history.push({
      pathname: "/login",
    });
  }
  goRegister() {
    this.props.history.push({
      pathname: "/register",
    });
  }
  functionPopup() {
    this.setState({
      popupWidth: "100%",
    });
  }

  functionPopupClose() {
    this.setState({
      popupWidth: "0%",
    });
  }

  homeFunction() {
    if (this.state.accordionHome === "0px") {
      this.setState({
        accordionHome: "300px",
        accordionShop: "0px",
        accordionProduct: "0px",
        accordionPage: "0px",
        accordionBlog: "0px",
        iconState: "rotate(180deg)",
        iconState2: "rotate(0deg)",
        iconState3: "rotate(0deg)",
        iconState4: "rotate(0deg)",
        iconState5: "rotate(0deg)",
        iconColor: "rgb(246, 171, 73)",
        iconColor2: "unset",
        iconColor3: "unset",
        iconColor4: "unset",
        iconColor5: "unset",
      });
    }
    if (this.state.accordionHome === "300px") {
      this.setState({
        accordionHome: "0px",
        iconState: "rotate(0deg)",
        iconColor: "unset",
      });
    }
  }

  shopFunction() {
    if (this.state.accordionShop === "0px") {
      this.setState({
        accordionShop: "300px",
        accordionHome: "0px",
        accordionProduct: "0px",
        accordionPage: "0px",
        accordionBlog: "0px",
        iconState2: "rotate(180deg)",
        iconState: "rotate(0deg)",
        iconState3: "rotate(0deg)",
        iconState4: "rotate(0deg)",
        iconState5: "rotate(0deg)",
        iconColor2: "rgb(246, 171, 73)",
        iconColor: "unset",
        iconColor3: "unset",
        iconColor4: "unset",
        iconColor5: "unset",
      });
    }
    if (this.state.accordionShop === "300px") {
      this.setState({
        accordionShop: "0px",
        iconState2: "rotate(0deg)",
        iconColor2: "unset",
      });
    }
  }

  productFunction() {
    if (this.state.accordionProduct === "0px") {
      this.setState({
        accordionProduct: "300px",
        accordionShop: "0px",
        accordionHome: "0px",
        accordionPage: "0px",
        accordionBlog: "0px",
        iconState3: "rotate(180deg)",
        iconState2: "rotate(0deg)",
        iconState: "rotate(0deg)",
        iconState4: "rotate(0deg)",
        iconState5: "rotate(0deg)",
        iconColor3: "rgb(246, 171, 73)",
        iconColor2: "unset",
        iconColor: "unset",
        iconColor4: "unset",
        iconColor5: "unset",
      });
    }
    if (this.state.accordionProduct === "300px") {
      this.setState({
        accordionProduct: "0px",
        iconState3: "rotate(0deg)",
        iconColor3: "unset",
      });
    }
  }

  pageFunction() {
    if (this.state.accordionPage === "0px") {
      this.setState({
        accordionPage: "300px",
        accordionShop: "0px",
        accordionProduct: "0px",
        accordionHome: "0px",
        accordionBlog: "0px",
        iconState4: "rotate(180deg)",
        iconState2: "rotate(0deg)",
        iconState3: "rotate(0deg)",
        iconState: "rotate(0deg)",
        iconState5: "rotate(0deg)",
        iconColor4: "rgb(246, 171, 73)",
        iconColor2: "unset",
        iconColor3: "unset",
        iconColor: "unset",
        iconColor5: "unset",
      });
    }
    if (this.state.accordionPage === "300px") {
      this.setState({
        accordionPage: "0px",
        iconState4: "rotate(0deg)",
        iconColor4: "unset",
      });
    }
  }

  blogFunction() {
    if (this.state.accordionBlog === "0px") {
      this.setState({
        accordionBlog: "300px",
        accordionShop: "0px",
        accordionProduct: "0px",
        accordionPage: "0px",
        accordionHome: "0px",
        iconState5: "rotate(180deg)",
        iconState2: "rotate(0deg)",
        iconState3: "rotate(0deg)",
        iconState4: "rotate(0deg)",
        iconState: "rotate(0deg)",
        iconColor5: "rgb(246, 171, 73)",
        iconColor2: "unset",
        iconColor3: "unset",
        iconColor4: "unset",
        iconColor: "unset",
      });
    }
    if (this.state.accordionBlog === "300px") {
      this.setState({
        accordionBlog: "0px",
        iconState5: "rotate(0deg)",
        iconColor5: "unset",
      });
    }
  }

  showThem() {
    if (this.state.nextfour === true) {
      this.setState({
        nextone: "450px",
        shoppingBorder: "1px solid rgba(128, 128, 128, 0.438)",
        nextfour: false,
      });
    }
    if (this.state.nextfour === false) {
      this.setState({
        nextone: "0px",
        shoppingBorder: "0px",
        nextfour: true,
      });
    }
  }
  iconSearch() {
    if (this.state.searchState === BsSearch) {
      this.setState({
        search: "inline-block",
        iconBorder: "2px solid rgba(128, 128, 128, 0.438)",
        searchState: FaTimes,
      });
    }
    if (this.state.searchState === FaTimes) {
      this.setState({
        search: "none",
        iconBorder: "none",
        searchState: BsSearch,
      });
    }
  }

  showHome() {
    this.setState({
      one: "200px",
      border: "2px solid rgb(246, 171, 73)",
    });
  }
  hideHome() {
    this.setState({
      one: "0px",
      border: "0px",
    });
  }
  showShop() {
    this.setState({
      zero: "400px",
      cursor: "pointer",
      border1: "2px solid rgb(246, 171, 73)",
    });
  }
  hideShop() {
    this.setState({
      cursor: "point",
      zero: "0px",
      border1: "0px",
    });
  }
  showPage() {
    this.setState({
      two: "300px",
      border2: "2px solid rgb(246, 171, 73)",
    });
  }
  hidePage() {
    this.setState({
      two: "0px",
      border2: "0px",
    });
  }
  showBlog() {
    this.setState({
      three: "300px",
      border3: "2px solid rgb(246, 171, 73)",
    });
  }
  hideBlog() {
    this.setState({
      three: "0px",
      border3: "0px",
    });
  }
  render() {
    return (
      <div className="pageContact">
        <div className="popupParent" style={{ width: this.state.popupWidth }}>
          <div className="popupTimes" onClick={this.functionPopupClose}>
            {" "}
            <FaTimes />
          </div>
          <div className="popupChild">
            <div className="inputParent">
              {" "}
              <input
                className="popupInput"
                placeholder="Search product..."
              />{" "}
              <BsSearch className="popupSearch" />
            </div>
            <div className="accordionParent">
              <div className="homeParent">
                <div
                  className="accordionHome"
                  style={{ color: this.state.iconColor }}
                  onClick={this.homeFunction}
                >
                  <p onClick={this.goHome}>Home</p>
                  <IoIosArrowDown
                    className="accordionIcon"
                    style={{ transform: this.state.iconState }}
                  />
                </div>
                <div
                  className="homeTextDiv"
                  style={{ maxHeight: this.state.accordionHome }}
                >
                  <p>Home one</p>
                  <p>Home two</p>
                  <p>Home three</p>
                  <p>Home four</p>
                </div>
              </div>
              <div className="shopParent">
                <div
                  className="accordionShop"
                  style={{ color: this.state.iconColor2 }}
                  onClick={this.shopFunction}
                >
                  <p>Shop</p>
                  <IoIosArrowDown
                    className="accordionIcon2"
                    style={{ transform: this.state.iconState2 }}
                  />
                </div>
                <div
                  className="shopText"
                  style={{ maxHeight: this.state.accordionShop }}
                >
                  <p>Shop Grid</p>
                  <p>Shop Left Sidebar</p>
                  <p>Shop Right Sidebar</p>
                  <p>Shop List Fullwidth</p>
                  <p>Shop List Left Sidebar</p>
                  <p>Shop List Right Sidebar</p>
                </div>
              </div>

              <div className="productParent">
                <div
                  className="accordionProduct"
                  style={{ color: this.state.iconColor3 }}
                  onClick={this.productFunction}
                >
                  <p>Product</p>
                  <IoIosArrowDown
                    className="accordionIcon3"
                    style={{ transform: this.state.iconState3 }}
                  />
                </div>
                <div
                  className="productText"
                  style={{ maxHeight: this.state.accordionProduct }}
                >
                  <p>Single Product</p>
                  <p>Single Product Sale</p>
                  <p>Single Product Group</p>
                  <p>Single Product Normal</p>
                  <p>Single Product Affiliate</p>
                  <p>Single Product Slider</p>
                </div>
              </div>

              <div className="pageParent">
                <div
                  className="accordionPage"
                  style={{ color: this.state.iconColor4 }}
                  onClick={this.pageFunction}
                >
                  <p>Pages</p>
                  <IoIosArrowDown
                    className="accordionIcon4"
                    style={{ transform: this.state.iconState4 }}
                  />
                </div>
                <div
                  className="pageText"
                  style={{ maxHeight: this.state.accordionPage }}
                >
                  <p onClick={this.goAbout}>About Us</p>
                  <p onClick={this.goContact}>Contact</p>
                  <p onClick={this.goFaq}>Faq</p>
                  <p>Error 404</p>
                  <p>My Account</p>
                  <p>
                    <span onClick={this.goLogin}>Login</span> |{" "}
                    <span onClick={this.goRegister}>Register</span>
                  </p>
                </div>
              </div>

              <div className="blogParent">
                <div
                  className="accordionBlog"
                  style={{ color: this.state.iconColor5 }}
                  onClick={this.blogFunction}
                >
                  <p>Blog</p>
                  <IoIosArrowDown
                    className="accordionIcon5"
                    style={{ transform: this.state.iconState5 }}
                  />
                </div>
                <div
                  className="blogText"
                  style={{ maxHeight: this.state.accordionBlog }}
                >
                  <p>Blog</p>
                  <p>Blog Left Sidebar</p>
                  <p>Blog Right Sidebar</p>
                  <p>Blog Details</p>
                  <p>Blog Details Sidebar</p>
                </div>
              </div>
              <div className="aboutParent" onClick={this.goAbout}>
                About
              </div>
              <div className="contactParent" onClick={this.goContact}>
                Contact
              </div>
              <div className="languageParent">
                <div>
                  <span className="language">Language</span>:
                </div>{" "}
                <div className="englishContainer">
                  English
                  <span>
                    <IoIosArrowDown className="languageIcon" />
                  </span>
                </div>
              </div>
              <div className="moneyParent">
                <div>
                  <span className="money">Currency</span>:
                </div>{" "}
                <div className="moneyContainer">
                  USD
                  <span>
                    <IoIosArrowDown className="moneyIcon" />
                  </span>
                </div>
              </div>
            </div>
            <div className="callParent">
              <p>
                <IoIosCall className="callIcon" /> +234 8075721644{" "}
              </p>
            </div>
            <div>
              <p>
                <AiOutlineMail className="mailIcon" /> js4428900@gmail.com
              </p>
            </div>
            <div>
              <p>
                {" "}
                <AiOutlineClockCircle className="clockIcon" /> Monday-Sunday
                9.00-18.00
              </p>
            </div>
          </div>
        </div>
        <div className="buyNow">Welcome To our shop !</div>
        <div className="fixedDiv">
          <img src={logo} alt="" className="amber" />
          <div className="divSearch">
            <div className="theTotalIcon">
              <div>
                <FaRegUser className="userAlt2" />
              </div>
              <div>
                <this.state.searchState
                  className="mainSearchIcon"
                  onClick={this.iconSearch}
                />
                <div
                  className="divSearchChild"
                  style={{ border: this.state.iconBorder }}
                >
                  <input
                    type="text"
                    placeholder="Search Our Store"
                    className="inputSearch"
                    style={{ display: this.state.search }}
                  />
                  <button
                    className="searchButton"
                    style={{ display: this.state.search }}
                  >
                    <BsSearch className="search" onClick={this.iconSearch} />
                  </button>
                </div>
              </div>
              <div>
                <HiOutlineShoppingBag className="outlineShopping2" />
              </div>
              <div>
                <FaRegUser className="userAlt" />
              </div>
              <div>
                <AiOutlineMenu
                  className="menuIcon"
                  onClick={this.functionPopup}
                />
              </div>
              <div className="outlineShopping">
                <HiOutlineShoppingBag
                  className="shoppingBag"
                  onClick={this.showThem}
                />
                <div
                  className="shoppingListParent"
                  style={{
                    maxHeight: this.state.nextone,
                    border: this.state.shoppingBorder,
                  }}
                >
                  <div className="shoppingList">
                    <img src={smallDog} alt="" className="smallDog" />
                    <div className="dogText">
                      <p className="basicTraining">Basic Dog Training</p>
                      <p className="basicQty">
                        Qty:<span className="oneColor">1</span>
                      </p>
                      <p className="basicMoney">70.00$</p>
                    </div>
                    <FaTimesCircle className="timesIcon" />
                  </div>
                  <hr className="line" />
                  <div className="shoppingList2">
                    <img src={smallRabbit} alt="" className="smallRabbit" />
                    <div className="dogText">
                      <p className="basicTraining">Basic Dog Training</p>
                      <p className="basicQty">
                        Qty:<span className="oneColor">1</span>
                      </p>
                      <p className="basicMoney">70.00$</p>
                    </div>
                    <FaTimesCircle className="timesIcon" />
                  </div>
                  <hr className="line" />
                  <div>
                    <p className="twohundredParent">
                      Total<span className="twohundred">140$</span>
                    </p>
                  </div>
                  <hr className="line" />
                  <button className="cartButton">VIEW CART</button>
                  <button className="checkoutButton">CHECKOUT</button>
                </div>
              </div>
            </div>
          </div>

          <div className="listItem">
            <div className="home" onMouseLeave={this.hideHome}>
              <p
                className="showHome"
                onClick={this.goHome}
                onMouseEnter={this.showHome}
              >
                HOME
              </p>
              <div
                className="div"
                style={{
                  maxHeight: this.state.one,
                  borderBottom: this.state.border,
                }}
              >
                <u1 className="homeNot">
                  <li className="homeLi1">Home 1</li>
                  <li className="homeLi2">Home 2</li>
                  <li className="homeLi3">Home 3</li>
                  <li className="homeLi4">Home 4</li>
                </u1>
              </div>
            </div>
            <div className="shop" onMouseLeave={this.hideShop}>
              <p className="showShop" onMouseEnter={this.showShop}>
                SHOP
              </p>
              <div
                className="totalDiv"
                style={{
                  maxHeight: this.state.zero,
                  borderBottom: this.state.border1,
                }}
              >
                <div className="divu1">
                  <u1 className="u1">
                    <li className="head1">SHOP LAYOUT</li>
                    <div className="pointer1">
                      <li className="shop1">Shop Grid</li>
                      <li className="shop2">Left Sidebar</li>
                      <li className="shop3">Right Sidebar</li>
                      <li className="shop4">List Fullwidth</li>
                      <li className="shop5">List Left Sidebar</li>
                      <li className="shop6">List Right Sidebar</li>
                    </div>
                  </u1>
                  <u1 className="u2">
                    <li className="head2">PRODUCT LAYOUT</li>
                    <div className="pointer2">
                      <li className="shop7">Single Product</li>
                      <li className="shop8">Single Product Sale</li>
                      <li className="shop9">Single Product Variable</li>
                      <li className="shop10">Single Product Countdown</li>
                      <li className="shop11">Single Product Affiliate</li>
                      <li className="shop12">Single Product Slider</li>
                    </div>
                  </u1>
                  <u1 className="u3">
                    <li className="head3">OTHER PAGES</li>
                    <div className="pointer3">
                      <li className="shop13">My Account</li>
                      <li className="shop14">
                        <span classname="theLog" onClick={this.goLogin}>
                          Login
                        </span>
                        |
                        <span className="theReg" onClick={this.goRegister}>
                          Register
                        </span>
                      </li>
                      <li className="shop15">Wishlist</li>
                      <li className="shop16">Cart</li>
                      <li className="shop17">Checkout</li>
                      <li className="shop18">Compare</li>
                    </div>
                  </u1>
                </div>
                <img src={megaMenu} alt="" className="megaMenu" />
              </div>
            </div>
            <div className="page" onMouseLeave={this.hidePage}>
              <p className="showPage" onMouseEnter={this.showPage}>
                PAGES
              </p>
              <div
                className="pageDiv"
                style={{
                  maxHeight: this.state.two,
                  borderBottom: this.state.border2,
                }}
              >
                <u1 className="pageNot">
                  <li className="pageLi1" onClick={this.goAbout}>
                    About Us
                  </li>
                  <li className="pageLi2" onClick={this.goContact}>
                    Contact Us
                  </li>
                  <li className="pageLi3">Error 404</li>
                  <li className="pageLi4" onClick={this.goFaq}>
                    FAQ
                  </li>
                  <li className="pageLi5" onClick={this.goLogin}>
                    Login
                  </li>
                  <li className="pageLi6" onClick={this.goRegister}>
                    Register
                  </li>
                </u1>
              </div>
            </div>
            <div className="blog" onMouseLeave={this.hideBlog}>
              <p className="showBlog" onMouseEnter={this.showBlog}>
                BLOG
              </p>
              <div
                className="blogDiv"
                style={{
                  maxHeight: this.state.three,
                  borderBottom: this.state.border3,
                }}
              >
                <u1 className="blogNot">
                  <li className="blogLi1">Blog</li>
                  <li className="blogLi2">Blog Left Sidebar</li>
                  <li className="blogLi3">Blog Right Sidebar</li>
                  <li className="blogLi4">Blog Details</li>
                  <li className="blogLi5">Blog Details Sidebar</li>
                </u1>
              </div>
            </div>
            <p className="about" onClick={this.goAbout}>
              ABOUT
            </p>
            <p className="contact" onClick={this.goContact}>
              CONTACT
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="aboutUs">
          <p className="aboutText">CONTACT US</p>
          <p className="homeText">Home - Contact Us</p>
        </div>
        <div data-aos="fade-up" className="completeDiv">
          <div className="contactParent1">
            <p className="getTouch">GET IN TOUCH</p>
            <div className="twoDivParent">
              <div className="twoDiv">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="twoDivChild1"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="twoDivChild2"
                />
              </div>
              <div>
                <input type="text" className="child3" placeholder="Subject" />
              </div>
              <div>
                <textarea placeholder="Message" className="textArea" />
              </div>
            </div>
            <button className="twoDivButton">SEND MESSAGE</button>
          </div>
          <div className="contactParent2">
            <p className="contactUs">CONTACT US</p>
            <p className="contactUsText">
              Claritas est etiam processus dynamicus, qui sequitur mutationem
              consuetudium lectorum. Mirum est notare quam littera gothica, quam
              nunc putamus parum claram anteposuerit litterarum formas human.
            </p>
            <div className="addressParent">
              <div className="addressParent2">
                <FaRegAddressBook className="addressBookIcon" />
                <p className="addressChild">12,Odim Village,Nsukka,Enugu.</p>
              </div>
            </div>
            <div className="callParent">
              <div className="callParent2">
                <IoIosCall className="ioCallIcon" />
                <p className="callChild">+234 80-757-216-44</p>
              </div>
            </div>
            <div className="emailParent">
              <div className="emailParent2">
                <AiOutlineMail className="aiMailIcon" />
                <p className="emailChild">js4428900@gmail.com</p>
              </div>
            </div>
            <p className="working">Working Hours</p>
            <p>Monday - Saturday: 8.00AM - 22.00PM</p>
          </div>
        </div>
        <div className="footer">
          <div data-aos="fade-up" className="aboutIcon">
            <p className="iconAbout">ABOUT US</p>
            <p className="iconWe">
              We are known for delivering all kind of animals to
              <br /> your doorstep at a very affordable price and we
              <br /> offer a very affordable discount
            </p>
            <div className="faIcons">
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
              <FaSkype />
              <FaBaseballBall />
            </div>
          </div>
          <div data-aos="fade-up" className="youOne">
            <p className="useful">USEFUL LINKS</p>
            <div className="help">
              <p className="help1">Help & Contact Us</p>
              <p className="help2">Returns & Refunds</p>
              <p className="help3">Online Store</p>
              <p className="help4">Terms </p>
            </div>
          </div>
          <div data-aos="fade-up" className="youTwo">
            <p className="unuseful">HELP</p>
            <div className="attack">
              <p className="attack1">Wishlist</p>
              <p className="attack2">Pricing Plans</p>
              <p className="attack3">Order Traking</p>
              <p className="attack4">Returns </p>
            </div>
          </div>
          <div data-aos="fade-up" className="newsletter">
            <p className="news">SEND NEWSLETTER</p>
            <p className="subscribe">
              Subscribe to our newsletter and get 10%
              <br /> off your purchase
            </p>
            <div className="allEmail">
              <input
                type="email"
                placeholder="js4428900@gmail.com"
                className="email"
              />
              <button className="button1">SEND</button>
            </div>
          </div>
        </div>
        <div className="copyrightDiv">
          <p className="pCopyright">
            {" "}
            <FaCopyright className="copyright" /> 2022{" "}
            <span className="amb">Amber</span> Made With{" "}
            <FaHeart className="heart" /> by{" "}
            <span className="theme2">HasThemes</span>{" "}
          </p>
          <img src={payment} alt="" className="payment" />
        </div>
      </div>
    );
  }
}

export default ContactPage;

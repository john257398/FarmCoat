import React, { Component } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../CssComponent/HomePage.scss";
import logo from "../imageFiles/logo.png";
import smallDog from "../imageFiles/1.png";
import smallRabbit from "../imageFiles/2.png";
import megaMenu from "../imageFiles/mega-menu.png";
import firstDog from "../imageFiles/1(2).png";
import secondDog from "../imageFiles/2(2).png";
import rabbit1 from "../imageFiles/1(1).png";
import dog from "../imageFiles/3(1).png";
import rabbit2 from "../imageFiles/4(1).png";
import parrot from "../imageFiles/5(1).png";
import fish1 from "../imageFiles/6.png";
import fish2 from "../imageFiles/7.png";
import dog2 from "../imageFiles/8.png";
import rabbit3 from "../imageFiles/2(1).png";
import animal1 from "../imageFiles/3.png";
import animal2 from "../imageFiles/4.png";
import animal3 from "../imageFiles/5.png";
import bigRabbit from "../imageFiles/9.png";
import gradient1 from "../imageFiles/gradient1.jpg";
import gradient2 from "../imageFiles/gradient2.jpg";
import gradient3 from "../imageFiles/gradient3.jpg";
import payment from "../imageFiles/payment.png";
import {
  FaRegUser,
  FaHeart,
  FaTimesCircle,
  FaTimes,
  FaRegStar,
  FaStarHalfAlt,
  FaStar,
  FaBaseballBall,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaCopyright,
  FaCartPlus,
  FaHeadset,
  FaPoll,
} from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import {
  AiOutlineMenu,
  AiOutlineMail,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosCall } from "react-icons/io";
import Cristal from "../imageFiles/2(3).png";
import Jonathan from "../imageFiles/1(3).png";

class HomePage extends Component {
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
      days: parseInt("1430", 10),
      hours: parseInt("10", 10),
      mins: parseInt("23", 10),
      secs: parseInt("59", 10),
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
    setInterval(() => {
      this.setState({
        secs: this.state.secs - 1,
      });
      if (this.state.secs === -1) {
        this.setState({
          mins: this.state.mins - 1,
          secs: parseInt("59", 10),
        });
      }
      if (this.state.mins === -1) {
        this.setState({
          hours: this.state.hours - 1,
        });
      }
      if (this.state.hours === -1) {
        this.setState({
          days: this.state.days - 1,
        });
      }
    }, 1000);
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
        nextone: "600px",
        nextfour: false,
      });
    }
    if (this.state.nextfour === false) {
      this.setState({
        nextone: "0px",
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
      <div className="pageOne">
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
        <div className="buyNow">Welcome To our Shop!</div>
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
                  style={{ maxHeight: this.state.nextone }}
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
                  <li className="pageLi6" onClick={this.goAbout}>
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

        <div className="sliderDogs">
          <div
            className="insideImage"
            style={{ position: this.state.positionState }}
          >
            <p data-aos="fade-up" className={this.state.class}>
              We keep pets for pleasure
            </p>
            <p data-aos="fade-up" data-aos-delay="700" className="vitamins">
              Vitamins For all Pets
            </p>
            <p data-aos="fade-up" data-aos-delay="1000" className="chewing">
              we know your concerns when you are looking for a chewing treat for
              your dog
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1300"
              className="shopNow"
            >
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="freeDiv">
          <div data-aos="flip-up" data-aos-duration="1000" className="divOne">
            <FaCartPlus className="rectangle1" />
            <p className="freeCapital">FREE SHIPPING</p>
            <p className="freeSmall">Free shipping on all order</p>
          </div>
          <div data-aos="flip-up" data-aos-duration="1000" className="divOne">
            <FaHeadset className="rectangle1" />
            <p className="freeCapital">ONLINE SUPPORT</p>
            <p className="freeSmall">Online live support 24/7</p>
          </div>
          <div data-aos="flip-up" data-aos-duration="1000" className="divOne">
            <FaPoll className="rectangle1" />
            <p className="freeCapital">MONEY RETURN</p>
            <p className="freeSmall">Back guarantee under 5 days</p>
          </div>
        </div>
        <div data-aos="fade-up" className="bestsellerDiv">
          <div>
            <p className="best">Bestseller</p>
          </div>
          <div>
            <p className="sales">Sales popup</p>
          </div>
          <div className="top">
            <p>Top collection</p>
          </div>
        </div>
        <div className="correctAos">
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="totalPet1"
          >
            <div className="totalRabbit1">
              <img src={rabbit1} className="rabbit1" alt="" />
              <div className="smallDiv">
                <h4 className="animalAlbum">An Animal Album</h4>
                <div className="iconDiv">
                  <FaRegStar className="containIcon1" />
                  <FaRegStar className="containIcon2" />
                  <FaRegStar className="containIcon3" />
                  <FaRegStar className="containIcon4" />
                  <FaRegStar className="containIcon5" />
                </div>
                <p className="eighty">
                  $80.50 <span className="eightyFive">$85.50</span>
                </p>
              </div>
            </div>
            <div className="totalRabbit2">
              <img src={dog} className="dog" alt="" />
              <div className="smallDiv1">
                <h4 className="youNeed">Wait,You Need This</h4>
                <div className="iconDiv1">
                  <FaStar className="containIcon6" />
                  <FaStar className="containIcon7" />
                  <FaStar className="containIcon8" />
                  <FaStarHalfAlt className="containIcon9" />
                  <FaRegStar className="containIcon10" />
                </div>
                <p className="ninety">$90.00</p>
              </div>
            </div>
            <div className="totalRabbit3">
              <img src={rabbit2} className="rabbit2" alt="" />
              <div className="smallDiv2">
                <h4 className="foodCorner">Pet Food Corner</h4>
                <div className="iconDiv2">
                  <FaStar className="containIcon11" />
                  <FaStar className="containIcon12" />
                  <FaStarHalfAlt className="containIcon13" />
                  <FaRegStar className="containIcon14" />
                  <FaRegStar className="containIcon15" />
                </div>
                <p className="oneFive">$105.00</p>
              </div>
            </div>
            <div className="totalRabbit4">
              <img src={parrot} className="parrot" alt="" />
              <div className="smallDiv3">
                <h4 className="petLeave">Pet Leaving House</h4>
                <div className="iconDiv3">
                  <FaStar className="containIcon16" />
                  <FaStar className="containIcon17" />
                  <FaStar className="containIcon18" />
                  <FaStarHalfAlt className="containIcon19" />
                  <FaRegStar className="containIcon20" />
                </div>
                <p className="fortySeven">$47.50</p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="totalPet2"
          >
            <div className="totalRabbit5">
              <img src={fish1} className="fish1" alt="" />{" "}
              <div className="smallDiv4">
                <h4 className="leaveHouse">Pet Leaving House</h4>
                <div className="iconDiv4">
                  <FaStar className="containIcon21" />
                  <FaStarHalfAlt className="containIcon22" />
                  <FaRegStar className="containIcon23" />
                  <FaRegStar className="containIcon24" />
                  <FaRegStar className="containIcon25" />
                </div>
                <p className="fiftyEight">
                  $58.50
                  <span className="sixtyTwo">
                    <underline>$62.85</underline>
                  </span>
                </p>
              </div>
            </div>
            <div className="totalRabbit6">
              <img src={fish2} className="fish2" alt="" />
              <div className="smallDiv5">
                <h4 className="theTesting">This is the testing</h4>
                <div className="iconDiv5">
                  <FaStar className="containIcon26" />
                  <FaStar className="containIcon27" />
                  <FaStar className="containIcon28" />
                  <FaStar className="containIcon29" />
                  <FaStar className="containIcon30" />
                </div>
                <p className="seventyEight">$78.50</p>
              </div>
            </div>
            <div className="totalRabbit7">
              <img src={dog2} className="dog2" alt="" />
              <div className="smallDiv6">
                <h4 className="dogTraining">Basic Dog Training</h4>
                <div className="iconDiv6">
                  <FaStar className="containIcon31" />
                  <FaRegStar className="containIcon32" />
                  <FaRegStar className="containIcon33" />
                  <FaRegStar className="containIcon34" />
                  <FaRegStar className="containIcon35" />
                </div>
                <p className="fiftyFive">$55.00</p>
              </div>
            </div>
            <div className="totalRabbit8">
              <img src={rabbit3} className="rabbit3" alt="" />
              <div className="smallDiv7">
                <h4 className="forLife">Animal For Life</h4>
                <div className="iconDiv7">
                  <FaStar className="containIcon36" />
                  <FaStar className="containIcon37" />
                  <FaStar className="containIcon38" />
                  <FaStarHalfAlt className="containIcon39" />
                  <FaRegStar className="containIcon40" />
                </div>
                <p className="seventyFive">
                  $75.50{" "}
                  <span className="eightyTwo">
                    <underline>$82.85</underline>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="firstDogDiv">
          <img src={firstDog} alt="" className="firstDog" />
          <img src={secondDog} alt="" className="secondDog" />
        </div>
        <h1 data-aos="fade-up" className="deal">
          Deal Of The Week
        </h1>
        <div data-aos="fade-up" className="allDiv">
          <div className="bigRabbitDiv">
            <img src={bigRabbit} className="bigRabbit" alt="" />
          </div>
          <div className="allAnimalDiv">
            <div className="animalAlbumChild">
              <p className="anAlbum">An Animal Album</p>
              <div className="iconDiv8">
                <FaStar className="containIcon41" />
                <FaStar className="containIcon42" />
                <FaStar className="containIcon43" />
                <FaStar className="containIcon44" />
                <FaRegStar className="containIcon45" />
              </div>
              <p className="eightyDollar">
                $80.50<span className="spanDollar">$85.80</span>
              </p>
            </div>
            <p className="aboutDog">
              This white dog is one of the rarest dog in the world right now,It
              has very good smelling abilities.It is very beautiful and kind to
              all humans in general.It is also able to bark when necessary so it
              is very good in security and catching criminals.It is also quite
              cheap.
            </p>
            <div className="allCount">
              <div className="firstCount">
                <p className="twoFive">{this.state.days}</p>
                <p className="line1"></p>
                <p className="days">Days</p>
              </div>
              <div className="secondCount">
                <p className="zeroFour">{this.state.hours}</p>
                <p className="line2"></p>
                <p className="hours">Hours</p>
              </div>
              <div className="thirdCount">
                <p className="twoThree">{this.state.mins}</p>
                <p className="line3"></p>
                <p className="mins">Mins</p>
              </div>
              <div className="lastCount">
                <p className="fiveZero">{this.state.secs}</p>
                <p className="line4"></p>
                <p className="secs">Secs</p>
              </div>
            </div>
            <p className="shopCount">SHOP NOW</p>
          </div>
        </div>
        <div className="animalDiv">
          <div data-aos="fade-right" className="animal1Div">
            <img src={animal1} className="animal1" alt="" />
          </div>
          <div data-aos="fade-in" className="animal2Div">
            <img src={animal2} className="animal2" alt="" />
          </div>
          <div data-aos="fade-left" className="animal3Div">
            <img src={animal3} className="animal3" alt="" />
          </div>
        </div>
        <Carousel data-aos="fade-up" autoPlay infiniteLoop>
          <div className="myCustomers">
            <p className="customer1">
              Amber shop is a very standard shop with all kind of animals.I have
              never been dissapointed since when i started patronising this
              shop.The dog i bought recently from here was one of the rearest
              dog.
            </p>
            <img src={Cristal} alt="" className="cristal" />
            <p className="underCristal1">Cristal Jerry</p>
            <p className="underCristal2">Customer</p>
          </div>
          <div className="myCustomers1">
            <p className="customer2">
              This shop is the best there ever can be in buying of animals,like
              all their activities are just so awesome and it has really
              favoured me a lot.I love cats so much and i usually get exactly
              what i want from this shop.
            </p>
            <img src={Jonathan} alt="" className="Jonathan" />
            <p className="underCristal3">Jonathan John</p>
            <p className="underCristal4">Customer</p>
          </div>
        </Carousel>
        <h1 data-aos="fade-up" className="from">
          From Our Blog
        </h1>
        <div className="gradientDiv">
          <div data-aos="fade-right" className="gradient1Div">
            <div className="relative1">
              <img src={gradient1} className="gradient1" alt="" />
              <div className="gradientImage1"></div>
            </div>
            <p classname="p1">
              By <span className="admin1">Admin</span> - 2, Jan, 2021
            </p>
            <h2 className="h1">How to take care of your fish</h2>
            <p className="takeCare">
              You clean the fish,then apply some medicines if the fish is
              sick,then you give the fish some fish food which makes the fish
              stronger.You also have to make sure the fish is well.
            </p>
            <p className="read1">READ MORE</p>
          </div>
          <div data-aos="fade-in" className="gradient2Div">
            <div className="relative2">
              <img src={gradient2} className="gradient2" alt="" />
              <div className="gradientImage2"></div>
            </div>
            <p classname="p2">
              By <span className="admin2">Admin</span> - 3, Jan, 2021
            </p>
            <h2 className="h2">Find male and female fish</h2>
            <p className="findFish">
              This is one of the most difficult process in taking care of
              fish.You have to check the shape of the mouth to determine it,a
              round shape indicates male while a streamlined shape indicates
              female.
            </p>
            <p className="read2">READ MORE</p>
          </div>
          <div data-aos="fade-left" className="gradient3Div">
            <div className="relative3">
              <img src={gradient3} className="gradient3" alt="" />
              <div className="gradientImage3"></div>
            </div>
            <p classname="p3">
              By <span className="admin3">Admin</span> - 3, Jan, 2021
            </p>
            <h2 className="h3">Tips for taking care of dog</h2>
            <p className="tipDog">
              In taking care of dog,you have to be extra careful because any
              mistake you make can be really dentrimental to the dog.You have to
              bath it everyday.
            </p>
            <p className="read3">READ MORE</p>
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
export default HomePage;

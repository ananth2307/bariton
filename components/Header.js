class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div id="navbar" class="navbar-area">
    <div class="main-nav">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-light">
          <a class="navbar-brand" href="index.html"
            ><img
              src="../images/logo.png"
              class="main-logo"
              alt="logo" /><img
              src="../images/logo.png"
              class="optional-logo"
              alt="logo" /></a
          ><button
            class="navbar-toggler navbar-toggler-right collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="icon-bar top-bar"></span
            ><span class="icon-bar middle-bar"></span
            ><span class="icon-bar bottom-bar"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="index.html"
                  >Home </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html"
                  >About Us </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="services.html"
                  >Services <i class="fas fa-chevron-down"></i
                ></a>
                <ul class="dropdown-menu">
                      <li class="nav-item">
                        <a class="nav-link" href="services-ai.html"
                          >AI & Data Science</a
                        >
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="services-marketing.html"
                          >Marketing Analytics</a
                        >
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="services-bigdata.html"
                          >Big Data Analytics</a
                        >
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="services-customer.html"
                          >Customer Analytics</a
                        >
                      </li>
                    </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" onclick="javascript:void(0)"
                  >Industries <i class="fas fa-chevron-down"></i
                ></a>
                <ul class="dropdown-menu service-menu">
                      <li class="nav-item">
                        <a class="nav-link" href="industry.html#tab1"
                          >Healthcare</a
                        >
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="industry.html#tab2"
                          >Banking & Finance Services</a
                        >
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="industry.html#tab3"
                          >Insurance</a
                        >
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="industry.html#tab4"
                          >Life Science</a
                        >
                      </li>
                    </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="career.html"
                  >career </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
            </ul>
            <div class="others-options">
              <a class="btn btn-primary" href="contact.html"
                >Get in touch</a
              >
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
    `;
  }
}

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="footer-wrap-area pt-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-footer-widget">
                <div class="logo">
                  <a href="../index.html"
                    ><img src="../images/logo-white.png" alt="image"
                  /></a>
                  <p>
                  Sumplus offers state-of-the-art AI solutions which are enterprise-ready and respects the privacy of its users&#39; data. We adhere to the best-in-class data privacy and security protocols.
                  </p>
                </div>
                <ul class="social">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank"
                      ><i class="flaticon-facebook-letter-logo"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank"
                      ><i class="flaticon-twitter"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank"
                      ><i class="flaticon-instagram-logo"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank"
                      ><i class="flaticon-youtube-play-button"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-footer-widget">
                <h3>Services</h3>
                <ul class="footer-services-list">
                  <li>
                    <a href="../services-ai.html"
                      >AI & Data Science</a
                    >
                  </li>
                  <li>
                    <a href="../services-marketing.html"
                      >Marketing Analytics</a
                    >
                  </li>
                  <li>
                    <a href="../services-bigdata.html"
                      >Big Data Analytics</a
                    >
                  </li>
                  <li>
                    <a href="../services-customer.html"
                      >Customer Analytics</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-footer-widget">
                <h3>Link Industries</h3>
                <ul class="quick-links-list">
                <li><a href="index.html">Home</a></li>
                  <li><a href="../about.html">About Us</a></li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="industries.html">Industries</a></li>
                  <li><a href="career.html">Career</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-footer-widget">
                <h3>Contacts</h3>
                <ul class="footer-contact-list">
                  <li>
                    <span>Address:</span>Sum Plus Analytics <br />
                    Plot no 50, 2nd Floor, TNHB Main Road, <br/>
                    Velachery, Chennai - 600 042.
                  </li>
                  <li>
                    <span>Email:</span
                    ><a
                      href="../cdn-cgi/l/email-protection.html"
                      class="__cf_email__"
                      data-cfemail="cdafacbfa4b9a2a38daaa0aca4a1e3aea2a0"
                      >enquiry@sumplus.com </a
                    >
                  </li>
                  <li><span>Phone:</span>+91 98405 59017</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-area">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-6 col-sm-6">
                <p>
                  Copyright ©<!-- -->2023<!-- -->
                  Sum Plus. All Rights Reserved.
                </p>
              </div>
              <!-- <div class="col-lg-6 col-md-6 col-sm-6">
                <ul>
                  <li>
                    <a href="../privacy-policy/index.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="../terms-conditions/index.html"
                      >Terms &amp; Conditions</a
                    >
                  </li>
                </ul>
              </div> -->
            </div>
          </div>
        </div>
        <div class="circle-map">
          <img src="../images/circle-map.png" alt="image" />
        </div>
        <div class="lines">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="footer-wrap-shape-1">
          <img src="../images/home-six/footer/shape-1.png" alt="image" />
        </div>
        <div class="footer-wrap-shape-2">
          <img src="../images/home-six/footer/shape-2.png" alt="image" />
        </div>
        <div class="footer-wrap-shape-3">
          <img src="../images/home-six/footer/shape-3.png" alt="image" />
        </div>
      </footer>
      <div class="preloader">
        <div class="loader">
          <div class="loader-outter"></div>
          <div class="loader-inner"></div>
        </div>
      </div>
      <div class="scroll-to-top"></div>
      `;
  }
}

class Head extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Sumplus Analytics</title>
        <meta name="next-head-count" content="3" />
        <link
          href="https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="../favicon.png" />
        <link rel="stylesheet" href="./css/style.css" data-n-g="" />
        <link rel="stylesheet" href="./css/custom.css" />
        `;
  }
}

//Footer

customElements.define("header-component", Header);
customElements.define("footer-component", Footer);
customElements.define("head-component", Head);

//Tab setup
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.querySelectorAll(".industry-tab-container .tabs-item");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].className = tabcontent[i].className.replace(" animate__fadeIn", "")
  }
  tablinks = document.querySelectorAll(".tabs li");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("current", "");
  }
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).className = document.getElementById(tabName).className + " animate__fadeIn"
  evt.currentTarget.className += "current";  
}

//Accordion
async function handleAccordion(e, accordionContentId) {
  const ele = document.getElementById(accordionContentId);
  const accordions = document.querySelectorAll(".career-section .accordion__button")
  const accordionsCont = document.querySelectorAll(".career-section .accordion__panel")
  for(let i = 0; i < accordions.length; i++) {
      accordions[i].ariaExpanded = "false";
      accordionsCont[i].hidden = true;
  }
  if(e.currentTarget.ariaExpanded === "false") {
    e.currentTarget.ariaExpanded = "true";
    ele.hidden = false;
  } else {
    e.currentTarget.ariaExpanded = "false";
    ele.hidden = true;
  }
}

async function sendEmail() {
  
}
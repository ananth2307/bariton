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
              src="../images/white-logo.png"
              class="main-logo"
              alt="logo" /><img
              src="../images/black-logo.png"
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
                <a class="nav-link" href="index.html#"
                  >Services <i class="fas fa-chevron-down"></i
                ></a>
                <ul class="dropdown-menu">
                      <li class="nav-item">
                        <a class="nav-link" href="service.html"
                          >Services-1</a
                        >
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="service.html"
                          >Services-2</a
                        >
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="service.html"
                          >Services-3</a
                        >
                      </li>
                    </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html#"
                  >Industries <i class="fas fa-chevron-down"></i
                ></a>
                <ul class="dropdown-menu">
                      <li class="nav-item">
                        <a class="nav-link" href="industry.html"
                          >Industries-1</a
                        >
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="industry.html"
                          >Industries-2</a
                        >
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="industry.html"
                          >Industries-3</a
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
              <div class="option-item">
                <i
                  class="search-btn flaticon-search"
                  style="display: block"
                ></i
                ><i class="close-btn fas fa-times"></i>
                <div
                  class="search-overlay search-popup"
                  style="display: none"
                >
                  <div class="search-box">
                    <form class="search-form">
                      <input
                        class="search-input"
                        name="search"
                        placeholder="Search"
                        type="text"
                      /><button class="search-button" type="submit">
                        <i class="fas fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <a class="btn btn-primary" href="../contact/index.html"
                >Schedule a Demo</a
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
                    ><img src="../images/white-logo.png" alt="image"
                  /></a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud.
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
                    <a href="../service-details/index.html"
                      >Product Engineering</a
                    >
                  </li>
                  <li>
                    <a href="../service-details/index.html">UX/UI Design</a>
                  </li>
                  <li>
                    <a href="../service-details/index.html"
                      >Big Data Analysis</a
                    >
                  </li>
                  <li>
                    <a href="../service-details/index.html"
                      >Desktop Applications</a
                    >
                  </li>
                  <li>
                    <a href="../service-details/index.html"
                      >Mobile Applications</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-footer-widget">
                <h3>Quick Links</h3>
                <ul class="quick-links-list">
                  <li><a href="../about/index.html">About Us</a></li>
                  <li><a href="../blog/index.html">Blog</a></li>
                  <li><a href="../contact/index.html">Contact</a></li>
                  <li><a href="../services/index.html">Services</a></li>
                  <li><a href="../pricing/index.html">Pricing</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-footer-widget">
                <h3>Contacts</h3>
                <ul class="footer-contact-list">
                  <li>
                    <span>Address:</span>2750 Quadra Street <br />
                    Victoria, Canada
                  </li>
                  <li>
                    <span>Email:</span
                    ><a
                      href="../cdn-cgi/l/email-protection.html"
                      class="__cf_email__"
                      data-cfemail="cdafacbfa4b9a2a38daaa0aca4a1e3aea2a0"
                      >[email&#160;protected]</a
                    >
                  </li>
                  <li><span>Phone:</span>+44 587 154756</li>
                  <li><span>Fax:</span>+44 785 4578964</li>
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
                  Copyright ©<!-- -->2022<!-- -->
                  Bariton. All Rights Reserved
                  <a href="https://envytheme.com/" target="_blank">EnvyTheme</a
                  >.
                </p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
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
              </div>
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
        <title>Bariton - IT Machine Learning React Next Template</title>
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
  tabcontent = document.getElementsByClassName("tabs-item");
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

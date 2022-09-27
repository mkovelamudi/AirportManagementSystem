import React, { Component } from "react";
import './Footer.css';
class Footer extends Component {
  state = {};
  render() {
    console.log(this.props.page)
    return (
      <>
        <div
          id="block-newsletterfooter"
          class="block block-flysfo-custom news-letter-footer"
        >
          <div class="container-fluid">
            {/* <div class={this.props.page=="LogIn"?"news-letter-footer__inner_other":"news-letter-footer__inner"} > */}
            <div class={"news-letter-footer__inner"} >
              <div class="news-letter-footer__left">
                <div class="news-letter-footer__headline h2">
                  {/* Join Our Email List */}
                </div>
                <div class="news-letter-footer__description">
                  {/* <p>
                    Stay up to date on new routes, improvement projects, museum
                    exhibitions and much more!
                  </p> */}
                </div>
              </div>
              <div class="news-letter-footer__right">
                {/* <form
                  action="https://www.createsend.com/t/subscribeerror?description="
                  class="js-cm-form"
                  data-id="A61C50BEC994754B1D79C5819EC1255C36710DEB17C943576CBA240675A33181CAF4519EC65D28472355E2124BD959952361B2AC7BF6E4BA7FC2ED6C9A7747D4"
                  id="subForm"
                  method="post"
                  data-once="form-updated"
                  data-drupal-form-fields="fieldName,fieldEmail"
                >
                  <div class="form-item">
                    {" "}
                    <label for="fieldName">Name</label>{" "}
                    <input
                      class="newsletter name"
                      id="fieldName"
                      name="cm-name"
                      placeholder="Name"
                      type="text"
                    />
                  </div>
                  <div class="form-section">
                    <div class="form-item">
                      {" "}
                      <label for="fieldEmail">Email</label>{" "}
                      <input
                        class="newsletter email js-cm-email-input"
                        id="fieldEmail"
                        name="cm-jjdylk-jjdylk"
                        placeholder="Email"
                        required=""
                        type="text"
                      />
                    </div>{" "}
                    <button class="btn btn-form-secondary" type="submit">
                      <span class="element-invisible">Sign Me Up</span>
                    </button>
                  </div>
                </form> */}
              </div>
            </div>
            <div class="news-letter-footer__graphic">
              {" "}
              <svg
                viewBox="0 0 1440 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                &gt;{" "}
                <path
                  d="M1142 70.1411H0C88.6667 52.1411 274 12.4245 557.5 1.14093C798.7 -8.45905 1086 44.9849 1142 70.1411Z"
                  fill="#f5e3cb"
                ></path>{" "}
                <path
                  d="M1443.5 5.00696V69.507H969C1137.4 17.107 1355.5 4.67362 1443.5 5.00696Z"
                  fill="#5597c9"
                ></path>{" "}
                <path
                  d="M1056 47.0005C1068 48.0005 1115.17 64.1672 1138 70.5005H966C990.5 62.8338 1044 48.0005 1056 47.0005Z"
                  fill="#5597c9"
                ></path>{" "}
              </svg>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;

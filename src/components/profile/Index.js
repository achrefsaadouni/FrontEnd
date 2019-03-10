import React, { Component } from "react";

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header-spacer" />
        <div className="container">
          <div className="row">
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                <div className="top-header">
                  <div className="top-header-thumb">
                    <img src="img/top-header1.jpg" alt="nature" />
                  </div>
                  <div className="profile-section">
                    <div className="row">
                      <div className="col col-lg-5 col-md-5 col-sm-12 col-12">
                        <ul className="profile-menu">
                          <li>
                            <a href="02-ProfilePage.html" className="active">
                              Timeline
                            </a>
                          </li>
                          <li>
                            <a href="05-ProfilePage-About.html">About</a>
                          </li>
                          <li>
                            <a href="06-ProfilePage.html">Friends</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col col-lg-5 ml-auto col-md-5 col-sm-12 col-12">
                        <ul className="profile-menu">
                          <li>
                            <a href="07-ProfilePage-Photos.html">Photos</a>
                          </li>
                          <li>
                            <a href="09-ProfilePage-Videos.html">Videos</a>
                          </li>
                          <li>
                            <div className="more">
                              <svg className="olymp-three-dots-icon">
                                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                              </svg>
                              <ul className="more-dropdown more-with-triangle">
                                <li>
                                  <a href="#">Report Profile</a>
                                </li>
                                <li>
                                  <a href="#">Block Profile</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="control-block-button">
                      <a
                        href="35-YourAccount-FriendsRequests.html"
                        className="btn btn-control bg-blue"
                      >
                        <svg className="olymp-happy-face-icon">
                          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon" />
                        </svg>
                      </a>

                      <a href="#" className="btn btn-control bg-purple">
                        <svg className="olymp-chat---messages-icon">
                          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
                        </svg>
                      </a>

                      <div className="btn btn-control bg-primary more">
                        <svg className="olymp-settings-icon">
                          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-settings-icon" />
                        </svg>

                        <ul className="more-dropdown more-with-triangle triangle-bottom-right">
                          <li>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#update-header-photo"
                            >
                              Update Profile Photo
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#update-header-photo"
                            >
                              Update Header Photo
                            </a>
                          </li>
                          <li>
                            <a href="29-YourAccount-AccountSettings.html">
                              Account Settings
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="top-header-author">
                    <a href="02-ProfilePage.html" className="author-thumb">
                      <img src="img/author-main1.jpg" alt="author" />
                    </a>
                    <div className="author-content">
                      <a href="02-ProfilePage.html" className="h4 author-name">
                        James Spiegel
                      </a>
                      <div className="country">San Francisco, CA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
              <div id="newsfeed-items-grid">
                <div className="ui-block">
                  <article className="hentry post">
                    <div className="post__author author vcard inline-items">
                      <img src="img/author-page.jpg" alt="author" />

                      <div className="author-date">
                        <a
                          className="h6 post__author-name fn"
                          href="02-ProfilePage.html"
                        >
                          James Spiegel
                        </a>
                        <div className="post__date">
                          <time
                            className="published"
                            datetime="2017-03-24T18:18"
                          >
                            19 hours ago
                          </time>
                        </div>
                      </div>

                      <div className="more">
                        <svg className="olymp-three-dots-icon">
                          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                        </svg>
                        <ul className="more-dropdown">
                          <li>
                            <a href="#">Edit Post</a>
                          </li>
                          <li>
                            <a href="#">Delete Post</a>
                          </li>
                          <li>
                            <a href="#">Turn Off Notifications</a>
                          </li>
                          <li>
                            <a href="#">Select as Featured</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque.
                    </p>

                    <div className="post-additional-info inline-items">
                      <a href="#" className="post-add-icon inline-items">
                        <svg className="olymp-heart-icon">
                          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon" />
                        </svg>
                        <span>8</span>
                      </a>

                      <ul className="friends-harmonic">
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic7.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic8.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic9.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic10.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic11.jpg" alt="friend" />
                          </a>
                        </li>
                      </ul>

                      <div className="names-people-likes">
                        <a href="#">Jenny</a>, <a href="#">Robert</a> and
                        <br />6 more liked this
                      </div>

                      <div className="comments-shared">
                        <a href="#" className="post-add-icon inline-items">
                          <svg className="olymp-speech-balloon-icon">
                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon" />
                          </svg>
                          <span>17</span>
                        </a>

                        <a href="#" className="post-add-icon inline-items">
                          <svg className="olymp-share-icon">
                            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon" />
                          </svg>
                          <span>24</span>
                        </a>
                      </div>
                    </div>

                    <div className="control-block-button post-control-button">
                      <a href="#" className="btn btn-control featured-post">
                        <svg className="olymp-trophy-icon">
                          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-trophy-icon" />
                        </svg>
                      </a>

                      <a href="#" className="btn btn-control">
                        <svg className="olymp-like-post-icon">
                          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-like-post-icon" />
                        </svg>
                      </a>

                      <a href="#" className="btn btn-control">
                        <svg className="olymp-comments-post-icon">
                          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon" />
                        </svg>
                      </a>

                      <a href="#" className="btn btn-control">
                        <svg className="olymp-share-icon">
                          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon" />
                        </svg>
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Profile Intro</h6>
                </div>
                <div className="ui-block-content">
                  <ul className="widget w-personal-info item-block">
                    <li>
                      <span className="title">About Me:</span>
                      <span className="text">
                        Hi, I’m James, I’m 36 and I work as a Digital Designer
                        for the “Daydreams” Agency in Pier 56.
                      </span>
                    </li>
                    <li>
                      <span className="title">Favourite TV Shows:</span>
                      <span className="text">
                        Breaking Good, RedDevil, People of Interest, The Running
                        Dead, Found, American Guy.
                      </span>
                    </li>
                    <li>
                      <span className="title">
                        Favourite Music Bands / Artists:
                      </span>
                      <span className="text">
                        Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters,
                        System of a Revenge.
                      </span>
                    </li>
                  </ul>

                  <div className="widget w-socials">
                    <h6 className="title">Other Social Networks:</h6>
                    <a href="#" className="social-item bg-facebook">
                      <i className="fab fa-facebook-f" aria-hidden="true" />
                      Facebook
                    </a>
                    <a href="#" className="social-item bg-twitter">
                      <i className="fab fa-twitter" aria-hidden="true" />
                      Twitter
                    </a>
                    <a href="#" className="social-item bg-dribbble">
                      <i className="fab fa-dribbble" aria-hidden="true" />
                      Dribbble
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Friends (86)</h6>
                </div>
                <div className="ui-block-content">
                  <ul className="widget w-faved-page js-zoom-gallery">
                    <li>
                      <a href="#">
                        <img src="img/avatar38-sm.jpg" alt="author" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/avatar24-sm.jpg" alt="user" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/avatar36-sm.jpg" alt="author" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/avatar35-sm.jpg" alt="user" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/avatar34-sm.jpg" alt="author" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/avatar33-sm.jpg" alt="author" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/avatar32-sm.jpg" alt="user" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/avatar31-sm.jpg" alt="author" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/avatar30-sm.jpg" alt="author" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/avatar29-sm.jpg" alt="user" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/avatar28-sm.jpg" alt="user" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/avatar27-sm.jpg" alt="user" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/avatar26-sm.jpg" alt="user" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/avatar25-sm.jpg" alt="user" />
                      </a>
                    </li>
                    <li className="all-users">
                      <a href="#">+74</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;

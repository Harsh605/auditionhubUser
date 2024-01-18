import React from "react";
import './EventSchedule.css'

function EventSchedule() {
  return (
    <div>
      <section className="schedule-section padding-tb padding-b bg-image">
        <div className="container">
          <div className="section-header">
            <h1
              style={{
                fontSize: "4vh",
                fontWeight: "600",
                fontFamily: "arial",
                color: "#457AEE",
              }}
            >
              Diverse Auditions for All Genders: A Platform Where Male, Female,
              and Transgender Talent Shine
            </h1>
          </div>
          <div className="section-wrapper">
            <div className="row gx-4 gy-5">
              <div className="col-lg-6">
                <div className="schedule-left schedule-pack">
                  <h5 style={{ color: "white" }}>24 December 2021</h5>
                  <div className="schedule-list" id="accordionExample">
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button collapsed remove"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <span className="accor-header-inner d-flex flex-wrap align-items-center">
                            <span className="accor-thumb">
                              <img
                                className="Event-image"
                                src="/72.png"
                                alt="speaker"
                              />
                            </span>
                            <span className="h7">Dance &amp; Event</span>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed remove"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          <span className="accor-header-inner d-flex flex-wrap align-items-center">
                            <span className="accor-thumb">
                              <img
                                className="Event-image"
                                src="71.png"
                                alt="speaker"
                              />
                            </span>
                            <span className="h7">Car Stunt</span>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed remove break-time"
                          type="button"
                        >
                          <span className="accor-header-inner d-flex flex-wrap align-items-center">
                            <span className="accor-thumb">
                              <img
                                className="Event-image"
                                src="/70.png"
                                alt="speaker"
                              />
                            </span>
                            <span className="h7">MoterBike Stunt</span>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed remove break-time"
                          type="button"
                        >
                          <span className="accor-header-inner d-flex flex-wrap align-items-center">
                            <span className="accor-thumb">
                              <img
                                className="Event-image"
                                src="/73.png"
                                alt="speaker"
                              />
                            </span>
                            <span className="h7">Music Audition</span>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingFive">
                        <button
                          className="accordion-button collapsed remove"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="true"
                          aria-controls="collapseFive"
                        >
                          <span className="accor-header-inner d-flex flex-wrap align-items-center">
                            <span className="accor-thumb">
                              <img
                                className="Event-image"
                                src="/26.png"
                                alt="speaker"
                              />
                            </span>
                            <span className="h7">
                              Audition Registration &amp; Event
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingSix">
                        <button
                          className="accordion-button collapsed remove"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="true"
                          aria-controls="collapseSix"
                        >
                          <span className="accor-header-inner d-flex flex-wrap align-items-center">
                            <span className="accor-thumb">
                              <img
                                className="Event-image"
                                src="/28.png"
                                alt="speaker"
                              />
                            </span>
                            <span className="h7">choreography Event</span>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingSeven">
                        <button
                          className="accordion-button collapsed remove"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSeven"
                          aria-expanded="true"
                          aria-controls="collapseSeven"
                        >
                          <span className="accor-header-inner d-flex flex-wrap align-items-center">
                            <span className="accor-thumb">
                              <img
                                className="Event-image"
                                src="/29.png"
                                alt="speaker"
                              />
                            </span>
                            <span className="h7">Fashion Audition</span>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingEight">
                        <button
                          className="accordion-button collapsed remove break-time"
                          type="button"
                        >
                          <span className="accor-header-inner d-flex flex-wrap align-items-center">
                            <span className="accor-thumb">
                              <img
                                className="Event-image"
                                src="/30.png"
                                alt="speaker"
                              />
                            </span>
                            <span className="h7">Acting Audition</span>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingNine">
                        <button
                          className="accordion-button collapsed remove"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseNine"
                          aria-expanded="true"
                          aria-controls="collapseNine"
                        >
                          <span className="accor-header-inner d-flex flex-wrap align-items-center">
                            <span className="accor-thumb">
                              <img
                                className="Event-image"
                                src="/31.png"
                                alt="speaker"
                              />
                            </span>
                            <span className="h7">Live Music Performance</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="schedule-right schedule-pack">
                  <h5 style={{ color: "white" }}>2</h5>
                  <div className="schedule-list" id="accordionExample-2">
                    <div className="accordion-item">
                      <div className="accordion-header" id="heading-One">
                        <button
                          className="accordion-button collapsed remove"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-One"
                          aria-expanded="true"
                          aria-controls="collapse-One"
                        >
                          <span className="accor-header-inner d-flex flex-wrap align-items-center">
                            <span className="accor-thumb">
                              <img
                                className="Event-image"
                                src="/32.png"
                                alt="speaker"
                              />
                            </span>
                            <span className="h7">
                              Art and Visual Arts Audition
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <div className="accordion-header" id="heading-Three">
                        <button
                          className="accordion-button collapsed remove"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-Three"
                          aria-expanded="true"
                          aria-controls="collapse-Three"
                        >
                          <span className="accor-header-inner d-flex flex-wrap align-items-center">
                            <span className="accor-thumb">
                              <img
                                className="Event-image"
                                src="/35.png"
                                alt="speaker"
                              />
                            </span>
                            <span className="h7">Photography Talent</span>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="heading-Four">
                        <button
                          className="accordion-button collapsed remove break-time"
                          type="button"
                        >
                          <span className="accor-header-inner d-flex flex-wrap align-items-center">
                            <span className="accor-thumb">
                              <img
                                className="Event-image"
                                src="/76.png"
                                alt="speaker"
                              />
                            </span>
                            <span className="h7">Comedy</span>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="heading-Four">
                        <button
                          className="accordion-button collapsed remove break-time"
                          type="button"
                        >
                          <span className="accor-header-inner d-flex flex-wrap align-items-center">
                            <span className="accor-thumb">
                              <img
                                className="Event-image"
                                src="/34.png"
                                alt="speaker"
                              />
                            </span>
                            <span className="h7">solo vocal audition</span>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="heading-Six">
                        <button
                          className="accordion-button collapsed remove"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-Six"
                          aria-expanded="true"
                          aria-controls="collapse-Six"
                        >
                          <span className="accor-header-inner d-flex flex-wrap align-items-center">
                            <span className="accor-thumb">
                              <img
                                className="Event-image"
                                src="/37.png"
                                alt="speaker"
                              />
                            </span>
                            <span className="h7">Songwriting Showcase</span>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="heading-Seven">
                        <button
                          className="accordion-button collapsed remove"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-Seven"
                          aria-expanded="true"
                          aria-controls="collapse-Seven"
                        >
                          <span className="accor-header-inner d-flex flex-wrap align-items-center">
                            <span className="accor-thumb">
                              <img
                                className="Event-image"
                                src="/38.png"
                                alt="speaker"
                              />
                            </span>
                            <span className="h7">Cycle Event Audition</span>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="heading-Eight">
                        <button
                          className="accordion-button collapsed remove break-time"
                          type="button"
                        >
                          <span className="accor-header-inner d-flex flex-wrap align-items-center">
                            <span className="accor-thumb">
                              <img
                                className="Event-image"
                                src="/39.png"
                                alt="speaker"
                              />
                            </span>
                            <span className="h7">Stylist Talent</span>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="heading-Nine">
                        <button
                          className="accordion-button collapsed remove"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-Nine"
                          aria-expanded="true"
                          aria-controls="collapse-Nine"
                        >
                          <span className="accor-header-inner d-flex flex-wrap align-items-center">
                            <span className="accor-thumb">
                              <img
                                className="Event-image"
                                src="/40.png"
                                alt="speaker"
                              />
                            </span>
                            <span className="h7">Digital Art Performance</span>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="heading-Two">
                        <button
                          className="accordion-button collapsed remove"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-Two"
                          aria-expanded="true"
                          aria-controls="collapse-Two"
                        >
                          <span className="accor-header-inner d-flex flex-wrap align-items-center">
                            <span className="accor-thumb">
                              <img
                                className="Event-image"
                                src="/33.png"
                                alt="speaker"
                              />
                            </span>
                            <span className="h7">Others</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventSchedule;

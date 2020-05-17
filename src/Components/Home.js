import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import FlipCards from "./FlipCards";
import TimeChart from "./TimeChart";
import HumidityChart from "./HumidityChart";
import DensityChart from "./DensityChart";
import Footer from "./footer";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="landing-view">
          <NavBar />

          <div className="ptext">
            <span className="border">Crop Research Institute</span>
          </div>
        </div>
        <div className="container">
          <div className=" container cards ">
            <div className="row">
              <div className="col-lg-4">
                <div className="card text-left numbers mb-3 card-hover">
                  <div className="card-header">Temperature</div>
                  <div className="card-body card-hover card-up">
                    <TimeChart />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card numbers text-center mb-3 card-hover">
                  <div className="card-header">Humdity</div>
                  <div className="card-body card-up">
                    <HumidityChart />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card numbers text-right mb-3 card-hover">
                  <div className="card-header">Density</div>
                  <div className="card-body card-up">
                    <DensityChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 " id="illustration"></div>
            <div className="col-md-6">
              <section className="section section-light">
                Raising say express had chiefly detract demands she. Quiet led
                own cause three him. Front no party young abode state up. Saved
                he do fruit woody of to. Met defective are allowance two
                perceived listening consulted contained. It chicken oh colonel
                pressed excited suppose to shortly. He improve started no we
                manners however effects. Prospect humoured mistress to by
                proposal marianne attended. Simplicity the far admiration
                preference everything. Up help home head spot an he room in.
                Yourself required no at thoughts delicate landlord it be.
                Branched dashwood do is whatever it. Farther be chapter at
                visited married in it pressed. By distrusts procuring be oh
                frankness existence believing instantly if. Doubtful on an
                juvenile as of servants insisted. Judge why maids led sir whose
                guest drift her point. Him comparison especially friendship was
                who sufficient attachment favourable how. Luckily but minutes
                ask picture man perhaps are inhabit. How her good all sang more
                why.
              </section>
            </div>
          </div>
        </div>
        <div className="one-view">
          <p className="headings">One</p>
        </div>
        <section className="section section-light">
          Sitting mistake towards his few country ask. You delighted two
          rapturous six depending objection happiness something the. Off nay
          impossible dispatched partiality unaffected. Norland adapted put ham
          cordial. Ladies talked may shy basket narrow see. Him she distrusts
          questions sportsmen.
        </section>

        <div className="two-view">
          <p className="headings">Two</p>
        </div>
        <section className="section section-light">
          Consulted perpetual of pronounce me delivered. Too months nay end
          change relied who beauty wishes matter. Shew of john real park so rest
          we on. Ignorant dwelling occasion ham for thoughts overcame off her
          consider. Polite it elinor is depend. His not get talked effect worthy
          barton. Household shameless incommode at no objection behaviour.
          Especially do at he possession insensible sympathize boisterous it.
          Songs he on an widen me event truth. Certain law age brother sending
          amongst why covered.
        </section>
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Our Employees
        </h2>
        <FlipCards />
        <Footer />
      </div>
    );
  }
}

export default Home;

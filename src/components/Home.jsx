import React from "react";
import data from "../data/barberData";
import { UncontrolledCarousel } from "reactstrap";
import carouselItem from "../data/carouselData";
import InputField from "./common/InputField";

const Home = () => {
  return (
    <div>
      <UncontrolledCarousel items={carouselItem} />
      <div className="search-container">
        <h3>Don't waste your time by waiting at your favorite barber shop.</h3>
        <h3 className="">
          Book happily from us and get your favorite barber free in your free
          time.
        </h3>
        <div className="alert alert-secondary mt-3">
          Currently we are serving in Delhi, Bhilwara, Jaipur, Patna, Mumbai and
          Bengaluru.
        </div>
        <div className="input-group mb-3 col-6 mx-auto pt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Your City"
          />
          <button className="btn btn-primary" type="button" id="button-addon2">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

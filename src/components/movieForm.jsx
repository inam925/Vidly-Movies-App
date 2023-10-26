import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";

class MovieForm extends Form {
  state = {
    data: { title: "", genre: "", stockNumber: "", rate: "" },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    stockNumber: Joi.number().integer().required().label("Numbers In Stock"),
    rate: Joi.number().integer().required().label("Rate"),
  };

  doSumbit = () => {
    //call server.
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <h1>Movie Form {this.props.match.params.id}</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          <select>
            {getGenres().map((genre) => (
              <option key={genre.id}>{genre.name}</option>
            ))}
          </select>
          {this.renderInput("stockNumber", "Numbers In Stock", "number")}
          {this.renderInput("rate", "Rate", "number")}
          {/* {this.renderButton("Save")} */}
          <button
            className='btn btn-primary'
            onClick={() => window.history.go("/movies")}
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default MovieForm;

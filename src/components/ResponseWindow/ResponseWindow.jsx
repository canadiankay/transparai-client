import { useState } from "react";
import axios from "axios";
import "./ResponseWindow.scss";

export default function ResponseWindow({ response }) {

  return (
    <section className="response__container">
      <div className="response">
        <textarea
          className="response__box"
          readOnly
          placeholder="How can we help you today?"
          value={response}
        />
      </div>
    </section>
  );
}

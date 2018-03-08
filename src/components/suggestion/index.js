import React from "react";

export default ({ title, html }) => (
  <div>
    <h3>{title}</h3>
    <article dangerouslySetInnerHTML={{ __html: html }} />
  </div>
);

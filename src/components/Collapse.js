import React from "react";

const Collapse = (props) => {
  console.log();
  return (
    <div>
      <a
        class="btn btn-primary"
        data-bs-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Link with href
      </a>

      <div class="collapse" id="collapseExample">
        Linke tıklanınca açılan içerik
      </div>
    </div>
  );
};

export default Collapse;

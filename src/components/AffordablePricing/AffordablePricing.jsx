import React from "react";
import bubble_affordable_pricing from "../../assets/images/bubble1.png";
import figure_affordable_pricing from "../../assets/images/figure1.png";
import SectionTitle from "../SectionTitle/SectionTitle";

function AffordablePricing() {
  return (
    <>
      <section className="affordable_pricing position-relative py-5">
        <img
          src={bubble_affordable_pricing}
          alt="bubble1"
          className="left position-absolute top-0"
        />
        <img
          src={bubble_affordable_pricing}
          alt="bubble1"
          className="right position-absolute bottom-0"
        />
        <div className="container">
          <SectionTitle
            imgSrc={figure_affordable_pricing}
            title="Affordable Pricing"
            wrapper="affordable_pricing"
            colorHeading="text-white"
            colorParagraph="text-white"
          />
          <div className="row mt-5 mb-5">
            {/* Column One */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="card overflow-hidden rounded-0 shadow-sm position-relative">
                <div className="affordable_pricing_img w-100 position-relative">
                  <img
                    className="position-absolute"
                    src={bubble_affordable_pricing}
                    alt="bubble1"
                  />
                  <img
                    className="position-absolute"
                    src={bubble_affordable_pricing}
                    alt="bubble1"
                  />
                  <svg
                    className="position-absolute svg"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                  >
                    <g>
                      <g>
                        <g>
                          <path d="M382.75,181.406c-3.083-1.833-6.229-3.719-9.438-5.76l0.014-26.313h0.007c5.896,0,10.667-4.771,10.667-10.667v-64 C384,33.5,350.5,0,309.333,0H192c-11.771,0-21.333,9.573-21.333,21.333h-21.333c-11.771,0-21.333,9.573-21.333,21.333V64 c0,11.76,9.563,21.333,21.333,21.333h21.333c0,11.76,9.563,21.333,21.333,21.333h12.069l-31.611,47.417 c-2.188,3.271-2.396,7.479-0.521,10.948c1.854,3.469,5.458,5.635,9.396,5.635h21.333c2.313,0,4.563-0.75,6.396-2.135 l68.271-51.203v21.339c0,5.896,4.771,10.667,10.667,10.667v26.375l-1.125,0.781c-39.458,26.885-73.542,50.115-73.542,218.177 v74.667C213.333,492.865,232.479,512,256,512h149.333C428.854,512,448,492.865,448,469.333v-74.667 C448,228.802,423.208,205.573,382.75,181.406z M170.667,64h-21.333V42.667h21.333V64z M203.417,146.104l26.292-39.438h26.297 L203.417,146.104z M192,85.333v-64h117.333c29.417,0,53.333,23.927,53.333,53.333V128h-64V96c0-5.896-4.771-10.667-10.667-10.667 H192z M298.875,194.115l5.854-4.01c2.896-1.99,4.604-5.271,4.604-8.771v-32H352l-0.021,32.01c0,3.51,1.708,6.781,4.604,8.781 c5.188,3.594,10.271,6.646,15.229,9.604c25.069,14.971,45.809,27.484,52.535,120.271H237.522 C245.564,230.457,269.73,213.975,298.875,194.115z M426.667,469.333c0,11.76-9.563,21.333-21.333,21.333H256 c-11.771,0-21.333-9.573-21.333-21.333V448h192V469.333z M426.667,426.667h-192v-32c0-19.911,0.467-37.564,1.339-53.333h189.589 c0.698,15.751,1.073,33.401,1.073,53.333V426.667z"></path>
                          <path d="M106.667,53.333c0-5.896-4.771-10.667-10.667-10.667H74.667C68.771,42.667,64,47.438,64,53.333 C64,59.229,68.771,64,74.667,64H96C101.896,64,106.667,59.229,106.667,53.333z"></path>
                          <path d="M80.563,20.208l21.313,10.667c1.521,0.76,3.167,1.125,4.771,1.125c3.896,0,7.667-2.156,9.542-5.896 c2.625-5.26,0.5-11.677-4.771-14.313L90.104,1.125c-5.188-2.594-11.667-0.51-14.313,4.771 C73.167,11.156,75.292,17.573,80.563,20.208z"></path>
                          <path d="M101.896,75.792L80.563,86.458c-5.271,2.635-7.396,9.042-4.771,14.313c1.875,3.74,5.646,5.896,9.542,5.896 c1.604,0,3.229-0.365,4.771-1.125l21.333-10.667c5.271-2.635,7.396-9.042,4.771-14.313 C113.563,75.292,107.188,73.188,101.896,75.792z"></path>
                        </g>
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center fw-bold">Basic</h5>
                  <ul className="affordable_pricing_list mt-4 list-unstyled text-center">
                    <li className="mt-3">
                      <i className="fa-solid fa-check heading_primary_blue"></i>
                      <a
                        className="text-decoration-none mx-2 regular-paragraph"
                        href="#"
                      >
                        Surfaces Hand Wiped
                      </a>
                    </li>
                    <li className="mt-3">
                      <i className="fa-solid fa-check heading_primary_blue"></i>
                      <a
                        className="text-decoration-none mx-2 regular-paragraph"
                        href="#"
                      >
                        Floors Cleaned
                      </a>
                    </li>
                    <li className="mt-3">
                      <i className="fa-solid fa-check heading_primary_blue"></i>
                      <a
                        className="text-decoration-none mx-2 regular-paragraph"
                        href="#"
                      >
                        General Dusting
                      </a>
                    </li>
                    <li className="mt-3">
                      <i className="fa-solid fa-check heading_primary_blue"></i>
                      <a
                        className="text-decoration-none mx-2 regular-paragraph"
                        href="#"
                      >
                        General Dusting
                      </a>
                    </li>
                    <li className="mt-3">
                      <i className="fa-solid fa-check heading_primary_blue"></i>
                      <a
                        className="text-decoration-none mx-2 regular-paragraph"
                        href="#"
                      >
                        Doors Cleaned
                      </a>
                    </li>
                  </ul>
                  <p className="price text-center fw-bold mt-4 fs-3">$90</p>
                  <p className="regular-paragraph text-center fs-p">/per mo</p>
                  <a
                    href="#"
                    className="get_it py-2 px-4 mb-3 text-decoration-none text-center fw-medium rounded-2 mt-4 text-black d-block"
                  >
                    Get it now
                  </a>
                </div>
              </div>
            </div>

            {/* Column Two */}

            <div className="col-12 col-sm-6 col-lg-4 mt-sm-0 mt-4">
              <div className="card rounded-0 shadow-sm position-relative">
                <div className="ribbon text-center z-1 position-absolute text-white">
                  Popular Sale
                </div>
                <div className="affordable_pricing_img w-100 position-relative">
                  <img
                    className="position-absolute"
                    src={bubble_affordable_pricing}
                    alt="bubble1"
                  />
                  <img
                    className="position-absolute"
                    src={bubble_affordable_pricing}
                    alt="bubble1"
                  />
                  <svg
                    className="position-absolute svg"
                    xmlns="http://www.w3.org/2000/svg"
                    height="512pt"
                    viewBox="-2 0 512 512.00114"
                    width="512pt"
                  >
                    <path d="m279.394531 470.527344c5.035157-6.882813 6.625-15.523438 4.359375-23.707032-13.390625-48.339843 7.421875-104.617187 10.894532-113.445312 3.402343-3.742188 13.566406-15.917969 18.792968-33.167969 4.035156-13.328125 5.582032-31.453125-3.8125-51.277343l188.503906-188.503907c6.6875-6.6875 10.367188-15.578125 10.367188-25.035156s-3.679688-18.347656-10.367188-25.035156c-13.804687-13.808594-36.265624-13.808594-50.070312 0l-52.636719 52.632812c-2.929687 2.929688-2.929687 7.679688 0 10.609375 2.929688 2.925782 7.675781 2.925782 10.605469 0l21.324219-21.324218 28.855469 28.859374-154.476563 154.476563c-11.140625-14.203125-23.667969-24.429687-29.542969-28.171875l112.613282-112.617188c2.929687-2.929687 2.929687-7.675781 0-10.605468-2.925782-2.929688-7.675782-2.929688-10.605469 0l-116.039063 116.039062c-17.894531-6.996094-34.148437-5.394531-46.367187-1.695312-17.257813 5.226562-29.433594 15.394531-33.171875 18.796875-8.816406 3.480469-64.992188 24.3125-113.441406 10.890625-8.179688-2.265625-16.824219-.679688-23.707032 4.359375-6.917968 5.066406-11.070312 12.875-11.386718 21.421875-.289063 7.890625.171874 15.910156 1.359374 23.949218-6.347656 1.234376-12.117187 4.765626-16.082031 10.019532-5.199219 6.898437-6.691406 15.582031-4.089843 23.824218 2.042968 6.46875 4.210937 13.367188 6.265624 19.925782-6.390624.824218-11.855468 4.53125-14.984374 10.175781-3.144532 5.664063-3.398438 12.289063-.699219 18.179687 2.472656 5.386719 5.230469 11.441407 7.773437 17.03125 1.765625 3.882813 4.179688 7.308594 7.066406 10.195313 8.046876 8.046875 19.765626 11.875 31.324219 9.625 3.847657 10.652344 11.597657 27.492187 25.566407 41.460937 13.867187 13.867188 30.507812 21.613282 41.460937 25.566407-2.25 11.5625-.445313 30.484375 19.820313 38.390625 5.71875 2.234375 11.644531 5.300781 17.035156 7.773437 5.886718 2.699219 12.511718 2.445313 18.175781-.695312 5.644531-3.132813 9.351563-8.59375 10.175781-14.988281 6.558594 2.058593 13.457032 4.222656 19.925782 6.265624 8.242187 2.601563 16.921874 1.109376 23.824218-4.089843 5.253906-3.960938 8.785156-9.730469 10.015625-16.074219 8.039063 1.183594 16.0625 1.644531 23.949219 1.351562 8.550781-.316406 16.359375-4.464843 21.425781-11.386718zm158.566407-428.863282 20.707031-20.703124c7.953125-7.957032 20.902343-7.957032 28.855469 0 3.855468 3.855468 5.976562 8.980468 5.976562 14.429687s-2.121094 10.574219-5.976562 14.429687l-20.703126 20.703126zm-158.511719 190.886719c37.285156 37.285157 18.335937 72.199219 8.304687 85.644531l-93.949218-93.949218c13.460937-10.039063 48.367187-28.96875 85.644531 8.304687zm-234.375 22.03125c.144531-3.933593 2.0625-7.53125 5.257812-9.871093 3.15625-2.3125 7.109375-3.042969 10.84375-2.007813 28.753907 7.964844 59.222657 5.238281 82.828125.382813-24.492187 15.433593-59.835937 32.648437-97.46875 34.3125-1.238281-7.667969-1.734375-15.316407-1.460937-22.816407zm-17.730469 42.445313c2.25-2.988282 5.6875-4.640625 9.429688-4.539063 67.3125 1.804688 127.484374-43.425781 145.585937-58.472656l12.335937 12.335937c-19.300781 16.46875-84.484374 67.875-162.195312 82.964844-2.25-7.167968-4.660156-14.851562-6.921875-22.011718-1.121094-3.554688-.480469-7.300782 1.765625-10.277344zm-4.0625 73.898437c-2.546875-5.605469-5.382812-11.640625-7.789062-17.078125-2.210938-4.988281 1.757812-6.941406 3.964843-7.226562 54.464844-7.007813 103.570313-32.308594 135.175781-52.304688 24.5-15.496094 42.292969-30.03125 50.714844-37.3125l19.484375 19.484375c-75.21875 73.179688-144.15625 97.570313-179.011719 105.621094-9.152343 2.113281-18.628906-2.589844-22.539062-11.183594zm39.367188 22.308594c26.941406-7.726563 65.992187-23.238281 110.339843-54.222656-30.984375 44.351562-46.496093 83.402343-54.222656 110.34375-8.914063-3.375-23.09375-10.066407-34.574219-21.546875-11.445312-11.445313-18.136718-25.589844-21.542968-34.574219zm95.503906 103.273437c-5.554688-2.117187-11.472656-5.242187-17.078125-7.792968-8.59375-3.90625-13.296875-13.382813-11.183594-22.535156 8.050781-34.855469 32.441406-103.792969 105.621094-179.011719l19.484375 19.484375c-7.28125 8.421875-22.242188 25.949218-37.3125 50.714844-45.203125 74.285156-51.917969 132.183593-52.304688 135.175781-.285156 2.207031-2.125 5.910156-7.226562 3.964843zm99.265625-29.582031c-7.496094.273438-15.148438-.222656-22.820313-1.460937.253906-5.753906.867188-11.621094 1.851563-17.535156.675781-4.089844-2.085938-7.949219-6.171875-8.628907-4.085938-.675781-7.949219 2.085938-8.628906 6.171875-1.675782 10.105469-2.394532 20.117188-2.136719 29.753906.101562 3.742188-1.550781 7.179688-4.539063 9.429688-2.976562 2.246094-6.722656 2.886719-10.277344 1.765625-7.160156-2.261719-14.84375-4.675781-22.011718-6.921875 15.085937-77.617188 66.496094-142.871094 82.96875-162.195312l12.339844 12.339843c-10.0625 12.140625-33.769532 43.335938-47.789063 83.058594-.992187 2.816406-.355469 7.621094 4.578125 9.570313 3.851562 1.523437 8.1875-.671876 9.566406-4.578126 6.707032-18.996093 15.929688-36.105468 24.59375-49.816406-4.871094 23.625-7.621094 54.144532.355469 82.945313 1.035156 3.734375.300781 7.6875-2.007813 10.84375-2.339843 3.195312-5.9375 5.113281-9.871093 5.257812zm0 0"></path>
                  </svg>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center fw-bold">Standard</h5>
                  <ul className="affordable_pricing_list mt-4 list-unstyled text-center">
                    <li className="mt-3">
                      <i className="fa-solid fa-check heading_primary_blue"></i>
                      <a
                        className="text-decoration-none mx-2 regular-paragraph"
                        href="#"
                      >
                        Surfaces Hand Wiped
                      </a>
                    </li>
                    <li className="mt-3">
                      <i className="fa-solid fa-check heading_primary_blue"></i>
                      <a
                        className="text-decoration-none mx-2 regular-paragraph"
                        href="#"
                      >
                        Floors Cleaned
                      </a>
                    </li>
                    <li className="mt-3">
                      <i className="fa-solid fa-check heading_primary_blue"></i>
                      <a
                        className="text-decoration-none mx-2 regular-paragraph"
                        href="#"
                      >
                        General Dusting
                      </a>
                    </li>
                    <li className="mt-3">
                      <i className="fa-solid fa-check heading_primary_blue"></i>
                      <a
                        className="text-decoration-none mx-2 regular-paragraph"
                        href="#"
                      >
                        General Dusting
                      </a>
                    </li>
                    <li className="mt-3">
                      <i className="fa-solid fa-check heading_primary_blue"></i>
                      <a
                        className="text-decoration-none mx-2 regular-paragraph"
                        href="#"
                      >
                        Doors Cleaned
                      </a>
                    </li>
                  </ul>
                  <p className="price text-center fw-bold mt-4 fs-3">$99</p>
                  <p className="regular-paragraph text-center fs-p">/per mo</p>
                  <a
                    href="#"
                    className="get_it py-2 px-4 mb-3 text-decoration-none text-center fw-medium rounded-2 mt-4 text-black d-block"
                  >
                    Get it now
                  </a>
                </div>
              </div>
            </div>

            {/* Column Three */}

            <div className="col-12 col-sm-6 col-lg-4 mt-lg-0 mt-4">
              <div className="card overflow-hidden rounded-0 shadow-sm position-relative">
                <div className="affordable_pricing_img w-100 position-relative">
                  <img
                    className="position-absolute"
                    src={bubble_affordable_pricing}
                    alt="bubble1"
                  />
                  <img
                    className="position-absolute"
                    src={bubble_affordable_pricing}
                    alt="bubble1"
                  />
                  <svg
                    className="position-absolute svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 499.312 499.312"
                  >
                    <path d="m216 75.878906 53.089844 53.089844 11.308594-11.3125-64.398438-64.398438-24.40625 24.398438 11.308594 11.3125zm0 0"></path>
                    <path d="m277.085938 136.96875 11.3125-11.3125 15.996093 15.996094-11.3125 11.316406zm0 0"></path>
                    <path d="m413.082031 293.652344 16-15.996094 11.3125 11.3125-15.996093 16zm0 0"></path>
                    <path d="m384 339.3125c3.832031 0 7.601562-1.550781 10.34375-4.28125l22.0625-22.0625-11.308594-11.3125-21.097656 21.097656-13.097656-13.097656-11.308594 11.3125 14.078125 14.078125c2.726563 2.714844 6.496094 4.265625 10.328125 4.265625zm0 0"></path>
                    <path d="m475.3125 267.3125 24-24-243.3125-243.3125-24 24-16-16-74.34375 74.34375c-8.808594 8.800781-13.65625 20.511719-13.65625 32.96875s4.847656 24.167969 13.65625 32.96875l68.199219 68.199219c3.96875 3.96875 6.144531 9.230469 6.144531 14.832031 0 5.597656-2.175781 10.863281-6.144531 14.832031l-53.167969 53.167969h-15.429688c-10.691406 0-20.738281 4.167969-28.289062 11.71875l-112.96875 112.96875v3.3125c0 39.703125 32.296875 72 72 72h3.3125l112.96875-112.96875c7.550781-7.550781 11.71875-17.601562 11.71875-28.289062v-15.429688l53.167969-53.167969c7.816406-7.800781 21.839843-7.800781 29.65625 0l21.175781 21.167969v108.6875c0 13.230469 10.769531 24 24 24s24-10.769531 24-24v-8c0-4.417969 3.585938-8 8-8s8 3.582031 8 8v64c0 13.230469 10.769531 24 24 24s24-10.769531 24-24v-40c0-4.417969 3.585938-8 8-8s8 3.582031 8 8v24c0 13.230469 10.769531 24 24 24s24-10.769531 24-24v-164.6875l11.3125-11.3125zm-219.3125-244.6875 220.6875 220.6875-12.6875 12.6875-220.6875-220.6875zm-112 92.6875c0-8.175781 3.183594-15.871094 8.96875-21.65625l63.03125-63.03125 252.6875 252.6875-63.03125 63.03125c-5.703125 5.703125-13.59375 8.96875-21.65625 8.96875s-15.953125-3.265625-21.65625-8.96875l-57.023438-57.023438c4.304688-9.390624 6.679688-19.609374 6.679688-30.007812 0-39.695312-32.296875-72-72-72-10.390625 0-20.617188 2.375-30.007812 6.679688l-57.023438-57.023438c-5.785156-5.785156-8.96875-13.480469-8.96875-21.65625zm-118.839844 306.152344 86.839844-86.839844 52.6875 52.6875-86.839844 86.839844c-6.375-25.921875-26.769531-46.3125-52.6875-52.6875zm-8.464844 14.589844c23.914063 3.753906 42.800782 22.648437 46.5625 46.5625-23.890624-3.761719-42.800781-22.671876-46.5625-46.5625zm160.273438-61.023438-.96875.96875-52.6875-52.6875.96875-.96875c4.535156-4.535156 10.558594-7.03125 16.976562-7.03125h15.429688l27.3125 27.3125v15.429688c0 6.417968-2.496094 12.441406-7.03125 16.976562zm91.03125-107.71875c-9.734375 0-19.257812 3.945312-26.144531 10.832031l-49.855469 49.855469-20.6875-20.6875 49.855469-49.855469c6.992187-6.992187 10.832031-16.273437 10.832031-26.144531 0-9.351562-3.550781-18.113281-9.855469-24.960938 5.734375-1.925781 11.75-3.039062 17.855469-3.039062 30.871094 0 56 25.121094 56 56 0 6.101562-1.105469 12.121094-3.039062 17.863281-6.777344-6.222656-15.738282-9.863281-24.960938-9.863281zm196 192c0 4.414062-3.585938 8-8 8s-8-3.585938-8-8v-24c0-13.234375-10.769531-24-24-24s-24 10.765625-24 24v40c0 4.414062-3.585938 8-8 8s-8-3.585938-8-8v-64c0-13.234375-10.769531-24-24-24s-24 10.765625-24 24v8c0 4.414062-3.585938 8-8 8s-8-3.585938-8-8v-92.6875l31.03125 31.03125c8.679688 8.679688 20.695312 13.65625 32.96875 13.65625s24.289062-4.976562 32.96875-13.65625l47.03125-47.03125zm0 0"></path>
                  </svg>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center fw-bold">Premium</h5>
                  <ul className="affordable_pricing_list mt-4 list-unstyled text-center">
                    <li className="mt-3">
                      <i className="fa-solid fa-check heading_primary_blue"></i>
                      <a
                        className="text-decoration-none mx-2 regular-paragraph"
                        href="#"
                      >
                        Surfaces Hand Wiped
                      </a>
                    </li>
                    <li className="mt-3">
                      <i className="fa-solid fa-check heading_primary_blue"></i>
                      <a
                        className="text-decoration-none mx-2 regular-paragraph"
                        href="#"
                      >
                        Floors Cleaned
                      </a>
                    </li>
                    <li className="mt-3">
                      <i className="fa-solid fa-check heading_primary_blue"></i>
                      <a
                        className="text-decoration-none mx-2 regular-paragraph"
                        href="#"
                      >
                        General Dusting
                      </a>
                    </li>
                    <li className="mt-3">
                      <i className="fa-solid fa-check heading_primary_blue"></i>
                      <a
                        className="text-decoration-none mx-2 regular-paragraph"
                        href="#"
                      >
                        General Dusting
                      </a>
                    </li>
                    <li className="mt-3">
                      <i className="fa-solid fa-check heading_primary_blue"></i>
                      <a
                        className="text-decoration-none mx-2 regular-paragraph"
                        href="#"
                      >
                        Doors Cleaned
                      </a>
                    </li>
                  </ul>
                  <p className="price text-center fw-bold mt-4 fs-3">$199</p>
                  <p className="regular-paragraph text-center fs-p">/per mo</p>
                  <a
                    href="#"
                    className="get_it py-2 px-4 mb-3 text-decoration-none text-center fw-medium rounded-2 mt-4 text-black d-block"
                  >
                    Get it now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AffordablePricing;
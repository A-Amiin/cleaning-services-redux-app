import React from "react";
import { Link } from "react-router";
import '../../assets/styles/home.css';
function AffordablePricingCard({ subscripeId, imgSrc, title, price, description }) {
  return (
    <div className="card overflow-hidden rounded-0 shadow-sm position-relative">
      <div className="affordable_pricing_img w-100 position-relative">
        <img
          className="position-absolute"
          src={imgSrc}
          alt="bubble1"
        />
        <img
          className="position-absolute"
          src={imgSrc}
          alt="bubble1"
        />
        <svg
          className="position-absolute svg"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
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
        <h5 className="card-title text-center fw-bold">{title}</h5>
        <ul className="affordable_pricing_list mt-4 list-unstyled text-center">
          <li className="mt-3">
            <i className="fa-solid fa-check heading_primary_blue"></i>
            <a
              className="text-decoration-none mx-2 regular-paragraph"
              href="#"
            >
              {description[0]}
            </a>
          </li>
          <li className="mt-3">
            <i className="fa-solid fa-check heading_primary_blue"></i>
            <a
              className="text-decoration-none mx-2 regular-paragraph"
              href="#"
            >
              {description[1]}
            </a>
          </li>
          <li className="mt-3">
            <i className="fa-solid fa-check heading_primary_blue"></i>
            <a
              className="text-decoration-none mx-2 regular-paragraph"
              href="#"
            >
              {description[2]}
            </a>
          </li>
          <li className="mt-3">
            <i className="fa-solid fa-check heading_primary_blue"></i>
            <a
              className="text-decoration-none mx-2 regular-paragraph"
              href="#"
            >
              {description[3]}
            </a>
          </li>
          <li className="mt-3">
            <i className="fa-solid fa-check heading_primary_blue"></i>
            <a
              className="text-decoration-none mx-2 regular-paragraph"
              href="#"
            >
              {description[4]}
            </a>
          </li>
        </ul>
        <p className="price text-center fw-bold mt-4 fs-3">{price}$</p>
        <p className="regular-paragraph text-center fs-p">/per mo</p>
        <Link
          to={`subscription/${subscripeId}`}
          className="get_it py-2 px-4 mb-3 text-decoration-none text-center fw-medium rounded-2 mt-4 text-black d-block"
        >
          Get it now
        </Link>
      </div>
    </div>
  );
}

export default AffordablePricingCard;

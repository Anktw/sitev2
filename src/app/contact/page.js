import HeadingMain from "../components/headings/headingmain";
import ContactForm from "../components/contactform";
import Link from "next/link";
export default function Contact() {
  return (
    <main className="px-0 md:px-5 lg:px-8">
      <HeadingMain text="Contact me" />
      <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row items-center">
        <ContactForm />

        <div className="grid grid-cols-3 gap-4 md:gap-20 md:grid animate-fadeInDown items-center p-2 m-2 md:p-4 md:m-4 w-full align-middle">
          <div className="flex flex-col items-center justify-center align-middle">
            <p className="text-md font-semibold md:text-lg p-2 my-2">
              LinkedIn
            </p>
            <Link
              href="https://www.linkedin.com/in/unkit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <path
                  fill="#0078d4"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                />
                <path
                  d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                  opacity=".05"
                />
                <path
                  d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                  opacity=".07"
                />
                <path
                  fill="#fff"
                  d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                />
              </svg>
            </Link>
          </div>
          <div className="items-center flex flex-col">
            <p className="text-md font-semibold md:text-lg p-2 my-2">
              Twitter/X
            </p>
            <Link
              href="https://x.com/Unkittiwari"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <svg
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className={`h-10 w-7 `}
                viewBox="0 0 24 24"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </Link>
          </div>
          <div className="items-center flex flex-col">
            <p className="text-md font-semibold md:text-lg p-2 my-2">
              Instagram
            </p>
            <Link
              href="https://www.instagram.com/ankttiwari7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8ma"
                  cx="19.38"
                  cy="42.035"
                  r="44.899"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fd5" />
                  <stop offset=".328" stop-color="#ff543f" />
                  <stop offset=".348" stop-color="#fc5245" />
                  <stop offset=".504" stop-color="#e64771" />
                  <stop offset=".643" stop-color="#d53e91" />
                  <stop offset=".761" stop-color="#cc39a4" />
                  <stop offset=".841" stop-color="#c837ab" />
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                />
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8mb"
                  cx="11.786"
                  cy="5.54"
                  r="29.813"
                  gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#4168c9" />
                  <stop offset=".999" stop-color="#4168c9" stop-opacity="0" />
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                />
                <path
                  fill="#fff"
                  d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                />
                <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
                <path
                  fill="#fff"
                  d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                />
              </svg>
            </Link>
          </div>
          <div className="items-center flex flex-col">
            <p className="text-md font-semibold md:text-lg p-2 my-2">Gmail</p>
            <Link
              href="mailto:at792226@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <path
                  fill="#4caf50"
                  d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                />
                <path
                  fill="#1e88e5"
                  d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                />
                <polygon
                  fill="#e53935"
                  points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                />
                <path
                  fill="#c62828"
                  d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                />
                <path
                  fill="#fbc02d"
                  d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                />
              </svg>
            </Link>
          </div>
          <div className="items-center flex flex-col">
            <p className="text-md font-semibold md:text-lg p-2 my-2">
              Protonmail
            </p>
            <Link
              href="mailto:ankittiwariproton1@proton.me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Protonmail"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
                baseProfile="basic"
              >
                <path
                  fill="#d1c4e9"
                  d="M42.449,9.264L26.355,22.088c-1.401,1.117-3.404,1.112-4.8-0.01L5.535,9.198	C4.909,8.721,4,9.161,4,9.941v5.603v19.732c0,2.076,1.706,3.758,3.81,3.758H40.19c2.104,0,3.81-1.683,3.81-3.758V9.995	C44,9.205,43.072,8.767,42.449,9.264z"
                />
                <path
                  fill="#7c4dff"
                  d="M35.429,14.858l-13.79,10.988c-1.4,1.115-3.399,1.112-4.796-0.007L4,15.545v19.732	c0,2.076,1.706,3.758,3.81,3.758h27.619V14.858z"
                />
              </svg>
            </Link>
          </div>
          <div className="items-center flex flex-col">
            <p className="text-md font-semibold md:text-lg p-2 my-2">
              Telegram
            </p>
            <Link
              href="https://t.me/ankitism"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <linearGradient
                  id="BiF7D16UlC0RZ_VqXJHnXa"
                  x1="9.858"
                  x2="38.142"
                  y1="9.858"
                  y2="38.142"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#33bef0" />
                  <stop offset="1" stop-color="#0a85d9" />
                </linearGradient>
                <path
                  fill="url(#BiF7D16UlC0RZ_VqXJHnXa)"
                  d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                />
                <path
                  d="M10.119,23.466c8.155-3.695,17.733-7.704,19.208-8.284c3.252-1.279,4.67,0.028,4.448,2.113	c-0.273,2.555-1.567,9.99-2.363,15.317c-0.466,3.117-2.154,4.072-4.059,2.863c-1.445-0.917-6.413-4.17-7.72-5.282	c-0.891-0.758-1.512-1.608-0.88-2.474c0.185-0.253,0.658-0.763,0.921-1.017c1.319-1.278,1.141-1.553-0.454-0.412	c-0.19,0.136-1.292,0.935-1.745,1.237c-1.11,0.74-2.131,0.78-3.862,0.192c-1.416-0.481-2.776-0.852-3.634-1.223	C8.794,25.983,8.34,24.272,10.119,23.466z"
                  opacity=".05"
                />
                <path
                  d="M10.836,23.591c7.572-3.385,16.884-7.264,18.246-7.813c3.264-1.318,4.465-0.536,4.114,2.011	c-0.326,2.358-1.483,9.654-2.294,14.545c-0.478,2.879-1.874,3.513-3.692,2.337c-1.139-0.734-5.723-3.754-6.835-4.633	c-0.86-0.679-1.751-1.463-0.71-2.598c0.348-0.379,2.27-2.234,3.707-3.614c0.833-0.801,0.536-1.196-0.469-0.508	c-1.843,1.263-4.858,3.262-5.396,3.625c-1.025,0.69-1.988,0.856-3.664,0.329c-1.321-0.416-2.597-0.819-3.262-1.078	C9.095,25.618,9.075,24.378,10.836,23.591z"
                  opacity=".07"
                />
                <path
                  fill="#fff"
                  d="M11.553,23.717c6.99-3.075,16.035-6.824,17.284-7.343c3.275-1.358,4.28-1.098,3.779,1.91	c-0.36,2.162-1.398,9.319-2.226,13.774c-0.491,2.642-1.593,2.955-3.325,1.812c-0.833-0.55-5.038-3.331-5.951-3.984	c-0.833-0.595-1.982-1.311-0.541-2.721c0.513-0.502,3.874-3.712,6.493-6.21c0.343-0.328-0.088-0.867-0.484-0.604	c-3.53,2.341-8.424,5.59-9.047,6.013c-0.941,0.639-1.845,0.932-3.467,0.466c-1.226-0.352-2.423-0.772-2.889-0.932	C9.384,25.282,9.81,24.484,11.553,23.717z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <p className="text-xl"></p>
    </main>
  );
}
export const metadata = {
  title: "Contact to Ankit Tiwari",
  description: "Contact to Ankit Tiwari.",
};
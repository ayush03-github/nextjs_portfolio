import React from "react";

const Skills = () => {
  return (
    <div className="p-4 md:p-20 bg-white">
      <div className="text-2xl flex justify-center items-center mb-6">
        My <div className="font-bold px-2">Skills</div>
      </div>

      <div className="grid gap-5 lg:gap-16 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {/* skill - 1 */}
        <div className="bg-white p-6 border-black border-2 rounded-sm lg:rounded-md hover:bg-black hover:text-white group">
          <div className="flex justify-center">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-300"
            >
              <path
                d="M0 56V0H56V56H0Z"
                className="fill-black group-hover:fill-white transition-colors duration-300"
              />
              <path
                d="M36.6147 41.9176C37.6912 43.666 38.861 45.3414 41.339 45.3414C43.4203 45.3414 44.5123 44.3069 44.5123 42.8758C44.5123 41.1631 43.383 40.5549 41.0932 39.5578L39.8378 39.0227C36.215 37.4858 33.8054 35.56 33.8054 31.4923C33.8054 27.7434 36.6754 24.8905 41.1601 24.8905C44.3536 24.8905 46.6481 25.9965 48.3032 28.8929L44.3925 31.3927C43.5323 29.8558 42.6021 29.2507 41.1601 29.2507C39.6885 29.2507 38.7567 30.1794 38.7567 31.3927C38.7567 32.8922 39.6901 33.4989 41.8445 34.4276L43.0998 34.9627C47.3698 36.7811 49.7778 38.6385 49.7778 42.8136C49.7778 47.3122 46.225 49.7778 41.4556 49.7778C36.7905 49.7778 34.1414 47.4367 32.6667 44.5387L36.6147 41.9176ZM18.5921 42.0451C19.3792 43.4545 20.5754 44.5387 22.2958 44.5387C23.9416 44.5387 24.889 43.8885 24.889 41.3607V24.8889H30.0736V42.1571C30.0736 47.3947 27.0356 49.7778 22.5992 49.7778C18.5905 49.7778 15.6972 47.0618 14.5181 44.5387L18.5921 42.0451Z"
                className="fill-white group-hover:fill-black transition-colors duration-300"
              />
            </svg>
          </div>
          <div className="flex justify-center font-bold mt-8 duration-300">
            <h5>JavaScript</h5>
          </div>
        </div>

        {/* skill - 2 */}
        <div className="bg-white p-6 border-black border-2 rounded-sm lg:rounded-md hover:bg-black hover:text-white group">
          <div className="flex justify-center">
            <svg
              width="57"
              height="56"
              viewBox="0 0 57 56"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-300"
            >
              <g clipPath="url(#clip0_196_512)">
                <path
                  d="M54.249 0H3.49902C2.04928 0 0.874023 1.17525 0.874023 2.625V53.375C0.874023 54.8247 2.04928 56 3.49902 56H54.249C55.6988 56 56.874 54.8247 56.874 53.375V2.625C56.874 1.17525 55.6988 0 54.249 0Z"
                  className="fill-black group-hover:fill-white transition-colors duration-300"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M33.3637 43.5173V49.6536C34.3579 50.1646 35.5336 50.5483 36.8911 50.8038C38.2485 51.0597 39.6792 51.1875 41.1832 51.1875C42.6489 51.1875 44.0414 51.0471 45.3603 50.7658C46.6798 50.4844 47.8361 50.0211 48.8306 49.3754C49.8246 48.7296 50.6116 47.8861 51.1918 46.844C51.7715 45.8023 52.0615 44.5143 52.0615 42.9803C52.0615 41.8681 51.8957 40.8934 51.5645 40.056C51.2329 39.2187 50.7551 38.4741 50.1304 37.8221C49.5061 37.1701 48.7571 36.5852 47.8843 36.0675C47.011 35.5498 46.0266 35.0608 44.9303 34.6006C44.1274 34.2682 43.4072 33.9454 42.77 33.6322C42.1327 33.319 41.591 32.9994 41.1449 32.6734C40.6988 32.3474 40.3547 32.0023 40.1125 31.6379C39.8704 31.2736 39.7493 30.8613 39.7493 30.4011C39.7493 29.9792 39.8576 29.5989 40.0743 29.2601C40.291 28.9214 40.5969 28.6305 40.992 28.3876C41.3871 28.1448 41.8714 27.9562 42.445 27.822C43.0185 27.6877 43.6558 27.6206 44.3568 27.6206C44.8668 27.6206 45.405 27.659 45.9724 27.7357C46.5394 27.8124 47.1099 27.9306 47.6835 28.0904C48.257 28.2502 48.8144 28.4515 49.3565 28.6944C49.8981 28.9373 50.3981 29.2186 50.8571 29.5382V23.8047C49.9265 23.4467 48.9102 23.1815 47.8077 23.0089C46.7052 22.8363 45.4404 22.75 44.0127 22.75C42.5597 22.75 41.1832 22.9066 39.8831 23.2198C38.5831 23.533 37.4391 24.022 36.4513 24.6867C35.4636 25.3515 34.6829 26.1984 34.1094 27.2275C33.5358 28.2566 33.249 29.487 33.249 30.9188C33.249 32.7469 33.7748 34.3065 34.8263 35.5977C35.8778 36.8889 37.4742 37.9819 39.6154 38.8767C40.4567 39.2219 41.2405 39.5607 41.967 39.893C42.6935 40.2254 43.3212 40.5706 43.8502 40.9285C44.3791 41.2865 44.7964 41.6764 45.1022 42.0982C45.4085 42.5201 45.5611 42.9995 45.5611 43.5364C45.5611 43.9329 45.4658 44.3004 45.2746 44.639C45.0834 44.9776 44.7933 45.2716 44.4046 45.521C44.0159 45.7704 43.5315 45.9655 42.9516 46.1059C42.3717 46.2464 41.693 46.3168 40.9155 46.3168C39.5899 46.3168 38.2772 46.0836 36.9771 45.6168C35.6771 45.1504 34.4726 44.4504 33.3637 43.5173ZM23.0564 28.2425H31.0615V23.1875H8.74902V28.2425H16.715V50.75H23.0564V28.2425Z"
                  className="fill-white group-hover:fill-black transition-colors duration-300"
                />
              </g>
              <defs>
                <clipPath id="clip0_196_512">
                  <rect
                    width="56"
                    height="56"
                    fill="white"
                    transform="translate(0.874023)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex justify-center font-bold mt-8 duration-300">
            <h5>TypeScript</h5>
          </div>
        </div>

        {/* skill - 3 */}
        <div className="bg-white p-6 border-black border-2 rounded-sm lg:rounded-md hover:bg-black hover:text-white group">
          <div className="flex justify-center">
            <svg
              width="57"
              height="56"
              viewBox="0 0 57 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:fill-white group-hover:stroke-white duration-300"
            >
              <g clipPath="url(#clip0_196_523)">
                <path
                  d="M1.34695 35.4185C0.686721 33.0141 0.350586 30.5167 0.350586 28.0014C0.350586 16.519 7.56205 6.01989 18.2967 1.87964L19.7042 5.52223C10.464 9.08687 4.25793 18.1199 4.25793 28.0014C4.25793 30.169 4.54601 32.3155 5.11321 34.3841L1.34695 35.4185Z"
                  className="group-hover:stroke-white group-hover:fill-white duration-300 fill-black stroke-black"
                />
                <path
                  d="M18.1091 1.96908C20.4313 1.06114 22.8799 0.465805 25.3814 0.202881C36.801 -0.997362 47.9963 5.07715 53.236 15.3202L49.7605 17.1007C45.2495 8.28382 35.6173 3.05591 25.7899 4.08882C23.6342 4.31539 21.5295 4.82627 19.5315 5.60659L18.1091 1.96908Z"
                  className="group-hover:stroke-white group-hover:fill-white duration-300 fill-black stroke-black"
                />
                <path
                  d="M41.1669 48.36C48.792 43.4995 53.0391 34.8738 52.25 25.8541C51.9704 22.6582 51.0834 19.6058 49.618 16.7879L53.0804 14.9817C54.7845 18.2578 55.8167 21.8005 56.1415 25.5136C57.0583 35.9922 52.1264 46.0094 43.267 51.6558L41.1669 48.36Z"
                  className="group-hover:stroke-white group-hover:fill-white duration-300 fill-black stroke-black"
                />
                <path
                  d="M20.0404 22.2242C22.3061 22.2242 24.1518 23.4324 25.1002 25.54L25.1752 25.7049L28.9804 24.4127L28.8994 24.2179C27.4259 20.6292 24.0317 18.3987 20.0404 18.3987C17.2344 18.3987 14.9537 19.2982 13.069 21.1449C11.1963 22.9797 10.248 25.2882 10.248 28.0073C10.248 30.7026 11.1963 32.999 13.069 34.8339C14.9537 36.6807 17.2344 37.5801 20.0404 37.5801C24.0317 37.5801 27.4259 35.3495 28.8994 31.7639L28.9804 31.5691L25.1691 30.2738L25.0971 30.4447C24.2478 32.5164 22.3572 33.7546 20.0404 33.7546C18.4618 33.7546 17.1294 33.203 16.073 32.1176C15.0046 31.0173 14.4645 29.6353 14.4645 28.0104C14.4645 26.3734 14.9926 25.0183 16.073 23.8671C17.1263 22.7759 18.4618 22.2242 20.0404 22.2242Z"
                  className="group-hover:stroke-white group-hover:fill-white duration-300 fill-black stroke-black"
                />
                <path
                  d="M43.8742 18.7527L38.4515 32.4746L32.9926 18.7527H28.5271L36.1827 37.4813L30.7358 50.6905L34.6402 51.4671L48.0937 18.7527H43.8742Z"
                  className="group-hover:stroke-white group-hover:fill-white duration-300 fill-black stroke-black"
                />
                <path
                  d="M31.4346 48.9877L30.4833 51.2902C30.2941 51.7459 29.862 52.0546 29.3759 52.0756C29.0548 52.0877 28.7307 52.0966 28.4036 52.0966C17.2067 52.0907 7.30034 44.1969 4.8455 33.3201L1.03418 34.1805C2.41165 40.2815 5.86885 45.8188 10.7695 49.7763C15.7273 53.7785 21.9723 55.9881 28.3616 56.0001C28.3705 56.0001 28.4185 56.0001 28.4185 56.0001C28.7937 56.0001 29.1657 55.9911 29.5379 55.9762C31.5426 55.8922 33.3342 54.636 34.0995 52.7742L35.3418 49.7642L31.4346 48.9877Z"
                  className="group-hover:stroke-white group-hover:fill-white duration-300 fill-black stroke-black"
                />
              </g>
              <defs>
                <clipPath id="clip0_196_523">
                  <rect
                    width="56"
                    height="56"
                    fill="white"
                    transform="translate(0.350586)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex justify-center font-bold mt-8 duration-300">
            <h5>Cypress</h5>
          </div>
        </div>

        {/* skill - 4 */}
        <div className="bg-white p-6 border-black border-2 rounded-sm lg:rounded-md hover:bg-black hover:text-white transition duration-300 group">
          <div className="flex justify-center">
            <svg
              width="62"
              height="56"
              viewBox="0 0 62 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition duration-300"
            >
              <g clipPath="url(#clip0_196_513)">
                {/* <!-- Circle path --> */}
                <path
                  d="M31.2933 33.9258C34.5066 33.9258 37.1115 31.2727 37.1115 27.9999C37.1115 24.7271 34.5066 22.074 31.2933 22.074C28.08 22.074 25.4751 24.7271 25.4751 27.9999C25.4751 31.2727 28.08 33.9258 31.2933 33.9258Z"
                  className="group-hover:stroke-white group-hover:fill-white transition duration-300 stroke-black fill-black"
                />
                {/* <!-- Outer ring --> */}
                <path
                  d="M31.2933 41.3334C47.3598 41.3334 60.3842 35.3639 60.3842 28.0001C60.3842 20.6363 47.3598 14.6667 31.2933 14.6667C15.2268 14.6667 2.20239 20.6363 2.20239 28.0001C2.20239 35.3639 15.2268 41.3334 31.2933 41.3334Z"
                  className="group-hover:stroke-white transition duration-300"
                  stroke="black"
                  strokeWidth="3"
                />
                {/* <!-- Left elliptical path --> */}
                <path
                  d="M19.9563 34.6667C27.9895 48.8383 39.5775 57.3419 45.8388 53.66C52.1001 49.9781 50.6637 35.505 42.6304 21.3334C34.5972 7.16172 23.0092 -1.34189 16.7479 2.34001C10.4866 6.02191 11.9231 20.4951 19.9563 34.6667Z"
                  className="group-hover:stroke-white transition duration-300"
                  stroke="black"
                  strokeWidth="3"
                />
                {/* <!-- Right elliptical path --> */}
                <path
                  d="M19.9562 21.3333C11.923 35.5049 10.4865 49.978 16.7478 53.6599C23.0091 57.3418 34.5971 48.8382 42.6303 34.6666C50.6636 20.495 52.1 6.02182 45.8387 2.33992C39.5774 -1.34197 27.9894 7.16164 19.9562 21.3333Z"
                  className="group-hover:stroke-white transition duration-300"
                  stroke="black"
                  strokeWidth="3"
                />
              </g>
              <defs>
                <clipPath id="clip0_196_513">
                  <rect
                    width="61.0909"
                    height="56"
                    fill="white"
                    transform="translate(0.747803)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex justify-center font-bold mt-8">
            <h5>React</h5>
          </div>
        </div>

        {/* skill - 5 */}
        <div className="bg-white p-6 border-black border-2 rounded-sm lg:rounded-md hover:bg-black hover:text-white transition duration-300 group">
          <div className="flex justify-center">
            <svg
              width="93"
              height="56"
              viewBox="0 0 93 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition duration-300"
            >
              <g clipPath="url(#clip0_196_521)">
                <mask
                  id="mask0_196_521"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="93"
                  height="55"
                >
                  <path
                    d="M0.974121 0H92.6105V54.9818H0.974121V0Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_196_521)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M46.7923 0C34.5741 0 26.9378 6.10909 23.8832 18.3273C28.465 12.2182 33.8105 9.92727 39.9196 11.4545C43.4052 12.3251 45.8963 14.8553 48.6539 17.6536C53.1458 22.2133 58.3453 27.4909 69.7014 27.4909C81.9196 27.4909 89.5559 21.3818 92.6105 9.16364C88.0287 15.2727 82.6832 17.5636 76.5741 16.0364C73.0885 15.1658 70.5974 12.6356 67.8398 9.83733C63.3479 5.27758 58.1484 0 46.7923 0ZM23.8832 27.4909C11.665 27.4909 4.02867 33.6 0.974121 45.8182C5.55594 39.7091 10.9014 37.4182 17.0105 38.9455C20.4961 39.8177 22.9872 42.3462 25.7448 45.1445C30.2367 49.7042 35.4362 54.9818 46.7923 54.9818C59.0105 54.9818 66.6468 48.8727 69.7014 36.6545C65.1196 42.7636 59.7741 45.0545 53.665 43.5273C50.1795 42.6567 47.6883 40.1265 44.9307 37.3282C40.4388 32.7685 35.2393 27.4909 23.8832 27.4909Z"
                    className="group-hover:fill-white group-hover:stroke-white fill-black stroke-black transition duration-300"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_196_521">
                  <rect
                    width="91.6364"
                    height="56"
                    fill="white"
                    transform="translate(0.974121)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex justify-center font-bold mt-8">
            <h5>Tailwind CSS</h5>
          </div>
        </div>

        {/* skill - 6 */}
        <div className="bg-white p-6 border-black border-2 rounded-sm lg:rounded-md hover:bg-black hover:text-white transition duration-300 group">
          <div className="flex justify-center">
            <svg
              width="39"
              height="56"
              viewBox="0 0 39 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_196_522)">
                <path
                  d="M18.3594 27.9998C18.3594 25.5245 19.3427 23.1505 21.093 21.4002C22.8434 19.6498 25.2174 18.6665 27.6927 18.6665C30.1681 18.6665 32.542 19.6498 34.2924 21.4002C36.0427 23.1505 37.026 25.5245 37.026 27.9998C37.026 30.4752 36.0427 32.8492 34.2924 34.5995C32.542 36.3498 30.1681 37.3332 27.6927 37.3332C25.2174 37.3332 22.8434 36.3498 21.093 34.5995C19.3427 32.8492 18.3594 30.4752 18.3594 27.9998Z"
                  className="group-hover:fill-white group-hover:stroke-black fill-black stroke-white transition duration-300"
                />
                <path
                  d="M1.19263 46.6666C1.19263 44.3238 2.12328 42.077 3.77985 40.4205C5.43642 38.7639 7.68322 37.8333 10.026 37.8333H18.8593V46.6666C18.8593 49.0093 17.9286 51.2561 16.2721 52.9127C14.6155 54.5693 12.3687 55.4999 10.026 55.4999C7.68322 55.4999 5.43642 54.5693 3.77985 52.9127C2.12328 51.2561 1.19263 49.0093 1.19263 46.6666Z"
                  className="group-hover:fill-white group-hover:stroke-white transition duration-300 fill-black stroke-black"
                />
                <path
                  d="M26.6927 18.1667H17.8594V0.5H26.6927C29.0355 0.5 31.2822 1.43065 32.9388 3.08722C34.5954 4.74379 35.526 6.99059 35.526 9.33333C35.526 11.6761 34.5954 13.9229 32.9388 15.5794C31.2822 17.236 29.0355 18.1667 26.6927 18.1667Z"
                  className="group-hover:fill-black transition duration-300 fill-white stroke-black group-hover:stroke-white"
                />
                <path
                  d="M0.692627 9.33333C0.692627 11.8087 1.67596 14.1827 3.4263 15.933C5.17664 17.6833 7.55061 18.6667 10.026 18.6667H19.3593V0H10.026C7.55061 0 5.17664 0.98333 3.4263 2.73367C1.67596 4.48401 0.692627 6.85798 0.692627 9.33333Z"
                  className="group-hover:fill-white transition duration-300 fill-black"
                />
                <path
                  d="M3.77985 34.2462C2.12328 32.5896 1.19263 30.3428 1.19263 28.0001C1.19263 25.6573 2.12328 23.4105 3.77985 21.754C5.43642 20.0974 7.68322 19.1667 10.026 19.1667H18.8593V36.8334H10.026C7.68322 36.8334 5.43642 35.9028 3.77985 34.2462Z"
                  className="group-hover:fill-black group-hover:stroke-white transition duration-300 stroke-black fill-white"
                />
              </g>
              <defs>
                <clipPath id="clip0_196_522">
                  <rect
                    width="37.3333"
                    height="56"
                    fill="white"
                    transform="translate(0.692627)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex justify-center font-bold mt-8">
            <h5>Figma</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

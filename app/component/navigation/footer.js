const Footer = () => {
  return (
    <footer className="bg-white relative">
      <div className="p-6 py-12">
        <div className="grid gap-12 lg:grid-cols-2 max-w-7xl mx-auto">
          <div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-black rounded px-4 py-2 focus:ring focus:ring-gray-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-black rounded px-4 py-2 focus:ring focus:ring-gray-400"
              />
              <input
                type="url"
                placeholder="Your website (If exists)"
                className="w-full border border-black rounded px-4 py-2 focus:ring focus:ring-gray-400"
              />
              <textarea
                placeholder="How can I help?*"
                rows="4"
                className="w-full border border-black rounded px-4 py-2 focus:ring focus:ring-gray-400"
              ></textarea>
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
              >
                Get In Touch
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex my-5 md:justify-start space-x-4">
              {/* Icons here */}
            </div>
          </div>

          {/* Right Section: Info */}
          <div className="relative">
            <h3 className="text-2xl font-bold">
              Let&apos;s <span className="text-primary">talk</span> for{" "}
              <span className="text-primary">Something special</span>
            </h3>
            <p className="text-gray-500 mt-4">
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>
            <div className="mt-6 text-black font-semibold">
              <p>kodleayush0311@gmail.com</p>
              <p>+91 9302178248</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black px-24 py-5 flex justify-between relative">
        <div className="flex items-center">
          <div>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="25pt"
              height="25pt"
              viewBox="0 0 270.000000 284.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <metadata>
                Created by potrace 1.10, written by Peter Selinger 2001-2011
              </metadata>
              <g
                transform="translate(0.000000,284.000000) scale(0.100000,-0.100000)"
                fill="#fff"
                stroke="#ffffff"
                stroke-width="0"
              >
                <path
                  d="M565 2486 c-136 -43 -232 -135 -281 -271 l-24 -66 0 -727 c0 -803 -2
                -771 65 -882 44 -72 94 -116 182 -161 l67 -34 739 -3 c658 -2 746 -1 796 14
                141 40 249 146 293 286 17 56 18 17 18 776 0 580 -3 727 -14 769 -36 136
                -149 251 -288 295 -56 17 -106 18 -786 17 -554 0 -736 -3 -767 -13z m460 -96
                c226 -32 285 -179 140 -347 -28 -33 -177 -160 -375 -320 -8 -7 -105 -84 -214
                -173 -122 -98 -203 -157 -208 -152 -6 6 -8 147 -6 343 4 286 7 342 22 389 47
                144 158 237 311 260 74 11 250 11 330 0z m1101 -32 c96 -50 157 -141 180 -267
                17 -95 20 -1208 3 -1311 -21 -134 -99 -249 -204 -301 -43 -21 -64 -24 -150
                -24 -93 0 -105 2 -167 33 -37 18 -97 61 -137 98 -79 73 -136 153 -496 689
                -125 187 -237 351 -247 365 l-20 25 29 25 c76 65 694 560 736 589 56 38 161
                87 215 101 20 5 75 8 122 6 68 -2 95 -8 136 -28z m-1259 -1060 c87 -122 176
                -247 197 -277 22 -31 68 -96 104 -146 120 -167 149 -263 99 -336 -49 -72 -154
                -99 -392 -99 -250 1 -377 50 -450 175 -51 86 -57 124 -62 381 l-5 241 95 77
                c53 42 131 106 174 141 42 36 78 65 79 65 1 0 74 -100 161 -222z"
                />
              </g>
            </svg>
          </div>
          <div className="text-white text-lg font-bold">Δyush Kodle</div>
        </div>
        <div>
          <p className="text-white text-xs">© 2024 Your Website.</p>
          <p className="text-white text-xs">made in figma</p>
        </div>

        {/* Back to Top Button */}
      </div>
    </footer>
  );
};

export default Footer;

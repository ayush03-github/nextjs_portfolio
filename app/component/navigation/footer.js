import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white">
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
{/* 
            icpns */}

            <div className="flex my-5 md:justify-start space-x-4">
            <div className="w-14 h-14 border-black border-2 rounded p-4">
              {/* Facebook SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.326 24h11.495v-9.294H9.847v-3.622h2.974V8.413c0-2.95 1.805-4.555 4.44-4.555 1.262 0 2.348.093 2.662.135v3.087l-1.827.001c-1.433 0-1.711.681-1.711 1.68v2.202h3.422l-.446 3.622h-2.976V24h5.833C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0z"/>
              </svg>
            </div>
            <div className="w-14 h-14 p-4 border-black border-2 rounded">
              {/* Reddit SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor">
            <path d="M 17.662109 2 C 15.565005 2 14 3.7131367 14 5.6621094 L 14 9.0351562 C 11.24971 9.1810926 8.7344872 9.9143634 6.7265625 11.064453 C 5.9527826 10.321405 4.9166871 9.991448 3.9121094 9.9921875 C 2.8229214 9.9929893 1.7094525 10.370413 0.94140625 11.234375 L 0.92382812 11.253906 L 0.90625 11.273438 C 0.16947928 12.194228 -0.12225605 13.427747 0.07421875 14.652344 C 0.25365009 15.770711 0.90137168 16.893419 2.0273438 17.628906 C 2.0199689 17.753058 2 17.874618 2 18 C 2 22.962 7.832 27 15 27 C 22.168 27 28 22.962 28 18 C 28 17.874618 27.980031 17.753058 27.972656 17.628906 C 29.098628 16.893419 29.74635 15.770711 29.925781 14.652344 C 30.122256 13.427747 29.830521 12.194228 29.09375 11.273438 L 29.076172 11.253906 L 29.058594 11.234375 C 28.290448 10.370294 27.177168 9.9929893 26.087891 9.9921875 C 25.08323 9.991448 24.046988 10.321133 23.273438 11.064453 C 21.265513 9.9143634 18.75029 9.1810926 16 9.0351562 L 16 5.6621094 C 16 4.6830821 16.565214 4 17.662109 4 C 18.182797 4 18.817104 4.2609042 19.810547 4.609375 C 20.650361 4.9039572 21.743308 5.2016984 23.140625 5.2910156 C 23.474875 6.2790874 24.402814 7 25.5 7 C 26.875 7 28 5.875 28 4.5 C 28 3.125 26.875 2 25.5 2 C 24.561213 2 23.747538 2.5304211 23.320312 3.3007812 C 22.125831 3.2346294 21.248238 2.9947078 20.472656 2.7226562 C 19.568849 2.4056271 18.738422 2 17.662109 2 z M 3.9121094 11.992188 C 4.3072494 11.991896 4.6826692 12.095595 4.9921875 12.263672 C 3.8881963 13.18517 3.0505713 14.261821 2.5449219 15.4375 C 2.2764358 15.106087 2.114647 14.734002 2.0507812 14.335938 C 1.9430146 13.664243 2.1440212 12.966045 2.4628906 12.552734 C 2.7642172 12.228395 3.3144613 11.992626 3.9121094 11.992188 z M 26.085938 11.992188 C 26.683756 11.992627 27.235874 12.22849 27.537109 12.552734 C 27.855979 12.966045 28.056985 13.664243 27.949219 14.335938 C 27.885353 14.734002 27.723564 15.106087 27.455078 15.4375 C 26.949429 14.261821 26.111804 13.18517 25.007812 12.263672 C 25.316626 12.095792 25.690955 11.991896 26.085938 11.992188 z M 10 14 C 11.105 14 12 14.895 12 16 C 12 17.105 11.105 18 10 18 C 8.895 18 8 17.105 8 16 C 8 14.895 8.895 14 10 14 z M 20 14 C 21.105 14 22 14.895 22 16 C 22 17.105 21.105 18 20 18 C 18.895 18 18 17.105 18 16 C 18 14.895 18.895 14 20 14 z M 20.238281 19.533203 C 19.599281 21.400203 17.556 23 15 23 C 12.444 23 10.400719 21.400969 9.7617188 19.667969 C 10.911719 20.600969 12.828 21.267578 15 21.267578 C 17.172 21.267578 19.088281 20.600203 20.238281 19.533203 z"></path>
            </svg>
            </div>
            <div className="w-14 h-14 p-4 border-black border-2 rounded">
              {/* Twitter SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.96 4.96 0 002.163-2.723c-.957.555-2.017.959-3.127 1.184a4.916 4.916 0 00-8.379 4.482c-4.083-.195-7.7-2.158-10.123-5.124a4.822 4.822 0 00-.664 2.475c0 1.71.869 3.213 2.188 4.099a4.902 4.902 0 01-2.229-.616c-.054 2.255 1.581 4.415 3.946 4.89a4.964 4.964 0 01-2.224.084 4.936 4.936 0 004.604 3.417A9.867 9.867 0 010 19.54a13.945 13.945 0 007.548 2.209c9.057 0 14.015-7.502 14.015-14.008 0-.21-.005-.423-.015-.634A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </div>
            <div className="w-14 h-14 p-4 border-black border-2 rounded">
              {/* Discord SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.497c-.211.361-.452.834-.617 1.203-1.782-.268-3.58-.268-5.342 0-.17-.369-.417-.842-.623-1.203a19.736 19.736 0 00-4.885 1.497c-3.08 4.58-3.923 9.02-3.49 13.409A19.967 19.967 0 008.715 20.5c.302-.418.572-.861.803-1.325-.442-.167-.856-.376-1.234-.614.104-.076.202-.153.296-.229 2.446 1.093 5.076 1.093 7.499 0 .098.08.198.153.297.229-.372.238-.787.447-1.235.614.24.464.515.907.815 1.325 2.175-.556 4.276-1.576 6.217-3.139.507-5.103-.811-9.243-3.497-13.409zm-12.69 8.438c-.97 0-1.767-.894-1.767-2.004s.777-2.004 1.767-2.004c.986 0 1.78.898 1.767 2.004.001 1.11-.782 2.004-1.767 2.004zm8.744 0c-.97 0-1.767-.894-1.767-2.004s.777-2.004 1.767-2.004c.986 0 1.78.898 1.767 2.004 0 1.11-.781 2.004-1.767 2.004z"/>
              </svg>
            </div>
          </div>
          </div>

          {/* Right Section: Info */}
          <div>
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
      
      <div className="bg-black px-4 py-5 flex justify-between">
        <div className="flex items-center">
          <div>
          <Image
              src="/assets/logowhite.png"
              alt="logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
          </div>
          <div className="text-white text-lg font-bold">
            PERSONAL
          </div>
        </div>
        <div>
        <p className="text-white text-xs">© 2024 Your Website.</p>
        <p className="text-white text-xs">made in figma</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

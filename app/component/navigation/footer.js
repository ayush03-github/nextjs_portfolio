
import Image from "next/image";
import BackToTop from "@/app/component/BackToTop"

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
            
            <BackToTop />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black px-4 py-5 flex justify-between relative">
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
          <div className="text-white text-lg font-bold">PERSONAL</div>
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

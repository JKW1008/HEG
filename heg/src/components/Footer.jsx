import logoImage from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black py-20 mb-24">
      <div className="max-w-[1920px] mx-auto px-12 pt-6">
        <div className="border-t border-gray-400 pt-12 px-6">
          <div className="mb-8">
            <div className="flex items-start gap-6">
              <img src={logoImage} alt="HEG Logo" className="h-14 w-auto" />
              <div className="mt-0.5">
                <p className="text-black font-medium text-lg leading-tight">
                  SAME SOUND, DIFFERENT LANGUAGE,
                  <br />
                  ONE HEXAHEDRON
                </p>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-4 leading-relaxed">
              Experience the change of shape with your five senses.
              <br />
              Language one feels with one's fingertips
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-60">
            <div className="">
              <h3 className="text-base font-medium mt-10 mb-4">
                Awards and Honors
              </h3>
              <ul className="space-y-3">
                <li>
                  <p className="text-gray-600 text-sm">
                    - The 8th Hangul Creative Industry Idea Contest
                  </p>
                  <p className="text-gray-500 text-xs ml-4">2022. 10. 08</p>
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-base font-medium mt-10 mb-4">
                Start a Conversation
              </h3>
              <ul className="space-y-3">
                <li>
                  <p className="text-gray-600 text-sm">
                    - Mail: hanglish@gmail.com
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 text-sm">
                    - Instargram: Han-glish_Offical
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 text-sm">
                    - Phone: 010.4395.4316
                  </p>
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-base font-medium mt-10 mb-4">
                Expectation Effectiveness
              </h3>
              <ul className="space-y-3">
                <li>
                  <p className="text-gray-600 text-sm">
                    - Cognitive development
                  </p>
                </li>{" "}
                <li>
                  <p className="text-gray-600 text-sm">
                    - Development of thinking skills
                  </p>
                </li>
              </ul>
            </div>

            <div className="">
              <div className="space-y-9">
                <p className="text-gray-600 text-sm font-bold">INSTAGRAM</p>
                <p className="text-gray-600 text-sm font-bold">FACEBOOK</p>
                <p className="text-gray-600 text-sm font-bold">BEHANCE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

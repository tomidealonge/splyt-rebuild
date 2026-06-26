import Instagram from './Instagram'
import TikTok from './TikTok'
import WavySVG from './WavySVG'
import Youtube from './Youtube'

function FooterComponent() {
  return (
    <div className="bg-[#010100] relative pt-[13-px] ">
      <div className="relative z-10">
        <WavySVG />
      </div>
      <video
        src="/videos/splash.mp4"
        autoPlay
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="general-title relative  text-cream flex-center md:mb-[76px] mb-[30px]">
        #CHUGRESPONSIBLY
      </div>

      <div className="flex-center relative gap-x-[20px] md:mb-[191px] mb-[150px]">
        <div className="social-media">
          <Youtube />
        </div>
        <div className="social-media">
          <Instagram />
        </div>
        <div className="social-media">
          <TikTok />
        </div>
      </div>

      <div className="w-[96%] relative max-w-[1852px] mx-auto">
        <div className="flex justify-between flex-wrap gap-10">
          <div className="md:gap-x-[67px] gap-8 flex flex-wrap">
            <div className="font-paragraph text-cream">
              <span>SPYLT Flavors</span>
            </div>
            <div className="font-paragraph text-cream flex flex-col gap-y-[10px]">
              <span>Chug Club</span>
              <span>Student Marketing</span>
              <span>Dairy Dealers</span>
            </div>
            <div className="font-paragraph text-cream flex flex-col gap-y-[10px]">
              <span>Chug Club</span>
              <span>Student Marketing</span>
              <span>Dairy Dealers</span>
            </div>
          </div>

          <div>
            <div className="font-paragraph text-cream text-[18px] max-w-[528px] mb-[57px]">
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </div>
            <div className="flex md:mb-[205px] mb-10 justify-between border-b border-[#D9D9D9] pb-2.5">
              <input
                className="placeholder:font-sans focus:outline-0 w-full text-cream md:text-[40] text-[24px] "
                placeholder="Enter your email"
              />
              <div className="w-[26px] aspect-square">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1927 6.19531L16.8427 8.54531L26.1427 17.862H5.85938V21.1953H26.1427L16.8427 30.512L19.1927 32.862L32.526 19.5286L19.1927 6.19531Z"
                    fill="#FAEADE"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 w-full justify-between opacity-50 pb-[27px] font-paragraph text-[14px] text-cream">
          <div>Copyright © 2025 Spylt - All Rights Reserved</div>

          <div className="flex gap-x-[38px]">
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterComponent

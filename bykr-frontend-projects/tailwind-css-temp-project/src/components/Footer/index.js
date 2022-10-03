import social from "../../assets/images/social.png";

const Footer = () => {
  return (
    <footer class="flex flex-wrap p-4 bg-gray md:p-6">
      <div className="flex w-full flex-col md:flex-row space-x-0 md:space-x-20 items-center mb-10 md:mx-40 lg:mx-60">
        <div className="w-100 md:w-1/2 bg-yellow rounded-lg p-10 mb-10 md:mb-0">
          <p className="font-bold font-base text-black mb-10">
            Sign Up to Receive Product Updates and More
          </p>
          <div className="flex items-center">
            <input
              className="w-full bg-transparent border-b-2 w-100 text-black py-2"
              placeholder="youremail@gmail.com"
            />
            <span className="footer-input-icon text-black pb-5"></span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-100 md:w-1/2 text-center md:text-left">
          <div className="flex flex-col w-100 md:w-1/2 mb-10 md:mb-0">
            <p className="text-base font-bold mb-3">Office</p>
            <div>545, Street 11, Block F California, U.S.A</div>
          </div>
          <div className="flex-col md:w-1/2">
            <p className="text-base font-bold mb-3">Contact</p>
            <p>+92 302 300 3215</p>
            <p>ouraddress@email.com</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full md:flex-row items-center md:justify-between md:mx-40 lg:mx-60">
        <div class="inline-flex text-light-gray mb-5 md:mb-0">© 2022 . All Rights Reserved.</div>
        <a href="#" class="flex items-center mr-4 hover:underline md:mr-6 text-xs mb-5 md:mb-0">
          Terms & Conditions{"  "}Privacy
        </a>
        <a href="#" class="flex mr-4 hover:underline md:mr-6 text-xs mb-5 md:mb-0">
          <img src={social} alt="" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;

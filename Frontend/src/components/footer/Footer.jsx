const Footer = () => {
  const handleContactClick = () => {
    window.open('https://github.com/bakaruu', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-5 sm:px-16 px-6 font-[sans-serif] fixed bottom-0 w-full z-50">
      <div className="lg:flex lg:justify-between lg:items-center max-lg:text-center">
        <p className="text-base">© 2024<a href='https://readymadeui.com/' target='_blank' className="hover:underline mx-1">Castro</a>All Rights Reserved.</p>
        <ul className="flex space-x-6 gap-y-2 max-lg:mt-4 max-lg:justify-center flex-wrap">
          <li><a href="javascript:void(0)" className="text-base hover:text-white">Terms of Service</a></li>
          <li><a href="javascript:void(0)" className="text-base hover:text-white">Privacy Policy</a></li>
          <li><a href="javascript:void(0)" className="text-base hover:text-white" onClick={handleContactClick}>Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
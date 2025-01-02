const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-400 py-6 mt-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 NewsHub. All Rights Reserved.</p>
          <p className="mt-2">
            <a href="/privacy" className="hover:text-white">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms" className="hover:text-white">
              Terms of Use
            </a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
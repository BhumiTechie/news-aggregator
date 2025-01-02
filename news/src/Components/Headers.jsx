const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">NewsHub</h1>
        <input
          type="text"
          placeholder="Search news..."
          className="p-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>
    </header>
  );
};

export default Header;

export default function App() {
  return (
    // Header started
    <header className="flex flex-col items-center gap-1 bg-slate-800 text-white fixed top-0 left-0 right-0 max-h-fit">
      {/* Menu Icon */}
      <button className="block md:hidden px-navbar-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {/* / Menu Icon */}

      {/* Heading */}
      <div className="grid grid-cols-12 gap-x-1 justify-items-between content-center pt-2 px-navbar-item h-1/2 w-full">
        {/* Profile */}
        <nav className="col-start-1 col-span-3 px-navbar-item pt-3">
          <ul className="flex items-center">
            {/* Cart */}
            <li className="hidden">
              <a
                href="/src/cart.html"
                className="flex items-center  px-navbar-item hover:bg-slate-700"
              >
                سبد خرید
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </a>
            </li>
            {/* /Cart */}
            {/* User Account */}
            <li className="hidden">
              <a
                href="#"
                className="flex items-center  px-navbar-item hover:bg-slate-700"
              >
                حساب‌کاربری
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </a>
              <ul className="hidden">
                <li>
                  <a href="/src/profile.html">پنل‌کاربری من</a>
                </li>
                <li>
                  <a href="/src/orders.html"></a>سفارش‌ها
                </li>
                <li>
                  <a href="/src/watchlist.html"></a>لیست علاقه‌مندی‌ها
                </li>
                <li>
                  <a href="/src/gamers.html">باشگاه گیمرها</a>
                </li>
                <li>
                  <a href="/src/logout.html">خروج از حساب‌کاربری</a>
                </li>
              </ul>
            </li>
            {/* /User Account */}
            {/* Signup */}
            <li>
              <a
                href="/src/signup.html"
                className="flex items-center justify-center py-navbar-item px-navbar-item rounded transition-colors mr-1 bg-emerald-500 hover:bg-emerald-600"
              >
                ثبت‌نام
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                  />
                </svg>
              </a>
            </li>
            {/* /Signup */}
            {/* Login */}
            <li>
              <a
                href="/src/login.html"
                className="flex items-center justify-center py-navbar-item px-3 rounded transition-colors hover:bg-slate-700"
              >
                ورود
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
              </a>
            </li>
            {/* /Login */}
          </ul>
        </nav>
        {/* /Profile */}
        {/* Search */}
        <div className="col-start-4 col-span-5  px-navbar-item pt-3">
          <form className=" flex justify-between gap-1">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              دنبال چه محصولی؟
            </label>
            <div className="relative flex w-8/12">
              <div className="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mx-3 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 px-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                placeholder="جستجو"
              />
            </div>
            <button
              type="submit"
              className="text-white left-2.5 bottom-2.5 bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 w-4/12"
            >
              دنبال چه محصولی؟
            </button>
          </form>
        </div>
        {/* /Search */}

        {/* Logo */}
        <div className="col-start-11 col-span-2 px-navbar-item pt-3 block justify-self-end">
          <a href="/" className="">
            <img src="/logo.png" alt="logo" className=""></img>
          </a>
        </div>
        {/* / Logo */}
      </div>
      {/* /Heading */}
      {/* Navigation */}
      <div className="grid grid-cols-12 gap-x-1 content-stretch pb-2 px-navbar-item h-1/2 w-full">
        {/* Categories */}
        <div className=" col-start-1 col-span-3">
          <a
            href="/src/categories.html"
            className="block py-navbar-item px-navbar-item hover:bg-slate-700"
          >
            دسته‌بندی‌ محصولات
          </a>
        </div>
        {/* /Categories */}
        {/* Nav */}
        <nav className=" col-start-4 col-span-5 place-self-between">
          <ul className="flex items-center ">
            <li>
              <a
                href="/src/build-your-pc.html"
                className="block py-navbar-item px-navbar-item hover:bg-slate-700"
              >
                کامپیوتر خودتو بساز
              </a>
            </li>
            <li>
              <a
                href="/src/offers.html"
                className="block py-navbar-item px-navbar-item hover:bg-slate-700"
              >
                پیشنهادها
              </a>
            </li>
            <li>
              <a
                href="/src/guides.html"
                className="block py-navbar-item px-navbar-item hover:bg-slate-700"
              >
                اگه سوالی داشتی!
              </a>
            </li>
            <li>
              <a
                href="/src/techmag.html"
                className="block py-navbar-item px-navbar-item hover:bg-slate-700"
              >
                مجله‌ی تکنولوژی
              </a>
            </li>
          </ul>
        </nav>
        {/* /Nav */}
      </div>
      {/* /Navigation */}
    </header>
    // Header finished
  );
}

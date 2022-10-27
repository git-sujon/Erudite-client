import { Fragment, useContext, useState } from "react";
import { Disclosure, Menu, Switch, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, MoonIcon, SunIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Logo/logo (2).png";
import { AuthContext } from "../../../Contexts/AuthProvider";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [light, setLight] = useState(true);
  const [enabled, setEnabled] = useState(false);

  const { user, logOut } = useContext(AuthContext);
  console.log(user?.displayName);

  const signOutHandler = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  // const lightControl = () => {
  //   setLight(!light);
  // };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {/* single Nvabar  */}
                    <Link
                      to="/"
                      className=" text-white hover:bg-gray-700 hover 
                        px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </Link>

                    {/* single Nvabar  */}
                    <Link
                      to="/courses"
                      className=" text-white hover:bg-gray-700 hover 
                        px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Courses
                    </Link>
                    {/* single Nvabar  */}
                    <Link
                      to="/blog"
                      className=" text-white hover:bg-gray-700 hover 
                        px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Blog
                    </Link>
                    {/* single Nvabar  */}
                    <Link
                      to="/faq"
                      className=" text-white hover:bg-gray-700 hover 
                        px-3 py-2 rounded-md text-sm font-medium"
                    >
                      FAQ
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
              {
                user ?   <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open user menu</span>
                    <img
                      title={user?.displayName}
                      className="h-8 w-8 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Your Profile
                        </Link>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          onClick={signOutHandler}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Sign out
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>

              :
              <Link
              to="/login"
              className=" text-white hover:bg-gray-700 hover 
                px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>

              }

                <div className="ml-5" onClick={() => setLight(!light)}>
                  {light ? <button title="Dark"><MoonIcon className="w-8"></MoonIcon> </button> : <button title="Light"><SunIcon className="w-8"></SunIcon> </button>}
                </div>

                {/* <div className="py-12">
                  <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span className="sr-only"></span>
                    <span
                      aria-hidden="true"
                      className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            
                    ></span>
                  </Switch>
                </div> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <Disclosure.Button className="flex flex-col">
                <Link
                  to="/"
                  className=" text-white hover:bg-gray-700 hover 
                      px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>

                {/* single Nvabar  */}
                <Link
                  to="/courses"
                  className=" text-white hover:bg-gray-700 hover 
                      px-3 py-2 rounded-md text-sm font-medium"
                >
                  Courses
                </Link>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

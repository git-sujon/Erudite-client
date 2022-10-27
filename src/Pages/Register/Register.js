import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Logo/logo (2).png";
import { AuthContext } from "../../Contexts/AuthProvider";
import googleIcon from '../../Assets/Icon/icons8-google.svg'
import facebookIcon from '../../Assets/Icon/icons8-facebook.svg'
import githubIcon from '../../Assets/Icon/icons8-github.svg'
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const { createAccount, signInwithProvider, emailVarification,
    userInformationProviding,
    setLoading, } = useContext(AuthContext);

  const [error, setError] =  useState('')
  const [isChecked, setIsChecked] = useState(false);
  const googleProvider= new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()
  const facebookProvider =new FacebookAuthProvider()

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.first_name.value;
    const lastName = form.last_name.value;
    const name = firstName + ' ' + lastName;
    const email = form.email.value;
    const password = form.password.value;
    const passwordConfirm = form.PasswordConfirmation.value;
    const picUrl =form.photoURl.value
    console.log(name, email, password, picUrl,  passwordConfirm);

    if (password !== passwordConfirm) {
        setError("Password Doesn't Match")
       return alert("Password Not Match");
    }

    createAccount(email, password)
      .then((res) => {
        form.reset();
        console.log(res);
        handelUserInformationProviding(name, picUrl);
        emailVarificationHandler()
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message)
      });


      const handelUserInformationProviding = (name, picUrl) => {
        const profile = {
          displayName: name,
          photoURL: picUrl,
        };
  
        userInformationProviding(profile)
        .then(()=> {
  
        })
        .catch(error=>{
          console.error(error);
        })
      };
  

    const  emailVarificationHandler = ()=> {
        emailVarification()
        .then(() => {})
        .catch(error =>{
          console.error(error)
        })
    }



  };



  const googleProviderHandler =() =>{
    signInwithProvider(googleProvider)
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        console.error(error)
    })
  }

  const githubProviderHandler =() =>{
    signInwithProvider(githubProvider)
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        console.error(error)
    })
  }

  const facebookProviderHandler =() =>{
    signInwithProvider(facebookProvider)
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        console.error(error)
    })
  }

  const checkHandeler = (event) => {
    setIsChecked(event.target.checked);
    console.log(event.target.checked);
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 pb-32">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Night"
              src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-40"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <Link className="block text-white" href="/">
                <span className="sr-only">Erudite</span>
                <img src={logo} alt="" />
              </Link>

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to Erudite 👨‍🎓
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                Erudite is a global destination for teaching and learning
                online. It was founded in May 2022 by Moniruzzaman Sujon. As of
                october 2022, the platform has more than 4 Thousands students,
                204 courses, and 71 instructors teaching courses in over 3
                languages.
              </p>
            </div>
          </section>

          <main
            aria-label="Main"
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <Link
                  className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 dark:bg-gray-900 sm:h-20 sm:w-20"
                  href="/"
                >
                  <span className="sr-only">Erudite</span>
                  <img src={logo} alt="" />
                </Link>

                <h1 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
                  Welcome to Erudite 👨‍🎓
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                  Erudite is a global destination for teaching and learning
                  online. It was founded in May 2022 by Moniruzzaman Sujon. As
                  of october 2022, the platform has more than 4 Thousands
                  students, 204 courses, and 71 instructors teaching courses in
                  over 3 languages.
                </p>
              </div>

              <form
                onSubmit={onSubmitHandler}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    required
                    id="FirstName"
                    name="first_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 py-2 pl-2"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    required
                    id="LastName"
                    name="last_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 py-2 pl-2"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    required
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 py-2 pl-2"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="photoURl"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    PhotoURl
                  </label>

                  <input
                    type="photoURl"
                    required
                    id="photoURl"
                    name="photoURl"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 py-2 pl-2"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    required
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 py-2 pl-2"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="PasswordConfirmation"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Password Confirmation
                  </label>

                  <input
                    type="password"
                    required
                    id="PasswordConfirmation"
                    name="password_confirmation"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 py-2 pl-2"
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                      type="checkbox"
                      onClick={checkHandeler}
                      id="MarketingAccept"
                      name="marketing_accept"
                      className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
                    />

                    <span className="text-sm text-gray-700 dark:text-gray-200">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                    <p className="text-red-600">{error}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    By creating an account, you agree to our
                    <Link
                      to="/termsAndCondition"
                      className="text-gray-700 underline dark:text-gray-200"
                    >
                      terms and conditions
                    </Link>
                    and
                    <Link
                      to="/privacyPolicy"
                      className="text-gray-700 underline dark:text-gray-200"
                    >
                      privacy policy{" "}
                    </Link>
                    .
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    disabled={!isChecked}
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring dark:hover:bg-blue-700  disabled:hover:text-white  dark:hover:text-white disabled:bg-blue-400"
                  >
                    Create an account
                  </button>

                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    Already have an account? 
                    <Link
                      href="#"
                      className="text-gray-700 underline dark:text-gray-200"
                    >
                      Log in
                    </Link>
                    .
                  </p>
                </div>
              </form>

              <div>

                <div class="flex justify-between mt-12 ">
                 <button onClick={googleProviderHandler} className="border block border-white p-2 bg-gray-100 rounded-sm hover:bg-gray-900">
                   <Link><img className="w-12" src={googleIcon} alt="" /></Link>
                 </button>



                 <button onClick={facebookProviderHandler} className="border block border-white p-2 bg-gray-100  rounded-sm hover:bg-gray-900">
                   <Link><img className="w-12" src={facebookIcon} alt="" /></Link>
                 </button>

                 <button onClick={githubProviderHandler} className="border block border-white p-2 bg-gray-100  rounded-sm hover:bg-gray-900">
                   <Link><img className="w-12" src={githubIcon} alt="" /></Link>
                 </button>
                </div>

              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Register;

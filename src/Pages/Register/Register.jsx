import { Link, useNavigate } from 'react-router'
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc'
import { TbFidgetSpinner } from 'react-icons/tb'

import { imageUpload, saveUserDB } from '../../api/utils';
import useAuth from '../../hook/useAuth';
const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle, loading } =useAuth()
  const navigate = useNavigate()
  // form submit handler

  const handleSubmit = async event => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const image = form?.image?.files[0]

    // image url response from imgbb
    const imageUrl = await imageUpload(image)

    try {
      //2. User Registration
      const result = await createUser(email, password)

      //3. Save username & profile photo
      await updateUserProfile(
        name,
        imageUrl
      )
      console.log(result)
      const userata={
        name,
        email,
        image: imageUrl,
      };
      // save user in Db
      await saveUserDB(userata)
      navigate('/')
      toast.success('Signup Successful')
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }

  // Handle Google Signin
  const handleGoogleSignIn = async () => {
    try {
      //User Registration using google
     const result =   await signInWithGoogle()
     const userData={
       name: result?.user?.displayName,
        email: result?.user?.email,
        image: result?.user?.photoURL,
     };
    //  save Db
    await saveUserDB(userData)
      navigate('/')
      toast.success('Signup Successful')
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }
  return (
    <div className='flex justify-center items-center md:mt-5 md:mb-5 min-h-screen bg-white'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to CourtConnect</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                className='bg-gray-200 cursor-pointer'
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='new-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-blue-400 w-full rounded-md py-3 text-white'
            >
              {loading ? (
                <TbFidgetSpinner className='animate-spin m-auto' />
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-lime-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Register


// import React from 'react';
// import { Link, useNavigate } from 'react-router';
// import toast from 'react-hot-toast';
// import { FcGoogle } from 'react-icons/fc';
// import { TbFidgetSpinner } from 'react-icons/tb';

// // Assuming these functions and hooks exist in your project
// import { imageUpload, saveUserDB } from '../../api/utils';
// import useAuth from '../../hook/useAuth';

// const Register = () => {
//   const { createUser, updateUserProfile, signInWithGoogle, loading } = useAuth();
//   const navigate = useNavigate();

//   // Function to handle form submission for email/password registration
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const name = form.name.value;
//     const email = form.email.value;
//     const password = form.password.value;
//     const image = form?.image?.files[0];

//     try {
//       // Input validation for basic fields
//       if (!name || !email || !password || !image) {
//         toast.error('Please fill in all fields and select an image.');
//         return;
//       }
      
//       // Fixed Bug: Image upload should happen first to get the URL before user creation
//       const imageUrl = await imageUpload(image);

//       // User Registration
//       const result = await createUser(email, password);
//       console.log(result);

//       // Save username & profile photo
//       await updateUserProfile(name, imageUrl);

//       // Prepare user data for saving to the database
//       const userData = {
//         name,
//         email,
//         image: imageUrl,
//       };
      
//       // Save user to the database
//       await saveUserDB(userData);

//       // Navigate to the home page on success
//       navigate('/');
//       toast.success('Signup Successful!');
//     } catch (err) {
//       console.log(err);
//       toast.error(err?.message || 'An error occurred during signup.');
//     }
//   };

//   // Function to handle Google Sign-in
//   const handleGoogleSignIn = async () => {
//     try {
//       // User Registration using Google
//       const result = await signInWithGoogle();
      
//       // Prepare user data from Google profile
//       const userData = {
//         name: result?.user?.displayName,
//         email: result?.user?.email,
//         image: result?.user?.photoURL,
//       };

//       // Save user to the database
//       await saveUserDB(userData);

//       // Navigate to the home page on success
//       navigate('/');
//       toast.success('Signup Successful!');
//     } catch (err) {
//       console.log(err);
//       toast.error(err?.message || 'Google sign-in failed.');
//     }
//   };

//   return (
//     <div className='flex items-center justify-center min-h-screen bg-gray-100 p-4'>
//       <div className='w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-2xl transform transition-transform hover:scale-105'>
//         <div className='text-center'>
//           <h1 className='text-4xl font-extrabold text-gray-900'>Sign Up</h1>
//           <p className='text-md text-gray-500 mt-2'>
//             Create your account to start your journey.
//           </p>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className='space-y-6'
//         >
//           {/* Name Input */}
//           <div>
//             <label htmlFor='name' className='text-sm font-medium text-gray-700'>
//               Name
//             </label>
//             <input
//               type='text'
//               name='name'
//               id='name'
//               placeholder='Enter your name'
//               className='w-full px-4 py-3 mt-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors'
//               required
//             />
//           </div>

//           {/* Image Upload Input */}
//           <div>
//             <label htmlFor='image' className='text-sm font-medium text-gray-700'>
//               Profile Picture
//             </label>
//             <input
//               className='w-full px-4 py-3 mt-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors'
//               type='file'
//               id='image'
//               name='image'
//               accept='image/*'
//               required
//             />
//           </div>

//           {/* Email Input */}
//           <div>
//             <label htmlFor='email' className='text-sm font-medium text-gray-700'>
//               Email address
//             </label>
//             <input
//               type='email'
//               name='email'
//               id='email'
//               placeholder='Enter your email'
//               className='w-full px-4 py-3 mt-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors'
//               required
//             />
//           </div>

//           {/* Password Input */}
//           <div>
//             <div className='flex justify-between'>
//               <label htmlFor='password' className='text-sm font-medium text-gray-700'>
//                 Password
//               </label>
//             </div>
//             <input
//               type='password'
//               name='password'
//               autoComplete='new-password'
//               id='password'
//               placeholder='••••••••'
//               className='w-full px-4 py-3 mt-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors'
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type='submit'
//               className='w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-lg transition-colors duration-300'
//               disabled={loading}
//             >
//               {loading ? (
//                 <TbFidgetSpinner className='animate-spin m-auto text-xl' />
//               ) : (
//                 'Continue'
//               )}
//             </button>
//           </div>
//         </form>

//         <div className='flex items-center space-x-2'>
//           <div className='flex-1 h-px bg-gray-300'></div>
//           <p className='px-3 text-sm text-gray-500'>
//             Or sign up with social accounts
//           </p>
//           <div className='flex-1 h-px bg-gray-300'></div>
//         </div>

//         {/* Google Sign-in Button */}
//         <button
//           onClick={handleGoogleSignIn}
//           className='flex items-center justify-center w-full py-3 px-4 space-x-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-300'
//           disabled={loading}
//         >
//           <FcGoogle size={24} />
//           <p className='font-medium text-gray-700'>Continue with Google</p>
//         </button>

//         <p className='px-6 text-sm text-center text-gray-600'>
//           Already have an account?{' '}
//           <Link
//             to='/login'
//             className='font-bold text-indigo-600 hover:text-indigo-800 transition-colors'
//           >
//             Log in
//           </Link>
//           .
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React from 'react';

const SocialButton = ({ provider, icon, bgColor, textColor }) => (
  <button className={`w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm ${bgColor} ${textColor} text-sm font-medium hover:opacity-90 transition-opacity`}>
    {icon}
    <span className="ml-2">Continue with {provider}</span>
  </button>
);

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Log in or create an account</h1>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Continue
          </button>
        </form>
        
        <div className="mt-4 text-center text-sm">
          <p>or</p>
        </div>
        
        <div className="mt-4 space-y-3">
          <SocialButton 
            provider="Google"
            bgColor="bg-white"
            textColor="text-gray-700"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
              </svg>
            }
          />
          
          <SocialButton 
            provider="Facebook"
            bgColor="bg-[#1877F2]"
            textColor="text-white"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
                <path fill="#fff" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/>
                <path fill="#1877f2" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/>
              </svg>
            }
          />
          
          <SocialButton 
            provider="Apple"
            bgColor="bg-black"
            textColor="text-white"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
                <path fill="#fff" d="M30.152,6.456c0.615-0.857,1.05-2.039,0.936-3.223c-0.984,0.06-2.163,0.736-2.856,1.616 c-0.635,0.824-1.17,2.004-1.019,3.165C28.257,8.12,29.433,7.366,30.152,6.456z"/>
                <path fill="#fff" d="M33.373,23.413c-0.045-4.289,3.506-6.345,3.667-6.447c-1.999-2.922-5.106-3.322-6.209-3.362 c-2.623-0.274-5.151,1.559-6.487,1.559c-1.355,0-3.425-1.531-5.635-1.488c-2.879,0.045-5.559,1.697-7.035,4.275 c-3.029,5.252-0.771,12.998,2.145,17.249c1.447,2.076,3.15,4.399,5.379,4.315c2.172-0.089,2.983-1.385,5.607-1.385 c2.604,0,3.358,1.385,5.633,1.339c2.331-0.041,3.801-2.09,5.215-4.178c1.666-2.395,2.342-4.736,2.373-4.857 C38.006,30.405,33.427,28.576,33.373,23.413z"/>
              </svg>
            }
          />
        </div>
        
        <p className="mt-4 text-xs text-center text-gray-500">
          By continuing, you agree to the updated{' '}
          <a href="#" className="text-blue-600 hover:underline">Terms of Sale</a>,{' '}
          <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>,
          and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default Login;
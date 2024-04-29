import React from 'react'

const Account = ({user}) => {
  return (

<body class="bg-gray-100">
    {user.userName}
    <div class="flex justify-between items-center bg-white shadow-md p-4">
        <h1 class="text-2xl font-bold text-gray-800">Account</h1>
        <div class="flex items-center">
            <span class="text-gray-600 mr-2">Username</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current text-gray-600" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                    d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
                    clip-rule="evenodd" />
            </svg>
        </div>
    </div>

    <div class="container mx-auto mt-8 px-4">
        <div class="bg-white shadow-md rounded-md p-6">
            <h2 class="text-xl font-bold text-gray-800 mb-4">Personal Information</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label for="full_name" class="block text-gray-700 font-bold mb-2">Full Name</label>
                    <input type="text" id="full_name" name="full_name" class="border border-gray-400 rounded-md px-4 py-2 w-full" />
                </div>
                <div>
                    <label for="email" class="block text-gray-700 font-bold mb-2">Email Address</label>
                    <input type="email" id="email" name="email" class="border border-gray-400 rounded-md px-4 py-2 w-full" />
                </div>
            </div>

            <div class="mt-4">
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Save Changes</button>
            </div>
        </div>
    </div>
</body>

  )
}

export default Account
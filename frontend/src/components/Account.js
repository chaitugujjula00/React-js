import React from 'react'

const Account = ({user}) => {
  return (
    <div className='w-full'>
        <div className='flex justify-around p-4'>
        <div className='text-xl py-2 px-4'>{user.userName}</div>
        <div className='text-xl py-2 px-4'>{user.email}</div>
        </div>
        <div className='bg-blue-300 mx-[10%] rounded-xl'>
            <div className=' flex justify-center py-4 text-3xl font-bold'>orders</div>
        </div>
    </div>

  )
}

export default Account
import React from 'react'

const Loader = ({loadingText}) => {
  return (
    <div className="mx-auto h-[70vh] flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-4 border-[#00B795] border-t-transparent rounded-full animate-spin"></div>
      <p className="text-lg text-gray-600 font-medium animate-pulse">
        Loading {loadingText}
      </p>
    </div>
  )
}

export default Loader
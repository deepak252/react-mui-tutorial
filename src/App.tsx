/* eslint-disable prettier/prettier */
function App() {
  return (
    <>
      {/* LAYOUT */}
      {/* 1. position */}
      <div className="fixed w-10 h-10 bg-red-500 top-0"></div>
      {/* 2. display */}
      <div className="flex justify-center space-x-6 my-5">
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
      </div>
      {/* 3. grid */}
      <div className="grid grid-cols-3 gap-2 mt-3">
        <div className="h-12  bg-violet-500"></div>
        <div className="h-12  bg-violet-500"></div>
        <div className="h-12  bg-violet-500"></div>
        <div className="h-12  bg-violet-500"></div>
      </div>

      {/* 4. Media Query */}
      <div className="my-4">
        <p className="md:block hidden">
          {' '}
          I will appear for device resolution greater than 768px{' '}
        </p>
        <p className="max-md:block hidden">
          {' '}
          I will appear for device resolution smaller than 768px{' '}
        </p>
      </div>

      {/* 5. Pseudo Classes */}
      <button className="p-4 my-2 bg-blue-500 rounded-lg text-white hover:bg-blue-800 focus:outline-none focus:ring active:bg-blue-800">
        {' '}
        Click Me
      </button>
    </>
  )
}

export default App

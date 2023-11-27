/* eslint-disable react/prop-types */
const Container = ({ children }) => {
    return (
      <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 mt-20'>
        {children}
      </div>
    )
  }
  
  export default Container
const Vue = () => {
  return (
    <div className=" flex flex-col items-center text-gray-400 hover:dark:text-white hover:text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        stroke="currentColor"
        viewBox="0 0 50 50"
        width={60}
        fill="currentColor"
      >
        <polygon
          fill="#81c784"
          points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"
        ></polygon>
        <polygon
          fill="#455a64"
          points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"
        ></polygon>
      </svg>
      <span>Vue</span>
    </div>
  )
}

export default Vue

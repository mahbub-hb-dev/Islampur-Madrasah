
const Footer = () => {
  return (
    <footer className="bg-amber-300 px-3 py-10">
      <div>
        <ul className="flex justify-center [&>li>a]:text-fuchsia-500 [&>li>a]:inline-block [&>li>a]:mx-1 [&>li>a]:transition [&>li>a:hover]:underline [&>li>a:hover]:font-semibold [&>li>a:hover]:text-fuchsia-700">
          <li> <a href="#"> About </a> </li>
          <li> <a href="#"> Our People </a> </li>
          <li> <a href="#"> Faq </a> </li>
          <li> <a href="#"> Blog </a> </li>
          <li> <a href="#"> WhatsApp </a> </li>
        </ul>
      </div>
      <div className="mt-2 text-center">
        <p> Copyright &copy; Ahmad's Education IT </p>
        <p> (Mahbub Hasan Belal) </p>
      </div>
    </footer>
  )
}

export default Footer

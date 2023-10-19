
const Nav = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-3 m-4">
        <li>
          <a href="#home">
            <img src="/asserts/images/nav-home.svg" alt="" className="w-32" />
          </a>
        </li>
        <li>
          <a href="#about">
            <img src="/asserts/images/nav-about.svg" alt="" className="w-32" />
          </a>
        </li>
        <li>
          <a href="#collections">
            <img src="/asserts/images/nav-collections.svg" alt="" className="w-32" />
          </a>
        </li>
        <li>
          <a href="#team">
            <img src="/asserts/images/nav-team.svg" alt="" className="w-32" />
          </a>
        </li>
        <li>
          <a href="#faq">
            <img src="/asserts/images/nav-faq.svg" alt="" className="w-32" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

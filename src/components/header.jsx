import "./homepage.css"
function Header() {
    return (
        <header className="head"> 
            <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
            <h2>GeekFoods</h2>
            
            <div >
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Quote</a>
                    </li>
                    <li>
                        <a href="#">Resturants</a>
                    </li>
                    <li>
                        <a href="#">Foods</a>
                    </li>
                    <li>
                        <a href="#">Contacts</a>
                    </li>
                </ul>
            </div>
            <button>Get Started</button>
        </header>
    )
}

export default Header
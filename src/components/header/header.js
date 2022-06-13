import UserDropdown from "../UserDropdown/UserDropdown"
import "./header.css"
import Logo from '../../assets/Logo.png'

const Header = () => {
    //Render Phase

    const user ={
        fullName: "Sean Saez",
        avatar: "https://images.generated.photos/bv4mU7Z609gbIiQfPVFQswUzx7pQ4Y9J-JHskrL5TX4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzA0NDU0LmpwZw.jpg"
    };
    return (
        <div className="header__container">
            <img src={Logo} alt="Logo" />
            <UserDropdown user={user}/>
        </div>
    );
};

export default Header;
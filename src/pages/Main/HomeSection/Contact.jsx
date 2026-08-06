import gitIcon from "../../images/github-icon.svg";

export function Contact() {
    return (
        <div id="Contact" className="home-right-contact glass move" >
            <h2 className="slide-down ">Contact & Social</h2>
            <a href="https://github.com/6scars" className="contact-link flex items-center gap-2 mt-2" >
                <img className="h-10 w-10" src={gitIcon} alt="github" />
                <span>GITHUB</span>
            </a>
            <p className="mt-2">marcin.michon6@o2.pl</p>
        </div>
    )
}
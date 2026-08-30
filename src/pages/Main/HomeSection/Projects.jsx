
import amazonIcon from "../../images/amazon-simple.svg";

export function Projects() {
    const goToAmazon = () => {
        window.location.href = "https://frontend-amazon-sand.vercel.app/";
    };

        const goToMiniSpotify = () => {
        window.location.href = "/mini-spotify";
    };

    return (
        <div id="Projects" className="projects glass move2 flex-1 p-6 flex flex-col items-stretch gap-4" >
            <div>
                <h2 className="slide-down">Projects </h2>
            </div>
            <div className="flex items-center w-full">
                <div className="relative group flex items-center w-full ">
                    <button className="amazon-button flex items-center gap-2 w-full p-2 rounded-md border-1" onClick={goToAmazon} >
                        <img className="h-8 w-[0.2rem]" alt="amazon-icon" src={amazonIcon} />
                        <span>Amazon Clone</span>
                    </button>
                    <p>🔵</p>
                </div>
            </div>
            <div className="flex items-center w-full">
                <div className="relative group flex items-center w-full">
                    <button className="amazon-button flex items-center gap-2 p-2 w-full rounded-md border-1" onClick={goToMiniSpotify} >
                        <img className="h-8 w-[0.2rem]" alt="amazon-icon" src={amazonIcon} />
                        <span>Mini Spotify</span>
                    </button>
                    <p>🟡</p>
                    <div className="project-informations absolute bottom-full p-2 opacity-0 border-1 bg-gray-800 rounded-md group-hover:opacity-100">
                        {" "}
                        Beta
                    </div>
                </div>
            </div>
        </div>
    )
}

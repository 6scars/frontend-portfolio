export function HomeSection(){
    return(
        <>
            <div className="home-left glass move flex-2 p-10 text-shadow-white/50 shadow-white/90">
                <div className="slide-down mb-10">
                    <h1
                    className="text-[4rem] tracking-[0.2rem] font-bold text-center
                                max-[523px]:text-[3rem] max-[423px]:text-[2.2rem] max-[344px]:text-[1.5rem]"
                    >
                    WELCOME!
                    </h1>
                    <p
                    className="ImMarcin"
                    >
                    I'm Marcin
                    </p>
                    <p
                    className="inline welcome-p 
                                max-[523px]:text-[1rem]"
                    >
                    , a Full-Stack Developer
                    <br />
                    passionate about building interactive and responsive web
                    <br />
                    applications.
                    </p>
                </div>

                <div className="devider border-b border-gray-800 shadow-[0_0_10px_20px_rgba(0,0,0,0.2)] w-full"></div>

                <p className="explication-specialize slide-down-2 text-2xl text-center mt-20 mb-10
                    max-[423px]:text-[1.2rem]
                ">
                    SPECIALIZED
                </p>
                <p >
                    I’m a Full-stack developer specializing in scalable web
                    applications. I create clear, accessible interfaces, optimize
                    performance, and help users reach their goals faster.
                </p>
                <div className="specialize flex flex-col md:flex-row justify-evenly gap-5 text-3xl"></div>
            </div>
        </>
    )
}
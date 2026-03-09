import tmdbLogo from "../assets/tmdbLogo.svg"

const Footer = () =>{
    return(
        <footer className="bg-Shark-900 w-full flex flex-col items-center-safe gap-2 p-5">
            <img src={tmdbLogo} alt="TMDB Logo" className="w-32" />
            <p className="text-Wild-Sand-100 text-center">
                This website uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB.
            </p>
        </footer>
    )
}

export default Footer;
import Card from "../components/Card";
import CarsHero from "../components/CarsHero";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

export default function Cars() {
    return (
        <>
            <Navbar />
            <CarsHero />
            <Search />
            <Card />
        </>
    )
}
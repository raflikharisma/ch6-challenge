import CtaBanner from "../components/CtaBanner";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import OurService from "../components/OurServices";
import Testimoni from "../components/Testimoni";
import WhyUs from "../components/WhyUs";



export default function LandingPage() {
    return <>
        <Navbar />
        <Jumbotron />
        <OurService />
        <Testimoni />
        <WhyUs />
        <CtaBanner />
        <Faq/>
        <Footer />
    </>
}
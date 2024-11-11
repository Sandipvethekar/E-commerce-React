
import HeroSection from "./components/HeroSection";
import {useProductContext} from "./Context/productcontact"
const About = () => {
    const { name} = useProductContext();
    const data ={
      name:" About s-store"
    }
    return (
        <>
            {  name}
            <HeroSection mydata={data}/> 
        </>
    );
}

export default About;

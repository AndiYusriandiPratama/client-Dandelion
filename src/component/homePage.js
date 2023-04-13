import Navigation from "./navigation";
import BannerPromotion from "./banner";
import { Provider } from "./myContest";
import CategoriCard from "./category";
import Product from "./product";
import Footer from "./footer";


const HomePage = () =>  {
    return (
        <>
        <Provider>
            <Navigation />
            <BannerPromotion />
            <CategoriCard />
            <Product />
            <Footer />
        </Provider>
        </>
    )
}

export default HomePage;
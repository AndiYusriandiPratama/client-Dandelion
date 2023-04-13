import { useContext } from "react";
import { Contex } from "./myContest";

const BannerPromotion = () =>  {
    const {banner} = useContext(Contex)
    return (
        <>
        {/* <h1>
                Banner Promotion
        </h1>
        {banner.map((b) => {
            return (
                <img key={b.id} src={b.image} />
            )
        })} */}
            <div className="container">
            <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-inner">
                {banner.map((b, index) => {
                    return (
                        <div key={index} className={ index === 0 ? "carousel-item active" : "carousel-item"}>
                        <img src={b.image} className="d-block w-100" alt="..." />
                        </div>
                    )
                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <i class="bi bi-arrow-left-square-fill text-black f" aria-hidden="true"></i>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <i class="bi bi-arrow-right-square-fill text-black" aria-hidden="true"></i>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            </div>
        </>
    )
}

export default BannerPromotion;
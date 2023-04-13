/* eslint-disable jsx-a11y/alt-text */
import { useContext } from "react";
import { Contex } from "./myContest";

const Product = () => {
    const {product} = useContext(Contex)
    return (
        <div className="container">
                {/* Search */}
                <div>
                   
                        <h2 className="d-flex justify-content-start position-absolute tagline mb-4 mt-2">All Product</h2>
                            <for className="inputSearch d-flex justify-content-end">
                                <input className="input" placeholder="Search" />
                                <button className="search">Search</button>
                            </for>
                
                    </div>

            {/* Product */}
            <div className="row">
                {product.map((p) => {
                    return (
                        <div className="col-3 my-3" key={p.id}>
                            <div className="productCard">
                                <div className="image-wrapper">
                                    <img src={p.image} className="w-100"/>
                                </div>
                                <div>
                                    <span className="titleCategory mt-2">{p.category}</span>
                                    <span className="titleBrand">{p.brand}</span>
                                    <span className="titleDescription mb-3 mt-2">{p.description}</span>
                                </div>
                                    <div className="priceWrapper d-flex justify-content-between align-item-center">
                                        <span className="titlePrice">Rp.{(p.price)}</span>
                                        <button className="sm-btnPrimary">Beli <i className="bi bi-cart-plus"></i></button>
                                </div>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>

                
    )
}

export default Product
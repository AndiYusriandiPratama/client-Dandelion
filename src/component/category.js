import { useContext } from "react";
import { Contex } from "./myContest";

const CategoriCard = () =>  {
    const {categori} = useContext(Contex)
    return (
        <div className="container categori my-5">
            <div className="title-wrapper">
            <h5>
                Categori Product
            </h5>    
            </div>

            <div className="row my-4">
                { categori.map((c) => {
                    return (
                        <div key={c.id} className="col-lg-2 md-3 col-6 position-relative">
                        <div className="text-center card-categori w-100 my-3 my-md-2" >
                            <img src={c.image} className="w-100"/>
                            <div className="cardLabel fw-semibold position-absolute bottom-0 w-100" >
                                {c.description}
                            </div>
                    </div>
                    </div>
                    )
                })}
        
        {/* {categori.map((c) => {
            return (
                <p key={c.id}>{c.description}</p>
            )
        })} */}
        </div>
        </div>
    )
}

export default CategoriCard;
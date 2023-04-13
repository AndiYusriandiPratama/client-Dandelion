import {createContext, useEffect, useState}  from "react"
import axios from "axios"

const Contex = createContext(null)

const Provider = ({children}) => {
    const [product, setProduct] = useState([])
    const [categori, setCategory] = useState([])
    const [banner, setBanner] = useState([])

    const getDataProduct = async() => {
        const response = await axios.get("https://doubtful-yak-sun-hat.cyclic.app/product")
        setProduct(response.data)

    }
    const getDataCategory = async() => {
        const response = await axios.get("https://doubtful-yak-sun-hat.cyclic.app/category")
        setCategory(response.data)

    }
    const getDataBanner = async() => {
        const response = await axios.get("https://doubtful-yak-sun-hat.cyclic.app/banner")
        setBanner(response.data)

    }

    useEffect(() => {
        getDataProduct()
        getDataCategory()
        getDataBanner()
    }, [])
 
    return (
        <Contex.Provider value={{product, categori, banner}}>

            {children}

        </Contex.Provider>
    )
} 

export {Contex, Provider}
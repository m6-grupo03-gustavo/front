import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { BtnSubmit } from "../Buttons/btnSubmit";
import { StyleDesktopFilters, StyleModalFilters } from "./style";
import { FilterByBrand } from "./FilterByBrand";



export const FilterMain = () =>{
    const { mobileFilterMain, setMobileFilterMain } = useAuth()
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        //  função que atualize o estado com a nova largura da tela
        const handleResize = () => {
          setWidth(window.innerWidth);
        };
    
        // adicionar um listener para o evento de redimensionamento da janela
        window.addEventListener("resize", handleResize);
    
        // remover o listener quando o componente for desmontado
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);


    if(width <= 1200 && mobileFilterMain == false){
        
        return(
            <>
                <BtnSubmit onClick={() => setMobileFilterMain(true) } text="Filtros" typeStyle="brand1"/>
            </>
        )
    }else if(width <= 1200 && mobileFilterMain == true ){
        return(
            <StyleModalFilters>
                    {/* Transformar em componente */}
                    <button onClick={() => setMobileFilterMain(false)} >X</button>
                    <AllFilters/>
            </StyleModalFilters>
        )
    }else if(width > 1200) {
        return(
            <StyleDesktopFilters>
                <AllFilters/>
            </StyleDesktopFilters>
        )
    }
}



const AllFilters = () =>{

        
        return(
            <>
                {/*  componentes de filtro aqui */}
                <FilterByBrand/>

            </>
        )
  
}
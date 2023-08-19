import { useEffect, useState } from "react"
import { NavBar, NavBarHomePage } from "./style"
import { NavButtons } from "./NavButtons"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { NavButtonDesktop } from "./NavButtons/style"



export const Header = () =>{
    const [isOpenNavButtons, setIsOpenNavButtons] = useState(false)
    const navigate = useNavigate()
    const [width, setWidth] = useState(window.innerWidth);
    const location = useLocation()
    console.log(location.pathname)
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

      if(width <= 1200 && location.pathname == '/'){
        
          return(
              <>
                  <NavBarHomePage>
                    <div>

                      <img src="/Logo.svg" onClick={() => navigate("/")}/>
                    </div>
                      
                      {
                          !isOpenNavButtons ? <img src="/bars.svg" onClick={() => setIsOpenNavButtons(!isOpenNavButtons)} id="bars"/> : <img src="/xmark.svg" onClick={() => setIsOpenNavButtons(!isOpenNavButtons)}/>
                      }
      
                  </NavBarHomePage>
      
                  {
                      isOpenNavButtons && <NavButtons/>
                  }
              </>
          )
    } else if(width <= 1200){
        return(
            <>
                <NavBar>
                    <img src="/Logo.svg" onClick={() => navigate("/")}/>
                    
                    {
                        !isOpenNavButtons ? <img src="/bars.svg" onClick={() => setIsOpenNavButtons(!isOpenNavButtons)} id="bars"/> : <img src="/xmark.svg" onClick={() => setIsOpenNavButtons(!isOpenNavButtons)}/>
                    }
    
                </NavBar>
    
                {
                    isOpenNavButtons && <NavButtons/>
                }
            </>
        )
    }
    
    
    
    else {
        return (
            <>
            <NavBar>
                <img src="/Logo.svg" onClick={() => navigate("/")} id="logo"/>
                <NavButtonDesktop>
                    <Link to={"/login"} id="login_button">Fazer login</Link>
                    <Link to={"/register"} id="register_button">Cadastrar</Link>
                </NavButtonDesktop>
            </NavBar>
            </>
        )
    }

}
import { useEffect, useState } from "react"
import { NavBar, NavBarHomePage } from "./style"
import { NavButtons } from "./NavButtons"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { NavButtonDesktop, NavButtonDesktopHome } from "./NavButtons/style"
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import {  BiLogOutCircle } from 'react-icons/bi'
import { useAuth } from "../../hooks/useAuth"
import { UserInitials } from "../UserInitials"


export const Header = () =>{
    const { userLogout, user, currentUser  } = useAuth()
    const [isOpenNavButtons, setIsOpenNavButtons] = useState(false)
    const navigate = useNavigate()
    const [width, setWidth] = useState(window.innerWidth);
    const location = useLocation()

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
     
    if(currentUser != null && location.pathname == '/'  ){
        return(
            <>
                <NavBarHomePage>
                    <h1>Motors <small>Shop</small></h1> 
                    <div className="containerCurrentUser">
                        <UserInitials userId={currentUser.id} userName={currentUser.name}/>
                        {width > 600? <p>{currentUser.name}</p>: <></>}
                    
                        {
                          !isOpenNavButtons ? <div className="containerToggle"  onClick={() => setIsOpenNavButtons(!isOpenNavButtons)}><FaBars size={25} style={{
                            color:  "#fff",
                            margin: "0"
                        }}/></div>  
                        : 
                        <div className="containerToggle"   onClick={() => setIsOpenNavButtons(!isOpenNavButtons)}><AiOutlineClose size={25} style={{
                            color:  "#fff",
                            margin: "0"
                        }}/></div>  
                      }
                        
                    </div>

                </NavBarHomePage>
                    {
                      isOpenNavButtons && <NavButtons/>
                  }
            </>
        )
      }
      else if(currentUser != null ){
        return(
            <>
                  
                <NavBar>
                    
                    <img src="/Logo.svg" onClick={() => navigate("/")}/>

                    <div className="containerCurrentUser">
                        <UserInitials userId={currentUser.id} userName={currentUser.name}/>
                        {width > 600? <p>{currentUser.name}</p>: <></>}
                        {
                          !isOpenNavButtons ? <div className="containerToggle"  onClick={() => setIsOpenNavButtons(!isOpenNavButtons)}><FaBars size={25} style={{
                            color:  "#000",
                            margin: "0"
                        }}/></div>  
                        : 
                        <div className="containerToggle"   onClick={() => setIsOpenNavButtons(!isOpenNavButtons)}><AiOutlineClose size={25} style={{
                            color:  "#000",
                            margin: "0"
                        }}/></div>  
                      }
                        
                    </div>


                </NavBar>
                {
                      isOpenNavButtons && <NavButtons/>
                  }

            </>
        )
      }
      else if(width <= 1200 && location.pathname == '/'){
        
          return(
              <>
                  <NavBarHomePage>
                    <h1>Motors <small>Shop</small></h1>

                      {
                          !isOpenNavButtons ? <div className="containerToggle"  onClick={() => setIsOpenNavButtons(!isOpenNavButtons)}><FaBars size={25} style={{
                            color:  "#fff",
                            margin: "0"
                        }}/></div>  
                        : 
                        <div className="containerToggle"   onClick={() => setIsOpenNavButtons(!isOpenNavButtons)}><AiOutlineClose size={25} style={{
                            color:  "#fff",
                            margin: "0"
                        }}/></div>  
                      }
      
                  </NavBarHomePage>
      
                  {
                      isOpenNavButtons && <NavButtons/>
                  }
              </>
          )
    } else if(width > 1200 && location.pathname == '/'){
        return(
            <>
                <NavBarHomePage>
                    <h1>Motors <small>Shop</small></h1>
                    
                    <NavButtonDesktopHome>
                        <Link to={"/login"} id="login_button">Login</Link>
                        <Link to={"/register"} id="register_button">Cadastrar</Link>
                    </NavButtonDesktopHome>
    
                </NavBarHomePage>

            </>
        )

    }
    // aqui
    else if(width > 1200 && location.pathname == '/login'){
        return(
            <>
                <NavBar>
                    <img src="/Logo.svg" onClick={() => navigate("/")}/>
                    
                    <NavButtonDesktop>
                        <Link to={"/"} id="login_button">Home</Link>
                        <Link to={"/register"} id="register_button">Cadastrar</Link>
                    </NavButtonDesktop>
    
                </NavBar>

            </>
        )
    }
    else if(width > 1200 && location.pathname == '/register'){
        return(
            <>
                <NavBar>
                    <img src="/Logo.svg" onClick={() => navigate("/")}/>
                    
                    <NavButtonDesktop>
                        <Link to={"/"} id="login_button">Home</Link>
                        <Link to={"/login"} id="register_button">Login</Link>
                    </NavButtonDesktop>
    
                </NavBar>

            </>
        )
    }
    else if(width > 1200 && location.pathname == '/user/resetPassword'){
        return(
            <>
                <NavBar>
                    <img src="/Logo.svg" onClick={() => navigate("/")}/>
                    
                    <NavButtonDesktop>
                        <Link to={"/"} id="login_button">Home</Link>
                        <Link to={"/login"} id="register_button">Login</Link>
                    </NavButtonDesktop>
    
                </NavBar>

            </>
        )
    }
    else if(width > 1200 && location.pathname == `/user/resetPassword/${user?.reset_token}`){
        return(
            <>
                <NavBar>
                    <img src="/Logo.svg" onClick={() => navigate("/")}/>
                    
                    <NavButtonDesktop>
                        <Link to={"/"} id="login_button">Home</Link>
                        <Link to={"/login"} id="register_button">Login</Link>
                    </NavButtonDesktop>
    
                </NavBar>

            </>
        )
    }
    else if(location.pathname == '/dashboard'){
        return(
            <>
                <NavBarHomePage>
                    
                    <img src="/Logo.svg" onClick={() => navigate("/")}/>
                
                    
                    <section>
                    <div className="containerUserLogout" onClick={() => userLogout()}>
                        {user == null ? <></>: <UserInitials userId={user.id} userName={user.name}/>}
                        <BiLogOutCircle size={40} style={{
                                    color:  "#ADB5BD",
                                    cursor: 'pointer',
                                    margin: "0"
                        }}/>
                    </div>
                    </section>
                </NavBarHomePage>

            </>
        )
    }
    
    else if(width <= 1200){
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
                    <Link to={"/login"} id="login_button">Login</Link>
                    <Link to={"/register"} id="register_button">Cadastrar</Link>
                </NavButtonDesktop>
            </NavBar>
            </>
        )
    }

}
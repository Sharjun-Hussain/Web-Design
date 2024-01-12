
import Footer from '../../../Components/Main-Components/Footer'

import Header from '../../../Components/Main-Components/Header'
import { Outlet} from 'react-router-dom'



const WebDesign = () => {
  
  return (
    <>
    <div className=" ">
      <Header/>
     
       <Outlet/>
       <Footer/>
       
    </div>

   

    </>
  )
}

export default WebDesign
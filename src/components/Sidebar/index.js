import React from 'react';
import Card from '../UI/Card';
import './style.css';
/**
 * @author
 * @function Sidebar
 */

 const Sidebar=(props)=>{
     return(
         <div className="sidebarContainer">
             <Card style={{marginBottom:'20px'}}>
                 <div className="cardHeader">
                     <span>About Us</span>
                     <div>
                         
                     </div>
                 </div>

             </Card>  

             <Card >
                 <div className="cardHeader">
                     <span>Social Network</span>
                 </div>
             </Card>   
         </div>
         
     )
 }
 export default Sidebar
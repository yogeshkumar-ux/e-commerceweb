import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import useStyles from './styles'
import {Link, useLocation} from 'react-router-dom'

const Navbar = ({totalItems}) => {
    const classes = useStyles()
    const location = useLocation()
    return (
        <div>
             <AppBar position="fixed" className= {classes.appBar} color="inherit">
           <Toolbar>
               <Typography component ={Link} to= "/" variant= 'h6' className={classes.title} color = 'inherit'>
                   <img src = 'data:image/png;base64,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'  
                   alt = "commerce.js" height= "80px" className={classes.image} />
            
               </Typography>
               <div className = {classes.grow} />
               {location.pathname === '/' && (
               <div className = {classes.button} >
               <IconButton  component = {Link} to ="/cart"arial-label = "show cart item" color = "inherit">
                   <Badge badgeContent = {totalItems} color= "secondary">
                       <ShoppingCart/>
                   </Badge>
               </IconButton>
         </div>)}
           </Toolbar>
             </AppBar>

        </div>
    )
}

export default Navbar

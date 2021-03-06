import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './navbarStyles.css'
//use history api to go to the right page when you close the menu thing

function Navbar()
{
    const navigate = useNavigate()
    let path = document.location.pathname
    path = path.substr(1,path.length-1)
    const[menuText,setMenuText] = useState('Menu')
    const[width,setWidth] = useState(window.innerWidth)
    const handleResize = ()=>{
        setWidth(window.innerWidth)
        window.removeEventListener('resize',handleResize)
    }
    window.addEventListener('resize',handleResize)
    useEffect(()=>{
        //console.log('use effect ran')
        path = document.location.pathname
        path = path.substr(1,path.length-1)
        
        let mobNav = document.querySelector('.mob-nav')
        if(path === 'menu')
        {
            let circles = document.querySelectorAll('.circle')
            // console.log(circles)
            setMenuText('Close')
            mobNav.classList.add('mob-nav-hover')
            setLinkColor('#aff')
            for(let i=0; i<circles.length; i++)
            {
                circles[i].classList.remove('circle')
                circles[i].classList.add('circle-hover')
                if(i===0)circles[i].classList.add('one-hover')
                else if(i===1)circles[i].classList.add('two-hover')
                else if(i===2)circles[i].classList.add('three-hover')
                else if(i===3)circles[i].classList.add('four-hover')
            }
        }
        else{
            mobNav = document.querySelector('.mob-nav')
            let circles = document.querySelectorAll('.circle-hover')
            setMenuText('Menu')
            setLinkColor('#fda')
            mobNav!==null? mobNav.classList.remove('mob-nav-hover'): mobNav = null
            for(let i=0; i<circles.length; i++)
            {
                circles[i].classList.add('circle')
                circles[i].classList.remove('circle-hover')
                if(i===0)circles[i].classList.remove('one-hover')
                else if(i===1)circles[i].classList.remove('two-hover')
                else if(i===2)circles[i].classList.remove('three-hover')
                else if(i===3)circles[i].classList.remove('four-hover')
            }
        }
        return ()=>{
            mobNav = null
            setWidth(0)
            setMenuText('')
            setLinkColor('')
        }
    },[path])
    const [linkColor,setLinkColor] = useState('wheat')
    const onMouseEnter = ()=>{
        setLinkColor('#aff')
    }
    const onMouseLeave = ()=>{
        setLinkColor('#fda')
    }
    const onClick = ()=>{
        let mobNav = document.querySelector('.mob-nav')
        // if(width < 1000){
            setMenuText((pre)=>{
                if(pre === 'Menu') return 'Close'
                else if(pre === 'Close') return 'Menu'
                else{
                    console.log('error in setMenuText in onClick')
                    return pre
                }
            })
            if(menuText === 'Menu')
            {
                //console.log('menutext is menu')
                mobNav!==null? mobNav.classList.remove('mob-nav-hover'): mobNav = null
                let circles = document.querySelectorAll('.circle-hover')
                for(let i=0; i<circles.length; i++)
                {
                    circles[i].classList.add('circle')
                    circles[i].classList.remove('circle-hover')
                    if(i===0)circles[i].classList.remove('one-hover')
                    else if(i===1)circles[i].classList.remove('two-hover')
                    else if(i===2)circles[i].classList.remove('three-hover')
                    else if(i===3)circles[i].classList.remove('four-hover')
                }
            }
            else if(menuText === 'Close')
            {
                //console.log('menutext is close')
                mobNav.classList.add('mob-nav-hover')
                let circles = document.querySelectorAll('.circle')
                for(let i=0; i<circles.length; i++)
                {
                    circles[i].classList.remove('circle')
                    circles[i].classList.add('circle-hover')
                    if(i===0)circles[i].classList.add('one-hover')
                    else if(i===1)circles[i].classList.add('two-hover')
                    else if(i===2)circles[i].classList.add('three-hover')
                    else if(i===3)circles[i].classList.add('four-hover')
                }
                
            }
            navigate(`${path==='menu'?'/':'/menu'}`)
        // }
    }

    const linkStyles = {
        'color':linkColor,
        'transition':'all 0.4s ease-in',
        'textDecoration':'none',
        'cursor':'pointer',
        "fontFamily": "'Quicksand', sans-serif",
        'letterSpacing' : '2px',
        'fontSize':'1.1rem',
        'textAlign':'left',
        'top':'17px',
        'left':'-15px',
        'fontWeight':'600',
        'position':'absolute'
        
    }
    return(
        <>
            {/* {width>1000?(
            <header className='nav'>
                <ul className='nav-ul'>
                    <li className='nav-li'>
                        <a href='/'>Anuska Roy</a>
                    </li>
                    <li className='nav-li'>
                        <a href='/profile'>Profile</a>
                    </li>
                    <li className='nav-li'>
                        <a href='/work'>Work</a>
                    </li>
                    <li className='nav-li'>
                        <a href='/contact'>Contact</a>
                    </li>
                    <li className='nav-li'>
                        <a href='/shop'>Shop</a>
                    </li>
                </ul>
            </header>
            ):( */}
                <header className='mob-nav'>
                    <div 
                        onClick={()=>onClick()}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave} 
                        className='mob-nav-menu'>
                            <div className='menu-link-holder'>
                                <p  style={linkStyles}>
                                    {menuText}
                                </p>
                            </div>
                    </div>
                    <div className='circle one'></div>
                    <div className='circle two'></div>
                    <div className='circle three'></div>
                    <div className='circle four'></div>
                </header>
        
            {/* )} */}
        </>
)}
            

export default Navbar
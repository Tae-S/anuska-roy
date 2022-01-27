import './menuPageStyles.css'
import menuItem1 from './../imgs/menuItem1.svg'
import menuItem2 from './../imgs/menuItem2.svg'
import menuItem3 from './../imgs/menuItem3.svg'
import menuItem4 from './../imgs/menuItem4.svg'
import { useEffect, useState } from 'react'

function MenuPage()
{
    // const item = document.querySelector('div')
    // item.style.zIndex
    
    const [path,setPath] = useState(document.location.pathname.substr(1,document.location.pathname.length-1))
    //path = path.substr(1,path.length-1)
    useEffect(()=>{
        // path = document.location.pathname
        // path = path.substr(1,path.length-1)
        //console.log('use effect ran')
        setPath(document.location.pathname.substr(1,document.location.pathname.length-1))
        const menuContainer = document.querySelector('body')
        //console.log(path)
        
        if(path === 'menu')
        {
            //console.log('in menu')
            menuContainer.style.minHeight = '100%'
            menuContainer.style.height = '100%'
        }
        else if(path === '' || path === '/')
        {
            //console.log('here')
            menuContainer.style.minHeight= '100%'
            menuContainer.style.height = '100%'
        }
    })    
    const onMouseEnter = (index)=>{
        //console.log('mose entered')
        const menuContainer = document.querySelector('body')
        const containers = document.querySelectorAll('.menu-item-container')
        const imgContainers = document.querySelectorAll('.menu-item-img-holder')
        const imgs = document.querySelectorAll('.menu-item-image')
        //console.log(containers)
        for(let i=0; i<containers.length; i++)
        {
            if(i === index){
                containers[i].style.zIndex = '-4'
                containers[i].style.color = 'tomato'
                //containers[i].style.visibility = 'visibile'
                imgContainers[i].style.visibility = 'visible'
                imgs[i].style.visibility = 'visible'
            }
            else{
                containers[i].style.zIndex = '-5'
                containers[i].style.color = 'black'
                imgContainers[i].style.visibility = 'hidden'
                imgs[i].style.visibility = 'hidden'
            }
        }
        if(index === 0) menuContainer.style.backgroundColor = 'blue'
        else if(index === 1) menuContainer.style.backgroundColor = 'green'
        else if(index === 2) menuContainer.style.backgroundColor = 'gold'
        else if(index === 3) menuContainer.style.backgroundColor = 'darkslategray'
    }
    const onMouseLeave = (index)=>{
        const menuContainer = document.querySelector('body')
        menuContainer.style.backgroundColor = 'rgb(245, 226, 198)'
        const containers = document.querySelectorAll('.menu-item-container')
        containers.forEach((container)=>{
            container.style.zIndex = '-5'
            container.style.color = 'black'
            
        })
        const imgContainers = document.querySelectorAll('.menu-item-img-holder')
        imgContainers.forEach((img)=>{
            img.style.visibility = 'hidden'
        })
        const imgs = document.querySelectorAll('.menu-item-image')
        imgs.forEach((img)=>{
            img.style.visibility = 'hidden'
        })
        
    }
    const handleClick = (index)=>{
        if(index === 0)
        {
            window.location.pathname ='/profile'
        }
        else if(index === 1)
        {
            window.location.pathname ='/work'
        }
        else if(index === 2)
        {
            window.location.pathname ='/contact'
        }
        else if(index === 3)
        {
            window.location.pathname ='/'
        }
    }

    return(
        <div className='menu-container'>
            <div onFocus={()=>onMouseEnter(0)} onBlur={()=>onMouseLeave(0)} onMouseEnter={()=>onMouseEnter(0)} onMouseLeave={()=>onMouseLeave(0)} className='menu-item-container'>
                <div className='menu-item' onClick={()=>handleClick(0)} >Profile</div>
                <div className='menu-item-img-holder'><img src={menuItem1} className='menu-item-image'/></div>
                
            </div>
            <div onFocus={()=>onMouseEnter(1)} onBlur={()=>onMouseLeave(1)} onClick={()=>handleClick(1)} onMouseEnter={()=>onMouseEnter(1)} onMouseLeave={()=>onMouseLeave(1)} className='menu-item-container'>
                <div className='menu-item-img-holder'><img src={menuItem2} className='menu-item-image'/></div>
                <div  className='menu-item'>Work</div>
            </div>
            <div onFocus={()=>onMouseEnter(2)} onBlur={()=>onMouseLeave(2)} onMouseEnter={()=>onMouseEnter(2)} onMouseLeave={()=>onMouseLeave(2)} className='menu-item-container'>
                <div className='menu-item-img-holder'><img src={menuItem3} className='menu-item-image'/></div>
                <div onClick={()=>handleClick(2)} className='menu-item'>Contact</div>
            </div>
            <div onFocus={()=>onMouseEnter(3)} onBlur={()=>onMouseLeave(3)} onMouseEnter={()=>onMouseEnter(3)} onMouseLeave={()=>onMouseLeave(3)} className='menu-item-container'>
                <div className='menu-item-img-holder'><img src={menuItem4} className='menu-item-image'/></div>
                <div onClick={()=>handleClick(3)} className='menu-item'>Home</div>
            </div>
            {/* <p className='menu-item'>Profile</p>
            <div className='menu-item-img-holder'><img src={menuItem1} className='menu-item-image'/></div>
            <p className='menu-item'>Work</p>
            <div className='menu-item-img-holder'><img src={menuItem2} className='menu-item-image'/></div>
            <p className='menu-item'>Contact</p>
            <div className='menu-item-img-holder'><img src={menuItem3} className='menu-item-image'/></div>
            <p className='menu-item'>About</p>
            <div className='menu-item-img-holder'><img src={menuItem4} className='menu-item-image'/></div> */}
        </div>
    )
}

export default MenuPage
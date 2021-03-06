import './menuPageStyles.css'
// import menuItem1 from './../imgs/menuItem1.svg'
// import menuItem2 from './../imgs/menuItem2.svg'
// import menuItem3 from './../imgs/menuItem3.svg'
// import menuItem4 from './../imgs/menuItem4.svg'
import menuItem3 from './../imgs/menuModel3.png'
import menuItem2 from './../imgs/menuModel2.png'
import menuItem1 from './../imgs/menuModel1.png'
import { useEffect, useState } from 'react'

const menuItem4 = null

function MenuPage()
{
    // const item = document.querySelector('div')
    // item.style.zIndex
    let isTouchScreen = false
    if ("ontouchstart" in document.documentElement) isTouchScreen = true
    else isTouchScreen = false
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
        // console.log('mose entered')
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
        if(index === 0) menuContainer.style.backgroundColor = '#9bf6ff'
        else if(index === 1) menuContainer.style.backgroundColor = '#ffcdb2'
        else if(index === 2) menuContainer.style.backgroundColor = '#fdffb6'
        else if(index === 3) menuContainer.style.backgroundColor = '#eae4e9'
    }
    const onMouseLeave = (index)=>{
        // console.log('mouse left')
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
    let [ts,setTs] = useState(new Float32Array())
    const [touches,setTouches] = useState([1,-1]) // no.oftouches,onIndex
    const handleClick = (index,mobile)=>{
        if(mobile)
        {
            
            setTs((pre)=>{
                //pre.push(index)
                console.log(typeof(pre),pre)
                return[...pre,index]
                
            })
            
            if(ts.length >= 2)
            {
                if(ts[ts.length-1] === ts[ts.length-2])
                {
                    if(ts[ts.length-1] === 0) window.location.pathname ='/artwork'
                    else if(ts[ts.length-1] === 1) window.location.pathname ='/work'
                    else if(ts[ts.length-1] === 2) window.location.pathname ='/shop'
                    else if(ts[ts.length-1] === 3) window.location.pathname ='/'
                }
            }
            // if(index === 0)
            // {
            //     setTouches((pre)=>{
            //         if(pre[1] === index) return[pre[0]+1,index]
            //         else if(pre[1] <= -1) return[pre[0]+1,index]
            //         else return[-1,-2]
            //     })
            //     if(touches[0] === 2)
            //     {
            //         window.location.pathname ='/profile'        
            //     }
            //     //else do the mouseenter
            // }
            // else if(index === 1)
            // {
            //     setTouches((pre)=>{
            //         if(pre[1] === index) return[pre[0]+1,index]
            //         else if(pre[1] < 0) return[pre[0]+1,index]
            //         else return[-1,-2]
            //     })
            //     if(touches[0] === 2)
            //     {
            //         window.location.pathname ='/work'
            //     }
            //     //else do the mouseenter
            // }
            // else if(index === 2)
            // {
            //     setTouches((pre)=>{
            //         if(pre[1] === index) return[pre[0]+1,index]
            //         else if(pre[1] < 0) return[pre[0]+1,index]
            //         else return[0,index]
            //     })
            //     if(touches[0] === 2)
            //     {
            //         window.location.pathname ='/contact'
            //     }
            //     //else do the mouseenter
            // }
            // else if(index === 3)
            // {
            //     setTouches((pre)=>{
            //         if(pre[1] === index) return[pre[0]+1,index]
            //         else if(pre[1] < 0) return[pre[0]+1,index]
            //         else return[0,index]
            //     })
            //     if(touches[0] === 2)
            //     {
            //         window.location.pathname ='/'
            //     }
            //     //else do the mouseenter
            // }
            // console.log(touches,' touches')
        }
        else if(!mobile)
        {
            if(index === 0)
            {
                window.location.pathname ='/artwork'
            }
            else if(index === 1)
            {
                window.location.pathname ='/work'
            }
            else if(index === 2)
            {
                window.location.pathname ='/shop'
            }
            else if(index === 3)
            {
                window.location.pathname ='/'
            }
        }
        
    }
    


    return(
        <div className='menu-container'>
            <div onClick={()=>handleClick(0,isTouchScreen)} onFocus={()=>onMouseEnter(0)} onBlur={()=>onMouseLeave(0)} onMouseEnter={()=>onMouseEnter(0)} onMouseLeave={()=>onMouseLeave(0)} className='menu-item-container'>
                <div className='menu-item' >Artwork</div>
                <div className='menu-item-img-holder'><img src={menuItem1} className='menu-item-image'/></div>
                
            </div>
            <div onFocus={()=>onMouseEnter(1)} onBlur={()=>onMouseLeave(1)} onClick={()=>handleClick(1,isTouchScreen)} onMouseEnter={()=>onMouseEnter(1)} onMouseLeave={()=>onMouseLeave(1)} className='menu-item-container'>
                <div className='menu-item-img-holder'><img src={menuItem2} className='menu-item-image'/></div>
                <div  className='menu-item'>Work</div>
            </div>
            <div onClick={()=>handleClick(2,isTouchScreen)} onFocus={()=>onMouseEnter(2)} onBlur={()=>onMouseLeave(2)} onMouseEnter={()=>onMouseEnter(2)} onMouseLeave={()=>onMouseLeave(2)} className='menu-item-container'>
                <div className='menu-item-img-holder'><img src={menuItem3} className='menu-item-image'/></div>
                <div className='menu-item'>Shop</div>
            </div>
            <div onClick={()=>handleClick(3,isTouchScreen)} onFocus={()=>onMouseEnter(3)} onBlur={()=>onMouseLeave(3)} onMouseEnter={()=>onMouseEnter(3)} onMouseLeave={()=>onMouseLeave(3)} className='menu-item-container'>
                <div className='menu-item-img-holder'><img src={menuItem4} className='menu-item-image'/></div>
                <div className='menu-item'>Home</div>
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
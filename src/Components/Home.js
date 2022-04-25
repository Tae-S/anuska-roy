import './homeStyles.css'
import bgItem2 from './../imgs/bgCat1.png'
import bgItem1 from './../imgs/bgCat2.png'
import dp from './../imgs/dp.jpeg'

import { useEffect, useRef, useState } from "react"

function Home()
{
    let isTouchScreen = false
    if ("ontouchstart" in document.documentElement) isTouchScreen = true
    else isTouchScreen = false
    
    const [x,setX] = useState(window.scrollY)
    const preScr = useRef()
    let temp = 0
    useEffect(()=>{
        //console.log(preScr,x)
        window.onscroll = ()=>{
            //console.log(preScr,x)
            setX((pre)=>{
                // let temp
                // console.log(pre,x,preScr)
                // if(preScr.current > pre){
                //     temp = pre - x/100
                //     console.log('scrolling up')
                // }
                // else if(preScr.current < pre){
                //     temp = pre + x/100
                //     console.log('scrolling down')
                // }
                // else{
                //     temp = window.scrollY
                //     console.log('they are the same')
                // }
                // console.log(temp)
                // return temp
                return window.scrollY
            })
        }
        // if(preScr.current > x)temp = x - x/100
        // else{
        //     //console.log('down')
        //     temp = x + x/100
        // }
        //console.log(temp)
        
        // console.log(preScr,x)
        preScr.current = x
        
    },[x])
    
    
    
    
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
            menuContainer.style.minHeight = '98vh'
        }
        else if(path === '' || path === '/')
        {
            //console.log('here')
            menuContainer.style.minHeight= '200vh'
        }
    })    
    const imgStyles = {    
        // 'transform':`translateX(${(temp).toString() + 'px'})`
        'transform':`translateX(${preScr.current > x?((x-x/100 - Math.random()*15)/7).toString() + 'px':((x+x/100 + Math.random()*15)/7).toString() + 'px'}) rotate(${preScr>x?((x+x/100)/15).toString() + 'deg':((x-x/100)/15).toString() + 'deg'})`,
        "top": isTouchScreen? '80%': '200px'
    }
    const imgStyles2 = {    
        // 'transform':`translateX(${(temp).toString() + 'px'})`
        'position':'absolute',
        'top':isTouchScreen? '30%':'33%',
        'left': isTouchScreen? '60%':'78%',
        'width':'100px',
        'transform':`translateX(${preScr.current > x?((x-x/100 - Math.random()*25)/7).toString() + 'px':((x+x/100 + Math.random()*25)/7).toString() + 'px'}) rotate(${preScr>x?-1* ((x-x/100)/8).toString() + 'deg':-1*((x+x/100)/8).toString() + 'deg'})`
    }
    return(
        <>
            <section className='intro-section'>
                <img src={ dp } alt="Anuska's display pic" />
                <p>
                    I am a writer, editor and creative content creator.
                    Content creation has been a passion for me ever
                    since I could understand how to put words together
                    ans colours against each other.
                    <br/>
                    I have worked with organisations in domains of
                    production, creation, curation and editing content.
                </p>
            </section>
            <img style={imgStyles} className='img' src={bgItem2} />
            <img style={imgStyles2} className='img img2' src={bgItem1} />
            <div className='slider-container'>
                <div className='slider'>
                    <div className='slider-item'><p>Writer</p></div>
                    <div className='slider-item'><p>Editor</p></div>
                    <div className='slider-item'><p>Illustrator</p></div>
                    <div className='slider-item'><p className='two-word-item'>Graphic</p><p className='two-word-item'>Designer</p></div>
                    {/* <div className='slider-item'><p className='two-word-item'>Social-Media</p><p className='two-word-item'>Manager</p></div> */}
                    <div className='slider-item'><p className='two-word-item'>Cat</p><p className='two-word-item'>Mom</p></div>
                    
                    <div className='slider-item'><p>Writer</p></div>
                    <div className='slider-item'><p>Editor</p></div>
                    <div className='slider-item'><p>Illustrator</p></div>
                    <div className='slider-item'><p className='two-word-item'>Graphic</p><p className='two-word-item'>Designer</p></div>
                    {/* <div className='slider-item'><p className='two-word-item'>Social-Media</p><p className='two-word-item'>Manager</p></div> */}
                    <div className='slider-item'><p className='two-word-item'>Cat</p><p className='two-word-item'>Mom</p></div>
                    
                    <div className='slider-item'><p>Writer</p></div>
                    <div className='slider-item'><p>Editor</p></div>
                    <div className='slider-item'><p>Illustrator</p></div>
                    <div className='slider-item'><p className='two-word-item'>Graphic</p><p className='two-word-item'>Designer</p></div>
                    {/* <div className='slider-item'><p className='two-word-item'>Social-Media</p><p className='two-word-item'>Manager</p></div> */}
                    <div className='slider-item'><p className='two-word-item'>Cat</p><p className='two-word-item'>Mom</p></div>
                    
                    
                </div>
            </div>
        </>
    )
}

export default Home
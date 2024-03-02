import React from 'react'
import'./about.css';
import Teammember from './subcomponents\'/Teammember';
function About() {
    const data = [
        {
            id:1,
            name:'martin guptill',
            role:'CEO',
            image:'https://th.bing.com/th/id/OIP.nFtlTeqHyG2yQqh5olfSLgHaEK?pid=ImgDet&rs=1',
        },{
            id:2,
            name:'martin thomas',
            role:'CTO',
            image:'https://th.bing.com/th/id/OIP.nFtlTeqHyG2yQqh5olfSLgHaEK?pid=ImgDet&rs=1',
        },{
            id:3,
            name:'rajib garguin',
            role:'Technical Head',
            image:'https://th.bing.com/th/id/OIP.nFtlTeqHyG2yQqh5olfSLgHaEK?pid=ImgDet&rs=1',
        },{
            id:4,
            name:'hhafkhkf dhfhdf',
            role:'Marketing head',
            image:'https://th.bing.com/th/id/OIP.nFtlTeqHyG2yQqh5olfSLgHaEK?pid=ImgDet&rs=1',
        },{
            id:5,
            name:'hdkjhshdd sdhsd ',
            role:'Conten Head',
            image:'https://th.bing.com/th/id/OIP.nFtlTeqHyG2yQqh5olfSLgHaEK?pid=ImgDet&rs=1',
        },{
            id:6,
            name:'jhd dshd',
            role:'Mnagement Head',
            image:'https://th.bing.com/th/id/OIP.nFtlTeqHyG2yQqh5olfSLgHaEK?pid=ImgDet&rs=1',
        }
    ]
  return (
    <div className='about-container'>
        <h1 className='about-heading'>About Us</h1>
        <div className='about-story'>
            <img className='about-image' src="https://th.bing.com/th/id/R.26fcb7f740a3599e7a28a85cac4e731e?rik=qdo6tBU8%2bfVw7A&riu=http%3a%2f%2findianonlineseller.com%2fwp-content%2fuploads%2f2016%2f04%2fecommerce-seller.jpg&ehk=WRU4dPAJcmxQ9IdQkEN5t4hCajHKZW%2ftFAm84MKkRko%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <div className='about-desc'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit dignissimos sapiente maxime libero perferendis veritatis cumque molestias minus, necessitatibus nobis iure optio numquam debitis ad dicta ut atque distinctio veniam reiciendis placeat pariatur alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est amet architecto explicabo perspiciatis temporibus debitis enim consequatur, aliquam aspernatur, nisi tenetur sed neque hic cumque.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem est distinctio iure molestias, expedita autem culpa. Eveniet animi fugiat nobis accusantium.</p>
            </div>
        </div>
        <div className='member-section-container'>
                <h1>Our Team Mebers</h1>
                <div className='member-section'>
                    {
                        data.map((teammember)=>(
                            <Teammember id={teammember.id} name ={teammember.name}
                            role={teammember.role} image ={teammember.image}/>
                        ))
                    }
                </div>
        </div>
    </div>
  )
}

export default About;
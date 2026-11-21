import React from 'react'
import image from '../public/Model.jpg'
import image1 from '../public/Pageant1.jpg'
import image2 from '../public/Pageant2.jpg'
import image3 from '../public/Pageant3.jpg'
import image4 from '../public/Pageant4.jpg'
import image5 from '../public/Pageant5.jpg'
import image6 from '../public/Pageant6.jpg'
import image7 from '../public/Pageant7.jpg'
import image8 from '../public/Pageant8.jpg'
import image9 from '../public/Pageant9.jpg'
import image10 from '../public/Pageant10.jpg'
import image11 from '../public/Pageant11.jpg'
import image12 from '../public/Pageant12.jpg'
import image13 from '../public/Pageant13.jpg'
import image14 from '../public/Pageant14.jpg'
import image15 from '../public/Pageant15.jpg'
import image16 from '../public/Pageant16.jpg'
import image17 from '../public/Pageant16.jpg'
import image18 from '../public/Pageant18.jpg'
import image19 from '../public/Pageant18.jpg'
import image20 from '../public/Pageant19.jpg'
import image21 from '../public/Pageant20.jpg'
import { Link } from 'react-router-dom'

const Contestants = () => {
  return (
    <div>
      <div className='p-3'>
        <h2 className='text-center text-3xl font-bold text-gray-800 p-3'>Contenstants</h2>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 m-auto lg:gap-3 md:gap-5 sm:gap-5 gap-5 lg:w-250 md:w-190 sm:w-150 w-70'>
            <div className='bg-gray-800 lg:w-60 lg:h-90 md:w-60 md:h-100 sm:w-75 sm:h-105 w-65 h-100 rounded-2xl'>
                <img src={image} className="lg:w-60 lg:h-40 md:w-60 md:h-50 rounded-2xl" />
                <h2 className='text-center text-[coral]'>1</h2>
                <p className='text-white/50 p-2'>
                  Name: Christiana John<br />
                  Age: 25 <br />
                  Country: USA <br />
                  Occupation: Model <br />
                  Votes: <span className='text-[coral]'>3203</span>
                </p>
                <div className='text-center'>
                    <Link to="/vote" className='px-8 py-1 bg-[coral] rounded-xl'>Vote</Link>
                </div>
            </div>

            <div className='bg-gray-800 lg:w-60 lg:h-90 md:w-60 md:h-100 sm:w-75 sm:h-105 w-65 h-100 rounded-2xl'>
                <img src={image1} className="lg:w-60 lg:h-40 md:w-60 md:h-50 rounded-2xl" />
                <h2 className='text-center text-[coral]'>2</h2>
                <p className='text-white/50 p-2'>
                  Name: Olivia <br />
                  Age: 26 <br />
                  Country: USA <br />
                  Occupation: Stylist <br />
                  Votes: <span className='text-[coral]'>3143</span>
                </p>
                <div className='text-center'>
                    <Link to="/vote" className='px-8 py-1 bg-[coral] rounded-xl'>Vote</Link>
                </div>
            </div>

            <div className='bg-gray-800 lg:w-60 lg:h-90 md:w-60 md:h-100 sm:w-75 sm:h-105 w-65 h-100 rounded-2xl'>
                <img src={image2} className="lg:w-60 lg:h-40 md:w-60 md:h-50 rounded-2xl" />
                <h2 className='text-center text-[coral]'>3</h2>
                <p className='text-white/50 p-2'>
                  Name: Emma Walnut <br />
                  Age: 28 <br />
                  Country: USA <br />
                  Occupation: Photographer <br />
                  Votes: <span className='text-[coral]'>3020</span>
                </p>
                <div className='text-center'>
                    <Link to="/vote" className='px-8 py-1 bg-[coral] rounded-xl'>Vote</Link>
                </div>
            </div>

            <div className='bg-gray-800 lg:w-60 lg:h-90 md:w-60 md:h-100 sm:w-75 sm:h-105 w-65 h-100 rounded-2xl'>
                <img src={image3} className="lg:w-60 lg:h-40 md:w-60 md:h-50 rounded-2xl" />
                <h2 className='text-center text-[coral]'>4</h2>
                <p className='text-white/50 p-2'>
                  Name: Sophia Lawrence <br />
                  Age: 29 <br />
                  Country: USA <br />
                  Occupation: Stylist <br />
                  Votes: <span className='text-[coral]'>2920</span>
                </p>
                <div className='text-center'>
                    <Link to="/vote" className='px-8 py-1 bg-[coral] rounded-xl'>Vote</Link>
                </div>
            </div>

            <div className='bg-gray-800 lg:w-60 lg:h-90 md:w-60 md:h-100 sm:w-75 sm:h-105 w-65 h-100 rounded-2xl'>
                <img src={image4} className="lg:w-60 lg:h-40 md:w-60 md:h-50 rounded-2xl" />
                <h2 className='text-center text-[coral]'>5</h2>
                <p className='text-white/50 p-2'>
                  Name: Ameli Robert <br />
                  Age: 22 <br />
                  Country: USA <br />
                  Occupation: Model <br />
                  Votes: <span className='text-[coral]'>2889</span>
                </p>
                <div className='text-center'>
                    <Link to="/vote" className='px-8 py-1 bg-[coral] rounded-xl'>Vote</Link>
                </div>
            </div>

            <div className='bg-gray-800 lg:w-60 lg:h-90 md:w-60 md:h-100 sm:w-75 sm:h-105 w-65 h-100 rounded-2xl'>
                <img src={image5} className="lg:w-60 lg:h-40 md:w-60 md:h-50 rounded-2xl" />
                <h2 className='text-center text-[coral]'>6</h2>
                <p className='text-white/50 p-2'>
                  Name: Isabella Ray <br />
                  Age: 21 <br />
                  Country: Norway <br />
                  Occupation: Model <br />
                  Votes: <span className='text-[coral]'>2850</span>
                </p>
                <div className='text-center'>
                    <Link to="/vote" className='px-8 py-1 bg-[coral] rounded-xl'>Vote</Link>
                </div>
            </div>

            <div className='bg-gray-800 lg:w-60 lg:h-90 md:w-60 md:h-100 sm:w-75 sm:h-105 w-65 h-100 rounded-2xl'>
                <img src={image6} className="lg:w-60 lg:h-40 md:w-60 md:h-50 rounded-2xl" />
                <h2 className='text-center text-[coral]'>7</h2>
                <p className='text-white/50 p-2'>
                  Name: Ava Dez <br />
                  Age: 23 <br />
                  Country: India <br />
                  Occupation: Model <br />
                  Votes: <span className='text-[coral]'>2810</span>
                </p>
                <div className='text-center'>
                    <Link to="/vote" className='px-8 py-1 bg-[coral] rounded-xl'>Vote</Link>
                </div>
            </div>

            <div className='bg-gray-800 lg:w-60 lg:h-90 md:w-60 md:h-100 sm:w-75 sm:h-105 w-65 h-100 rounded-2xl'>
                <img src={image7} className="lg:w-60 lg:h-40 md:w-60 md:h-50 rounded-2xl" />
                <h2 className='text-center text-[coral]'>8</h2>
                <p className='text-white/50 p-2'>
                  Name: Mia Sam <br />
                  Age: 24 <br />
                  Country: Sweden <br />
                  Occupation: Model <br />
                  Votes: <span className='text-[coral]'>2770</span>
                </p>
                <div className='text-center'>
                    <Link to="/vote" className='px-8 py-1 bg-[coral] rounded-xl'>Vote</Link>
                </div>
            </div>

            <div className='bg-gray-800 lg:w-60 lg:h-90 md:w-60 md:h-100 sm:w-75 sm:h-105 w-65 h-100 rounded-2xl'>
                <img src={image8} className="lg:w-60 lg:h-40 md:w-60 md:h-50 rounded-2xl" />
                <h2 className='text-center text-[coral]'>9</h2>
                <p className='text-white/50 p-2'>
                  Name: Valentina Rose <br />
                  Age: 22 <br />
                  Country: France <br />
                  Occupation: Stylist <br />
                  Votes: <span className='text-[coral]'>2715</span>
                </p>
                <div className='text-center'>
                    <Link to="/vote" className='px-8 py-1 bg-[coral] rounded-xl'>Vote</Link>
                </div>
            </div>

            <div className='bg-gray-800 lg:w-60 lg:h-90 md:w-60 md:h-100 sm:w-75 sm:h-105 w-65 h-100 rounded-2xl'>
                <img src={image9} className="lg:w-60 lg:h-40 md:w-60 md:h-50 rounded-2xl" />
                <h2 className='text-center text-[coral]'>10</h2>
                <p className='text-white/50 p-2'>
                  Name: Grace Sam <br />
                  Age: 27<br />
                  Country: Sweden <br />
                  Occupation: Photographer <br />
                  Votes: <span className='text-[coral]'>2698</span>
                </p>
                <div className='text-center'>
                    <Link to="/vote" className='px-8 py-1 bg-[coral] rounded-xl'>Vote</Link>
                </div>
            </div>

            <div className='bg-gray-800 lg:w-60 lg:h-90 md:w-60 md:h-100 sm:w-75 sm:h-105 w-65 h-100 rounded-2xl'>
                <img src={image10} className="lg:w-60 lg:h-40 md:w-60 md:h-50 rounded-2xl" />
                <h2 className='text-center text-[coral]'>11</h2>
                <p className='text-white/50 p-2'>
                  Name: Scarlett Yen <br />
                  Age: 24 <br />
                  Country: South Korea <br />
                  Occupation: Model <br />
                  Votes: <span className='text-[coral]'>2675</span>
                </p>
                <div className='text-center'>
                    <Link to="/vote" className='px-8 py-1 bg-[coral] rounded-xl'>Vote</Link>
                </div>
            </div>

            <div className='bg-gray-800 lg:w-60 lg:h-90 md:w-60 md:h-100 sm:w-75 sm:h-105 w-65 h-100 rounded-2xl'>
                <img src={image11} className="lg:w-60 lg:h-40 md:w-60 md:h-50 rounded-2xl" />
                <h2 className='text-center text-[coral]'>12</h2>
                <p className='text-white/50 p-2'>
                  Name: Victoria Steph <br />
                  Age: 26 <br />
                  Country: USA <br />
                  Occupation: Model <br />
                  Votes: <span className='text-[coral]'>2642</span>
                </p>
                <div className='text-center'>
                    <Link to="/vote" className='px-8 py-1 bg-[coral] rounded-xl'>Vote</Link>
                </div>
            </div>

            <div className='bg-gray-800 lg:w-60 lg:h-90 md:w-60 md:h-100 sm:w-75 sm:h-105 w-65 h-100 rounded-2xl'>
                <img src={image12} className="lg:w-60 lg:h-40 md:w-60 md:h-50 rounded-2xl" />
                <h2 className='text-center text-[coral]'>13</h2>
                <p className='text-white/50 p-2'>
                  Name: Lenny Lee <br />
                  Age: 24 <br />
                  Country: China <br />
                  Occupation: Teacher <br />
                  Votes: <span className='text-[coral]'>2627</span>
                </p>
                <div className='text-center'>
                    <Link to="/vote" className='px-8 py-1 bg-[coral] rounded-xl'>Vote</Link>
                </div>
            </div>

            <div className='bg-gray-800 lg:w-60 lg:h-90 md:w-60 md:h-100 sm:w-75 sm:h-105 w-65 h-100 rounded-2xl'>
                <img src={image13} className="lg:w-60 lg:h-40 md:w-60 md:h-50 rounded-2xl" />
                <h2 className='text-center text-[coral]'>14</h2>
                <p className='text-white/50 p-2'>
                  Name: Hannah Bria <br />
                  Age: 22 <br />
                  Country: Ireland <br />
                  Occupation: Designer <br />
                  Votes: <span className='text-[coral]'>2589</span>
                </p>
                <div className='text-center'>
                    <Link to="/vote" className='px-8 py-1 bg-[coral] rounded-xl'>Vote</Link>
                </div>
            </div>

            <div className='bg-gray-800 lg:w-60 lg:h-90 md:w-60 md:h-100 sm:w-75 sm:h-105 w-65 h-100 rounded-2xl'>
                <img src={image14} className="lg:w-60 lg:h-40 md:w-60 md:h-50 rounded-2xl" />
                <h2 className='text-center text-[coral]'>15</h2>
                <p className='text-white/50 p-2'>
                  Name: Cassandra Sam <br />
                  Age: 28 <br />
                  Country: Brazil <br />
                  Occupation: Designer <br />
                  Votes: <span className='text-[coral]'>2552</span>
                </p>
                <div className='text-center'>
                    <Link to="/vote" className='px-8 py-1 bg-[coral] rounded-xl'>Vote</Link>
                </div>
            </div>

            <div className='bg-gray-800 lg:w-60 lg:h-90 md:w-60 md:h-100 sm:w-75 sm:h-105 w-65 h-100 rounded-2xl'>
                <img src={image15} className="lg:w-60 lg:h-40 md:w-60 md:h-50 rounded-2xl" />
                <h2 className='text-center text-[coral]'>16</h2>
                <p className='text-white/50 p-2'>
                  Name: Penelope Grayson<br />
                  Age: 28 <br />
                  Country: Philipine <br />
                  Occupation: Stylist <br />
                  Votes: <span className='text-[coral]'>2512</span>
                </p>
                <div className='text-center'>
                    <Link to="/vote" className='px-8 py-1 bg-[coral] rounded-xl'>Vote</Link>
                </div>
            </div>

            <div className='bg-gray-800 lg:w-60 lg:h-90 md:w-60 md:h-100 sm:w-75 sm:h-105 w-65 h-100 rounded-2xl'>
                <img src={image16} className="lg:w-60 lg:h-40 md:w-60 md:h-50 rounded-2xl" />
                <h2 className='text-center text-[coral]'>17</h2>
                <p className='text-white/50 p-2'>
                  Name: Arabella Pedro <br />
                  Age: 24 <br />
                  Country: Mexico <br />
                  Occupation: Teacher <br />
                  Votes: <span className='text-[coral]'>2490</span>
                </p>
                <div className='text-center'>
                    <Link to="/vote" className='px-8 py-1 bg-[coral] rounded-xl'>Vote</Link>
                </div>
            </div>

            <div className='bg-gray-800 lg:w-60 lg:h-90 md:w-60 md:h-100 sm:w-75 sm:h-105 w-65 h-100 rounded-2xl'>
                <img src={image21} className="lg:w-60 lg:h-40 md:w-60 md:h-70 rounded-2xl" />
                <h2 className='text-center text-[coral]'>18</h2>
                <p className='text-white/50 p-2'>
                  Name: Ms Puiyi <br />
                  Age: 29 <br />
                  Country: Malaysia <br />
                  Occupation: Model/Dj <br />
                  Votes: <span className='text-[coral]'>2468</span>
                </p>
                <div className='text-center'>
                    <Link to="/vote" className='px-8 py-1 bg-[coral] rounded-xl'>Vote</Link>
                </div>
            </div>

            <div className='bg-gray-800 lg:w-60 lg:h-90 md:w-60 md:h-100 sm:w-75 sm:h-105 w-65 h-100 rounded-2xl'>
                <img src={image19} className="lg:w-60 lg:h-40 md:w-60 md:h-50 rounded-2xl" />
                <h2 className='text-center text-[coral]'>19</h2>
                <p className='text-white/50 p-2'>
                  Name: Freya Bre <br />
                  Age: 25 <br />
                  Country: Astria <br />
                  Occupation: Model <br />
                  Votes: <span className='text-[coral]'>2412</span>
                </p>
                <div className='text-center'>
                    <Link to="/vote" className='px-8 py-1 bg-[coral] rounded-xl'>Vote</Link>
                </div>
            </div>

            <div className='bg-gray-800 lg:w-60 lg:h-90 md:w-60 md:h-100 sm:w-75 sm:h-105 w-65 h-100 rounded-2xl'>
                <img src={image20} className="lg:w-60 lg:h-40 md:w-60 md:h-50 rounded-2xl" />
                <h2 className='text-center text-[coral]'>20</h2>
                <p className='text-white/50 p-2'>
                  Name: Hailey Brook <br />
                  Age: 23 <br />
                  Country: Scotland <br />
                  Occupation: Model <br />
                  Votes: <span className='text-[coral]'>2377</span>
                </p>
                <div className='text-center'>
                    <Link to="/vote" className='px-8 py-1 bg-[coral] rounded-xl'>Vote</Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contestants

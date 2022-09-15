import React from 'react'
import "./Course.css"
import image from "./images/feature_1.png"
import image2 from "./images/feature_2.png"
import image3 from "./images/feature_3.png"

const Course = () => {
  return (
    <>
    <section className='card-container'>
      <div className="card">
    <div>
      <img src={image} alt="" className='image1'/>
      </div>

      <h1>Digital Marketing Course</h1>
      <h2>Price: 4500/-</h2>
      <span><i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i></span>
      <p>Digital Marketing Certification Online Course transforms you into a digital market specialist in domains like SEO, social media, pay-per-click, conversion optimization, digital analytics, content, mobile, & email marketing. Get 3-month access to Digital Marketing Program & become industry-ready with the latest tools, work on real-world projects, and attend Expert Sessions from the Facebook team.</p>
      </div>


     <div className="card">
   <div>
      <img src={image2} alt="" className='image2'/>
      </div>

      <h1>Affiliate Marketing Course</h1>
      <h2>Price: 3500/-</h2>
      <span><i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i></span>
      <p>Affiliate marketing is another name for promoting another company's products or services on your site. By doing so, you can get a small commission every time a customer purchases their products based on your recommendation. Often you have seen affiliate marketing websites promoting certain products from top e-commerce and banking sites ranging from skincare, fashion, and food to credit cards and insurance policies. </p>
      </div>
      
<div className="card">
     <div>
      <img src={image3} alt="" className='image3'/>
      </div>

      <h1>Social-Media Marketing Course</h1>
      <h2>Price: 4000/-</h2>
      <span><i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i></span>
      <p>The Social Media Marketing Specialization is a six-part course covering social media marketing, analytics, engagement strategies, content creation, advertising, and business planning. The sixth and final piece of the course is a capstone project, putting what you learned in the rest of it to the test creating a social marketing plan. </p>
      </div>
      </section>
    </>
  )
}

export default Course
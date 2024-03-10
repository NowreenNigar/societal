import React from 'react';
import './Landing.css'
import Sidebar from '../Sidebar/Sidebar';

const LandingPage = () => {
  return (<>
  <div  className="create-quiz-wrapper">
    <Sidebar />
    <div className="landing-page">
      <header className='head'>
      <img src='https://icon666.com/r/_thumb/xkp/xkp88j6737j7_64.png'/>
        <h1>HOPE HAVEN</h1>
      </header>
      <main>
      <section className="meet-the-children">
          <img src="https://media.istockphoto.com/id/1374837172/photo/cheerful-children-thumbs-up-portrait-outdoor-in-nature.jpg?s=612x612&w=0&k=20&c=KcVVNgQdOZTCk968VrdZv8TVZsNI4nOaj6gwMuZtal0=" alt="Children at Hope Haven" className="about-image" />
          <p className='text'>Donate and bring smile</p>
        </section>
        
       <br></br><br></br><br></br><br></br><br></br><br></br>
          <h2 className='about'>About Us</h2><br></br>
          <p>
Hope Haven: A Beacon of Hope for Children in Need
Hope Haven is a haven for children who have lost their parents or guardians, providing them with a loving and nurturing environment where they can thrive. We believe every child deserves a safe place to call home, filled with opportunities to learn, grow, and reach their full potential.
</p>
<p>
We are an independent, nonprofit organization dedicated to providing a safe haven for children who have been abandoned or left without care by their parents.
In an era where childhood is often viewed as fragile, vulnerable, and easily damaged, it’s heartening to see that
In an effort to provide hope, comfort, and a loving home for children in need, Hope Haven was established in 201
In an ever changing world, there are countless numbers of children who find themselves alone or struggling to cope with life’s challenges.</p>
<div className='card'>
<p className='cards'><img className='image'src='https://cdn-icons-png.flaticon.com/512/7198/7198217.png'/><h3>Our Mission:</h3>

To provide a stable and loving home for children in need.
To empower children through education, healthcare, and emotional support.
To equip them with the skills and confidence they need to lead fulfilling lives.</p>
<p className='cards'><img className='image'src='https://cdn-icons-png.flaticon.com/128/2191/2191206.png'/>
<h3>Our Impact:</h3>

Hope Haven has been a lifeline for countless children, offering them a sense of belonging, family, and hope for a brighter future.
We provide comprehensive care, including nutritious meals, quality education, access to healthcare, and opportunities for extracurricular activities and personal growth.
We foster a supportive and loving environment where children feel safe, valued, and empowered to reach their dreams.</p>
<p className='cards'><img className='image'src='https://cdn-icons-png.flaticon.com/128/2618/2618479.png'/><h3>How You Can Help:</h3>

Your support, in any form, makes a significant difference in the lives of these children.
You can contribute through donations, volunteering your time and skills, or spreading awareness about our work.
Together, we can create a brighter future for children in need. Visit our website to learn more about Hope Haven and how you can get involved</p>
</div>
</main>
    </div>     
    </div>
      <footer>
      <section className="ways-to-help">
          <h2 className='ways'>Ways to Help</h2>
          <ul>
            <a href='/orphanages'><li >Donate</li></a>
            <li>Volunteer</li>
            <li>Sponsor a child</li>
            <li>Spread the word</li>
          </ul>
        </section>
        <p>&copy; 2024 HOPE HAVEN</p>
        <a href="/contact">Contact Us</a>
      </footer>
    </>
  );
}

export default LandingPage;
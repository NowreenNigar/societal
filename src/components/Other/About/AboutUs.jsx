import React from 'react';
import './AboutUs.css'
import Sidebar from '../Sidebar/Sidebar';

const AboutUs = () => {
  return (
    <>
    <div className='create-quiz-wrapper'>
    <Sidebar/>
    
    <div className='heading'>
    <h2 className='header'>About Hope Haven</h2>
      <p>
        Hope Haven is a non-profit organization dedicated to providing a safe and nurturing home for children in need. We offer them love, education, healthcare, and opportunities to thrive.
      </p>
    
    <section className="about-us">
      
      <div className="story">
        <h3>A Story of Hope</h3>
        <img src="https://media.istockphoto.com/id/182720270/photo/indian-rural-girls.jpg?s=612x612&w=0&k=20&c=qMRFMvpe6XK1wrGDDOND0il8oCmkc1KUMnGpP-Yn8pg=" alt="Children at Hope Haven" className="about-image" />
        <p>
        Maya clutched her worn teddy bear tightly as she entered the unfamiliar doorway. Tears welled up in her eyes, blurring the faces of the kind adults who greeted her. She was just five years old, and all she remembered was the warmth of her parents' embrace, now a distant memory.

Hope Haven, the orphanage, became Maya's new home. At first, everything felt strange and overwhelming. But the warmth of the caregivers, the gentle smiles of the other children, and the feeling of belonging slowly chipped away at her loneliness.

One day, during arts and crafts, Maya sat alone, fiddling with her paintbrush. Ms. Sarah, a caregiver with kind eyes and a calming voice, noticed her. She sat beside Maya and gently asked, "What would you like to paint, sweetheart?"

Tears welled up again, but this time, they weren't just from sadness. Maya, in her broken voice, whispered, "I miss my mommy and daddy."

Ms. Sarah didn't try to replace them, but she offered a different kind of comfort. She helped Maya paint a picture of a bright sun shining over a house with a heart-shaped chimney. "This can be your happy place," Ms. Sarah explained, "a place where you can always feel the love of your parents, even though they're not here."

Years passed. Maya blossomed under the care and guidance of Hope Haven. She made friends, excelled in school, and discovered a talent for music. The orphanage became a family, a place where she felt safe, loved, and supported.

One sunny afternoon, Maya stood on the stage, confidently playing the violin. In the audience, a couple sat with proud smiles, their eyes filled with tears. They were foster parents who had come to Hope Haven looking for a child to love.

As Maya finished her performance, the applause washed over her. She looked at the couple, then back at Ms. Sarah, who winked encouragingly. Maya knew this wasn't goodbye, but a new chapter filled with hope and the promise of a loving family.

Hope Haven, the place that had once been a refuge for a scared little girl, had become a launching pad for her dreams, a testament to the power of love, compassion, and the unwavering belief in the potential of every child.
        </p>
      </div>
      <div className="story">
        <h3>A Story of Hope</h3>
        <img src="https://media.istockphoto.com/id/1374837172/photo/cheerful-children-thumbs-up-portrait-outdoor-in-nature.jpg?s=612x612&w=0&k=20&c=KcVVNgQdOZTCk968VrdZv8TVZsNI4nOaj6gwMuZtal0=" alt="Children at Hope Haven" className="about-image" />
        <p> 
        Leo, a mischievous eight-year-old with eyes that sparkled with a mix of curiosity and defiance, arrived at Hope Haven with a tattered backpack and a heart full of questions. He'd lost his parents in a tragic accident, leaving him feeling adrift and alone.

The transition wasn't easy. Leo, used to roaming free, struggled with the structure and routine of the orphanage. He often found himself in trouble, his pent-up emotions manifesting as pranks and outbursts.

One day, Ms. Daniel, a volunteer with a passion for gardening, noticed Leo sulking by the window. She gently invited him to join her in the orphanage's small garden. Hesitantly, Leo followed her.

Ms. Daniel showed him how to plant seeds, explaining the magic of nurturing something from tiny beginnings to vibrant life. As Leo carefully placed a seed in the soil, a spark of wonder ignited in his eyes. He spent hours tending to the garden, watching with fascination as tiny green shoots emerged.

The garden became Leo's sanctuary. He found solace in the quiet rhythm of caring for the plants, learning patience and responsibility. He even started sharing his newfound knowledge with other children, teaching them the joy of nurturing life.

One afternoon, while watering the tomato plants, Leo confided in Ms. Daniel, "I miss my parents, but this garden makes me feel closer to them somehow."

Ms. Daniel smiled, "They would be so proud of you, Leo. You're learning to grow, just like these plants, and that's something they would want for you."

As the seasons changed, so did Leo. The mischievous glint in his eyes remained, but it was now accompanied by a newfound sense of purpose and responsibility. He became a leader among the children, his love for the garden blossoming into a passion for nurturing not just plants, but also the hope and potential within himself and others.

Hope Haven, the place that had initially felt like a temporary shelter, became a catalyst for Leo's growth. It provided him with the space to heal, the love to blossom, and the soil where his potential could take root and flourish.

        </p>
      </div>
      
    </section>
    </div>
    </div>
    
      <footer>
      <section className="ways-to-help">
          <h2>Ways to Help</h2>
          <ul>
            <li>Donate</li>
            <li>Volunteer</li>
            <li>Sponsor a child</li>
            <li>Spread the word</li>
          </ul>
        </section>
        <p>&copy; 2024 HOPE HAVEN</p>
        <a href="#">Contact Us</a>
      </footer>
    
    </>
  );
};

export default AboutUs;
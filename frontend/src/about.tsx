import React from "react";
import { useLocation } from "react-router-dom";

const AboutSection: React.FC = () => {
  const location = useLocation();

//   const text = `אנחנו תמר ויעל, מסטודיו tydesign
// אדריכליות ומעצבות חללים פנימיים ליזמים, עסקים ובתים מורכבים.
// זכינו להגשים כבר עשרות חלומות בגוונים ובמימדים שונים.
// ועדיין מתרגשות כל פעם מחדש
// לפגוש את לקוחות האושר שלנו
// שהחלל שלהם  שילש את שוויו
// עם תכנון אדריכלי כפול, עיצוב פורץ מרחבים, וסטיילניג משלים ושובה.

// כשאנחנו מתחילות לשרטט, אנחנו יחד, ואתם מול עיננו:

// אנחנו משקללות את הצרכים- ההרגלים- היכולות- המטרות
// והכי- את המחיר היקר ששילמת על הנדל&quot;ן הישראלי.
// פתאום השרטוט קם לו
// ונולד עיצוב על זמני שישאר רלוונטי, אפקטיבי ונוח לאורך שנים.

// בדיוק עבורכם, אנחנו יחד, כדי להגיע להישגים כפולים עבורכם.
// צרו קשר, לא תתחרטו
// תמר ויעל
// Ty design
// `;

  const isAboutPage = location.pathname.endsWith("/AboutSection");

  return (
    <div className="main-container">
      <div className="about">
        {/* <section id="about" className="about-section"> */}
            <div className="about-content">
          <div className="about-text">
            <h1 className="mixed-text ">נעים מאד</h1>
            <h1 className="mixed-text ">וברכות על הצעד!<br /><br /></h1>
        
            {/* <p><strong>נעים מאד </strong><br />
            <strong>וברכות על הצעד!</strong>
            </p> */}
             <p>
              אנחנו <strong>תמר ויעל</strong>, מסטודיו <strong>tydesign</strong>, אדריכליות ומעצבות חללים פנימיים ליזמים, עסקים ובתים מורכבים. זכינו להגשים כבר <strong>עשרות חלומות</strong> בגוונים ובמימדים שונים, ועדיין מתרגשות כל פעם מחדש לפגוש את לקוחות האושר שלנו שהחלל שלהם <strong>שילש את שוויו</strong> עם תכנון אדריכלי כפול, עיצוב פורץ מרחבים, וסטיילינג משלים ושובה.
            </p>

            <p>
              כשאנחנו מתחילות לשרטט, <strong>אנחנו יחד</strong>, ואתם מול עיננו: אנחנו משקללות את הצרכים, ההרגלים, היכולות, המטרות, והכי – את <strong>המחיר היקר ששילמת על הנדל"ן הישראלי</strong>. פתאום השרטוט קם לו ונולד <strong>עיצוב על זמני</strong> שישאר רלוונטי, אפקטיבי ונוח לאורך שנים.
            </p>

            <p>
              <strong>בדיוק עבורכם, אנחנו יחד, כדי להגיע להישגים כפולים עבורכם.</strong> <strong>צרו קשר, לא תתחרטו.</strong> <br /> תמר ויעל <br /> Ty design
            </p>
          </div>

          <div className="about-image">
            <img src="לוגו עם טלפון-01.png" alt="המעצבת" />
          </div>
        </div>
      {/* </section> */}

        {isAboutPage && (
          <section className="beliefs-section">
            <div className="belief-card">
                 <div className="text-card">
              <h3> אנחנו מאמינות באנושיות</h3>
              <p>
                הידע שצברנו, הניסיון מעשרות עיצובים – כולם כפופים למאווים שלכם.<br />
                כי בסוף יום, אנחנו נחזור למשרד, והשטח יישאר שלכם.<br />
                לאורך התהליך נלך שלובות זרוע עם הוויז'ן שלכם לעבר המטרות שתרצו,<br />
                וגם כשנפתיע – זה יהיה בדיוק בגירסה שתאהבו.
              </p> </div>
               <img
          src="image (4).png"
          alt="טלפון חכם"
          className="card-image"
        />
            </div>

            <div className="belief-card">
                 
               <img
          src="חשיבה.png"
          alt="טלפון חכם"
          className="card-image"
        />
               <div className="text-card">

              <h3> אנחנו מאמינות בחשיבה</h3>
              <p>
                פונקציונאליות, אסתטיקה, נוחות וארגונומיה – לא רק מילים שכיף לגלגל על הלשון.<br />
                זה מה שיתן לכם כ-2.6 מ"ר נוספים בכל חדר!<br />
                נתחיל בחשיבה נפרדת, נתקדם לחשיבה משותפת,<br />
                עד שנפרוץ דרך וייצר יופי חד פעמי שתאהבו.
              </p></div>
            </div>

            <div className="belief-card">
                               <div className="text-card">

              <h3> אנחנו מאמינות בזמינות</h3>
              <p>
                כל מקצוע צריך זמינות – אבל שפועלי הבנייה יחכו שמעצב יתעורר?<br />
                מהפנייה הראשונה – תענו בזמינות אכפתית.<br />
                מהשרטוטים, דרך רכישת האבזור ועד לרהיטים בשטח –<br />
                אנחנו איתכם. שלא תישאר שאלה.<br />
                <strong>נסו את הזמינות שלנו!</strong>
              </p> </div>
               <img
          src="זמינות.png"
          alt="טלפון חכם"
          className="card-image"
        />
            </div>
          </section>
            
        )}
      </div>
    </div>
    

  );
};

export default AboutSection;

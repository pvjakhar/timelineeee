import React, { useEffect, useRef, useState } from "react";
import './timeline.css';

// Images
import img1 from './assets/images/obp 1-D5Rbw8zb.avif';
import img2 from './assets/images/MPD 3-BSdWA76q.avif';
import img3 from './assets/images/Success-w3z5xRyX.avif';
import img4 from './assets/images/gbp 5-BUogcWpr.avif';
import img5 from './assets/images/jmd-BRBu3C7B.avif';
import img6 from './assets/images/MGF 1-BOpXYu_y.avif';
import img8 from './assets/images/mohan-Bhbgo6o-.avif';
import img9 from './assets/images/okkla-C4nrA0re.avif';
import img10 from './assets/images/prop-CP-BnRE4zyN.avif';
import img13 from './assets/images/LOUNGEAREA1-CVgcy5MG.avif';
import img14 from './assets/images/142 NOIDA 1-DztVV_3h.avif';
import img15 from './assets/images/grovy 1-D4hIQ2P4.avif';
import img16 from './assets/images/HYDERABAD 1-BB-Qt9OM.avif';
import img7 from './assets/images/1 (1)-DWj-BICG.avif'


const events = [
  {
    image: img5,
    time: "2018",
    title: "MG Road, Gurgaon",
    description: "JMD Empire Square MG Road, Gurgaon<br /><strong>Rating: 4.5 (297 reviews)",
    city: "Gurgaon", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/gurgaon/altf-empire-square/"
  },
  {
    image: img3,
    time: "2019",
    title: "Golf Course Road Ext., Gurgaon",
    description: "Suncity Success Tower, Golf Course Extension Road, Gurgaon<br /><strong>Rating: 4.7 (99 reviews)",
    city: "Gurgaon", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/gurgaon/altf-success-tower/"
  },
  {
    image: img6,
    time: "2021",
    title: "MG Road,Gurgaon",
    description: "MGF Megacity Mall, MG Road, Gurgaon<br /><strong>Rating: 5.0 (19 reviews)",
    city: "Gurgaon", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/gurgaon/altf-megacity/"
  },
  {
    image: img15,
    time: "April 2022",
    title: "Sector 68, Noida",
    description: "Grovy Optiva, Block A, Sector 68, Noida<br /><strongRating: 4.5 (101 reviews)",
    city: "Noida", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/noida/altf-grovy-optiva/"
  },
  {
    image: img10,
    time: "May 2022",
    title: "Barakhamba Road, Delhi",
    description: "5th Floor, Wing-A, Statesman House, Barakhamba Road, New Delhi<br /><strong>Rating: 4.9 (51 reviews)",
    city: "Delhi", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/delhi/altf-statesman-house/"
  },
  {
    image: img2,
    time: "July 2023",
    title: "Golf Course Road, Gurgaon",
    description: "2nd Floor, MPD Tower, Golf Course Road, Gurgaon<br /><strong>Rating: 4.9 (99 reviews)",
    city: "Gurgaon", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/gurgaon/altf-mpd-tower/"
  },
  {
    image: img14,
    time: "July 2023",
    title: "Sector 142, Noida Expressway",
    description: "Plot No. 21 & 21A, Sector 142, Noida<br /><strong>Rating: 4.8 (259 reviews)",
    city: "Noida", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/noida/altf-noida-142/"
  },
  {
    image: img4,
    time: "Nov 2023",
    title: "MG Road, Gurgaon",
    description: "Tower D, Global Business Park MG Road, Gurgaon<br /><strong>Rating: 4.8 (57 reviews)",
    city: "Gurgaon", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/gurgaon/altf-global-business-park/"
  },
   {
    image: img9,
    time: "December 2023",
    title: "Okhla, Delhi",
    description: "101, Mathura Rd, CRRI, Ishwar Nagar, Okhla, New Delhi<br /><strong>Rating: 4.9 (188 reviews)",
    city: "Delhi", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/delhi/altf-101-okhla/"
  },
  {
    image: img1,
    time: "2024",
    title: "Sohna Road, Gurgaon",
    description: "Sohna Road, Sector 48, near Subhash Chowk, Gurgaon, Haryana<br /><strong>Rating: 4.9 (85 reviews)",
    city: "Gurgaon", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/gurgaon/altf-orchid-business-park/"
  },
  {
    image: img13,
    time: "January 2025",
    title: "Sector 58, Noida",
    description: "A100, A Block, Sector 58, Noida, Uttar Pradesh<br /><strong>Rating: 5.0 (45 reviews)",
    city: "Noida", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/noida/altf-noida-58/"
  },
  {
    image: img7,
    time: "Feb 2025",
    title: "Sector 62, Noida",
    description: "C-20, 1/1A, Coast Guard Golf Ground Rd, Sector 62, Noida<br /><strong>Rating: 4.5 (101 reviews)",
    city: "Noida", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/noida/altf-noida-62/"
  },
  {
    image: img8,
    time: "April 2025",
    title: "Mohan Cooperative, Delhi",
    description: "Plot No A 26, Block B, Mohan Cooperative Industrial Estate, Delhi<br /><strong>Newly Launched",
    city: "Delhi", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/delhi/altf-mohan-cooperative/"
  },
  {
    image: img16,
    time: "2025",
    title: "Financial District, Hyderabad",
    description: "Kapil Kavuri Hub. 144, Financial District, Nanakramguda, Hyderabad<br /><strong>Rating: 5.0 (1 review)",
    city: "Hyderabad", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/hyderabad/altf-financial-district/"
  },
  {
    image: img4,
    time: "2025",
    title: "alt.f Hitec City",
    description: "Hitec City, Hyderabad<br /><strong>Coming Soon",
    city: "Hyderabad", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/hyderabad/altf-hitec-city/"
  },
  {
    image: img7,
    time: "----",
    title: "Udyog Vihar, Gurgaon",
    description: "887, Shankar Chowk Rd, Phase V, Udyog Vihar, Sector 19, Gurugram, Haryana, 122022<br /><strong>Coming Soon",
    city: "Gurgaon", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/gurgaon/altf-udyog-vihar/"
  },
  {
    image: img13,
    time: "-----",
    title: "Connaught Place, Delhi",
    description: "Connaught Place, Delhi<br /><strong>Coming Soon",
    city: "Delhi", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/delhi/altf-regal-building/"
  },
];

function Timeline() {
  const itemRefs = useRef([]);
  const timelineRef = useRef(null);
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const uniqueCities = ["All Cities", ...new Set(events.map(event => event.city))].sort();
  const filteredEvents = events.filter(event => {
    if (selectedCity === "All Cities") {
      return true;
    }
    return event.city === selectedCity;
  });

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timelineElement = timelineRef.current;
    if (!timelineElement) return;

    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const targetItem = entry.target;
        if (entry.isIntersecting) {
          targetItem.classList.add("visible");
        } else {
          targetItem.classList.remove("visible");
        }
      });

      let maxVisibleYearBottom = 0;
      document.querySelectorAll('.qr-timeline-timeline-item.visible').forEach(item => {
        const yearLabel = item.querySelector('.qr-timeline-timeline-year');
        const mobileYearLabel = item.querySelector('.qr-timeline-timeline-time.mobile');

        let currentYearElement = null;

        if (window.innerWidth >= 769 && yearLabel) {
          currentYearElement = yearLabel;
        } else if (window.innerWidth < 769 && mobileYearLabel) {
          currentYearElement = mobileYearLabel;
        }

        if (currentYearElement) {
          const yearRect = currentYearElement.getBoundingClientRect();
          const timelineRect = timelineElement.getBoundingClientRect();
          const yearBottomRelativeToTimeline = yearRect.bottom - timelineRect.top;

          if (yearBottomRelativeToTimeline > maxVisibleYearBottom) {
            maxVisibleYearBottom = yearBottomRelativeToTimeline;
          }
        }
      });

      timelineElement.style.setProperty('--glow-line-height', `${maxVisibleYearBottom}px`);

    }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });

    filteredEvents.forEach((_, index) => {
      const el = itemRefs.current[index];
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [selectedCity, filteredEvents, isMobile]);

  useEffect(() => {
    itemRefs.current = [];
  }, [filteredEvents]);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsDropdownOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="qr-timeline-main-container"> {/* Added a main container for overall structure */}
      <div className="qr-timeline-wrapper">
        {/* 🎨 Background Animated Visuals */}
        <div className="qr-timeline-bg-visuals">
          {/* Floating cityscape illustration */}
          <svg className="qr-timeline-city-animation" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect x="10" y="50" width="8" height="50" className="qr-timeline-building"></rect>
            <rect x="25" y="40" width="10" height="60" className="qr-timeline-building"></rect>
            <rect x="45" y="30" width="12" height="70" className="qr-timeline-building"></rect>
            <rect x="65" y="45" width="8" height="55" className="qr-timeline-building"></rect>
            <rect x="80" y="35" width="10" height="65" className="qr-timeline-building"></rect>
          </svg>

          {/* Animated wave lines */}
          <div className="qr-timeline-wave qr-timeline-wave1"></div>
          <div className="qr-timeline-wave qr-timeline-wave2"></div>
        </div>

        {/* Filter Buttons / Custom Dropdown */}
        <div className="qr-timeline-filter-container">
          {isMobile ? (
            <div className="qr-timeline-custom-dropdown-mobile">
              <div
                className={`qr-timeline-dropdown-header ${isDropdownOpen ? 'open' : ''}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{selectedCity === "All Cities" ? "All Locations" : selectedCity}</span>
                <span className={`qr-timeline-dropdown-arrow ${isDropdownOpen ? 'up' : 'down'}`}></span>
              </div>
              <div className={`qr-timeline-dropdown-options ${isDropdownOpen ? 'show' : ''}`}>
                {uniqueCities.map((city) => (
                  <div
                    key={city}
                    className={`qr-timeline-dropdown-option ${selectedCity === city ? 'active' : ''}`}
                    onClick={() => handleCitySelect(city)}
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              {uniqueCities.map((city) => (
                <button
                  key={city}
                  className={`qr-timeline-filter-button ${selectedCity === city ? "active" : ""}`}
                  onClick={() => setSelectedCity(city)}
                >
                  {city}
                </button>
              ))}
            </>
          )}
        </div>

        {/* 🕒 Timeline Content */}
        <div id="timeline-start" className="qr-timeline-timeline" ref={timelineRef}> {/* Added ID for CTA button scroll */}
          {filteredEvents.map((event, index) => {
            const isRight = index % 2 === 0;
            return (
              <div
                key={index}
                className={`qr-timeline-timeline-item ${isRight ? "right" : "left"}`}
                ref={el => itemRefs.current[index] = el}
              >
                {/* <div className="qr-timeline-timeline-dot"></div> */}
                <div className={`qr-timeline-timeline-year ${isRight ? "qr-timeline-timeline-year-right" : "qr-timeline-timeline-year-left"}`}>{event.time}</div>
                <div className="qr-timeline-timeline-time mobile">{event.time}</div>
                <div className={`qr-timeline-timeline-side ${isRight ? "right" : "left"}`}>
                  <div className={`qr-timeline-timeline-card theme-${index % 4}`}>
                    <img src={event.image} alt={event.title} className="qr-timeline-timeline-image" />
                    <h3>{event.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: event.description }}></p>
                    <a className="qr-timeline-read-more" href={event.link}>READ MORE</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button className="qr-timeline-back-to-top" onClick={scrollToTop}>
            ↑
          </button>
        )}
      </div>
    </div>
  );
}

export default Timeline;

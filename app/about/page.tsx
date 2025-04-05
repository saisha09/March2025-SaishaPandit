"use client";

import { title } from "@/components/primitives";
import { useState } from "react";

export default function AboutPage() {
  const goToGoogle = () => {
    window.open("https://www.google.com", "_blank");
  };

  const facts = [
    "Paris has more bookstores per square mile than almost any other city in the world. The famous Shakespeare & Company bookstore has beds inside for writers to sleep in exchange for helping out in the shop.",
    "The scent you smell when rain hits dry ground is called petrichor",
    "The average time spent Infrasound (sounds below human hearing) can be used in horror movie soundtracks to make viewers feel uneasy without realizing why",
    "During the Cold War, ballet dancers were used as cultural ambassadors by the USSR and USA — seen as proof of cultural superiority",
    "Mirages happen more in summer heat due to refracted light over hot surfaces — they're not hallucinations but actual optical effects",
    "The Looking Glass Self theory (by Charles Horton Cooley) suggests we shape our identities based on how we think others see us — even if it's wrong.",
    "Cognitive dissonance is the feeling of discomfort when holding two contradictory beliefs — this is why people tend to justify their decisions, even when they know they're wrong.",
    "Dreams happen during REM sleep, when your brain is more active than when you're awake, but your body is temporarily paralyzed to prevent acting them out.",
    "Around 12% of people dream in black and white.",
    "Venus is the only planet to spin clockwise",
    " Just like Earth has earthquakes, the moon experiences seismic activity, known as moonquakes. They are caused by tidal forces from Earth’s gravity, as well as by meteorite impacts."
  ];

  const [fact, setFact] = useState("");
  
  const getFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex]);
  };
  
  // Image captions for Instagram-like feel
  const imageCaptions = [
    "Summer 2024",
    "First football game feat. Riya",
    "Me in one of my favorite places (13 years ago)",
    "Galentines (feat. Riya again)",
    "First Dance Performance",
    "Taekwondo Champs 2025",
    "Reading and avoiding my responsibilities",
    "View in Hawaii",
    "The best city in the world",
    "Travelling",
    "Hoco 25'",
    "ASB fugitive at 11:00 pm",
    "Classical performance in 2024",
    "Dubai in 2014",
    "Fall in 2023"
  ];
    
  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Main title */}
      <h1 className={title()}>About</h1>
      
      {/* Image gallery using flexbox for a responsive layout
          - flex: enables flexbox layout
          - flex-wrap: allows items to wrap to next line when they don't fit
          - justify-center: centers the flex items horizontally
          - gap-6: adds consistent spacing between all items (horizontal and vertical)
          - my-6: adds margin top and bottom for section spacing */}
      <div className="flex flex-wrap justify-center gap-6 my-6">
        {/* Image sizing and responsiveness:
            - w-full: on mobile, images take full width
            - sm:w-5/12: on small screens, images take ~41% width (2 per row)
            - md:w-1/3: on medium screens, images take ~33% width (3 per row)
            - lg:w-1/5: on large screens, images take 20% width (effectively 4 per row with gaps)
            - max-w-80: limits maximum width to prevent overly large images
            - lg:max-w-72: decreases maximum width on large screens to fit more in a row
            - aspect-square: maintains 1:1 ratio regardless of width
            - object-cover: ensures image fills space without distortion
            - rounded: adds subtle rounded corners */}
        <div className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72">
          <img 
            src="/images/saisha.jpg" 
            alt="Saisha" 
            className="w-full aspect-square object-cover rounded" 
          />
          <p className="text-sm mt-2 px-1">{imageCaptions[0]}</p>
        </div>
        
        <div className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72">
          <img 
            src="/images/firstfootballgame.jpg" 
            alt="football" 
            className="w-full aspect-square object-cover bg-gray-200 rounded" 
          />
          <p className="text-sm mt-2 px-1">{imageCaptions[1]}</p>
        </div>
        
        <div className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72">
          <img 
            src="/images/07.24.2011beach.jpg" 
            alt="beach" 
            className="w-full aspect-square object-cover bg-gray-200 rounded" 
          />
          <p className="text-sm mt-2 px-1">{imageCaptions[2]}</p>
        </div>
        
        <div className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72">
          <img 
            src="/images/valentines24.jpg" 
            alt="valentines" 
            className="w-full aspect-square object-cover bg-gray-200 rounded" 
          />
          <p className="text-sm mt-2 px-1">{imageCaptions[3]}</p>
        </div>
        
        <div className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72">
          <img
            src="/images/firstdanceperformance.png" 
            alt="Dance" 
            className="w-full aspect-square object-cover rounded" 
          />
          <p className="text-sm mt-2 px-1">{imageCaptions[4]}</p>
        </div>
        
        <div className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72">
          <img 
            src="/images/taekwondochamps25.png" 
            alt="Taekwondo" 
            className="w-full aspect-square object-cover rounded" 
          />
          <p className="text-sm mt-2 px-1">{imageCaptions[5]}</p>
        </div>
        
        <div className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72">
          <img 
            src="https://i.pinimg.com/736x/4a/08/c5/4a08c55c717d7091ce674aa7e08eccc1.jpg" 
            alt="barnes and nobles" 
            className="w-full aspect-square object-cover rounded" 
          />
          <p className="text-sm mt-2 px-1">{imageCaptions[6]}</p>
        </div>
        
        <div className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72">
          <img 
            src="/images/viewinhawaii.jpg" 
            alt="barnesandnobles" 
            className="w-full aspect-square object-cover rounded" 
          />
          <p className="text-sm mt-2 px-1">{imageCaptions[7]}</p>
        </div>
        
        <div className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72">
          <img 
            src="https://i.pinimg.com/736x/fa/ce/ae/faceae7d4c04c3da73138767bd56118b.jpg" 
            alt="Reading" 
            className="w-full aspect-square object-cover rounded" 
          />
          <p className="text-sm mt-2 px-1">{imageCaptions[8]}</p>
        </div>
        
        <div className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72">
          <img 
            src="/images/travel.jpg" 
            alt="Taekwondo" 
            className="w-full aspect-square object-cover rounded" 
          />
          <p className="text-sm mt-2 px-1">{imageCaptions[9]}</p>
        </div>
        
        <div className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72">
          <img 
            src="/images/hoco25.jpg" 
            alt="Taekwondo" 
            className="w-full aspect-square object-cover rounded" 
          />
          <p className="text-sm mt-2 px-1">{imageCaptions[10]}</p>
        </div>
        
        <div className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72">
          <img 
            src="/images/asbfugitive.jpg" 
            alt="Taekwondo" 
            className="w-full aspect-square object-cover rounded" 
          />
          <p className="text-sm mt-2 px-1">{imageCaptions[11]}</p>
        </div>
        
        <div className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72">
          <img 
            src="/images/kathak2024.jpg" 
            alt="Taekwondo" 
            className="w-full aspect-square object-cover rounded" 
          />
          <p className="text-sm mt-2 px-1">{imageCaptions[12]}</p>
        </div>
        
        <div className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72">
          <img 
            src="/images/dubai2014.jpg" 
            alt="Taekwondo" 
            className="w-full aspect-square object-cover rounded" 
          />
          <p className="text-sm mt-2 px-1">{imageCaptions[13]}</p>
        </div>
        
        <div className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72">
          <img 
            src="/images/fall2023.jpg" 
            alt="Taekwondo" 
            className="w-full aspect-square object-cover rounded" 
          />
          <p className="text-sm mt-2 px-1">{imageCaptions[14]}</p>
        </div>
      </div>
      
      {/* Buttons section with flexbox for responsiveness
          - flex: enables flexbox layout
          - flex-wrap: allows buttons to wrap as needed
          - justify-center: centers the buttons horizontally
          - gap-4: adds consistent spacing between buttons */}
      <div className="flex flex-wrap justify-center items-center gap-4 my-6">
        {/* Button styling:
            - px-4 py-2: horizontal and vertical padding for proper sizing
            - bg-[color]: background color specific to each button/brand
            - text-white: white text for contrast on colored backgrounds
            - rounded: rounded corners for modern button appearance
            - hover:bg-[darker-color]: darkens button on hover for interactive feedback
            - transition-colors: makes hover color change smooth
            - font-medium: slightly bolder text for readability */}
        <a 
          href="https://open.spotify.com/?scrlybrkr=095c600f" 
          className="px-4 py-2 bg-green-600 text-white rounded font-medium hover:bg-green-700 transition-colors"
          target="_blank" rel="noopener noreferrer"
        >
          Spotify
        </a>
        
        <a 
          href="https://www.pinterest.com/" 
          className="px-4 py-2 bg-red-600 text-white rounded font-medium hover:bg-red-700 transition-colors"
          target="_blank" rel="noopener noreferrer"
        >
          Pinterest
        </a>
        
        <a 
          className="px-4 py-2 bg-lime-500 text-white rounded font-medium hover:bg-lime-600 transition-colors" 
          href="https://www.broadway.com/?gad_source=1&gclid=Cj0KCQjwhr6_BhD4ARIsAH1YdjC5HG73H-xl7rOVYFyyGIXkdwmS7B1kT5_OZNv7fblSLsSfe1LBWl4aAumSEALw_wcB" 
          target="_blank" rel="noopener noreferrer"
        >
          Broadway
        </a>
        
        {/* Google button using onClick function */}
        <button 
          onClick={goToGoogle} 
          className="px-4 py-2 bg-blue-500 text-white rounded font-medium hover:bg-blue-600 transition-colors"
        >
          Google
        </button>
        <div className="flex flex-col items-center p-8">
      <button 
        onClick={getFact} 
        className="bg-rose-300 text-black font-medium py-2 px-4 rounded-full hover:bg-rose-400 transition-colors"
      >
        Press for Fact
      </button>
      
      {fact && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md max-w-md">
          <p className="text-center">{fact}</p>
        </div>
      )}
    </div>
      </div>
    </div>
  );
}
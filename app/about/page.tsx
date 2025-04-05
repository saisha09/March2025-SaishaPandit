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
    "The average time spent Infrasound (sounds below human hearing) can be used in horror movie soundtracks to make viewers feel uneasy without realizing why.on (web)pages is 54 seconds, while [time spent on] blog posts average 3-5 minutes.",
    "During the Cold War, ballet dancers were used as cultural ambassadors by the USSR and USA — seen as proof of cultural superiority.s the same way we have unique fingerprints.",
    "Mirages happen more in summer heat due to refracted light over hot surfaces — they’re not hallucinations but actual optical effects.do",
    "The “Looking Glass Self” theory (by Charles Horton Cooley) suggests we shape our identities based on how we think others see us — even if it’s wrong.",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10"
  ];

  const [fact, setFact] = useState("");
  
  const getFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex]);
  };
    
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
        <img 
          src="/images/saisha.jpg" 
          alt="Saisha" 
          className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72 aspect-square object-cover rounded" 
        />
        <img 
          src="/images/firstfootballgame.jpg" 
          alt="Image placeholder" 
          className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72 aspect-square object-cover bg-gray-200 rounded" 
        />
        <img 
          src="/images/07.24.2011beach.jpg" 
          alt="Image placeholder" 
          className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72 aspect-square object-cover bg-gray-200 rounded" 
        />
        <img 
          src="/images/valentines24.jpg" 
          alt="Image placeholder" 
          className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72 aspect-square object-cover bg-gray-200 rounded" 
        />
        <img
          src="/images/firstdanceperformance.png" 
          alt="Dance" 
          className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72 aspect-square object-cover rounded" 
        />
        <img 
          src="https://i.pinimg.com/474x/b4/29/bd/b429bdd9331b56226dd8903ffe9073e6.jpg" 
          alt="Taekwondo" 
          className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72 aspect-square object-cover rounded" 
        />
        <img 
          src="https://i.pinimg.com/474x/b4/29/bd/b429bdd9331b56226dd8903ffe9073e6.jpg" 
          alt="Taekwondo" 
          className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72 aspect-square object-cover rounded" 
        />
        <img 
          src="https://i.pinimg.com/474x/b4/29/bd/b429bdd9331b56226dd8903ffe9073e6.jpg" 
          alt="Taekwondo" 
          className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72 aspect-square object-cover rounded" 
        />
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJSLeRYwQGe_hW6KqyXyhm1B_4JW9UwSdlg&s" 
          alt="Reading" 
          className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72 aspect-square object-cover rounded" 
        />
        <img 
          src="https://i.pinimg.com/474x/b4/29/bd/b429bdd9331b56226dd8903ffe9073e6.jpg" 
          alt="Taekwondo" 
          className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72 aspect-square object-cover rounded" 
        />
        <img 
          src="https://i.pinimg.com/474x/b4/29/bd/b429bdd9331b56226dd8903ffe9073e6.jpg" 
          alt="Taekwondo" 
          className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72 aspect-square object-cover rounded" 
        />
        <img 
          src="https://i.pinimg.com/474x/b4/29/bd/b429bdd9331b56226dd8903ffe9073e6.jpg" 
          alt="Taekwondo" 
          className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72 aspect-square object-cover rounded" 
        />
        <img 
          src="https://i.pinimg.com/474x/b4/29/bd/b429bdd9331b56226dd8903ffe9073e6.jpg" 
          alt="Taekwondo" 
          className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72 aspect-square object-cover rounded" 
        />
        <img 
          src="https://i.pinimg.com/474x/b4/29/bd/b429bdd9331b56226dd8903ffe9073e6.jpg" 
          alt="Taekwondo" 
          className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72 aspect-square object-cover rounded" 
        />
        <img 
          src="https://i.pinimg.com/474x/b4/29/bd/b429bdd9331b56226dd8903ffe9073e6.jpg" 
          alt="Taekwondo" 
          className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72 aspect-square object-cover rounded" 
        />
        <img 
          src="https://i.pinimg.com/474x/b4/29/bd/b429bdd9331b56226dd8903ffe9073e6.jpg" 
          alt="Taekwondo" 
          className="w-full sm:w-5/12 md:w-1/3 lg:w-1/5 max-w-80 lg:max-w-72 aspect-square object-cover rounded" 
        />
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
          target="_blank"
        >
          Spotify
        </a>
        
        <a 
          href="https://www.pinterest.com/" 
          className="px-4 py-2 bg-red-600 text-white rounded font-medium hover:bg-red-700 transition-colors"
          target="_blank"
        >
          Pinterest
        </a>
        
        <a 
          className="px-4 py-2 bg-lime-500 text-white rounded font-medium hover:bg-lime-600 transition-colors" 
          href="https://www.chess.com/" 
          target="_blank"
        >
          Chess.com
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
"use client"

import { useState } from "react";

export default function RecipesPage() {
  const [activeTab, setActiveTab] = useState("recipe");
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* First decide Main Layout and Content - 
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto px-4 py-8">
            { Content }
        </main>
        <footer className="bg-gray-100 py-6 border-t border-gray-200 mt-16">
          { Footer content }
        </footer>
      </div>
      Note: We need Flexible Layout so use Tailwind CSS"s responsive class which switch from a column layout on mobile to a row layout on larger screens.
      flex flex-col min-h-screen: Creates a vertical layout that fills at least the full height of the viewport
      flex-grow container mx-auto px-4 py-8: Main content expands to fill available space, is centered horizontally with padding
      Footer placement at the bottom      
      */}
    
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Recipe Content */}
        <div>
          <h1 className="text-3xl font-bold mb-6">Cinnamon Rolls</h1>
          
          {/* Use Tabs to make it easy to view information with ease
          Tab structure with conditional styling based on which tab is active
          How to use template literals with Tailwind for conditional styling
          {/ Tabs /}
            <div className="flex border-b border-gray-200 mb-6">
              <button className={`py-2 px-4 font-medium ${activeTab === "recipe" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}>
                Recipe
              </button>
              {/ Other tabs /}
            </div>
          */}
          <div className="flex border-b border-gray-200 mb-6">
            <button 
              className={`py-2 px-4 font-medium ${activeTab === "recipe" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}
              onClick={() => setActiveTab("recipe")}
            >
              Recipe
            </button>
            <button 
              className={`py-2 px-4 font-medium ${activeTab === "ingredients" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}
              onClick={() => setActiveTab("ingredients")}
            >
              Ingredients
            </button>
            <button 
              className={`py-2 px-4 font-medium ${activeTab === "instructions" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}
              onClick={() => setActiveTab("instructions")}
            >
              Instructions
            </button>
          </div>
          
          {/* Here we show Recipe Overview to users */}
          {activeTab === "recipe" && (
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                {/*Image Sizing: The image is set to w-full with appropriate max-width, so it will scale properly on different screen sizes. 
                Reduced the size of the cinnamon rolls image by adding the max-w-md class along with mx-auto to center the image within its container. 
                This keeps the image from being too large while still allowing it to scale appropriately.
                How can I do this in Tailwind CSS?:
                  w-full: Takes full width of container
                  max-w-md: Limits maximum width
                  h-auto: Height adjusts proportionally
                  mx-auto: Centers the image horizontally
                */}
                <img 
                  src="https://sallysbakingaddiction.com/wp-content/uploads/2013/05/easy-soft-cinnamon-rolls.jpg" 
                  alt="Cinnamon Rolls" 
                  className="w-full max-w-md h-auto rounded-lg shadow-md mx-auto"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">Perfect Homemade Cinnamon Rolls</h2>
                <p className="text-gray-700 mb-4">
                  These soft, fluffy cinnamon rolls are the perfect weekend breakfast treat - filled with a cinnamon-sugar mixture - yummy!!.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Prep Time:</p>
                    <p>30 minutes</p>
                  </div>
                  <div>
                    <p className="font-medium">Cook Time:</p>
                    <p>25 minutes</p>
                  </div>
                  <div>
                    <p className="font-medium">Rise Time:</p>
                    <p>90 minutes</p>
                  </div>
                  <div>
                    <p className="font-medium">Servings:</p>
                    <p>10-12 rolls</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* This is the Ingredients Tab - Tables in the ingredients tab have overflow-x-auto to allow horizontal scrolling on smaller screens if needed.*/}
          {activeTab === "ingredients" && (
            <div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">For the Dough</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left py-2 px-4">Item</th>
                        <th className="text-left py-2 px-4">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">All Purpose Flour</td>
                        <td className="py-3 px-4">2 3/4 cups</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Granulated Sugar</td>
                        <td className="py-3 px-4">1/4 cup</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Salt</td>
                        <td className="py-3 px-4">1/2 teaspoon</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Whole Milk</td>
                        <td className="py-3 px-4">3/4 cup</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Unsalted Butter</td>
                        <td className="py-3 px-4">3 tablespoons</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Platinum Yeast from Red Star</td>
                        <td className="py-3 px-4">2 1/4 teaspoon</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Large Egg</td>
                        <td className="py-3 px-4">1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">For the Filling</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left py-2 px-4">Item</th>
                        <th className="text-left py-2 px-4">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Unsalted Butter</td>
                        <td className="py-3 px-4">3 tablespoon</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Brown Sugar</td>
                        <td className="py-3 px-4">1/3 cup</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Ground Cinnamon</td>
                        <td className="py-3 px-4">1 tablespoon</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">For the Icing</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left py-2 px-4">Item</th>
                        <th className="text-left py-2 px-4">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Cream Cheese</td>
                        <td className="py-3 px-4">4 oz</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Unsalted Butter</td>
                        <td className="py-3 px-4">2 tablespoons</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Powdered Sugar</td>
                        <td className="py-3 px-4">2/3 cup</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Pure Vanilla Extract</td>
                        <td className="py-3 px-4">1 teaspoon</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          
          {/* Here we put the Instructions Tab */}
          {activeTab === "instructions" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Make the dough:</h3>
                <ol className="space-y-3 pl-5 list-decimal">
                  <li className="pl-2">Whisk the flour, sugar, and salt together in a large bowl. Set aside.</li>
                  <li className="pl-2">Combine milk and butter together in a bowl. Microwave or use the stove and heat until the butter has melted and the mixture is warm (110°F/43°C). Whisk in the yeast until it has dissolved. Pour the mixture into the dry ingredients, add the egg, and stir (use medium speed for stand mixers). Mix until a soft dough forms.</li>
                  <li className="pl-2">Transfer dough to a floured surface. Using floured hands, knead the dough (3-5 minutes). If the dough is super soft or sticky, add a little more flour. Place in a lightly greased bowl, cover loosely, and let the dough rest for about 10 minutes as you get the filling ingredients ready.</li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Fill the rolls:</h3>
                <p className="pl-2">After 10 minutes, roll the dough out in a 14×8-inch rectangle. Spread the softened butter on top. Mix together the cinnamon and brown sugar. Sprinkle it all over the dough. Roll up the dough to make a 14-inch log. Cut into 10–12 even rolls and arrange in a lightly greased 9 or 10-inch round baking pan.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Rise:</h3>
                <p className="pl-2">Cover the pan (use foil or a kitchen towel). Allow the rolls to rise in a warm environment for 60–90 minutes or until double in size.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Bake the rolls:</h3>
                <p className="pl-2">After the rolls have doubled in size, preheat the oven to 375°F (190°C). Bake for 24–27 minutes, or until lightly browned. Remove pan from the oven and place pan on a wire rack as you make the icing. (You can also make the icing as the rolls bake.)</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Make the icing:</h3>
                <p className="pl-2">In a medium bowl using a handheld or stand mixer fited with a padle or whisk attachment, beat the cream cheese on high speed until smooth and creamy. Add the butter and beat until smooth and combined, then beat in the confectioners sugar and vanilla until combined. Using a knife or icing spatula, spread the icing over the warm rolls and serve immediately.</p>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-2">Tips:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="pl-2">For best results, use room temperature ingredients for the icing.</li>
                  <li className="pl-2">You can prepare the rolls the night before. After placing rolls in the greased pan, cover and refrigerate overnight, then let rise for 1-2 hours before baking.</li>
                  <li className="pl-2">Leftover rolls can be stored in an airtight container at room temperature for 2-3 days or refrigerated for up to a week.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        
        {/* The "More Recipes" section uses a responsive grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3) that shows 1 column on mobile, 
        2 on medium screens, and 3 on large screens.
        Need to link to More Recipes Section at the bottom */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">More Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium text-lg">Blueberry Muffins</h3>
              <p className="text-gray-600 mt-2">A classic breakfast treat loaded with fresh blueberries</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium text-lg">Chocolate Chip Cookies</h3>
              <p className="text-gray-600 mt-2">Soft and chewy cookies with melty chocolate chips</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium text-lg">Banana Bread</h3>
              <p className="text-gray-600 mt-2">Moist and delicious way to use overripe bananas</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium text-lg">French Toast</h3>
              <p className="text-gray-600 mt-2">Classic breakfast dish with a hint of cinnamon</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium text-lg">Pancakes</h3>
              <p className="text-gray-600 mt-2">Fluffy pancakes perfect for weekend mornings</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium text-lg">Apple Pie</h3>
              <p className="text-gray-600 mt-2">Traditional dessert with a flaky crust and spiced filling</p>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer - The footer uses flex-col md:flex-row to stack elements on mobile and place them side-by-side on larger screens.
      use of container mx-auto px-4 provides a centered container with appropriate padding on all device sizes.*/}
      <footer className="bg-gray-100 py-6 border-t border-gray-200 mt-16">      
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600">© 2025 ACME Recipe Collection. All rights reserved.</p>
            </div>            
          </div>
        </div>
      </footer>
    </div>
  );
}
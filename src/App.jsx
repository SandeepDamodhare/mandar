import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    
    <h1>WECOME!! to what colour is your Bugatti</h1>

      <div>
        <a href="">
          <img  width={"800px"} height={"400px"}  src="https://m.atcdn.co.uk/ect/media/%7Bresize%7D/7c0f1f2e1303456088b15eb4c90a45a5.jpg"  />
        </a>
<br></br>

        


       
        
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Current users {80389283928}
        </button>

      </div>
      <p className="read-the-docs">
        <h4>Bugatti retrospectively received three design awards in December 2019 for its exhibition stands in Geneva: Automotive Brand Contest and Iconic Awards. At the German Design Award, Bugatti became "Winner" in the category "Excellent Architecture - Fair and Exhibition." At the Top Gear Award, the Bugatti Super Sport 300+ won the 2019 "Physics Lesson of the year" category. At the Auto Bild Sportscars Award in the same year, the car was judged the best sports car of the year in the "Super Sports Car Import" category.

Bugatti changed its corporate design in February 2020. The first showroom with the new look opened in Paris. The partner was Groupe Schumacher, founded in 1947 and specializing in supercars and hypercars. In the same month, Bugatti reported that 250 vehicles of the Chiron had now been built, exactly half the planned number.</h4>
      </p>
      <a href="">
          <img  width={"500px"} height={"250px"}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bugatti_Chiron_1.jpg/1200px-Bugatti_Chiron_1.jpg"  />
        </a>

<h1> BUGATTI CHIRON</h1>


        <p className="read-the-docs">
        <h4>The main carry over component from the Veyron is the 7,993 cc (8.0 L; 487.8 cu in) quad-turbocharged W16 engine, though it is heavily updated. The engine in the Chiron has a peak power output of 1,103 kW (1,479 hp; 1,500 PS) at 6,700 rpm and 1,600 N⋅m (1,180 lb⋅ft) of torque starting from 2,000 to 6,000 rpm. The engine in the most powerful variant of its predecessor, the Veyron Super Sport generates 221 kW (296 hp; 300 PS) less than the new Chiron, while the engine in the original Veyron generates 367 kW (492 hp; 499 PS) less power.

Like its predecessor, the Veyron, the Chiron utilises a carbon fibre body structure, independent suspension and a Haldex All-wheel drive system. The carbon fibre body has a stiffness of 50,000 Nm per degree.

The Chiron can accelerate from 0–100 km/h (0–62 mph) in 2.4 seconds according to the manufacturer, 0–200 km/h (0–124 mph) in 6.5 seconds and 0–300 km/h (0–186 mph) in 13.6 seconds. In a world-record-setting test at the time in 2017, the Chiron reached 400 km/h (249 mph) in 32.6 seconds, after which it needed 9.4 seconds to brake to standstill.

The Chiron's top speed is electronically limited to 420 km/h (261 mph), or 375–380 km/h (233–236 mph) without the specific key, for safety reasons, mainly arising from the tyres as Bugatti concluded that no tyre currently manufactured would be able to handle the stress at the top speed the Chiron is capable of achieving. Independent testing by an owner has indicated that the Chiron can easily attain its limited top speed. Mixed fuel consumption is 22.5 L/100 km.</h4>
      </p>







      <div style={{display:"flex"}}>
  <div style={{width:"30%", height:"100vh"}}>
         <a href="">
          <img  width={"200px"} height={"100px"}  src="https://c4.wallpaperflare.com/wallpaper/965/797/268/bugatti-chiron-side-view-blue-wallpaper-preview.jpg"  />
        </a>
  </div>

  <div style={{width:"70%", height:"100vh"}}>
  <div style={{ gridTemplateColumns:"repeat(3,1fr)"}}>
      {
                /*  This maps each array item to a div adds
                the style declared above and return it */
    
                <p className="read-the-docs">
                <h4>The main carry over component from the Veyron is the 7,993 cc (8.0 L; 487.8 cu in) quad-turbocharged W16 engine, though it is heavily updated. The engine in the Chiron has a peak power output of 1,103 kW (1,479 hp; 1,500 PS) at 6,700 rpm and 1,600 N⋅m (1,180 lb⋅ft) of torque starting from 2,000 to 6,000 rpm. The engine in the most powerful variant of its predecessor, the Veyron Super Sport generates 221 kW (296 hp; 300 PS) less than the new Chiron, while the engine in the original Veyron generates 367 kW (492 hp; 499 PS) less power.
        
        Like its predecessor, the Veyron, the Chiron utilises a carbon fibre body structure, independent suspension and a Haldex All-wheel drive system. The carbon fibre body has a stiffness of 50,000 Nm per degree.</h4>
              </p>
            }
            </div>
  </div>
 
</div>






<div style={{display:"flex"}}>
  <div style={{width:"30%", height:"100vh"}}>
         <a href="">
          <img  width={"200px"} height={"100px"}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bugatti_Chiron_1.jpg/1200px-Bugatti_Chiron_1.jpg"  />
        </a>
  </div>

  <div style={{width:"70%", height:"100vh"}}>
  <div style={{ gridTemplateColumns:"repeat(3,1fr)"}}>
      {
                /*  This maps each array item to a div adds
                the style declared above and return it */
    
                <p className="read-the-docs">
                <h4>The main carry over component from the Veyron is the 7,993 cc (8.0 L; 487.8 cu in) quad-turbocharged W16 engine, though it is heavily updated. The engine in the Chiron has a peak power output of 1,103 kW (1,479 hp; 1,500 PS) at 6,700 rpm and 1,600 N⋅m (1,180 lb⋅ft) of torque starting from 2,000 to 6,000 rpm. The engine in the most powerful variant of its predecessor, the Veyron Super Sport generates 221 kW (296 hp; 300 PS) less than the new Chiron, while the engine in the original Veyron generates 367 kW (492 hp; 499 PS) less power.
        
        Like its predecessor, the Veyron, the Chiron utilises a carbon fibre body structure, independent suspension and a Haldex All-wheel drive system. The carbon fibre body has a stiffness of 50,000 Nm per degree.</h4>
              </p>
            }
            </div>
  </div>
 
</div>








    </>












  )
}

export default App








import './App.css';
import AutomaticEffect from './components/AutomaticEffect/AutomaticEffect';
import BackgroundEffect from './components/BackgroundEffect/BackgroundEffect';
import GlassHover from './components/GlassHover/GlassHover';
import HoverOverMe from './components/HoverOverMe/HoverOverMe';

function App() {
  return (
    <div className="App">

      
        <div className="section4">
          <BackgroundEffect
            firstColor={"#1248c7"}
            secondColor={"#f700ff"}
            text={"The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself."}
            fullname={"Mark Caine"}
          />
          <BackgroundEffect 
            firstColor={"#af3fd4"}
            text={"Your smile will give you a positive countenance that will make people feel comfortable around you."}
            fullname={"Les Brown"}
          />
          <BackgroundEffect
            firstColor={"#cca516"}
            secondColor={"#ff002b"}
            text={"Before anything else, preparation is the key to success."}
            fullname={"Alexander Graham Bell"}
          />
        </div>

        <HoverOverMe />

        <div className="section2">
          <GlassHover 
            image={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/abd61e27-c1df-4342-b761-cd6a13cfa936/d6uht92-7143badf-f759-4339-94c3-77fb668534be.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiZDYxZTI3LWMxZGYtNDM0Mi1iNzYxLWNkNmExM2NmYTkzNlwvZDZ1aHQ5Mi03MTQzYmFkZi1mNzU5LTQzMzktOTRjMy03N2ZiNjY4NTM0YmUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gkePREm_wtEYa69a1vRYUSUG1sp--JbZkVoqj51jiwc"}
            title={"Title"}
            description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae et quia non quos dignissimos quaerat eveniet maxime eaque magnam! Aut delectus cumque asperiores reprehenderit vel itaque repellendus temporibus. Veritatis, sit."}
          />

          <GlassHover 
            image={"https://i.pinimg.com/736x/69/19/59/691959b187b2b253eb2a8aaff72200b5.jpg"}
            title={"Water"}
            description={"dolor sit amet consectetur adipisicing elit. Vitae et quia non quos dignissimos quaerat eveniet maxime eaque magnam! Aut delectus cumque asperiores reprehenderit vel itaque repellendus temporibus. Veritatis, sit."}
          />
        </div>

        <div className="section3">
          <AutomaticEffect
            buttonName="Button"
            animationColor={"#22e522"}
          />

          <AutomaticEffect
            buttonName="Contact"
            animationColor={"#b01949"}
          />
        </div>

    </div>
  );
}

export default App;

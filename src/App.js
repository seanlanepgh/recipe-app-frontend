import './App.css';
import MealPage from './Components/Pages/Meal/MealPage';
import './Components/style.css';
import { Route, Routes } from 'react-router-dom';
import MealInfoPage from './Components/Pages/Meal/MealInfoPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MealPage/>} />
      <Route path="/:mealId" element={<MealInfoPage/>} />
      </Routes>
    </div>
  );
}

export default App;

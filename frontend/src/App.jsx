import { useEffect, useState } from "react";

function App() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/workouts")
      .then((res) => res.json())
      .then((data) => setWorkouts(data));
  }, []);

  return (
    <div>
      <h1>Goal Tracker</h1>
      <h2>Gym Tracker</h2>

      {workouts.map((workout) => (
        <div key={workout.id}>
          <h3>{workout.name}</h3>
          <p>{workout.date}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('injuryForm');
  
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const age = document.getElementById('age').value;
        const weight = document.getElementById('weight').value;
        const injuryType = document.getElementById('injuryType').value;
        const severity = document.getElementById('severity').value;
  
        const workoutPlan = generateWorkout(age, severity, injuryType);
        localStorage.setItem('workoutPlan', JSON.stringify(workoutPlan));
  
        // Redirect to workout-plan.html after submission
        window.location.href = 'workout-plan.html';
      });
    }
  });
  
  function generateWorkout(age, severity, injuryType) {
    let plan = [];
  
    if (injuryType === 'elbow') {
      if (severity === 'mild') {
        plan.push("Forearm and elbow stretches (3x daily)");
        plan.push("Wrist curls, lightweight (3 sets, 15 reps)");
        plan.push("Ice elbow for 15 mins after exercise");
      } else if (severity === 'moderate') {
        plan.push("Rest from throwing 7–10 days");
        plan.push("Introduce wrist and forearm strengthening exercises");
        plan.push("Ice elbow 2–3 times daily");
      } else {
        plan.push("Seek medical advice immediately");
      }
    } else if (injuryType === 'shoulder') {
      if (severity === 'mild') {
        plan.push("Cross-body and chest stretches daily");
        plan.push("Resistance band rotations (3 sets, 12 reps)");
        plan.push("Ice shoulder post-activity");
      } else if (severity === 'moderate') {
        plan.push("No throwing for at least 2 weeks");
        plan.push("Daily shoulder blade exercises and stretches");
        plan.push("Regular icing after rehab exercises");
      } else {
        plan.push("Seek professional medical care");
      }
    } else {
      plan.push("General rest and ice therapy recommended");
      plan.push("Consult healthcare provider for personalized advice");
    }
  
    return plan;
  }
  
  function displayWorkoutPlan() {
    const plan = JSON.parse(localStorage.getItem('workoutPlan'));
    const container = document.getElementById('planContainer');
  
    if (plan && container) {
      container.innerHTML = ""; // clear previous results
      plan.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        container.appendChild(li);
      });
    } else {
      container.innerHTML = "<p>No workout plan found. Please fill out the injury form first.</p>";
    }
  }
  
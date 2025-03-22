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
        window.location.href = 'workout-plan.html';
      });
    }
  });
  
  function generateWorkout(age, severity, injuryType) {
    let plan = [];
  
    if (injuryType === 'elbow') {
      if (severity === 'mild') {
        plan.push("Gentle elbow stretches daily");
        plan.push("Ice elbow after activity");
      } else if (severity === 'moderate') {
        plan.push("Rest from throwing for 2 weeks");
        plan.push("Start strengthening exercises gradually");
      } else {
        plan.push("Consult healthcare professional");
      }
    } else if (injuryType === 'shoulder') {
     
  
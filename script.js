const exercises = {
    warmup: [
        {name: "Jumping Jacks", reps: 30},
        {name: "Air Squats", reps: 20},
        {name: "High Knees", reps: 30},
        {name: "Arm Circles", reps: 10},
        {name: "Inchworms", reps: 10},
        {name: "Jumping Lunges", reps: 20},
        {name: "Butt Kicks", reps: 30},
        {name: "High Kicks", reps: 20},
        {name: "Shoulder Rolls", reps: 10},
        {name: "Jumping Rope", reps: 30},
    ],
    WOD: [
        {name: "Cindy", workout: "AMRAP in 20 mins", reps: "5 pull-ups, 10 push-ups and 15 air squats"},
        {name: "Fran", workout: "21-15-9", reps: "thrusters(95/65 lb), pull-ups"},
        {name: "Helen", workout: "3 rounds", reps: "400m run, 21 kettlebell swings (53/35 lb) and 12 pull-ups"},
        {name: "Karen", workout: "for time", reps: "150 wall ball shots for time"},
    ],
    cooldown: [
        {name: "Light Jog", reps: "5 mins"},
        {name: "Dynamic Stretches", reps: "10 each"},
        {name: "Static Stretches", reps: "30 sec each"},
        {name: "Foam Roller", reps: "1-2 mins each"},
    ],
}


function generateWorkout() {
    // Generate random indices for each exercise category
    const randomWarmUpIndex = Math.floor(Math.random() * exercises.warmup.length);
    const randomWODIndex = Math.floor(Math.random() * exercises.WOD.length);
    const randomCoolDownIndex = Math.floor(Math.random() * exercises.cooldown.length);
  
    // Access randomly selected exercises using the indices
    const randomWarmUpExercise = exercises.warmup[randomWarmUpIndex];
    const randomWODExercise = exercises.WOD[randomWODIndex];
    const randomCoolDownExercise = exercises.cooldown[randomCoolDownIndex];
  
    // Creating HTML strings with exercise names
    let workoutHTML = "";
  
    workoutHTML += "<h2>Warm-up:</h2>";
    workoutHTML += `<ul><li>${randomWarmUpExercise.name} = ${randomWarmUpExercise.reps}</li></ul>`;
  
    workoutHTML += "<h2>Crossfit WOD:</h2>";
    workoutHTML += `<h3>${randomWODExercise.name}</h3>`;
    workoutHTML += `<ul><li>${randomWODExercise.workout} = ${randomWODExercise.reps}</li></ul>`;
  
    workoutHTML += "<h2>Cool-down:</h2>";
    workoutHTML += `<ul><li>${randomCoolDownExercise.name} = ${randomCoolDownExercise.reps}</li></ul>`;
  
    document.getElementById("display-workout").innerHTML = workoutHTML;
  }
  
  const randomButton = document.getElementById("randomize-button");
  randomButton.addEventListener("click", generateWorkout);
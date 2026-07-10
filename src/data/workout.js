import module from 'module'

// --- 1. Data Store (Home Gym Edition) ---

// Workout Plan Data
const workoutPlan = [
    {
        day: 1,
        title: "Lower Body Machine Strength",
        focus: "Building foundational leg power using the Smith Machine for maximum stability and joint safety.",
        exercises: [
            { 
                name: "Smith Machine 'Hack' Squat", sets: 4, reps: "8-10", notes: "Place feet slightly IN FRONT of the bar to mimic a leg press and protect your lower back.",
                steps: ["Set the Smith bar to shoulder height. Duck under and rest it across your upper back.", "Walk your feet about 12 to 18 inches forward in front of your hips.", "Keep your back perfectly straight up and down, leaning slightly back against the bar.", "Squat down until your thighs are parallel to the floor, then push through your heels to stand."]
            },
            { 
                name: "Smith Machine Reverse Lunges", sets: 3, reps: "8/leg", notes: "Much safer on the knees than forward lunges. The Smith machine provides balance.",
                steps: ["With the bar on your back, stand with feet shoulder-width apart.", "Take a large step BACKWARD with your right foot.", "Lower your hips straight down until your back knee almost touches the floor.", "Push through your FRONT heel to stand back up to the starting position."]
            },
            { 
                name: "Cable Rope Pull-Throughs", sets: 3, reps: "12-15", notes: "Replaces the lying leg curl. Torches the hamstrings and glutes without stressing the spine.",
                steps: ["Attach the rope to the lowest pulley setting on the cable machine.", "Stand facing AWAY from the machine, straddling the cable, and grab the rope between your legs.", "Walk forward a few steps to create tension.", "Push your hips straight back towards the machine, keeping your legs mostly straight.", "Squeeze your glutes and push your hips forward to stand back up."]
            },
            { 
                name: "Standing Smith Machine Calf Raises", sets: 4, reps: "15-20", notes: "Place a weight plate under the balls of your feet if you have one, or just do them flat on the floor.",
                steps: ["Rest the Smith bar on your back and unrack it.", "Stand tall and press up onto the tips of your toes as high as possible.", "Hold the squeeze at the top for 1 full second.", "Lower your heels slowly to the floor."]
            }
        ],
        cardio: "15 mins Stationary Bike (Moderate Pace)"
    },
    {
        day: 2,
        title: "Upper Body Pull & Core",
        focus: "Using cables for back growth and the Ethier-approved core builders.",
        exercises: [
            { 
                name: "Kneeling Dual Cable Lat Pulldown", sets: 3, reps: "10-12", notes: "Stretch hands wide at the top in a 'Y' shape. Tuck elbows into back pockets.",
                steps: ["Set both pulleys to the highest position with single handles.", "Grab both handles and kneel on a mat in the center of the machine.", "Keep your chest up and pull your elbows down and IN towards your ribs.", "Slowly control the weight back up to a full stretch."]
            },
            { 
                name: "Seated Low Cable Row (Rope)", sets: 3, reps: "10-12", notes: "Use the bench. Thumbless grip. Pinch the shoulder blades.",
                steps: ["Set one pulley to the lowest setting and attach the rope.", "Pull your bench back and sit facing the pulley. Plant your feet wide on the floor.", "Grab the rope with a neutral grip (palms facing each other).", "Pull your elbows straight back, squeezing your shoulder blades together at the end."]
            },
            { 
                name: "Weighted Cable Crunches", sets: 3, reps: "12-15", notes: "Tucks the ribs to the pelvis. Heavy upper ab focus.",
                steps: ["Attach the rope to a high pulley. Kneel facing the machine.", "Grab the rope and pull it down so your hands rest behind your neck.", "Lock your hips in place. Curl your torso down, bringing your elbows towards your knees.", "Slowly return to the upright kneeling position."]
            },
            { 
                name: "Kneeling Plank", sets: 3, reps: "30-45 sec", notes: "Toes elevated off the floor. Squeeze glutes and abs to protect the spine.",
                steps: ["Rest on your forearms and your KNEES (not toes) on a soft mat.", "Keep a straight line from your shoulders to your knees.", "Squeeze your glutes as hard as possible and pull your belly button up.", "Hold and breathe deeply."]
            }
        ],
        cardio: "25 mins Incline Treadmill Walk (3-5% incline, brisk pace)"
    },
    {
        day: 3,
        title: "Low-Impact Jump Prep & Push",
        focus: "Training force absorption and safe pressing movements.",
        exercises: [
            { 
                name: "Bodyweight Box Squats (To Bench)", sets: 3, reps: "12", notes: "Teaches explosive upward power. Sit completely on the bench for a split second.",
                steps: ["Stand in front of your flat bench.", "Push hips back and squat down until your glutes are fully resting on the bench.", "Pause to kill momentum.", "Drive hard through your heels and stand up as fast as possible."]
            },
            { 
                name: "Eccentric Step-Downs", sets: 3, reps: "8/leg", notes: "Stand on the edge of a weight plate or a low step. Crucial for landing safely in volleyball.",
                steps: ["Stand with one foot on a low elevation, other foot hanging off.", "Slowly bend the planted knee, taking 3-4 full seconds to lower your body.", "Once your floating foot taps the floor, stand back up using both legs.", "Focus entirely on the slow, controlled descent."]
            },
            { 
                name: "Smith Machine Bench Press", sets: 3, reps: "10-12", notes: "Flat bench. The fixed track prevents the bar from tipping and protects shoulders.",
                steps: ["Place the bench flat under the Smith machine.", "Lie down so the bar aligns with your mid-chest. Unrack the bar.", "Tuck your elbows slightly IN (about 45 degrees, not flared out).", "Lower the bar to your chest, then press it smoothly back up."]
            },
            { 
                name: "Seated Smith Machine Shoulder Press", sets: 3, reps: "10-12", notes: "Angle the bench up. Keep elbows tucked forward to protect rotator cuffs.",
                steps: ["Adjust the bench to a high incline (about 80 degrees, not completely vertical).", "Sit and unrack the bar (it should clear your face).", "Push your elbows slightly forward (in front of your chest).", "Press the bar up overhead, then lower it to chin level."]
            }
        ],
        cardio: "10 mins Pogo Hops (Very low jumps, just bouncing on balls of feet)."
    },
    {
        day: 4,
        title: "Active Recovery & Mobility",
        focus: "Flushing lactic acid and stretching the jump muscles.",
        exercises: [
            { 
                name: "Hip Flexor Stretch", sets: 2, reps: "60 sec/leg", notes: "Tight hips limit jump height.",
                steps: ["Kneel on one knee, other foot flat in front.", "Push hips forward gently until you feel a stretch in the front of the kneeling leg.", "Hold for 60 seconds."]
            },
            { 
                name: "Ankle Mobility Drill", sets: 2, reps: "15/leg", notes: "Knee-to-wall stretches.",
                steps: ["Stand facing a wall, foot 3 inches away.", "Drive your knee forward to touch the wall while keeping your heel flat on the floor.", "Repeat dynamically."]
            },
            { 
                name: "Cat-Cow Stretch", sets: 2, reps: "15", notes: "Spinal mobility.",
                steps: ["Start on hands and knees.", "Inhale, drop belly, look up. Exhale, arch back up, tuck chin."]
            }
        ],
        cardio: "30 mins Leisurely Walk or 10,000 Daily Steps Goal."
    },
    {
        day: 5,
        title: "Lower Body Hypertrophy",
        focus: "Metabolic conditioning and glute focus.",
        exercises: [
            { 
                name: "Smith Machine Sumo Squats", sets: 3, reps: "12-15", notes: "Wide stance targets the glutes and inner thighs.",
                steps: ["Set up like the hack squat, but place your feet much wider than shoulder-width.", "Point your toes slightly outward.", "Squat down, pushing your knees OUT in the same direction as your toes.", "Squeeze the glutes to stand back up."]
            },
            { 
                name: "Cable Rope Pull-Throughs", sets: 3, reps: "15", notes: "Higher rep range today for hamstring endurance.",
                steps: ["Same setup as Day 1.", "Focus on a deep stretch in the hamstrings at the bottom of the movement.", "Perform the reps continuously with a smooth tempo."]
            },
            { 
                name: "Bodyweight Glute Bridges", sets: 3, reps: "15", notes: "Glutes are the main engine for your vertical jump.",
                steps: ["Lie on your back on a mat, knees bent, feet flat.", "Push through your heels and drive your hips to the ceiling.", "Squeeze glutes hard at the top, lower slowly."]
            },
            { 
                name: "Standing Bodyweight Calf Raises", sets: 4, reps: "25", notes: "Burnout set. No weight, just fast reps.",
                steps: ["Stand on flat ground.", "Explode up onto your tiptoes.", "Drop heels back down and bounce right back up into the next rep."]
            }
        ],
        cardio: "15 mins Stationary Bike (Moderate Pace)"
    },
    {
        day: 6,
        title: "Full Body Machine Circuit",
        focus: "Maximum calorie burn. Move quickly between these 4 exercises.",
        exercises: [
            { 
                name: "Circuit: Squats -> Chest Press -> Row -> Reverse Crunch", sets: 4, reps: "12 each", notes: "Do 12 reps of each back-to-back. Rest 90 sec at the end of the circuit.",
                steps: ["12 Bodyweight Box Squats.", "12 Incline Cable Chest Presses (Bench inclined 30 deg, cables pulling from low position).", "12 Seated Low Cable Rows.", "12 Bodyweight Reverse Crunches (Lie on back, roll hips up towards chest)."]
            },
            { 
                name: "High-to-Low Cable Woodchoppers", sets: 3, reps: "12/side", notes: "Rotational core strength for volleyball swinging.",
                steps: ["Set a cable pulley to the highest position with a single handle.", "Stand sideways to the machine, gripping the handle with both hands.", "Pull the cable down and across your body to your opposite knee, rotating your torso.", "Control the weight slowly back to the top."]
            }
        ],
        cardio: "20 mins Incline Treadmill Walk (Steady pace)"
    }
];


// Export for module usage
// if (typeof module !== 'undefined' && module.exports) {
//     module.exports = { workoutPlan };
// } else {
//     window.workoutPlan = workoutPlan;
// }


export default workoutPlan;
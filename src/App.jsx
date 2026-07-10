import React, { useState, useEffect } from 'react';

// --- 1. Static Data Source ---
const workoutPlan = [
    {
        day: 1,
        title: "Lower Body Machine Strength",
        focus: "Building foundational leg power using the Smith Machine for maximum stability.",
        exercises: [
            { 
                name: "Smith Machine 'Hack' Squat", 
                sets: 4, 
                reps: "8-10", 
                notes: "Place feet slightly IN FRONT of the bar to mimic a leg press.",
                videoId: "bR97aR02wek" 
            },
            { 
                name: "Smith Machine Reverse Lunges", 
                sets: 3, 
                reps: "8/leg", 
                notes: "Much safer on the knees than forward lunges.",
                videoId: "H4rbpNsgyvs"
            },
            { 
                name: "Cable Rope Pull-Throughs", 
                sets: 3, 
                reps: "12-15", 
                notes: "Torches the hamstrings and glutes without stressing the spine.",
                videoId: "v_L0e-SntSU" 
            },
            { 
                name: "Standing Smith Machine Calf Raises", 
                sets: 4, 
                reps: "15-20", 
                notes: "Place a weight plate under the balls of your feet.",
                videoId: "wlqTemUXPXY"
            }
        ],
        cardio: "15 mins Stationary Bike (Moderate Pace)"
    },
    {
        day: 2,
        title: "Upper Body Pull & Core",
        focus: "Using cables for back growth and safe core builders.",
        exercises: [
            { 
                name: "Kneeling Dual Cable Lat Pulldown", 
                sets: 3, 
                reps: "10-12", 
                notes: "Stretch hands wide at the top in a 'Y' shape.",
                videoId: "gtls5rBk4fQ"
            },
            { 
                name: "Seated Low Cable Row", 
                sets: 3, 
                reps: "10-12", 
                notes: "Neutral grip. Pull to belly button. Pinch shoulder blades.",
                videoId: "zsGO2op7qW0"
            },
            { 
                name: "Weighted Cable Crunches", 
                sets: 3, 
                reps: "12-15", 
                notes: "Curl torso down, bringing elbows towards knees.",
                videoId: "dkGwcfo9zto"
            },
            { 
                name: "Bodyweight Reverse Crunches", 
                sets: 3, 
                reps: "15", 
                notes: "Roll hips up towards chest.",
                videoId: "ZyE4r7wiI6w"
            }
        ],
        cardio: "25 mins Treadmill Walk (10k Daily Steps Goal)"
    },
    {
        day: 3,
        title: "Low-Impact Jump Prep & Push",
        focus: "Training force absorption and safe pressing movements.",
        exercises: [
            { 
                name: "Bodyweight Box Squats", 
                sets: 3, 
                reps: "12", 
                notes: "Squat down to sit on bench, explode up quickly.",
                videoId: "glg8jtvDLNE"
            },
            { 
                name: "Eccentric Step-Downs", 
                sets: 3, 
                reps: "8/leg", 
                notes: "Slowly lower one foot to the ground taking 3-4 seconds.",
                videoId: "cFIzLNnudTY"
            },
            { 
                name: "Smith Machine Bench Press", 
                sets: 3, 
                reps: "10-12", 
                notes: "Flat bench. Tuck elbows slightly IN (45 degrees).",
                videoId: "VXaBbUYMfIs"
            },
            { 
                name: "Seated Smith Machine Shoulder Press", 
                sets: 3, 
                reps: "10-12", 
                notes: "Angle bench up. Keep elbows tucked forward.",
                videoId: "E7ngsffMPR0"
            }
        ],
        cardio: "10 mins Pogo Hops (Low bounces on balls of feet)"
    },
    {
        day: 4,
        title: "Active Recovery & Mobility",
        focus: "Flushing lactic acid and stretching the jump muscles.",
        exercises: [
            { 
                name: "Hip Flexor Stretch", 
                sets: 2, 
                reps: "60 sec/leg", 
                notes: "Kneel on one knee, push hips forward gently.",
                videoId: "2PNT-FFKLgY"
            },
            { 
                name: "Ankle Mobility Drill", 
                sets: 2, 
                reps: "15/leg", 
                notes: "Knee-to-wall stretches to ensure flex for jumps.",
                videoId: "m6J-9oQ9lHQ"
            },
            { 
                name: "Cat-Cow Stretch", 
                sets: 2, 
                reps: "15", 
                notes: "Spinal mobility on hands and knees.",
                videoId: "oMDrs7dPtxI"
            }
        ],
        cardio: "30 mins Leisurely Walk (10k Daily Steps Goal)"
    },
    {
        day: 5,
        title: "Lower Body Hypertrophy",
        focus: "Metabolic conditioning and glute focus.",
        exercises: [
            { 
                name: "Smith Machine Sumo Squats", 
                sets: 3, 
                reps: "12-15", 
                notes: "Wide stance targets the glutes and inner thighs.",
                videoId: "DhbDGoAng1Y"
            },
            { 
                name: "Cable Rope Pull-Throughs", 
                sets: 3, 
                reps: "15", 
                notes: "Higher rep range today for hamstring endurance.",
                videoId: "v_L0e-SntSU"
            },
            { 
                name: "Bodyweight Glute Bridges", 
                sets: 3, 
                reps: "15", 
                notes: "Push through heels, squeeze glutes hard at top.",
                videoId: "X_IGw8U_e38"
            },
            { 
                name: "Standing Bodyweight Calf Raises", 
                sets: 4, 
                reps: "25", 
                notes: "Burnout set. Fast reps on edge of a step.",
                videoId: "PJGXyldAWk4"
            }
        ],
        cardio: "15 mins Stationary Bike (Intervals: 30s fast, 30s slow)"
    },
    {
        day: 6,
        title: "Full Body Circuit",
        focus: "Maximum calorie burn. Move quickly.",
        exercises: [
            { 
                name: "Bodyweight Box Squats", 
                sets: 3, 
                reps: "12", 
                notes: "Part 1 of circuit.",
                videoId: "glg8jtvDLNE"
            },
            { 
                name: "Smith Machine Incline Press", 
                sets: 3, 
                reps: "12", 
                notes: "Part 2 of circuit. Bench inclined 30 degrees.",
                videoId: "VXaBbUYMfIs"
            },
            { 
                name: "Seated Low Cable Row", 
                sets: 3, 
                reps: "12", 
                notes: "Part 3 of circuit.",
                videoId: "zsGO2op7qW0"
            },
            { 
                name: "Bodyweight Reverse Crunches", 
                sets: 3, 
                reps: "15", 
                notes: "Part 4. Lie on back, roll hips up towards chest.",
                videoId: "ZyE4r7wiI6w"
            }
        ],
        cardio: "20 mins Treadmill Walk (Steady pace)"
    }
];

// --- 2. Database Abstraction Layer (Supabase Stubs) ---
const db = {
    getUserProgress: async () => {
        const data = localStorage.getItem('user_progress');
        if (data) return JSON.parse(data);
        return { current_day_index: 0, last_completed_date: null };
    },

    getPreviousLogs: async (exerciseName) => {
        const data = localStorage.getItem('workout_logs');
        if (!data) return null;
        
        const logs = JSON.parse(data);
        const exerciseLogs = logs.filter(log => log.exercise_name === exerciseName);
        if (exerciseLogs.length === 0) return null;
        
        exerciseLogs.sort((a, b) => new Date(b.date) - new Date(a.date));
        return exerciseLogs[0].sets; 
    },

    saveWorkoutComplete: async (dayIndex, sessionLogs) => {
        const existingLogsStr = localStorage.getItem('workout_logs');
        const existingLogs = existingLogsStr ? JSON.parse(existingLogsStr) : [];
        
        const newLogEntries = Object.keys(sessionLogs).map(exName => ({
            id: crypto.randomUUID(),
            date: new Date().toISOString(),
            day_index: dayIndex,
            exercise_name: exName,
            sets: sessionLogs[exName]
        }));

        localStorage.setItem('workout_logs', JSON.stringify([...existingLogs, ...newLogEntries]));

        const nextDayIndex = dayIndex === 5 ? 0 : dayIndex + 1;
        const todayStr = new Date().toDateString();
        
        localStorage.setItem('user_progress', JSON.stringify({
            current_day_index: nextDayIndex,
            last_completed_date: todayStr
        }));
    }
};

// --- 3. React Components ---

const ExerciseCard = ({ exercise, sessionLog, updateLog, previousLog }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showVideo, setShowVideo] = useState(false);

    const setInputs = Array.from({ length: exercise.sets }, (_, i) => i);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden mb-4">
            <div 
                className="p-4 flex justify-between items-center cursor-pointer bg-stone-50"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex-1 pr-4">
                    <h3 className="font-bold text-lg text-stone-900">{exercise.name}</h3>
                    <div className="text-teal-700 font-medium text-sm mt-1">
                        {exercise.sets} Sets × {exercise.reps}
                    </div>
                </div>
                <div className="text-xl text-stone-400">
                    {isExpanded ? '🔼' : '🔽'}
                </div>
            </div>

            {isExpanded && (
                <div className="p-4 border-t border-stone-100">
                    <p className="text-stone-600 text-sm mb-4 italic">"{exercise.notes}"</p>
                    
                    <button 
                        onClick={() => setShowVideo(!showVideo)}
                        className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 py-3 rounded-lg font-bold text-sm mb-4 border border-red-100"
                    >
                        <span>▶️</span> {showVideo ? 'Hide Form Tutorial' : 'Watch Form Tutorial'}
                    </button>

                    {showVideo && (
                        <div className="mb-4">
                            {exercise.videoId ? (
                                <div className="aspect-video w-full rounded-lg overflow-hidden bg-black shadow-inner">
                                    <iframe 
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${exercise.videoId}?autoplay=1&mute=1`}
                                        title={`${exercise.name} Form Tutorial`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ) : (
                                <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 text-center">
                                    <p className="text-stone-600 text-sm mb-3">No specific video saved for this exercise yet.</p>
                                    <a 
                                        href={`https://www.youtube.com/results?search_query=How+to+${encodeURIComponent(exercise.name)}+form+short`}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-block bg-teal-600 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-teal-700 transition-colors"
                                    >
                                        Search YouTube Shorts
                                    </a>
                                </div>
                            )}
                        </div>
                    )}

                    <div className="space-y-3 mt-4">
                        <div className="flex text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 px-2">
                            <div className="w-12">Set</div>
                            <div className="flex-1 text-center">Weight (kg)</div>
                            <div className="flex-1 text-center">Reps</div>
                        </div>
                        
                        {setInputs.map((setIndex) => {
                            const prev = previousLog ? previousLog[setIndex] : null;
                            const current = sessionLog[setIndex] || { weight: '', reps: '' };
                            
                            return (
                                <div key={setIndex} className="flex items-center gap-3">
                                    <div className="w-12 text-center font-bold text-stone-500 bg-stone-100 py-2 rounded-lg">
                                        {setIndex + 1}
                                    </div>
                                    <input 
                                        type="number" 
                                        placeholder={prev?.weight || '0'}
                                        value={current.weight}
                                        onChange={(e) => updateLog(exercise.name, setIndex, 'weight', e.target.value)}
                                        className="flex-1 bg-stone-50 border border-stone-200 rounded-lg py-2 px-3 text-center text-lg focus:outline-none focus:border-teal-500"
                                    />
                                    <input 
                                        type="number" 
                                        placeholder={prev?.reps || '0'}
                                        value={current.reps}
                                        onChange={(e) => updateLog(exercise.name, setIndex, 'reps', e.target.value)}
                                        className="flex-1 bg-stone-50 border border-stone-200 rounded-lg py-2 px-3 text-center text-lg focus:outline-none focus:border-teal-500"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default function App() {
    const [loading, setLoading] = useState(true);
    const [isWorkoutComplete, setIsWorkoutComplete] = useState(false);
    const [currentDayIndex, setCurrentDayIndex] = useState(0);
    const [previousLogs, setPreviousLogs] = useState({});
    const [currentSessionLogs, setCurrentSessionLogs] = useState({});

    useEffect(() => {
        loadRoutineData();
    }, []);

    const loadRoutineData = async () => {
        const progress = await db.getUserProgress();
        const todayStr = new Date().toDateString();

        if (progress.last_completed_date === todayStr) {
            setIsWorkoutComplete(true);
        } else {
            setCurrentDayIndex(progress.current_day_index);
            
            const todayWorkout = workoutPlan[progress.current_day_index];
            const logsData = {};
            const emptySessionData = {};

            for (const exercise of todayWorkout.exercises) {
                const prev = await db.getPreviousLogs(exercise.name);
                if (prev) logsData[exercise.name] = prev;
                
                emptySessionData[exercise.name] = Array(exercise.sets).fill({ weight: '', reps: '' });
            }
            
            setPreviousLogs(logsData);
            setCurrentSessionLogs(emptySessionData);
        }
        setLoading(false);
    };

    const handleUpdateLog = (exerciseName, setIndex, field, value) => {
        setCurrentSessionLogs(prev => {
            const updatedExerciseSets = [...prev[exerciseName]];
            updatedExerciseSets[setIndex] = {
                ...updatedExerciseSets[setIndex],
                [field]: value
            };
            return {
                ...prev,
                [exerciseName]: updatedExerciseSets
            };
        });
    };

    const handleFinishWorkout = async () => {
        if(window.confirm("Are you sure you want to finish today's workout?")) {
            await db.saveWorkoutComplete(currentDayIndex, currentSessionLogs);
            setIsWorkoutComplete(true);
            window.scrollTo(0, 0);
        }
    };

    if (loading) return <div className="min-h-screen bg-stone-100 flex items-center justify-center font-bold text-stone-500">Loading your protocol...</div>;

    if (isWorkoutComplete) return (
        <div className="min-h-screen bg-teal-50 flex flex-col items-center justify-center p-6 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-3xl font-black text-teal-900 mb-2">Workout Complete!</h1>
            <p className="text-teal-700 mb-8">You've crushed today's routine. Rest up and focus on hitting your 10k steps and maintaining your deficit.</p>
            <div className="text-sm text-teal-600 font-bold tracking-widest uppercase">See you tomorrow</div>
        </div>
    );

    const todayWorkout = workoutPlan[currentDayIndex];

    return (
        <div className="min-h-screen bg-stone-100 text-stone-800 font-sans pb-24">
            <div className="bg-teal-900 text-white p-6 pt-12 shadow-md">
                <div className="text-teal-300 font-bold text-sm tracking-widest uppercase mb-1">
                    Day {todayWorkout.day} of 6
                </div>
                <h1 className="text-3xl font-black leading-tight mb-3">
                    {todayWorkout.title}
                </h1>
                <p className="text-teal-100 text-sm leading-relaxed">
                    {todayWorkout.focus}
                </p>
            </div>

            <div className="p-4 max-w-md mx-auto">
                <div className="mb-6">
                    <h2 className="font-black text-xl text-stone-800 mb-3 flex items-center gap-2">
                        <span>🏋️‍♂️</span> Today's Protocol
                    </h2>
                    {todayWorkout.exercises.map((exercise, idx) => (
                        <ExerciseCard 
                            key={idx}
                            exercise={exercise}
                            sessionLog={currentSessionLogs[exercise.name] || []}
                            updateLog={handleUpdateLog}
                            previousLog={previousLogs[exercise.name]}
                        />
                    ))}
                </div>

                <div className="mb-8">
                    <h2 className="font-black text-xl text-stone-800 mb-3 flex items-center gap-2">
                        <span>🫀</span> Cardio Requirement
                    </h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-5">
                        <p className="font-bold text-lg text-teal-700">{todayWorkout.cardio}</p>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-stone-200 p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
                <div className="max-w-md mx-auto">
                    <button 
                        onClick={handleFinishWorkout}
                        className="w-full bg-teal-600 text-white font-black text-xl py-4 rounded-xl shadow-lg hover:bg-teal-700 active:scale-95 transition-all"
                    >
                        Finish Workout
                    </button>
                </div>
            </div>
        </div>
    );
}
import React, { useState, useEffect } from 'react';
import { workoutPlan } from './data/workoutPlan';
import { db } from './data/db';
import ExerciseCard from './components/ExerciseCard';

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
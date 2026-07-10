export const db = {
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

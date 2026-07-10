import React, { useState } from 'react';

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

export default ExerciseCard;

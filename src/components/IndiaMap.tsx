
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { states } from '../data';

const IndiaMap = () => {
  const navigate = useNavigate();
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const handleStateClick = (stateId: string) => {
    navigate(`/state/${stateId}`);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <svg 
        viewBox="0 0 550 600" 
        className="w-full h-auto"
        aria-label="Map of India showing 5 selectable states"
      >
        {/* Background map outline - simplified version */}
        <path 
          d="M442,492l-8-10l-10-7l-15-4l-15,1l-13,5l-10,7l-8,9l-5,10l-2,11l1,12l5,12l8,10l10,8l12,5l13,1l13-3l12-6l9-9l6-11l3-12L442,492z M398,157 l-20-16l-24-12l-26-8l-27-4l-28,1l-27,5l-25,10l-23,14l-19,18l-16,21l-11,24l-5,14l-3,7l-4,15l-2,16v16l1,15l3,15l5,14l7,13l8,12 l10,10l11,9l12,7l13,5l13,3l14,1l14-2l13-3l12-6l11-7l10-10l7-11l6-12l4-13l1-14l-1-14l-3-13l-5-13l-8-11l-9-10l-10-8l-11-6 l-13-5l-13-2l-13,1l-13,3l-12,6l-10,8l-9,10l-7,12l-5,13l-2,15l1,15l4,15l7,14l10,12l22,16l14,7l16,5l18,3l20,2l21-1l21-3l20-6 l19-8l18-10l16-13l14-14l12-17l9-19l7-20l4-22l1-22l-2-23l-5-22l-8-20l-11-19l-13-16l-16-14L398,157z"
          fill="#E8DCCA"
          stroke="#362F30"
          strokeWidth="1"
        />

        {/* The 5 interactive states */}
        {states.map(state => (
          <path
            key={state.id}
            id={state.id}
            d={state.path}
            fill={hoveredState === state.id ? "#CB5C45" : "#86A17B"}
            stroke="#362F30"
            strokeWidth="1"
            className={`cursor-pointer transition-all duration-300 ${
              hoveredState === state.id ? "filter drop-shadow-lg" : ""
            }`}
            onClick={() => handleStateClick(state.id)}
            onMouseEnter={() => setHoveredState(state.id)}
            onMouseLeave={() => setHoveredState(null)}
            aria-label={state.name}
          />
        ))}
      </svg>

      {/* State information overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 rounded-lg backdrop-blur-sm bg-white/30 border border-white/20 shadow-lg">
        <h2 className="text-lg font-display font-medium mb-2">
          {hoveredState 
            ? states.find(state => state.id === hoveredState)?.name || 'Select a State' 
            : 'Select a State'}
        </h2>
        <p className="text-sm opacity-90">
          {hoveredState
            ? states.find(state => state.id === hoveredState)?.description || 'Click on a state to explore traditional clothing.'
            : 'Hover over a state to learn more. Click to explore traditional clothing.'}
        </p>
      </div>

      {/* Legend */}
      <div className="absolute top-0 right-0 p-2 rounded-lg bg-white/70">
        <div className="flex items-center mb-1">
          <div className="w-3 h-3 bg-[#86A17B] mr-2"></div>
          <span className="text-xs">Available State</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#CB5C45] mr-2"></div>
          <span className="text-xs">Selected State</span>
        </div>
      </div>
    </div>
  );
};

export default IndiaMap;

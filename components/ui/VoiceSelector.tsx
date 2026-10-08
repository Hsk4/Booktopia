'use client';

import React from 'react';
import { voiceOptions, voiceCategories } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';
import { VoiceSelectorProps } from '@/types';

const VoiceSelector = ({ value, onChange, disabled }: VoiceSelectorProps) => {
    return (
        <div className="space-y-6 w-full">
            {Object.entries(voiceCategories).map(([gender, voices]) => (
                <div key={gender} className="space-y-3">
                    <h4 className="text-sm font-semibold text-[#8B7355] uppercase tracking-wider">
                        {gender.charAt(0).toUpperCase() + gender.slice(1)} Voices
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {voices.map((voiceKey) => {
                            const voice = voiceOptions[voiceKey];
                            const isSelected = value === voiceKey;

                            return (
                                <div
                                    key={voiceKey}
                                    onClick={() => !disabled && onChange(voiceKey)}
                                    className={cn(
                                        'voice-selector-option flex flex-col items-start text-left h-auto',
                                        isSelected ? 'voice-selector-option-selected border-[var(--accent-warm)]' : 'bg-white',
                                        disabled && 'voice-selector-option-disabled'
                                    )}
                                >
                                    <div className="flex justify-between w-full items-center mb-1">
                                        <span className="font-bold text-lg text-[var(--text-primary)]">
                                            {voice.name}
                                        </span>
                                        {isSelected && (
                                            <CheckCircle2 className="w-5 h-5 text-[#663820]" />
                                        )}
                                    </div>
                                    <p className="text-sm text-[var(--text-secondary)] leading-tight">
                                        {voice.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VoiceSelector;

import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingOverlay = () => {
    return (
        <div className="loading-wrapper">
            <div className="loading-shadow-wrapper bg-white shadow-soft-lg">
                <div className="loading-shadow">
                    <Loader2 className="loading-animation w-16 h-16 text-[#663820]" />
                    <h2 className="loading-title">Synthesizing Your Book...</h2>
                    <div className="loading-progress">
                        <div className="loading-progress-item">
                            <span className="loading-progress-status" />
                            <span>Analyzing PDF content</span>
                        </div>
                        <div className="loading-progress-item">
                            <span className="loading-progress-status" />
                            <span>Generating voice profile</span>
                        </div>
                        <div className="loading-progress-item text-[#8B7355]">
                            <span>This may take a minute</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingOverlay;

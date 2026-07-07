import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import './ag-components.css';

const AGMusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(0.4); // Default volume 40%
    const [statusText, setStatusText] = useState('OFFLINE');

    const audioRef = useRef(null);
    const visualizerIntervalRef = useRef(null);
    const [bars, setBars] = useState([10, 10, 10, 10, 10]);

    // Initialize Audio Element loading /music.mp3 from the public folder
    useEffect(() => {
        const audio = new Audio('/music.mp3');
        audio.loop = true;
        audio.volume = volume;
        audioRef.current = audio;

        // Sync state if audio ends or halts
        const handleAudioError = () => {
            setStatusText('NO FILE');
        };
        audio.addEventListener('error', handleAudioError);

        return () => {
            audio.pause();
            audio.removeEventListener('error', handleAudioError);
            if (visualizerIntervalRef.current) clearInterval(visualizerIntervalRef.current);
        };
    }, []);

    // Watch volume and mute changes
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = isMuted ? 0 : volume;
        }
    }, [volume, isMuted]);

    const startVisualizer = () => {
        if (visualizerIntervalRef.current) clearInterval(visualizerIntervalRef.current);
        visualizerIntervalRef.current = setInterval(() => {
            setBars(bars.map(() => Math.floor(Math.random() * 25) + 5));
        }, 120);
    };

    const stopVisualizer = () => {
        if (visualizerIntervalRef.current) {
            clearInterval(visualizerIntervalRef.current);
            visualizerIntervalRef.current = null;
        }
        setBars([10, 10, 10, 10, 10]);
    };

    const handlePlayToggle = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
            stopVisualizer();
            setStatusText('PAUSED');
        } else {
            audioRef.current.play()
                .then(() => {
                    setIsPlaying(true);
                    startVisualizer();
                    setStatusText('PLAYING');
                })
                .catch((err) => {
                    console.warn('Audio playback failed or file missing:', err);
                    setStatusText('FILE MISSING');
                });
        }
    };

    return (
        <div className="ag-music-player">
            <div className="ag-music-status">
                <span className="status-label">SYS_AUDIO:</span>
                <span className={`status-val ${isPlaying ? 'active' : ''}`}>{statusText}</span>
            </div>

            {/* Visualizer bars */}
            <div className="ag-music-visualizer">
                {bars.map((height, i) => (
                    <motion.div
                        key={i}
                        className="visualizer-bar"
                        animate={{ height: height }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        style={{
                            backgroundColor: 'var(--neon-pink)',
                            boxShadow: 'var(--glow-pink)'
                        }}
                    />
                ))}
            </div>

            {/* Controls */}
            <div className="ag-music-controls">
                <motion.button
                    className="music-ctrl-btn play-pause-btn"
                    onClick={handlePlayToggle}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        borderColor: isPlaying ? 'var(--neon-pink)' : 'var(--neon-cyan)',
                        color: isPlaying ? 'var(--neon-pink)' : 'var(--neon-cyan)',
                        boxShadow: isPlaying ? 'var(--glow-pink)' : 'var(--glow-cyan)'
                    }}
                >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </motion.button>

                <motion.button
                    className="music-ctrl-btn mute-btn"
                    onClick={() => setIsMuted(!isMuted)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        borderColor: 'var(--neon-purple)',
                        color: 'var(--neon-purple)',
                        boxShadow: 'var(--glow-purple)'
                    }}
                >
                    {isMuted || volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
                </motion.button>

                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={volume}
                    onChange={(e) => {
                        setVolume(parseFloat(e.target.value));
                        setIsMuted(false);
                    }}
                    className="volume-slider"
                    aria-label="Volume"
                />
            </div>
        </div>
    );
};

export default AGMusicPlayer;

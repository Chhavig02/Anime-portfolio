import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaTimes, FaMinus, FaExpandAlt } from 'react-icons/fa';
import './ag-components.css';

const ASCII_LOGO = `
   ____  ____  ____  _____ 
  / ___|/ __ \\|  _ \\| ____|
 | |    | |  | | |_) |  _|  
 | |___ | |__| |  _ <| |___ 
  \\____|\\____/|_| \\_\\_____|
  🤖 CODESORCERESS TERMINAL v1.0.0
`;

const AGTerminal = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', text: ASCII_LOGO },
        { type: 'system', text: 'Welcome to the Code Sorceress Holographic Terminal.' },
        { type: 'system', text: "Type 'help' to initialize diagnostic subroutines." },
    ]);
    const [isOpen, setIsOpen] = useState(true);
    const terminalEndRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (terminalEndRef.current) {
            terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history]);

    const handleTerminalClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleCommand = (e) => {
        if (e.key !== 'Enter') return;

        const cmd = input.trim().toLowerCase();
        const args = cmd.split(' ');
        const mainCommand = args[0];
        const newHistory = [...history, { type: 'input', text: `guest@codesorceress:~$ ${input}` }];

        if (mainCommand) {
            switch (mainCommand) {
                case 'help':
                    newHistory.push({
                        type: 'output',
                        text: `Available Commands:
  help      - Display this hologram index
  about     - Display unit info and alignment
  skills    - List spell categories and domains
  projects  - Query recent legendary builds
  neofetch  - Output system diagnostics
  clear     - Clean terminal logs
  sudo      - Execute root command (try 'sudo reveal-potential')`
                    });
                    break;
                case 'about':
                    newHistory.push({
                        type: 'output',
                        text: `Unit: Chhavi (Code Sorceress Unit 01)
Origin: Chandigarh University
Role: Full-Stack Engineer × AI Sorceress
Alignment: Chaotic Good / Tech Enthusiast
Motto: "Building blazing web apps & intelligent AI systems."`
                    });
                    break;
                case 'skills':
                    newHistory.push({
                        type: 'output',
                        text: `Domain Spells Loaded:
  [Frontend]   - React.js, Next.js, Svelte, Tailwind, Framer Motion, Javascript
  [Backend]    - Node.js, Express, MongoDB, MySQL, Redis, JWT, REST APIs
  [AI Sorcery] - Python, ML, Deep Learning, NLP, OCR, LLMs, ONNX Runtime
  [DevOps]     - Git, Docker, GitHub Actions, Vercel, Prometheus, Grafana`
                    });
                    break;
                case 'projects':
                    newHistory.push({
                        type: 'output',
                        text: `Battle-hardened projects queried:
  1. URL Shortener Microservice - Handles 12k req/sec with Redis & Docker.
  2. Job Offer Letter Analyzer  - AI analyzer using OCR & NLP to parse offers.
  3. Smart Student Attendance  - Real-time facial recognition attendance (96.8% accuracy).
  
Type the project name or check the Cards in the Battle Arena section above!`
                    });
                    break;
                case 'neofetch':
                    newHistory.push({
                        type: 'output',
                        text: ` ⚡ guest@codesorceress
 ---------------------
 OS: CodeSorceress Core v1.0.0
 Kernel: React 18 + Vite
 Uptime: 99.99% spelluptime
 Shell: bash (Gemini powered)
 CPU: Curiosity Engine 16-Core
 RAM: 16TB Infinite Ambition
 Theme: Cyberpunk Neon
 Terminal: WebGL Holographic`
                    });
                    break;
                case 'clear':
                    setHistory([]);
                    setInput('');
                    return;
                case 'sudo':
                    if (args[1] === 'reveal-potential' || args[1] === 'unlock-potential') {
                        newHistory.push({
                            type: 'error',
                            text: `🚨 OVERCLOCKING SYSTEM CORE... 🚨
Domain Expansion: INFINITE CODE WORKS!
Spells boosted by 500%.
Hidden capabilities unlocked. Accessing Code Sorcery Archives...
Status: LEGENDARY SORCERESS ACTIVE.`
                        });
                    } else {
                        newHistory.push({
                            type: 'error',
                            text: "Permission denied. Usage: 'sudo reveal-potential'."
                        });
                    }
                    break;
                default:
                    newHistory.push({
                        type: 'error',
                        text: `Command not found: '${mainCommand}'. Type 'help' for spellbook index.`
                    });
            }
        }

        setHistory(newHistory);
        setInput('');
    };

    if (!isOpen) {
        return (
            <div className="ag-terminal-closed-trigger">
                <button className="terminal-restore-btn" onClick={() => setIsOpen(true)}>
                    <FaTerminal /> Boot Terminal
                </button>
            </div>
        );
    }

    return (
        <div className="ag-terminal-container" onClick={handleTerminalClick}>
            {/* Header / Window Controls */}
            <div className="ag-terminal-header">
                <div className="header-left">
                    <FaTerminal className="terminal-header-icon" />
                    <span>hologram_bash.sh</span>
                </div>
                <div className="header-right">
                    <button className="win-btn win-btn-minimize" aria-label="Minimize" onClick={() => setIsOpen(false)}>
                        <FaMinus />
                    </button>
                    <button className="win-btn win-btn-expand" aria-label="Expand">
                        <FaExpandAlt />
                    </button>
                    <button className="win-btn win-btn-close" aria-label="Close" onClick={() => setIsOpen(false)}>
                        <FaTimes />
                    </button>
                </div>
            </div>

            {/* Display screen */}
            <div className="ag-terminal-body">
                <div className="ag-terminal-content">
                    {history.map((log, idx) => (
                        <div key={idx} className={`terminal-line line-${log.type}`}>
                            <pre>{log.text}</pre>
                        </div>
                    ))}
                    <div ref={terminalEndRef} />
                </div>

                {/* Command input prompt */}
                <div className="ag-terminal-prompt-line">
                    <span className="terminal-prompt-prefix">guest@codesorceress:~$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleCommand}
                        className="terminal-input"
                        placeholder="Type spell command..."
                        autoComplete="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        aria-label="Terminal Input"
                    />
                </div>
            </div>
        </div>
    );
};

export default AGTerminal;

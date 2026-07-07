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
        { type: 'system', text: "Type 'help' or select a preset command from the dropdown above." },
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

    const executeCommand = (cmdText) => {
        const cmd = cmdText.trim();
        if (!cmd) return;

        const lowercaseCmd = cmd.toLowerCase();
        const args = lowercaseCmd.split(' ');
        const mainCommand = args[0];
        
        const newHistory = [...history, { type: 'input', text: `guest@codesorceress:~$ ${cmd}` }];

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
  1. ScholarlyEdge              - Academic SaaS studio with Gemini Pro AI.
  2. VOCA                       - Speech & gesture soft-skills AI analyzer.
  3. GENAI Temperature Tester   - Prompt engineering configuration analyzer.
  4. URL Shortener Microservice - High-throughput scaled microservice.
  
Check the Cards in the Battle Arena section above for live demo links!`
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

        setHistory(newHistory);
        setInput('');
    };

    const handleCommand = (e) => {
        if (e.key !== 'Enter') return;
        executeCommand(input);
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
        <motion.div
            className="ag-terminal-container"
            onClick={handleTerminalClick}
            drag
            dragMomentum={false}
            dragListener={true}
            dragControls={undefined}
            // Limit drag to container or header: we can specify a class or element, or let the user drag anywhere on container
            // Let's constrain dragging so it doesn't float off the page completely, or simply enable free drag.
            style={{ x: 0, y: 0, cursor: 'grab' }}
            whileDrag={{ scale: 1.01, cursor: 'grabbing', zIndex: 999 }}
        >
            {/* Header / Window Controls */}
            <div className="ag-terminal-header" style={{ cursor: 'move' }}>
                <div className="header-left">
                    <FaTerminal className="terminal-header-icon" />
                    <span>hologram_bash.sh</span>
                    
                    {/* Glowing Command Selector Dropdown */}
                    <select
                        className="terminal-command-select"
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                            if (e.target.value) {
                                executeCommand(e.target.value);
                                e.target.value = ''; // Reset select index
                            }
                        }}
                        defaultValue=""
                        aria-label="Preset Commands"
                    >
                        <option value="" disabled>Quick Commands ▼</option>
                        <option value="help">help</option>
                        <option value="about">about</option>
                        <option value="skills">skills</option>
                        <option value="projects">projects</option>
                        <option value="neofetch">neofetch</option>
                        <option value="sudo reveal-potential">sudo reveal-potential</option>
                        <option value="clear">clear</option>
                    </select>
                </div>
                <div className="header-right" onClick={(e) => e.stopPropagation()}>
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
        </motion.div>
    );
};

export default AGTerminal;

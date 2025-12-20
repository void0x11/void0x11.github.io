// Personal Website Configuration
// Ahmed Mohamed Amin - PhD Applicant

const config = {
    // Personal Information
    personal: {
        name: "Ahmed Mohamed Amin",
        title: "PhD Applicant – Signal Processing, Embedded Systems, SDR & AI/ML/DL",
        tagline: "Multidisciplinary researcher bridging electronics, embedded systems, signal processing, and AI/ML/DL",
        bio: "Experienced in PCB and RF hardware design, bare-metal ARM development, and SDR-based radar and communication systems. Focused on sensor fusion, lightweight deep-learning deployment on Edge hardware, and adaptive hardware–software architectures for smart systems.",
        email: "ahmedamin@suumail.net",
        phone: "+1 (435) 233-4589",
        location: "Cedar City, UT",
        resumeUrl: "assets/Ahmed_CV.pdf"
    },

    // Social Media Links
    social: {
        github: "https://github.com/void0x11",
        linkedin: "https://www.linkedin.com/in/aminsignal/",
        twitter: "https://twitter.com/ahmedamin",
        youtube: "https://www.youtube.com/@EWolfECE",
        email: "mailto:ahmedamin@suumail.net"
    },

    // YouTube Configuration
    youtube: {
        channelId: "YOUR_CHANNEL_ID",
        playlistId: "",
        maxVideos: 6
    },

    // Skills & Technologies
    skills: {
        electronics: [
            "PCB Design (4-layer+)",
            "RF Hardware Design",
            "Signal Integrity",
            "EMI/EMC",
            "Power Management",
            "Analog/Mixed-Signal",
            "KiCad",
            "Altium Designer"
        ],
        embedded: [
            "ARM Cortex-M (Bare-Metal)",
            "STM32",
            "ESP32",
            "Assembly (ARMv7-M)",
            "C/C++",
            "RTOS",
            "Firmware Development",
            "I²C/UART/SPI",
            "ADC/PWM/Timers"
        ],
        rf: [
            "SDR (Software Defined Radio)",
            "FMCW Radar",
            "Doppler Radar",
            "GNU Radio",
            "RF Front-End Design",
            "Antenna Design",
            "Signal Processing",
            "TDoA/AoA Localization"
        ],
        software: [
            "Python",
            "MATLAB",
            "LabVIEW",
            "Git/GitHub",
            "Linux",
            "TensorFlow Lite",
            "OpenFOAM",
            "Cantera"
        ],
        tools: [
            "Oscilloscope",
            "Spectrum Analyzer",
            "VNA",
            "Logic Analyzer",
            "Keil µVision",
            "CPUlator",
            "Analog Discovery Studio",
            "Voltera Nova (PCB Printer)"
        ],
        aiml: [
            "CNN/ViT",
            "Edge AI Deployment",
            "Computer Vision",
            "ORB-SLAM2",
            "Feature Detection",
            "Sensor Fusion",
            "Lightweight ML Models"
        ]
    },

    // Education
    education: [
        {
            degree: "Bachelor of Science in Electrical Engineering",
            minor: "Minor in Mathematics",
            institution: "Southern Utah University",
            location: "Cedar City, UT",
            year: "2023 - 2025",
            gpa: "SUU GPA: 3.80, Cumulative GPA: 3.33",
            description: "Focus on signal processing, embedded systems, and RF engineering"
        },
        {
            degree: "Electrical Engineering - Electronics and Communications Diploma",
            institution: "Higher Technological Institute",
            location: "10th of Ramadan, Egypt",
            year: "2017 - 2022",
            gpa: "",
            description: "Uncompleted degree (transferred to SUU)"
        }
    ],

    // Work Experience
    experience: [
        {
            title: "Research Assistant - AI/ML Laboratory",
            company: "Southern Utah University",
            location: "Cedar City, UT",
            period: "May 2025 - Present",
            description: "Leading development of decentralized visual-localization framework for TurboPi swarm robots",
            achievements: [
                "Designed adaptive feature-selection and lightweight CNN/ViT pipelines for visual perception",
                "Integrated modified ORB-SLAM2 with embedded inference on Edge hardware",
                "Redesigned and fabricated SmartBot Core V1.1 (4-layer PCB) with enhanced power management and EMI performance",
                "Achieved real-time multi-robot mapping without centralized control"
            ]
        },
        {
            title: "Undergraduate Teaching Assistant",
            company: "Southern Utah University",
            location: "Cedar City, UT",
            period: "Aug 2024 - Dec 2025",
            description: "Teaching ARM assembly, embedded systems, and communication circuits",
            achievements: [
                "Developed 8 bare-metal laboratories with STM32 drivers in ARM assembly (RCC, GPIO, SysTick, EXTI/NVIC, TIM-PWM, UART, SPI, ADC)",
                "Delivered weekly lectures on ARMv7-M architecture and instruction cycles",
                "Modernized Communication Circuits labs with calibrated Bode-plot and FFT analysis",
                "Updated Applications of Microprocessors curriculum for reproducible experimentation"
            ]
        },
        {
            title: "Laboratory Assistant",
            company: "Southern Utah University",
            location: "Cedar City, UT",
            period: "Aug 2024 - May 2025",
            description: "Established comprehensive PCB prototyping lab",
            achievements: [
                "Developed end-to-end PCB fabrication workflow using Voltera Nova printer",
                "Enabled fabrication of rigid and flexible PCBs including RF and wearable antennas",
                "Calibrated and maintained lab equipment (oscilloscopes, multimeters, power supplies)"
            ]
        },
        {
            title: "Research Assistant – Industry Challenge Lab",
            company: "GAF",
            location: "Cedar City, UT",
            period: "Mar 2025 - May 2025",
            description: "Developed smart Waste-to-Energy system for Polyiso insulation waste",
            achievements: [
                "Modeled thermal energy conversion using Cantera and OpenFOAM",
                "Designed embedded control architecture using ESP32 for combustion monitoring",
                "Evaluated power efficiency (target 5-6 kWh/kg) and control-loop optimization"
            ]
        },
        {
            title: "Embedded Systems Intern",
            company: "Vivint",
            location: "Dallas, TX",
            period: "Apr 2024 - Aug 2024",
            description: "Embedded IoT systems design and debugging",
            achievements: [
                "Gained hands-on experience with custom PCBs and signal-integrity optimization",
                "Implemented low-level firmware drivers for analog/mixed-signal components",
                "Applied I²C, UART, and SPI protocols in production systems"
            ]
        }
    ],

    // Global Projects
    projects: [
        {
            id: "smartbot-core",
            title: "SmartBot Core V1.1",
            category: "Electronics & Embedded",
            description: "Custom 4-layer PCB design serving as the central nervous system for autonomous mobile robots. Integrates STM32 control, high-power motor drivers, and efficient power management.",
            image: "https://placehold.co/800x500/1e293b/00ff41?text=SmartBot+PCB+Design",
            tags: ["Altium", "PCB Design", "Power Electronics", "STM32"],
            links: {
                github: "#",
                demo: "#"
            },
            featured: true,
            details: {
                problem: "Commercial motor driver shields lacked the power density and integrated sensing required for the 'SmartBot' platform. Existing solutions were also prone to EMI issues affecting sensor data.",
                solution: "Designed a dedicated 4-layer stackup with separate analog/digital ground planes. Integrated dual H-bridge drivers with active current sensing and a 95% efficient buck-boost converter to extend battery life.",
                features: [
                    "4-Layer Stackup (Signal-GND-PWR-Signal)",
                    "Integrated Buck/Boost Converters (5V@3A, 3.3V@1A)",
                    "On-board Current & Voltage Sensing",
                    "Reverse Polarity & Over-current Protection",
                    "EMI-Optimized Layout for Motor Drivers"
                ],
                gallery: [
                    { url: "https://placehold.co/600x400/111827/61dafb?text=Schematic+View", caption: "Power Stage Schematic" },
                    { url: "https://placehold.co/600x400/111827/00ff41?text=3D+PCB+Layout", caption: "3D Rendering of Component Placement" },
                    { url: "https://placehold.co/600x400/111827/ffb000?text=Thermal+Analysis", caption: "Thermal Relief & Plane Design" }
                ],
                techStack: {
                    EDA: ["Altium Designer", "KiCad"],
                    Hardware: ["STM32F407", "DRV8871", "TPS5430"],
                    Fabrication: ["JLCPCB", "Voltera Nova"]
                },
                modules: [
                    { name: "Power Management Unit", desc: "Handles LiPo battery input (7-12V) and provides stable rails for MCU and Motors." },
                    { name: "Motor Driver Stage", desc: "Dual-channel H-bridge with protection diodes and fast-decay PWM control." },
                    { name: "Sensor Interface", desc: "Filtered ADC inputs for IR and Ultrasonic sensors." }
                ]
            }
        },
        {
            id: "turbo-pi-swarm",
            title: "TurboPi Swarm",
            category: "Robotics & AI",
            description: "Decentralized visual localization framework for swarm robots. Uses lightweight Deep Learning models on Raspberry Pi for formation control without a central server.",
            image: "https://placehold.co/800x500/1e293b/61dafb?text=TurboPi+Swarm",
            tags: ["Python", "ROS2", "OpenCV", "Swarm"],
            links: {
                github: "#",
                demo: "#"
            },
            featured: true,
            details: {
                problem: "Traditional swarm robotics rely on external motion capture systems (like Vicon) or heavy centralized servers, making deployment in the wild unrestricted and expensive.",
                solution: "Developed a distributed 'Visual Compass' system. Each robot runs a lightweight CNN to identify neighbors and estimate relative pose, enabling formation flying using only local on-board computation.",
                features: [
                    "Decentralized Leader-Follower Logic",
                    "Lightweight CNN for Robot Identification",
                    "Visual Odometry Fusion",
                    "ROS2 Communication Backbone",
                    "Real-time Path Planning"
                ],
                gallery: [
                    { url: "https://placehold.co/600x400/111827/00d9ff?text=Swarm+Formation", caption: "Multi-Robot Formation Test" },
                    { url: "https://placehold.co/600x400/111827/ff4444?text=Vision+Pipeline", caption: "CNN Detection Output" }
                ],
                techStack: {
                    Hardware: ["Raspberry Pi 4", "TurboPi Kit"],
                    Software: ["ROS2 Humble", "Python", "PyTorch"],
                    AI: ["MobileNetV2", "YOLOv5-Nano"]
                },
                modules: [
                    { name: "Perception Node", desc: "Captures camera frames and runs inference to detect neighbor IDs." },
                    { name: "Control Node", desc: "Calculates velocity commands to maintain desired relative distance." },
                    { name: "Communication Layer", desc: "ROS2 DDS for exchanging state data between units." }
                ]
            }
        },
        {
            id: "obsbot-security",
            title: "OBSBOT Security Monitor",
            category: "Robotics & AI",
            description: "Automated event-driven surveillance system utilizing a USB web camera and YOLOv8 CNN models for real-time human detection. Features intelligent recording logic.",
            image: "https://placehold.co/800x500/1e293b/00ff41?text=OBSBOT+Monitor+AI",
            tags: ["Python", "YOLOv8", "OpenCV", "Multithreading"],
            links: {
                github: "https://github.com/void0x11/OBSBOT-Tiny2-Intelligent-Security-Monitor",
                demo: "#"
            },
            featured: true,
            details: {
                problem: "Continuous video recording consumes massive storage and makes reviewing footage tedious. Standard motion detection triggers too many false positives.",
                solution: "Implemented a semantic detection pipeline using YOLOv8n (Nano) for real-time human classification. The system buffers video streams and only commits to disk when a person is detected.",
                features: [
                    "Real-time YOLOv8 Inference",
                    "Circular Buffer Video Recording",
                    "Automatic Snapshot Generation",
                    "Discord Webhook Integration",
                    "Robust Error Handling"
                ],
                techStack: {
                    Core: ["Python 3.10", "OpenCV"],
                    AI: ["YOLOv8", "Ultralytics"],
                    System: ["Multithreading"]
                },
                modules: [
                    { name: "Detection Engine", desc: "Runs the YOLOv8 model frame-by-frame." },
                    { name: "Recorder Manager", desc: "Handles video writing IO in a separate thread." }
                ]
            }
        },
        {
            id: "fmcw-radar",
            title: "FMCW Radar DSP",
            category: "RF & Signal Processing",
            description: "Complete FMCW radar signal-processing chain implemented in MATLAB. Walks through the practical DSP steps: chirp generation, RD-Map, and CFAR detection.",
            image: "https://placehold.co/800x500/1e293b/00d9ff?text=Radar+DSP+Pipeline",
            tags: ["MATLAB", "DSP", "Radar"],
            links: {
                github: "https://github.com/void0x11/FMCW-Radar-MATLAB-Pipeline",
                demo: "#"
            },
            featured: true,
            details: {
                problem: "Understanding radar signal processing often stops at theoretical equations. Lack of clean code examples for the full raw-data-to-target pipeline.",
                solution: "Built a modular MATLAB simulation that generates raw IQ data, mixes signals, and performs the classic processing chain to recover range and velocity.",
                features: [
                    "Chirp Waveform Generation",
                    "Range & Doppler FFT",
                    "2D Range-Doppler Map",
                    "CA-CFAR Detection",
                    "Physically Accurate Modeling"
                ],
                techStack: {
                    Language: ["MATLAB", "Phased Array Toolbox"],
                    Math: ["FFT", "Signal Processing"],
                    Concepts: ["FMCW", "CFAR"]
                },
                modules: [
                    { name: "Signal Generator", desc: "Synthesizes TX chirps and RX echoes." },
                    { name: "Range Processor", desc: "Extracts beat frequencies." },
                    { name: "Doppler Processor", desc: "Extracts velocity from phase shifts." }
                ]
            }
        },
        {
            id: "embedded-drivers",
            title: "Modular STM32 Drivers",
            category: "Electronics & Embedded",
            description: "A reusable HAL written in bare-metal C for STM32F1/F4 series. Bypasses vendor libraries to demonstrate register-level operations.",
            image: "https://placehold.co/800x500/1e293b/ffb000?text=Bare+Metal+Drivers",
            tags: ["C", "STM32", "Register Level"],
            links: {
                github: "https://github.com/void0x11/Embedded-Drivers",
                demo: "#"
            },
            featured: false,
            details: {
                problem: "Vendor HALs are bloated and obscure hardware mechanics.",
                solution: "Developed lightweight drivers accessing memory-mapped registers directly for deterministic behavior.",
                features: ["Zero-Overhead GPIO", "Interrupt-Driven UART", "Systick Implementation"],
                techStack: { Hardware: ["STM32F4"], Language: ["C", "Assembly"] },
                modules: [{ name: "GPIO", desc: "Atomic bit-setting." }, { name: "UART", desc: "Serial comms." }]
            }
        },
        {
            id: "voidpwn",
            title: "VoidPWN",
            category: "Other",
            description: "A high-performance, mobile-optimized Command-and-Control (C2) framework engineered for Hardware Security Assessments and Enterprise Network Auditing.",
            image: "assets/projects/pi-isometricv2.jpg",
            tags: ["Security", "C2 Framework", "Raspberry Pi", "Hardware Audit"],
            links: {
                github: "https://github.com/void0x11/VoidPWN",
                demo: "#"
            },
            externalLink: true,
            featured: true,
            details: {
                problem: "Network discovery and wireless security assessments often require multiple disconnected tools and bulky hardware setups, making tactical audits difficult.",
                solution: "VoidPWN streamlines complex assessments by consolidating advanced audit vectors into a unified Raspberry Pi platform with a mobile-optimized interface.",
                features: [
                    "Mobile-Optimized Dashboard",
                    "Hardware Security Audit Vectors",
                    "Enterprise Network Discovery",
                    "Wireless Security Assessment Tools",
                    "Raspberry Pi Based Hardware Platform"
                ],
                techStack: {
                    Platform: ["Raspberry Pi"],
                    Security: ["Nmap", "Aircrack-ng", "Custom C2"],
                    UI: ["Mobile-Optimized Web Framework"]
                }
            }
        }
    ],

    // Blog Posts
    blogPosts: [
        {
            slug: "pcb-design-quality-checklist",
            title: "6 Quick Ways to Judge PCB Design Quality",
            category: "PCB Design",
            date: "December 2024",
            readTime: "8 min read",
            tags: ["PCB", "Hardware", "Design Review", "Best Practices"],
            excerpt: "A practical checklist for evaluating PCB design quality, even if you're not an expert. Learn to spot common fatal mistakes in minutes.",
            content: `
                <p class="lead text-xl text-slate-300 mb-8">Whether you're reviewing a contractor's work, evaluating a product teardown, or learning PCB design yourself, these six checkpoints will help you identify serious design flaws quickly—even without deep expertise.</p>

                <h2 class="text-3xl font-bold text-white mt-12 mb-6">1. Incorrect PCB Traces (Routing Issues)</h2>
                <div class="glass p-6 mb-6">
                    <h3 class="text-xl font-bold text-primary-500 mb-4">Key Rules:</h3>
                    <ul class="space-y-2 text-slate-300">
                        <li><strong>Avoid 90° sharp angles</strong> → Use 45° or curved bends (except for intentional inductors/antennas)</li>
                        <li><strong>High-current traces</strong> → Must be sufficiently wide</li>
                        <li><strong>High-frequency/critical analog traces</strong> → Do NOT run parallel to digital/fast-switching traces (crosstalk/noise)</li>
                        <li><strong>Inductor traces</strong> → Keep as narrow as needed (wide traces act as antennas → EMI issues)</li>
                    </ul>
                </div>
                <p class="text-slate-400 mb-6">Most modern CAD tools can auto-avoid 90° angles. If you still see them, the designer didn't set it up properly.</p>

                <h2 class="text-3xl font-bold text-white mt-12 mb-6">2. Incorrectly Placed (or Missing) Decoupling Capacitors</h2>
                <div class="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-6">
                    <p class="text-red-400 font-bold mb-2">🚩 BIG RED FLAG</p>
                    <p class="text-slate-300">This is the #1 indicator of amateur or bad design.</p>
                </div>
                <ul class="space-y-3 text-slate-300 mb-6">
                    <li>✓ Every IC power pin needs at least one decoupling cap (usually 0.1 µF + optional 10 µF bulk)</li>
                    <li>✓ Caps MUST be placed as physically close as possible to the power pin (same side of board preferred)</li>
                    <li>✗ If caps are far away or only one cap serves multiple ICs → decoupling is ineffective</li>
                    <li>✗ Missing or poorly placed decaps on most ICs = almost certainly amateur design</li>
                </ul>
                <p class="text-yellow-400 font-mono text-sm">If an outsourced designer does this wrong → fire them immediately.</p>

                <h2 class="text-3xl font-bold text-white mt-12 mb-6">3. No Length Matching on High-Speed Signals</h2>
                <p class="text-slate-300 mb-4">Critical for:</p>
                <ul class="list-disc list-inside space-y-2 text-slate-300 mb-6 ml-4">
                    <li>Clocks to multiple ICs</li>
                    <li>Parallel buses (address/data to RAM, DDR, etc.)</li>
                </ul>
                <div class="glass p-6 mb-6">
                    <p class="text-slate-300 mb-3"><strong>Requirements:</strong></p>
                    <ul class="space-y-2 text-slate-400">
                        <li>• All related traces must have equal length (serpentine/delay lines are common)</li>
                        <li>• Same number of vias on all traces in the group (vias add delay)</li>
                    </ul>
                </div>
                <p class="text-slate-400">If high-speed interfaces exist but no length matching is visible → timing issues are very likely.</p>

                <h2 class="text-3xl font-bold text-white mt-12 mb-6">4. Improperly Designed RF/Antenna Feed Lines</h2>
                <p class="text-slate-300 mb-4">For wireless designs:</p>
                <div class="bg-secondary-500/10 border border-secondary-500/30 rounded-lg p-6 mb-6">
                    <h3 class="text-secondary-500 font-bold mb-3">50 Ω Controlled Impedance</h3>
                    <p class="text-slate-300 mb-3">Feed line from RF chip to antenna must be a controlled-impedance trace (usually 50 Ω).</p>
                    <p class="text-yellow-400 text-sm font-mono">⚠️ 50 Ω refers to characteristic impedance (to ground plane), NOT DC resistance → never add resistors!</p>
                </div>
                <p class="text-slate-300 mb-3"><strong>Trace width calculation:</strong> Based on stackup (use tools like AppCAD, Saturn PCB Toolkit)</p>
                <p class="text-slate-300 mb-3"><strong>PCB trace antennas:</strong></p>
                <ul class="list-disc list-inside space-y-2 text-slate-400 ml-4 mb-6">
                    <li>Place on board edge</li>
                    <li>No ground plane underneath</li>
                    <li>Keep far from other traces and large components</li>
                    <li>Avoid copper pour or silkscreen text near antenna (detunes it)</li>
                </ul>

                <h2 class="text-3xl font-bold text-white mt-12 mb-6">5. Non-Optimized Component Placement</h2>
                
                <h3 class="text-xl font-bold text-primary-500 mb-4">Inductors:</h3>
                <ul class="space-y-2 text-slate-300 mb-6 ml-4">
                    <li>✗ Don't place close together (especially end-to-end) → mutual coupling</li>
                    <li>✓ If unavoidable → orient perpendicular (90° to each other)</li>
                    <li>✓ Keep away from metal objects (shields, cans, large copper areas)</li>
                </ul>

                <h3 class="text-xl font-bold text-primary-500 mb-4">Heat-generating parts:</h3>
                <p class="text-slate-300 mb-6 ml-4">Power resistors, LEDs, regulators → Keep away from temperature-sensitive parts (thermistors, TCXO, reference caps)</p>

                <h3 class="text-xl font-bold text-primary-500 mb-4">Switching regulators:</h3>
                <ul class="space-y-2 text-slate-300 mb-6 ml-4">
                    <li>✓ Group all switcher components tightly together</li>
                    <li>✓ Keep far from sensitive analog sections (noise!)</li>
                </ul>

                <h3 class="text-xl font-bold text-primary-500 mb-4">AC mains sections:</h3>
                <p class="text-slate-300 mb-6 ml-4">Physically isolate (slot in PCB) + keep all high-voltage on one side</p>

                <h2 class="text-3xl font-bold text-white mt-12 mb-6">6. Poor Grounding & Ground Plane Design</h2>
                <div class="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-6">
                    <p class="text-red-400 font-bold">⚠️ Very Common Fatal Mistake</p>
                </div>

                <h3 class="text-xl font-bold text-secondary-500 mb-4">Best Practice:</h3>
                <p class="text-slate-300 mb-6">4-layer board with solid ground and power planes</p>

                <h3 class="text-xl font-bold text-secondary-500 mb-4">Mixed analog/digital designs:</h3>
                <p class="text-slate-300 mb-6">Split ground planes, connect only at one point (usually power supply)</p>

                <h3 class="text-xl font-bold text-secondary-500 mb-4">2-layer boards:</h3>
                <ul class="space-y-3 text-slate-300 mb-6 ml-4">
                    <li>✗ Never daisy-chain grounds</li>
                    <li>✓ Each IC/subcircuit gets its own ground return trace → star topology back to power supply GND</li>
                    <li>⚠️ Shared ground traces cause ground bounce and noise</li>
                </ul>
                <p class="text-yellow-400 font-mono text-sm mb-8">Ground traces have resistance → current causes voltage drops → distant ICs see shifted/bouncing ground reference</p>

                <h2 class="text-3xl font-bold text-white mt-12 mb-6">Quick Checklist Summary</h2>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm border-collapse">
                        <thead>
                            <tr class="border-b border-gray-700">
                                <th class="text-left py-3 px-4 text-primary-500 font-mono">Check Item</th>
                                <th class="text-left py-3 px-4 text-primary-500 font-mono">Good Design?</th>
                                <th class="text-left py-3 px-4 text-primary-500 font-mono">Notes / Red Flag</th>
                            </tr>
                        </thead>
                        <tbody class="text-slate-300">
                            <tr class="border-b border-gray-800">
                                <td class="py-3 px-4">No 90° trace angles</td>
                                <td class="py-3 px-4">Yes / No</td>
                                <td class="py-3 px-4 text-slate-500">Except intentional structures</td>
                            </tr>
                            <tr class="border-b border-gray-800 bg-red-500/5">
                                <td class="py-3 px-4 font-bold">Decoupling caps next to every power pin</td>
                                <td class="py-3 px-4">Yes / No</td>
                                <td class="py-3 px-4 text-red-400">Biggest giveaway of bad design</td>
                            </tr>
                            <tr class="border-b border-gray-800">
                                <td class="py-3 px-4">High-speed traces length-matched</td>
                                <td class="py-3 px-4">Yes / No</td>
                                <td class="py-3 px-4 text-slate-500">Look for serpentines</td>
                            </tr>
                            <tr class="border-b border-gray-800">
                                <td class="py-3 px-4">50 Ω RF feed line (correct width, no GND under antenna)</td>
                                <td class="py-3 px-4">Yes / No</td>
                                <td class="py-3 px-4 text-slate-500">—</td>
                            </tr>
                            <tr class="border-b border-gray-800">
                                <td class="py-3 px-4">Inductors spaced & oriented properly</td>
                                <td class="py-3 px-4">Yes / No</td>
                                <td class="py-3 px-4 text-slate-500">—</td>
                            </tr>
                            <tr class="border-b border-gray-800">
                                <td class="py-3 px-4">Hot parts away from temp sensors</td>
                                <td class="py-3 px-4">Yes / No</td>
                                <td class="py-3 px-4 text-slate-500">—</td>
                            </tr>
                            <tr class="border-b border-gray-800">
                                <td class="py-3 px-4">Switching regulator isolated</td>
                                <td class="py-3 px-4">Yes / No</td>
                                <td class="py-3 px-4 text-slate-500">—</td>
                            </tr>
                            <tr class="border-b border-gray-800 bg-red-500/5">
                                <td class="py-3 px-4 font-bold">Proper ground plane / star grounding</td>
                                <td class="py-3 px-4">Yes / No</td>
                                <td class="py-3 px-4 text-red-400">Split or star, never daisy-chain</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="glass p-6 mt-12">
                    <p class="text-primary-500 font-bold mb-3">💡 Pro Tip</p>
                    <p class="text-slate-300">Keep this checklist handy — even if you're not an expert, you can spot serious problems in minutes on Gerbers or manufactured boards!</p>
                </div>
            `
        }
    ],

    // Blog Categories
    blogCategories: ["Signal Processing", "Embedded Systems", "RF & SDR", "Robotics & AI", "PCB Design", "Tutorials"],

    // Contact Form Configuration
    contact: {
        formspreeId: "",
        emailjsServiceId: "",
        emailjsTemplateId: "",
        emailjsPublicKey: ""
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
}

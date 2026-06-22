import React, { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database,
  Terminal, Users, Star, Brain, Sparkles, Image, Box, FileText, Gamepad2,
  Stethoscope, Globe, Cpu
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const liveProjects = [
    {
      title: 'MediQuest',
      description: 'AI-powered USMLE prep platform with SSR, adaptive question banks, real-time dashboards, and LLM fine-tuning for study plans and feedback.',
      tech: ['Next.js', 'Node.js', 'Supabase', 'LLM'],
      github: 'FYP-MediQuest',
      live: 'https://fyp-medi-quest.vercel.app',
      icon: <Stethoscope className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-600',
      year: '2025'
    },
    {
      title: 'PixelCraft',
      description: 'Client-side image editing and PDF manipulation with drag-and-drop, canvas transforms, and FastAPI backend for server-side PDF operations.',
      tech: ['React', 'Tailwind', 'FastAPI', 'Vercel'],
      github: 'Pixel_Craft',
      live: 'https://pixel-craft-v1.vercel.app',
      icon: <Image className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-600',
      year: '2024'
    },
    {
      title: 'Connecto',
      description: 'Feature-rich social media SPA with Redux Toolkit, JWT auth, protected routes, and MongoDB schemas optimized for feed performance.',
      tech: ['React', 'Redux', 'Node.js', 'MongoDB'],
      github: 'Connecto',
      live: 'https://connecto-web-app.netlify.app',
      icon: <Users className="w-6 h-6" />,
      color: 'from-green-500 to-teal-600',
      year: '2025'
    },
    {
      title: '3DCraft',
      description: 'Text-to-3D platform with PyTorch generative pipeline, Three.js real-time browser preview, and Dockerized FastAPI deployment.',
      tech: ['React', 'Three.js', 'PyTorch', 'FastAPI'],
      github: '3D_Craft_AI',
      live: 'https://aquamarine-3dcradtai.netlify.app',
      icon: <Box className="w-6 h-6" />,
      color: 'from-violet-500 to-indigo-600',
      year: '2025'
    },
    {
      title: 'RESUMIND',
      description: 'In-browser resume analysis using Tesseract.js OCR and PDF.js with one-click ATS LaTeX resume generation — zero backend latency.',
      tech: ['React 19', 'Tesseract.js', 'PDF.js', 'Tailwind'],
      github: 'ResumeAnalyzer',
      live: 'https://resumeanalyzer-rho.vercel.app',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-600',
      year: '2025'
    },
    {
      title: 'AI Chess Arena',
      description: 'Next.js chess platform with AI coach, engine-backed moves, real-time multiplayer rooms, board themes, and plain-language move feedback.',
      tech: ['Next.js', 'Socket.io', 'MongoDB', 'LLM'],
      github: 'AI_CHESS_ARENA',
      live: 'https://ai-chess-arena-xi.vercel.app',
      icon: <Gamepad2 className="w-6 h-6" />,
      color: 'from-orange-500 to-amber-600',
      year: '2025'
    }
  ];

  const aiProjects = [
    {
      title: 'CNN Image Classification',
      description: 'Full PyTorch pipeline for multi-class classification with VGG16, AlexNet, and ResNet50 architectures, data augmentation, and checkpointing.',
      tech: ['PyTorch', 'VGG16', 'ResNet50', 'Transfer Learning'],
      github: 'DeepLearning',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-pink-500 to-rose-600',
      year: '2025'
    },
    {
      title: 'Bone Fracture Detection',
      description: '3-module medical CV pipeline detecting 7 fracture types from X-rays with YOLOv8 detection and SegNet segmentation.',
      tech: ['YOLOv8', 'DenseNet-121', 'SegNet', 'OpenCV'],
      github: 'FCV_PROJECT',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-red-500 to-orange-600',
      year: '2025'
    },
    {
      title: 'Mobile Phone Detection',
      description: 'Real-time webcam inference with YOLOv5 and multi-format export to ONNX, TorchScript, and TFLite for edge deployment.',
      tech: ['YOLOv5', 'PyTorch', 'ONNX', 'OpenCV'],
      github: 'CV_MobilePhoneDetection',
      icon: <Cpu className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-600',
      year: '2025'
    },
    {
      title: 'Generative AI — GANs',
      description: 'DCGAN anime face generation, Pix2Pix sketch-to-color via U-Net + PatchGAN, and CycleGAN unpaired domain translation.',
      tech: ['PyTorch', 'DCGAN', 'Pix2Pix', 'CycleGAN'],
      github: 'Gen_AI',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-purple-500 to-fuchsia-600',
      year: '2025'
    },
    {
      title: 'Student Performance Prediction',
      description: 'Full data science lifecycle with Random Forest (R² = 0.721 on final exam prediction) and interactive Streamlit dashboard.',
      tech: ['Scikit-Learn', 'Pandas', 'Streamlit', 'Seaborn'],
      github: 'DataScience',
      icon: <Database className="w-6 h-6" />,
      color: 'from-teal-500 to-green-600',
      year: '2025'
    },
    {
      title: 'Sudoku Solver',
      description: 'Intelligent solver with AC-3 constraint propagation, outperforming brute-force backtracking by up to 80% on hard puzzles.',
      tech: ['Python', 'Propositional Logic', 'AC-3'],
      github: 'Sudoku-Game-in-Python',
      icon: <Terminal className="w-6 h-6" />,
      color: 'from-slate-500 to-gray-700',
      year: '2024'
    }
  ];

  const skills = [
    { name: 'React / Next.js', level: 90, color: 'bg-cyan-500' },
    { name: 'Python & PyTorch', level: 90, color: 'bg-blue-500' },
    { name: 'TypeScript / JavaScript', level: 88, color: 'bg-yellow-500' },
    { name: 'Tailwind CSS', level: 90, color: 'bg-teal-500' },
    { name: 'Computer Vision (YOLO, OpenCV)', level: 85, color: 'bg-red-500' },
    { name: 'Node.js & FastAPI', level: 85, color: 'bg-green-500' },
    { name: 'MongoDB & Supabase', level: 80, color: 'bg-emerald-500' },
    { name: 'Generative AI & LLMs', level: 82, color: 'bg-purple-500' },
    { name: 'Docker & CI/CD', level: 78, color: 'bg-indigo-500' },
    { name: 'Git / GitHub', level: 90, color: 'bg-gray-500' }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const ProjectCard = ({ project }) => (
    <div className="group bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl">
      <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color}`}>
              {project.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              {project.year && (
                <span className="text-xs text-gray-500">{project.year}</span>
              )}
            </div>
          </div>
          {project.live && (
            <span className="text-xs bg-green-900/50 text-green-400 px-2 py-1 rounded-full shrink-0">
              Live
            </span>
          )}
        </div>
        <p className="text-gray-300 mb-4 leading-relaxed text-sm">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center gap-4">
          <a
            href={`https://github.com/wareeshayy/${project.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          ) : (
            <ExternalLink className="w-4 h-4 text-gray-600" />
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Wareesha Ashraf
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 hover:text-blue-400 ${
                    activeSection === item ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-20">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <Code className="w-16 h-16 text-blue-400" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Wareesha Ashraf
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2 leading-relaxed">
            Full Stack Developer & AI/ML Engineer
          </p>
          <p className="text-base text-gray-400 mb-8">
            Chiniot, Pakistan
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Building responsive web applications with React, Next.js, and Tailwind CSS — and taking AI models
            from research to production with PyTorch, computer vision, and LLM fine-tuning.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="mailto:wareeshaashraf09@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm">
              <Mail className="w-4 h-4" /> wareeshaashraf09@gmail.com
            </a>
            <a href="tel:+923117714594" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm">
              <Phone className="w-4 h-4" /> +92 311 7714594
            </a>
            <a href="https://github.com/wareeshayy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm">
              <Github className="w-4 h-4" /> github.com/wareeshayy
            </a>
            <a href="https://www.linkedin.com/in/wareesha-ashraf-17a99827b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-500 hover:bg-blue-500 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Results-driven Full Stack Developer and AI/ML Engineer from Chiniot, Pakistan, currently pursuing
                  a BS in Computer Science at FAST NUCES (June 2022 – June 2026). I build responsive, accessible,
                  and performant web applications using React.js, Next.js, Tailwind CSS, and Redux Toolkit.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  On the AI side, I develop deep learning pipelines, generative AI systems, and computer vision
                  applications with PyTorch, YOLOv5/v8, and LLM fine-tuning — exporting models to ONNX/TorchScript/TFLite
                  and integrating them into scalable full-stack platforms deployed on Vercel and Netlify.
                </p>
                <div className="bg-gray-800 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-blue-400 mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5" /> Education
                  </h3>
                  <p className="text-gray-300 font-medium">FAST NUCES — BS Computer Science</p>
                  <p className="text-gray-400 text-sm">Chiniot, Punjab, Pakistan · June 2022 – June 2026</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Deep Learning, Generative AI, Computer Vision, DSA, DBMS, NLP, Data Science
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>Chiniot, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full">
                    <Globe className="w-4 h-4 text-green-400" />
                    <span>9+ AI/ML & Full-Stack Projects</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-xl">
                  <Code className="w-8 h-8 text-blue-200 mb-4" />
                  <h3 className="font-semibold mb-2">Full-Stack Web</h3>
                  <p className="text-sm text-blue-200">React, Next.js, Node.js, Supabase</p>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-xl">
                  <Brain className="w-8 h-8 text-purple-200 mb-4" />
                  <h3 className="font-semibold mb-2">AI & ML</h3>
                  <p className="text-sm text-purple-200">PyTorch, LLMs, GANs, fine-tuning</p>
                </div>
                <div className="bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-xl">
                  <Sparkles className="w-8 h-8 text-green-200 mb-4" />
                  <h3 className="font-semibold mb-2">Computer Vision</h3>
                  <p className="text-sm text-green-200">YOLOv5/v8, OpenCV, medical imaging</p>
                </div>
                <div className="bg-gradient-to-br from-orange-600 to-orange-800 p-6 rounded-xl">
                  <Terminal className="w-8 h-8 text-orange-200 mb-4" />
                  <h3 className="font-semibold mb-2">DevOps & Deploy</h3>
                  <p className="text-sm text-orange-200">Vercel, Netlify, Docker, CI/CD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Production-grade full-stack applications deployed on Vercel and Netlify.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {liveProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>

            <h3 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              AI / ML Projects
            </h3>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Deep learning, computer vision, generative AI, and data science pipelines.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-xl">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{
                        width: isVisible.skills ? `${skill.level}%` : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-300 mb-12 leading-relaxed">
                I'm always interested in new opportunities, collaborations, and exciting projects.
                Whether you want to discuss full-stack development, AI/ML, or just say hi — feel free to reach out!
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <a
                  href="https://github.com/wareeshayy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Github className="w-10 h-10 text-gray-400 group-hover:text-white mx-auto mb-3 transition-colors" />
                  <h3 className="font-semibold mb-1">GitHub</h3>
                  <p className="text-sm text-gray-400">wareeshayy</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/wareesha-ashraf-17a99827b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Linkedin className="w-10 h-10 text-gray-400 group-hover:text-white mx-auto mb-3 transition-colors" />
                  <h3 className="font-semibold mb-1">LinkedIn</h3>
                  <p className="text-sm text-gray-400">wareesha-ashraf</p>
                </a>
                <a
                  href="mailto:wareeshaashraf09@gmail.com"
                  className="group bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-10 h-10 text-gray-400 group-hover:text-white mx-auto mb-3 transition-colors" />
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-sm text-gray-400">wareeshaashraf09@gmail.com</p>
                </a>
                <a
                  href="tel:+923117714594"
                  className="group bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-10 h-10 text-gray-400 group-hover:text-white mx-auto mb-3 transition-colors" />
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-sm text-gray-400">+92 311 7714594</p>
                </a>
                <div className="group bg-gray-800 p-6 rounded-xl">
                  <MapPin className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-sm text-gray-400">Chiniot, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2026 Wareesha Ashraf. Built with React & Tailwind CSS
          </p>
          <p className="text-sm text-gray-500 mt-2">
            <a href="https://wareeshaportfolio.netlify.app" className="hover:text-blue-400 transition-colors">
              wareeshaportfolio.netlify.app
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

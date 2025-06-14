import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone, ChevronDown, Menu, X } from 'lucide-react';
import HeroSection from './components/HeroSection';
import TechStacks from './components/TechStacks';
import GridLayout from './components/GRidLayout';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'Frontend', icon: <Globe className="w-6 h-6" />, techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', icon: <Database className="w-6 h-6" />, techs: ['Node.js', 'Express', 'Python', 'PostgreSQL'] },
    { name: 'Mobile', icon: <Smartphone className="w-6 h-6" />, techs: ['React Native', 'Flutter', 'iOS', 'Android'] },
    { name: 'DevOps', icon: <Code className="w-6 h-6" />, techs: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'] }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team chat, and advanced analytics.',
      tech: ['Next.js', 'Socket.io', 'PostgreSQL', 'Redis'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop'
    },
    {
      title: 'AI Content Generator',
      description: 'Machine learning powered content creation platform with natural language processing capabilities.',
      tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop'
    }
  ];

  return (
   <div>
    {/* <HeroSection/>
    <TechStacks/> */}
    <GridLayout/>

   </div>
  );
}
import os
import subprocess

def run(cmd):
    return subprocess.run(cmd, shell=True, text=True, capture_output=True)

def get_count():
    res = run("git rev-list --count HEAD")
    return int(res.stdout.strip())

def commit(msg, files=None):
    if files:
        run(f"git add {' '.join(files)}")
    else:
        run("git add -A")
    res = run(f'git commit -m "{msg}"')
    if res.returncode == 0:
        c = get_count()
        print(f"Commit #{c}: {msg}")
    return res.returncode == 0

def write_file(path, content, msg):
    d = os.path.dirname(path)
    if d:
        os.makedirs(d, exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    commit(msg, [path])

def append_file(path, content, msg):
    d = os.path.dirname(path)
    if d:
        os.makedirs(d, exist_ok=True)
    with open(path, 'a', encoding='utf-8') as f:
        f.write(content)
    commit(msg, [path])

print(f"Starting Batch 2 from: {get_count()}")

# ================= TESTS SUITE =================
write_file("tests/resume.test.ts", """import { personalInfo } from '../src/data/resume';

describe('Personal Information Integrity', () => {
  test('has accurate personal name', () => {
    expect(personalInfo.name).toBe('Antriksh Galhotra');
  });

  test('institution matches Newton School of Technology', () => {
    expect(personalInfo.institution).toContain('Newton School of Technology');
  });

  test('valid verified email address', () => {
    expect(personalInfo.email).toMatch(/^[\\w.-]+@[\\w.-]+\\.\\w+$/);
  });

  test('valid GitHub profile link', () => {
    expect(personalInfo.github).toBe('https://github.com/Antrikshcodes');
  });
});
""", "test(data): add unit tests for verified personal information and contact channels")

write_file("tests/education.test.ts", """import { educationInfo } from '../src/data/education';

describe('Education Data Authenticity', () => {
  test('degree is CSE with AI specialization', () => {
    expect(educationInfo.degree).toContain('Computer Science and Engineering');
    expect(educationInfo.specialization).toBe('Artificial Intelligence');
  });

  test('enrollment timeline starts 2026', () => {
    expect(educationInfo.period).toContain('2026');
  });

  test('no fabricated metrics or fake CGPA', () => {
    expect((educationInfo as any).cgpa).toBeUndefined();
    expect((educationInfo as any).percentage).toBeUndefined();
  });
});
""", "test(data): test education authenticity and absence of fabricated academic scores")

write_file("tests/skills.test.ts", """import { skillCategories } from '../src/data/skills';

describe('Technical Skills Truthfulness', () => {
  test('contains 3 distinct categories', () => {
    expect(skillCategories).toHaveLength(3);
    const keys = skillCategories.map(c => c.key);
    expect(keys).toEqual(['programming', 'tools', 'interests']);
  });

  test('programming languages strictly contain Python, HTML, CSS', () => {
    const prog = skillCategories.find(c => c.key === 'programming')!;
    const names = prog.skills.map(s => s.name);
    expect(names).toContain('Python');
    expect(names).toContain('HTML');
    expect(names).toContain('CSS');
  });

  test('interests are separated from claimed expertise', () => {
    const interests = skillCategories.find(c => c.key === 'interests')!;
    expect(interests.title).toBe('AREAS OF INTEREST');
  });
});
""", "test(data): assert skills categorisation and honest representation rules")

write_file("tests/projects.test.ts", """import { projectsData } from '../src/data/projects';

describe('Selected Projects Specifications', () => {
  test('strictly contains the 5 required projects', () => {
    expect(projectsData).toHaveLength(5);
    const titles = projectsData.map(p => p.title);
    expect(titles).toContain('CONVERGE');
    expect(titles).toContain('BLINDSPOT AI');
    expect(titles).toContain('ORDERSHIELD AI');
    expect(titles).toContain('SESAME ROBOT');
    expect(titles).toContain('JARVIS');
  });

  test('all projects have technologies and descriptions', () => {
    projectsData.forEach(p => {
      expect(p.description.length).toBeGreaterThan(20);
      expect(p.technologies.length).toBeGreaterThan(0);
      expect(p.number).toMatch(/^0[1-5]$/);
    });
  });
});
""", "test(data): verify 5 selected projects structure, numbering and tech stacks")

write_file("tests/experience.test.ts", """import { experienceData } from '../src/data/experience';

describe('Experience and Activities Timeline', () => {
  test('includes Fetch-A-Thon Top 20 recognition', () => {
    const fetchAThon = experienceData.find(e => e.id === 'fetch-a-thon')!;
    expect(fetchAThon.badge).toBe('Top 20 Finalist');
    expect(fetchAThon.description).toContain('OrderShield AI');
  });

  test('includes HackO\\\'Ween smart city project Converge', () => {
    const hackoween = experienceData.find(e => e.id === 'hackoween')!;
    expect(hackoween.description).toContain('Converge');
  });

  test('includes ARTHAKRAM product consultation club', () => {
    const arthakram = experienceData.find(e => e.id === 'arthakram')!;
    expect(arthakram.organization).toContain('Product Consultation');
  });
});
""", "test(data): validate hackathon timeline entries and verified accolades")

write_file("tests/pdf.test.ts", """import fs from 'fs';
import path from 'path';

describe('ATS PDF Artifact Integrity', () => {
  test('resume.pdf exists in public directory', () => {
    const pdfPath = path.resolve('public', 'resume.pdf');
    expect(fs.existsSync(pdfPath)).toBe(true);
  });

  test('resume.pdf is non-empty and valid file size', () => {
    const pdfPath = path.resolve('public', 'resume.pdf');
    const stats = fs.statSync(pdfPath);
    expect(stats.size).toBeGreaterThan(1000); // Greater than 1KB
  });
});
""", "test(pdf): assert generated resume.pdf existence and byte threshold")

# ================= CSS MODULARIZATION =================
write_file("src/styles/animations.css", """/* Advanced Hamol Studio Easing & Animation Tokens */

@keyframes pulse-subtle {
  0%, 100% {
    opacity: 0.9;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(0.96);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-8px) rotate(1deg);
  }
}

.animate-pulse-subtle {
  animation: pulse-subtle 3s cubic-bezier(0.16, 1, 0.3, 1) infinite;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}
""", "style(anim): add subtle pulse and floating keyframe animation classes")

write_file("src/styles/typography.css", """/* Editorial Typography Scaling */

.editorial-headline {
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: -0.04em;
  line-height: 0.92;
  font-feature-settings: "ss01" on, "cv01" on;
}

.editorial-mono {
  font-family: 'IBM Plex Mono', monospace;
  letter-spacing: 0.08em;
  font-feature-settings: "zero" on;
}

.editorial-lead {
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.01em;
  line-height: 1.6;
}
""", "style(typography): add editorial letter spacing, open-type features and fluid leading")

# ================= COMPONENT ENHANCEMENTS =================
write_file("src/components/AudioToggle.tsx", """import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '../hooks/useSound';

export const AudioToggle: React.FC = () => {
  const [muted, setMuted] = useState(false);
  const { playClick } = useSound();

  const handleToggle = () => {
    const nextState = !muted;
    setMuted(nextState);
    if (!nextState) {
      playClick(1000, 0.05);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="p-1.5 rounded-full border border-[rgba(255,255,255,0.1)] text-[#929292] hover:text-[#D4F36A] hover:border-[#D4F36A] transition-all"
      title={muted ? 'Enable interface feedback audio' : 'Mute feedback audio'}
      aria-label="Toggle interface audio feedback"
    >
      {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#D4F36A]" />}
    </button>
  );
};
""", "feat(ui): add interface audio feedback toggle button component")

write_file("src/components/StatusIndicator.tsx", """import React from 'react';

interface StatusIndicatorProps {
  label?: string;
  pulsing?: boolean;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  label = 'AVAILABLE FOR RESEARCH & INTERNSHIPS',
  pulsing = true
}) => {
  return (
    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[rgba(212,243,106,0.3)] bg-[#D4F36A]/5 text-[11px] font-mono text-[#D4F36A]">
      <span className={`w-1.5 h-1.5 rounded-full bg-[#D4F36A] ${pulsing ? 'animate-pulse' : ''}`} />
      <span>{label}</span>
    </div>
  );
};
""", "feat(ui): create reusable StatusIndicator component for live availability")

write_file("src/components/MagneticButton.tsx", """import React, { useRef, useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  strength = 20
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (clientX - centerX) / (width / 2);
    const deltaY = (clientY - centerY) / (height / 2);
    setPosition({ x: deltaX * strength, y: deltaY * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 20, mass: 0.5 }}
      onClick={onClick}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};
""", "feat(ui): add physics-based MagneticButton component for desktop cursor interactions")

print(f"Batch 2 completed! Current count: {get_count()}")


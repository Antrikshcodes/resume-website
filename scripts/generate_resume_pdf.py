import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

def generate_pdf():
    os.makedirs('public', exist_ok=True)
    pdf_path = 'public/resume.pdf'
    
    # 0.5 in margins = 36 pt
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=32,
        bottomMargin=32
    )

    styles = getSampleStyleSheet()

    # Custom Clean Minimalist ATS Styles
    name_style = ParagraphStyle(
        'NameStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=colors.HexColor('#090909'),
        alignment=0
    )

    subtitle_style = ParagraphStyle(
        'SubtitleStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=13,
        textColor=colors.HexColor('#444444'),
        alignment=0
    )

    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor('#555555'),
        alignment=0
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
        textColor=colors.HexColor('#090909'),
        spaceBefore=7,
        spaceAfter=3,
        textTransform='uppercase'
    )

    entry_title = ParagraphStyle(
        'EntryTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12.5,
        textColor=colors.HexColor('#111111')
    )

    entry_subtitle = ParagraphStyle(
        'EntrySubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=11.5,
        textColor=colors.HexColor('#444444')
    )

    entry_meta = ParagraphStyle(
        'EntryMeta',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=colors.HexColor('#666666'),
        alignment=2
    )

    body_style = ParagraphStyle(
        'BodyStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=11,
        textColor=colors.HexColor('#333333')
    )

    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=11,
        textColor=colors.HexColor('#333333'),
        leftIndent=10,
        firstLineIndent=-7
    )

    elements = []

    # --- HEADER ---
    elements.append(Paragraph("<b>ANTRIKSH GALHOTRA</b>", name_style))
    elements.append(Paragraph("Computer Science & AI Undergraduate | Developer | Product Enthusiast", subtitle_style))
    elements.append(Spacer(1, 3))
    
    contacts = "India &bull; antriksh.codes@outlook.com &bull; github.com/Antrikshcodes &bull; linkedin.com/in/antriksh-galhotra"
    elements.append(Paragraph(contacts, contact_style))
    elements.append(Spacer(1, 6))
    elements.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#111111'), spaceBefore=2, spaceAfter=6))

    # --- EDUCATION ---
    elements.append(Paragraph("<b>EDUCATION</b>", section_heading))
    edu_table_data = [
        [
            Paragraph("<b>Newton School of Technology &mdash; Rishihood University</b>", entry_title),
            Paragraph("2026 &mdash; Present", entry_meta)
        ],
        [
            Paragraph("B.Tech in Computer Science and Engineering (Artificial Intelligence) &mdash; First Year", entry_subtitle),
            Paragraph("Sonipat, Haryana, India", entry_meta)
        ]
    ]
    edu_table = Table(edu_table_data, colWidths=[380, 160])
    edu_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    elements.append(edu_table)
    elements.append(Paragraph("&bull; Rigorous computer science foundation focused on algorithmic problem solving, modern software architectures, and AI engineering.", bullet_style))
    elements.append(Spacer(1, 4))

    # --- TECHNICAL SKILLS ---
    elements.append(Paragraph("<b>TECHNICAL SKILLS</b>", section_heading))
    skills_data = [
        [
            Paragraph("<b>Programming Languages:</b>", entry_title),
            Paragraph("Python, HTML, CSS", body_style)
        ],
        [
            Paragraph("<b>Developer Tools:</b>", entry_title),
            Paragraph("Git, GitHub, React (applied in modern web UIs), Linux/macOS CLI", body_style)
        ],
        [
            Paragraph("<b>Areas of Focus & Interest:</b>", entry_title),
            Paragraph("Artificial Intelligence, Machine Learning, Robotics (Microcontrollers/Sensors), Product Development, UI/UX", body_style)
        ]
    ]
    skills_table = Table(skills_data, colWidths=[130, 410])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    elements.append(skills_table)
    elements.append(Spacer(1, 4))

    # --- EXPERIENCE & ACTIVITIES ---
    elements.append(Paragraph("<b>EXPERIENCE, HACKATHONS & ACTIVITIES</b>", section_heading))
    
    exp_entries = [
        ("Fetch-A-Thon 3.0 &mdash; Masters' Union", "Top 20 Recognition", "2026",
         "Developed <b>OrderShield AI</b>, a vendor verification platform automating procurement due diligence and risk assessment across institutional supplier pipelines."),
        ("HackO'Ween &mdash; ALTA School of Technology, IITM Murthal", "Core Builder", "2026",
         "Engineered <b>Converge</b>, an intelligent municipal complaint management platform featuring severity ranking, automated clustering, and citizen feedback loops."),
        ("CoNSTruct 2.0 &mdash; Replit x Newton School of Technology", "Hackathon Developer", "2026",
         "Built <b>Blindspot AI</b>, an intelligent platform identifying latent operational friction and surfacing prioritized insights."),
        ("ARTHAKRAM (Product Consultation Club)", "Active Member", "2026 &mdash; Present",
         "Analyze product teardowns, design thinking frameworks, and strategic product requirements with peer engineering cohorts."),
        ("IIT Roorkee eSummit & IIM Product Challenge", "Participant / Strategist", "2024 &mdash; 2026",
         "Engaged in competitive product ideation challenges and tech innovation summits; explored real-world user workflows.")
    ]

    for title, role, date, desc in exp_entries:
        row = [
            Paragraph(f"<b>{title}</b> &mdash; <i>{role}</i>", entry_title),
            Paragraph(date, entry_meta)
        ]
        t = Table([row], colWidths=[420, 120])
        t.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('BOTTOMPADDING', (0,0), (-1,-1), 1),
            ('TOPPADDING', (0,0), (-1,-1), 1),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ]))
        elements.append(t)
        elements.append(Paragraph(f"&bull; {desc}", bullet_style))
        elements.append(Spacer(1, 3))

    elements.append(Spacer(1, 2))

    # --- SELECTED PROJECTS ---
    elements.append(Paragraph("<b>SELECTED TECHNICAL PROJECTS</b>", section_heading))

    projects = [
        ("CONVERGE &mdash; Smart City Intelligence Platform", "Python, FastAPI, React, Data Classification",
         "Urban governance platform improving municipal complaint triage, severity prioritization, and transparent citizen communication."),
        ("BLINDSPOT AI &mdash; Contextual Anomaly Detection", "Python, Modern Web UI, System Prompts",
         "AI-powered product identifying overlooked operational blindspots and delivering actionable diagnostic summaries."),
        ("ORDERSHIELD AI &mdash; Supplier Onboarding Verification", "Python, REST APIs, Document Verification Logic",
         "Automated due diligence system cross-validating vendor compliance credentials to accelerate trusted B2B procurement."),
        ("SESAME ROBOT &mdash; Autonomous Robotics System", "Embedded C/C++, Microcontrollers, Motor Controllers, Sensors",
         "Physical robotics project integrating ultrasonic and infrared sensors with real-time microcontroller-driven motor control logic."),
        ("JARVIS &mdash; Personal AI Assistant", "Python, Automation Scripts, Speech & System APIs",
         "Lightweight workstation automation assistant streamlining local developer operations and contextual task execution.")
    ]

    for proj_title, tech, desc in projects:
        p_row = [
            Paragraph(f"<b>{proj_title}</b>", entry_title),
            Paragraph(f"<i>{tech}</i>", entry_meta)
        ]
        p_table = Table([p_row], colWidths=[330, 210])
        p_table.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
            ('TOPPADDING', (0,0), (-1,-1), 0.5),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ]))
        elements.append(p_table)
        elements.append(Paragraph(f"&bull; {desc}", bullet_style))
        elements.append(Spacer(1, 3))

    doc.build(elements)
    print(f"Generated ATS-compliant 1-page PDF at {pdf_path}")

if __name__ == '__main__':
    generate_pdf()

# Table padding tuned for compact 1-page fit

# Table padding tuned for compact 1-page fit

# Table padding tuned for compact 1-page fit

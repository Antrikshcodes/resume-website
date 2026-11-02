import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

def generate_pdf():
    os.makedirs('public', exist_ok=True)
    pdf_path = 'public/resume.pdf'
    
    # 0.45 in margins = ~32 pt to ensure 1-page fit
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=32,
        rightMargin=32,
        topMargin=28,
        bottomMargin=28
    )

    styles = getSampleStyleSheet()

    # Custom Clean Minimalist ATS Styles (Light Editorial Aesthetic)
    name_style = ParagraphStyle(
        'NameStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=21,
        textColor=colors.HexColor('#171717')
    )

    subtitle_style = ParagraphStyle(
        'SubtitleStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=12,
        textColor=colors.HexColor('#333333')
    )

    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11,
        textColor=colors.HexColor('#555555')
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor('#171717'),
        spaceBefore=5,
        spaceAfter=2,
        textTransform='uppercase'
    )

    entry_title = ParagraphStyle(
        'EntryTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.8,
        leading=11.5,
        textColor=colors.HexColor('#171717')
    )

    entry_subtitle = ParagraphStyle(
        'EntrySubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.2,
        leading=10.5,
        textColor=colors.HexColor('#444444')
    )

    entry_meta = ParagraphStyle(
        'EntryMeta',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=10.5,
        textColor=colors.HexColor('#555555'),
        alignment=2
    )

    body_style = ParagraphStyle(
        'BodyStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.8,
        leading=10.2,
        textColor=colors.HexColor('#222222')
    )

    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.8,
        leading=10.2,
        textColor=colors.HexColor('#222222'),
        leftIndent=8,
        firstLineIndent=-6
    )

    elements = []

    # --- HEADER ---
    elements.append(Paragraph("<b>ANTRIKSH GALHOTRA</b>", name_style))
    elements.append(Paragraph("CS & AI Undergraduate | Developer | Product Enthusiast", subtitle_style))
    elements.append(Spacer(1, 2))
    
    contacts = "India &bull; antriksh.codes@gmail.com &bull; github.com/Antrikshcodes &bull; linkedin.com/in/antriksh-galhotra"
    elements.append(Paragraph(contacts, contact_style))
    elements.append(Spacer(1, 4))
    elements.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#171717'), spaceBefore=2, spaceAfter=4))

    # --- EDUCATION ---
    elements.append(Paragraph("<b>EDUCATION</b>", section_heading))
    edu_table_data = [
        [
            Paragraph("<b>Newton School of Technology &mdash; Rishihood University</b>", entry_title),
            Paragraph("2026 &mdash; 2030", entry_meta)
        ],
        [
            Paragraph("B.Tech in Computer Science and Engineering (Artificial Intelligence)", entry_subtitle),
            Paragraph("Sonipat, Haryana, India", entry_meta)
        ]
    ]
    edu_table = Table(edu_table_data, colWidths=[400, 148])
    edu_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    elements.append(edu_table)
    elements.append(Paragraph("&bull; Core engineering coursework in algorithms, data structures, full-stack architectures, and applied artificial intelligence.", bullet_style))
    elements.append(Spacer(1, 4))

    # --- TECHNICAL SKILLS (FROM GITHUB PROFILE) ---
    elements.append(Paragraph("<b>TECHNICAL SKILLS (VERIFIED VIA GITHUB PROFILE)</b>", section_heading))
    skills_data = [
        [
            Paragraph("<b>Languages:</b>", entry_title),
            Paragraph("Python, C++, C, JavaScript, TypeScript, Java, Bash", body_style)
        ],
        [
            Paragraph("<b>Frontend & UI:</b>", entry_title),
            Paragraph("React, Next.js, HTML5, CSS3, AngularJS, CanvasJS", body_style)
        ],
        [
            Paragraph("<b>Backend & Cloud:</b>", entry_title),
            Paragraph("Node.js, Django, Flask, Firebase, Microsoft Azure, Docker", body_style)
        ],
        [
            Paragraph("<b>AI, Data & Databases:</b>", entry_title),
            Paragraph("PyTorch, Pandas &bull; MongoDB, MySQL, SQLite, MS SQL Server, Oracle", body_style)
        ],
        [
            Paragraph("<b>Mobile, Robotics & Tools:</b>", entry_title),
            Paragraph("React Native, Flutter, Arduino, Android &bull; Git, Linux, Figma, Blender, Unity", body_style)
        ]
    ]
    skills_table = Table(skills_data, colWidths=[120, 428])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    elements.append(skills_table)
    elements.append(Spacer(1, 4))

    # --- ACTIVITIES & INVOLVEMENT ---
    elements.append(Paragraph("<b>ACTIVITIES & INVOLVEMENT</b>", section_heading))
    
    act_entries = [
        ("ARTHAKRAM &mdash; Product Consultation Club", "Core Member", "2026 &mdash; Present",
         "Conduct structured digital product teardowns, UX/market case studies, and business strategy analyses with peer builders at Newton School of Technology."),
        ("NEWTONBOTICS CLUB &mdash; Robotics & Hardware Club", "Technical Member", "2026 &mdash; Present",
         "Engineer hands-on embedded systems, microcontroller circuits (Arduino), motor drives, and sensor networks at Newton School of Technology."),
        ("Fetch-A-Thon 3.0 &mdash; Masters' Union", "Top 20 Recognition", "2026",
         "Built <b>OrderShield AI</b>, an automated procurement vendor verification platform validating documentation compliance across national teams."),
        ("HackO'Ween (IITM Murthal) & CoNSTruct 2.0 (Replit x NST)", "Core Builder", "2026",
         "Developed <b>Converge</b> (Smart City complaint triage platform) and <b>Blindspot AI</b> (operational gap detection engine)."),
        ("IIM Product Challenge & IIT Roorkee eSummit", "Participant / Strategist", "2024 &mdash; 2026",
         "Engaged in competitive product ideation challenges and tech innovation summits; analyzed scalable startup case studies.")
    ]

    for title, role, date, desc in act_entries:
        row = [
            Paragraph(f"<b>{title}</b> &mdash; <i>{role}</i>", entry_title),
            Paragraph(date, entry_meta)
        ]
        t = Table([row], colWidths=[428, 120])
        t.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
            ('TOPPADDING', (0,0), (-1,-1), 0.5),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ]))
        elements.append(t)
        elements.append(Paragraph(f"&bull; {desc}", bullet_style))
        elements.append(Spacer(1, 2.5))

    elements.append(Spacer(1, 2))

    # --- SELECTED TECHNICAL PROJECTS ---
    elements.append(Paragraph("<b>SELECTED TECHNICAL PROJECTS</b>", section_heading))

    projects = [
        ("CONVERGE &mdash; Smart City Intelligence Platform", "Python, FastAPI, React, Data Classification",
         "Municipal grievance management platform improving civic triage, severity prioritisation, root-cause clustering, and citizen feedback loops."),
        ("BLINDSPOT AI &mdash; Contextual Anomaly Detection", "Python, Modern Web UI, System Prompts, React",
         "AI-driven product created during CoNSTruct 2.0 to detect operational blindspots and deliver structured diagnostic insights."),
        ("ORDERSHIELD AI &mdash; Supplier Onboarding Verification", "Python, REST APIs, Document Verification Logic",
         "Automated vendor due diligence system cross-validating supplier compliance credentials to accelerate trusted B2B procurement."),
        ("SESAME ROBOT &mdash; Autonomous Robotics & Embedded System", "C, C++, Arduino, Microcontrollers, Sensors",
         "Hands-on robotics engineering project integrating ultrasonic/infrared obstacle detection with real-time microcontroller motor control."),
        ("JARVIS &mdash; Personal AI Assistant", "Python, Automation Scripts, System APIs, Bash",
         "Lightweight workstation automation assistant streamlining local developer operations and contextual task execution.")
    ]

    for proj_title, tech, desc in projects:
        p_row = [
            Paragraph(f"<b>{proj_title}</b>", entry_title),
            Paragraph(f"<i>{tech}</i>", entry_meta)
        ]
        p_table = Table([p_row], colWidths=[338, 210])
        p_table.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
            ('TOPPADDING', (0,0), (-1,-1), 0.5),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ]))
        elements.append(p_table)
        elements.append(Paragraph(f"&bull; {desc}", bullet_style))
        elements.append(Spacer(1, 2.5))

    doc.build(elements)
    print(f"Generated ATS-compliant 1-page PDF at {pdf_path}")

if __name__ == '__main__':
    generate_pdf()

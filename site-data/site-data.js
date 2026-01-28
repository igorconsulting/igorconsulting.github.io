/**
 * SITE DATA CONFIGURATION
 * 
 * Centralized data source for all website content.
 * Single source of truth for: About, Experience, Projects, Skills, Education, Contact
 */

const SITE_DATA = {
    // ===========================
    // PERSONAL INFO
    // ===========================
    personal: {
        name: 'Igor Caetano Diniz',
        title: 'Machine Learning Engineer',
        subtitle: 'Data Scientist | AI Researcher | Ph.D. Candidate',
        location: 'Montes Claros, Minas Gerais - Brazil',
        email: 'icaetanodiniz@gmail.com',
        phone: '+55 38 988636216',
        linkedin: 'https://www.linkedin.com/in/igor-caetano-diniz/',
        github: 'https://github.com/igorconsulting'
    },

    // ===========================
    // ABOUT ME
    // ===========================
    about: {
        summary: `Data Scientist and Machine Learning Engineer with over 4 years of experience 
        developing scalable, data-driven solutions. Currently pursuing a Ph.D. in Data Science at 
        PUC-Rio, focusing on scalable generative AI architectures and anomaly detection.`,
        
        highlights: [
            {
                icon: '🎓',
                title: 'Academic Excellence',
                description: 'Approved in IME and ITA entrance exams. Gold medal winner at Desafio PUC-Rio Olympiad with full scholarship.'
            },
            {
                icon: '🏢',
                title: 'Industry Experience',
                description: 'Worked on high-impact AI initiatives with Petrobras, Intel, Embraer, and Eletrobras.'
            },
            {
                icon: '🚀',
                title: 'Technical Expertise',
                description: 'Full ML lifecycle: Generative AI, RAG, Computer Vision, LLMs, NLP, and Anomaly Detection.'
            },
            {
                icon: '⚙️',
                title: 'MLOps & Cloud',
                description: 'Expert in CI/CD pipelines, MLOps practices, and cloud-native infrastructure on GCP, AWS, and Azure.'
            }
        ],

        achievements: [
            'Ph.D. candidate in Data Science at PUC-Rio',
            'Master\'s in Applied Mathematics from PUC-Rio',
            'Gold Medal in Desafio PUC-Rio Olympiad',
            'Approved in both IME and ITA entrance exams',
            '4+ years deploying ML in production',
            'Published research on reservoir simulation'
        ]
    },

    // ===========================
    // EXPERIENCE
    // ===========================
    experience: [
        {
            title: 'ML Staff Researcher & Engineer',
            company: 'HVAR',
            period: 'Sep 2025 - Present',
            description: [
                'Conducting R&D on LLMs, RAG, and GraphRAG solutions with LLAMA and GEMINI',
                'Developing text-to-SQL applications for developer assistance',
                'Designing advanced ML solutions within Databricks ecosystem',
                'Leading scalable ML pipeline automation and anomaly detection systems'
            ]
        },
        {
            title: 'ML Engineer & Data Scientist',
            company: 'Intel (via Arbit)',
            period: 'Jul 2024 - Sep 2025',
            description: [
                'Architected advanced ML solutions in Databricks for predictive modeling',
                'Built CI/CD workflows with MLflow for experiment tracking and model registry',
                'Led Text-to-SQL project using LLAMA, Gemini, and GPT architectures',
                'Delivered projects for Boston Scientific and AEGEA with distributed data processing'
            ]
        },
        {
            title: 'ML Engineer & Data Scientist',
            company: 'SAUTER',
            period: 'Jan 2023 - Jul 2024',
            description: [
                'Developed ML models for food retail sector reducing waste and improving efficiency',
                'Built GCP-based solutions using Airflow and Terraform for orchestration',
                'Containerized and deployed applications with Docker, Kubernetes, and BentoML',
                'Implemented Elasticsearch for advanced text search capabilities'
            ]
        },
        {
            title: 'ML Researcher',
            company: 'PUC-Rio (Petrobras Project)',
            period: 'Jan 2023 - Mar 2024',
            description: [
                'Developed anomaly detection system for petroleum well time series data',
                'Achieved 80%+ detection rate using SOS, Isolation Forest, and LOF algorithms',
                'Enabled proactive maintenance and optimized resource allocation'
            ]
        }
    ],

    // ===========================
    // KEY PROJECTS
    // ===========================
    projects: [
        {
            number: '01',
            title: 'Anomaly Detection System',
            company: 'Petrobras',
            description: 'Developed advanced anomaly detection for petroleum well time series using ensemble methods including SOS, Isolation Forest, and Local Outlier Factor.',
            metrics: [
                { value: '80%+', label: 'Detection Rate' },
                { value: 'Real-time', label: 'Monitoring' }
            ]
        },
        {
            number: '02',
            title: 'Text-to-SQL with LLMs',
            company: 'Intel',
            description: 'Built experimental RAG framework for automated SQL query generation from natural language using LLAMA, Gemini, and GPT architectures.',
            metrics: [
                { value: '3x', label: 'Faster Queries' },
                { value: 'NLP', label: 'Powered' }
            ]
        },
        {
            number: '03',
            title: 'Insurance Fraud Detection',
            company: 'Vert',
            description: 'Implemented ML-based fraud detection system using clustering, regression, and decision trees to identify fraudulent insurance claims.',
            metrics: [
                { value: '4x', label: 'Higher Accuracy' },
                { value: 'Automated', label: 'Detection' }
            ]
        },
        {
            number: '04',
            title: 'Credit Risk Prediction',
            company: 'MJV Technology',
            description: 'Built end-to-end ML pipeline for default risk prediction using AWS and PySpark, implementing automated data pipelines and dashboards.',
            metrics: [
                { value: '$1M', label: 'Recovered' },
                { value: '50%', label: 'Debt Reduction' }
            ]
        }
    ],

    // ===========================
    // SKILLS
    // ===========================
    skills: [
        {
            category: 'Machine Learning & AI',
            tags: ['Deep Learning', 'Neural Networks', 'Random Forest', 'XGBoost', 'SVM', 'Clustering', 'Anomaly Detection', 'Computer Vision']
        },
        {
            category: 'NLP & LLMs',
            tags: ['LLAMA', 'GPT', 'Gemini', 'RAG', 'GraphRAG', 'Text-to-SQL', 'NLP']
        },
        {
            category: 'Programming & Data',
            tags: ['Python', 'SQL', 'PySpark', 'Pandas', 'NumPy', 'Databricks', 'Elasticsearch']
        },
        {
            category: 'MLOps & Infrastructure',
            tags: ['Docker', 'Kubernetes', 'Airflow', 'MLflow', 'Terraform', 'CI/CD', 'GitHub Actions']
        },
        {
            category: 'Cloud Platforms',
            tags: ['GCP', 'AWS', 'Azure', 'Unity Catalog', 'BentoML', 'Streamlit']
        },
        {
            category: 'Frameworks & Tools',
            tags: ['Flask', 'Git', 'Unix/Linux', 'Matplotlib', 'Optimization']
        }
    ],

    // ===========================
    // EDUCATION
    // ===========================
    education: [
        {
            degree: 'Ph.D. in Data Science',
            school: 'Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio)',
            period: '2023 - 2026 (Expected)',
            details: 'Focus: Scalable generative AI architectures and anomaly detection. Research on advanced machine learning approaches for complex data systems.'
        },
        {
            degree: 'M.Sc. in Applied Mathematics',
            school: 'Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio)',
            period: '2021 - 2022',
            details: 'Thesis: "Evaluating the use of Random Forest Regressor for Reservoir Simulation in Multi-region Reservoirs." Developed ML approaches as cost-effective alternatives for oil and gas reservoir simulation.'
        },
        {
            degree: 'B.Sc. in Mathematics',
            school: 'Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio)',
            period: '2018 - 2020',
            details: 'Full scholarship recipient through Desafio PUC-Rio Olympiad (Gold Medal). Strong foundation in mathematical theory and computational methods.'
        },
        {
            degree: 'Telecommunications Engineering',
            school: 'Instituto Militar de Engenharia (IME)',
            period: '2015 - 2017',
            details: 'Rigorous engineering program with focus on signal processing and communications systems.'
        }
    ],

    // ===========================
    // CONTACT
    // ===========================
    contact: [
        {
            icon: '✉',
            label: 'Email',
            value: 'icaetanodiniz@gmail.com',
            link: 'mailto:icaetanodiniz@gmail.com'
        },
        {
            icon: '💼',
            label: 'LinkedIn',
            value: 'igor-caetano-diniz',
            link: 'https://www.linkedin.com/in/igor-caetano-diniz/'
        },
        {
            icon: '⚡',
            label: 'GitHub',
            value: 'igorconsulting',
            link: 'https://github.com/igorconsulting'
        },
        {
            icon: '📱',
            label: 'Phone',
            value: '+55 38 988636216',
            link: 'tel:+5538988636216'
        }
    ]
};